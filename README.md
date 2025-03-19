# Suada Examples

This repository contains example applications and integrations for the Suada platform. These examples demonstrate how to use Suada's features and APIs in real-world applications.

## Examples

### React Chat App
Located in `react-example-chat-app/`, this example demonstrates building a full-featured chat application with React and Suada's APIs. It showcases:
- Real-time chat functionality using React and Vite
- Integration with Suada's platform features
- Modern React patterns and Tailwind CSS styling
- TypeScript integration
- Environment configuration
- API key management
- Clerk authentication integration

### Express Server Example
Located in `express-server-example/`, this example shows how to build a backend service that integrates with Suada:
- Express.js server setup with TypeScript
- API endpoint implementation
- Environment configuration
- Error handling and middleware usage
- TypeScript configuration
- Secure API key management

## Getting Started

Each example contains its own README with specific setup instructions. Generally, you'll need to:

1. Clone this repository
2. Navigate to the example you want to try (e.g., `cd react-example-chat-app`)
3. Install dependencies (`npm install`)
4. Set up environment variables
5. Run the application

## Environment Setup

All examples require environment variables to be set. You can find example environment files (`.env.example`) in each project directory. Copy these to `.env` and fill in your values:

```bash
cp .env.example .env
```

## Project Structure

```
examples/
├── react-example-chat-app/    # React chat application example
│   ├── client/               # Frontend React application
│   └── README.md             # React example documentation
├── express-server-example/    # Express server example
│   ├── src/                  # Source code
│   └── README.md             # Express example documentation
└── README.md                 # This file
```

## Contributing

We welcome contributions! If you have an example you'd like to share:

1. Fork this repository
2. Create a new branch for your example
3. Add your example with clear documentation
4. Submit a pull request

Please ensure your example:
- Has clear documentation
- Includes a `.env.example` file
- Follows our coding standards
- Includes necessary TypeScript types
- Has a descriptive folder name (e.g., `[framework]-example-[feature]`)

## License

These examples are provided under the MIT License. See the LICENSE file for details.

## Support

If you need help with these examples or have questions about Suada:

- Visit our [documentation](https://docs.suada.ai)
- Contact us at hello@suada.ai 