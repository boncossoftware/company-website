# Contributing to Boncos Company Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

## How to Contribute

### Reporting Issues

1. Check if the issue already exists
2. Use the issue template if available
3. Provide clear reproduction steps
4. Include relevant screenshots or error messages

### Submitting Changes

1. **Fork the repository**
2. **Create a feature branch** from `master`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our code standards
4. **Write or update tests** for your changes
5. **Ensure all tests pass**
   ```bash
   npm test
   npm run build
   ```
6. **Commit your changes** with clear, descriptive messages
7. **Push to your fork** and submit a pull request

## Development Guidelines

### Code Standards

- Follow the patterns established in existing code
- Use TypeScript for type safety
- Write meaningful component and variable names
- Keep components focused and reusable
- Review `copilot-guidelines.md` for detailed standards

### Testing

- All new features must include tests
- Ensure existing tests pass before submitting PR
- Aim for meaningful test coverage

### Style Guide

- Use functional components with hooks
- Prefer `const` over `let`
- Use SCSS with `@use` syntax (not `@import`)
- Follow the established file structure

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure your PR description clearly describes the problem and solution
3. Link any relevant issues
4. Wait for review from maintainers
5. Address any requested changes
6. Once approved, a maintainer will merge your PR

## Questions?

Feel free to open an issue for questions or discussions about contributing.
