import { useState } from 'react';
import { IntegrationManager } from '@suada/react';
import { SuadaIntegrationsConfig } from '@suada/core';
import { ChatMessage } from './types';

function App() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    // Configure Suada Integrations
    const integrationsConfig: SuadaIntegrationsConfig = {
        apiKey: import.meta.env.VITE_SUADA_API_KEY || '',
        externalUserIdentifier: 'example-user',
        onIntegrationConnected: (integration) => {
            console.log('Integration connected:', integration);
        },
        onIntegrationDisconnected: (integration) => {
            console.log('Integration disconnected:', integration);
        },
        onError: (error) => {
            console.error('Integration error:', error);
        },
        theme: {
            primary: '#3B82F6', // Tailwind blue-500
            text: '#1F2937', // Tailwind gray-800
            background: '#FFFFFF',
            error: '#EF4444', // Tailwind red-500
            fontSize: '0.875rem', // 14px
            iconSize: '2rem' // 32px
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = {
            role: 'user',
            content: input,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: input,
                    chatHistory: messages,
                    externalUserIdentifier: 'example-user',
                }),
            });

            const data = await response.json();

            const assistantMessage: ChatMessage = {
                role: 'assistant',
                content: data.answer,
                timestamp: Date.now(),
                metadata: {
                    thoughts: data.thoughts,
                    actions: data.actions,
                    followUpQuestion: data.followUpQuestion
                }
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-white shadow p-4">
                <h1 className="text-xl font-bold">Suada Chat Example</h1>
            </header>

            <div className="flex-1 overflow-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[70%] rounded-lg p-4 ${message.role === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-800'
                                }`}
                        >
                            <p>{message.content}</p>
                            {message.metadata && (
                                <div className="mt-2 text-sm opacity-75">
                                    {message.metadata.followUpQuestion && (
                                        <p className="font-semibold">
                                            Suggested follow-up: {message.metadata.followUpQuestion}
                                        </p>
                                    )}
                                    {message.metadata.actions && message.metadata.actions.length > 0 && (
                                        <div className="mt-1">
                                            <p className="font-semibold">Actions taken:</p>
                                            <ul className="list-disc list-inside">
                                                {message.metadata.actions.map((action, i) => (
                                                    <li key={i}>{action.tool}: {action.toolInput}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-gray-800 rounded-lg p-4">
                            <p>Thinking...</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-white border-t">
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        Send
                    </button>
                </div>
            </div>

            <div className="p-4 border-t bg-white">
                <h2 className="text-lg font-semibold mb-4">Available Integrations</h2>
                <IntegrationManager config={integrationsConfig} />
            </div>
        </div>
    );
}

export default App; 