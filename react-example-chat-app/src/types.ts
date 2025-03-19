export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    metadata?: {
        thoughts?: string;
        actions?: Array<{
            tool: string;
            toolInput: string;
            log?: string;
        }>;
        followUpQuestion?: string;
    };
} 