# React Chat App Example

This example demonstrates how to build a full-featured chat application using React and Suada's APIs. It showcases the integration capabilities of the Suada platform in a modern React application.

## Project Structure

```
/                     # React frontend application
├── src/              # Source code
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components
│   └── utils/        # Utility functions
├── public/           # Static assets
├── .env.example      # Example environment variables
└── package.json      # Frontend dependencies
```

## Features

- **Real-time Chat**: Implements real-time messaging using Suada's APIs
- **Modern Stack**: Built with React, Vite, and TypeScript
- **Authentication**: Complete authentication flow using Clerk
- **UI Components**: Beautiful UI with Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Environment Management**: Proper environment variable handling
- **API Integration**: Seamless integration with Suada's platform

## Prerequisites

- Node.js 18 or higher
- npm
- A Suada account with API access
- Clerk account for authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/accesslabs/suada-examples.git
   cd examples/react-example-chat-app/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the environment variables in `.env` with your credentials:
   ```
   VITE_API_URL=http://localhost:3000
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   VITE_SUADA_API_KEY=your_suada_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:5173 in your browser

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript checks

## Environment Variables

Required environment variables:
```
VITE_API_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_SUADA_API_KEY=your_suada_api_key
```

## Authentication

This example uses Clerk for authentication. To set it up:

1. Create a Clerk application at https://clerk.dev
2. Add your Clerk publishable key to the `.env` file
3. Configure the allowed callback URLs in your Clerk dashboard

## Contributing

Feel free to submit issues and enhancement requests!

## License

This example is MIT licensed. See the LICENSE file for details. 