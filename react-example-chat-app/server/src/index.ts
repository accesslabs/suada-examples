import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Suada, ChatPayload } from '@suada/sdk';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { AgentExecutor, createOpenAIFunctionsAgent } from 'langchain/agents';
import { ChatPromptTemplate } from 'langchain/prompts';
import { DynamicStructuredTool } from 'langchain/tools';
import { z } from 'zod';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Suada client
const suada = new Suada({
    apiKey: process.env.SUADA_API_KEY!,
});

// Create a Langchain tool using Suada
const suadaTool = new DynamicStructuredTool({
    name: 'suada',
    description: 'Use Suada to analyze data from connected integrations',
    schema: z.object({
        query: z.string().describe('The question or query to ask Suada'),
        integrations: z.array(z.string()).optional().describe('List of specific integrations to use'),
    }),
    func: async ({ query, integrations }) => {
        try {
            const payload: ChatPayload = {
                message: query,
                integrations,
                externalUserIdentifier: 'example-user'
            };
            return await suada.chat(payload);
        } catch (error) {
            console.error('Error using Suada:', error);
            return 'Error accessing Suada';
        }
    },
});

// Create Langchain agent
const model = new ChatOpenAI({
    modelName: 'gpt-4-turbo-preview',
    temperature: 0.3,
});

const prompt = ChatPromptTemplate.fromMessages([
    ['system', `You are a helpful AI assistant that can use Suada to analyze data from various integrations.
    When asked about data or analytics, use the Suada tool to get accurate information.
    Always explain your thinking process and what you're going to do before using tools.`],
    ['human', '{input}'],
]);

const agent = await createOpenAIFunctionsAgent({
    llm: model,
    tools: [suadaTool],
    prompt,
});

const agentExecutor = new AgentExecutor({
    agent,
    tools: [suadaTool],
});

// Chat endpoint
app.post('/chat', async (req, res) => {
    try {
        const { message, chatHistory } = req.body;

        const result = await agentExecutor.invoke({
            input: message,
            chat_history: chatHistory,
        });

        // Extract tool calls and format them
        const actions = result.intermediateSteps?.map((step: any) => ({
            tool: step.action.tool,
            toolInput: step.action.toolInput.query,
            log: step.observation,
        })) || [];

        // Format response
        const response = {
            answer: result.output,
            thoughts: result.intermediateSteps?.[0]?.action?.log || '',
            actions: actions,
            followUpQuestion: null, // You could generate this using another LLM call if desired
        };

        res.json(response);
    } catch (error) {
        console.error('Error processing chat:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 