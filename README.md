# Suada Examples

This repository contains example applications and integrations for the Suada platform. These examples demonstrate how to use Suada's features and APIs in real-world applications.

## Examples

### React Chat App
Located in `react-example-chat-app/`, this example demonstrates building a full-featured chat application with React and Suada's APIs. It showcases:
- Real-time chat functionality using React
- Integration with various data sources (Google Analytics, Notion, etc.)
- OAuth2 authentication flow implementation
- Handling passthrough mode for third-party integrations
- Modern React patterns and custom UI components
- TypeScript integration
- Environment configuration
- API key management

## Getting Started

Each example contains its own README with specific setup instructions. Generally, you'll need to:

1. Clone this repository
2. Navigate to the example you want to try (e.g., `cd react-example-chat-app`)
3. Install dependencies (`npm install` or `yarn`)
4. Set up environment variables
5. Run the application

## Environment Setup

Most examples require environment variables to be set. You can find example environment files (`.env.example`) in each project directory. Copy these to `.env` and fill in your values:

```bash
cp .env.example .env
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
- Contact us at support@suada.ai 