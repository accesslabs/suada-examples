# React Chat App Example

This example demonstrates how to build a full-featured chat application using React and Suada's APIs. It consists of a React frontend and a Node.js backend, showcasing various features of the Suada platform.

## Project Structure

```
react-example-chat-app/
├── client/              # React frontend application
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   └── package.json    # Frontend dependencies
├── server/             # Node.js backend application
│   ├── src/           # Source code
│   └── package.json   # Backend dependencies
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Features

- **Real-time Chat**: Implements real-time messaging using Suada's APIs
- **OAuth Integration**: Demonstrates integration with various services:
  - Google Analytics
  - Notion
  - Slack
  - And more...
- **Authentication**: Complete authentication flow using Clerk
- **TypeScript**: Full TypeScript support for better type safety
- **Modern React Patterns**: Uses the latest React patterns and hooks
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Environment Management**: Proper environment variable handling
- **API Key Management**: Secure API key handling

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- A Suada account with API access
- OAuth credentials for the services you want to integrate

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/examples.git
   cd examples/react-example-chat-app
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables:
   ```bash
   # For the client
   cd client
   cp .env.example .env

   # For the server
   cd ../server
   cp .env.example .env
   ```

4. Update the environment variables in both `.env` files with your credentials

5. Start the development servers:
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # In a new terminal, start the frontend
   cd client
   npm run dev
   ```

6. Open http://localhost:5173 in your browser

## Environment Variables

### Client (.env)
```
VITE_API_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

### Server (.env)
```
PORT=3000
CLERK_SECRET_KEY=your_clerk_secret
SUADA_API_KEY=your_suada_api_key
```

## Available Scripts

### Client
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript checks

### Server
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## OAuth Setup

This example includes OAuth integration with various services. To set them up:

1. Create OAuth applications in each service's developer console
2. Add the OAuth credentials to your server's `.env` file
3. Configure the callback URLs in each service's settings
4. Update the client configuration if necessary

## Contributing

Feel free to submit issues and enhancement requests!

## License

This example is MIT licensed. See the LICENSE file for details. 