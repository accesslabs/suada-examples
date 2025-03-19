# Contributing to Suada Examples

We love your input! We want to make contributing to Suada examples as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new examples
- Becoming a maintainer

## We Develop with Github

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Adding New Examples

When adding a new example, please follow these guidelines:

1. Create a new directory with a descriptive name following the pattern:
   ```
   [framework]-example-[feature]
   ```
   For example: `react-example-analytics`, `express-example-webhooks`

2. Include the following files in your example:
   - `README.md` with comprehensive documentation
   - `.env.example` with all required environment variables
   - `package.json` with all dependencies
   - `tsconfig.json` for TypeScript configuration
   - Source code in a `src/` directory

3. Ensure your example:
   - Uses TypeScript
   - Has proper error handling
   - Includes comments explaining complex logic
   - Follows our coding standards (detailed below)
   - Is properly typed with no `any` types
   - Has a clear and concise API

## Code Style Guidelines

### TypeScript

- Use TypeScript for all examples
- Enable strict mode in `tsconfig.json`
- Avoid using `any` type
- Use interfaces over types when possible
- Document complex types

### React

- Use functional components
- Implement proper error boundaries
- Use React hooks appropriately
- Follow React best practices
- Use proper prop typing

### Express

- Use proper middleware patterns
- Implement error handling middleware
- Use proper route organization
- Type request and response objects

### General

- Use consistent naming conventions
- Write clear comments
- Keep functions small and focused
- Use proper error handling
- Follow the principle of least privilege

## Environment Variables

- Never commit actual environment variables
- Always include `.env.example`
- Document all environment variables in README
- Use descriptive variable names

## Pull Request Process

1. Fork the repository and create your branch from `main`
2. Update the README.md with details of changes if applicable
3. Update the documentation for the example
4. Issue the pull request

### Pull Request Requirements

- Describe the changes in detail
- Explain why this change is needed
- Reference any related issues
- Update relevant documentation
- Ensure all tests pass
- Follow the code style guidelines

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](https://github.com/accesslabs/suada-examples/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/accesslabs/suada-examples/issues/new).

### Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md). 