# Express Server Example

This example demonstrates how to build a backend service using Express.js that integrates with Suada's platform. It shows best practices for building a TypeScript-based Express server with proper error handling and middleware usage.

## Project Structure

```
/                     # React frontend application
├── src/              # Source code
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Express middleware
│   ├── routes/       # API routes
│   └── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── .env.example      # Example environment variables
└── package.json      # Frontend dependencies
```

## Features

- **Express.js Setup**: Complete Express.js server with TypeScript
- **API Integration**: Seamless integration with Suada's platform
- **Middleware**: Custom middleware for authentication and error handling
- **Environment Management**: Secure configuration using dotenv
- **Type Safety**: Full TypeScript support
- **Error Handling**: Robust error handling patterns
- **API Documentation**: Detailed API endpoint documentation

## Prerequisites

- Node.js 18 or higher
- npm
- A Suada account with API access

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/accesslabs/suada-examples.git
   cd examples/express-server-example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the environment variables in `.env`:
   ```bash
   PORT=3000
   SUADA_API_KEY=your_suada_api_key
   NODE_ENV=development
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:3000

## Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript checks

## API Endpoints

### Health Check
```
GET /health
Response: { status: "ok" }
```

### Example endpoints will be documented here

## Environment Variables

Required environment variables:
```
PORT=3000                    # Server port
SUADA_API_KEY=your_key      # Your Suada API key
NODE_ENV=development        # Environment (development/production)
```

## Error Handling

The server implements a centralized error handling system:

- Custom error classes for different types of errors
- Error middleware for consistent error responses
- Validation middleware for request data
- Proper HTTP status codes for different scenarios

## TypeScript Configuration

The project uses TypeScript for type safety. Key configuration:

- Strict mode enabled
- ESNext target
- Path aliases configured
- Source map support for debugging

## Contributing

Feel free to submit issues and enhancement requests!

## License

This example is MIT licensed. See the LICENSE file for details. 