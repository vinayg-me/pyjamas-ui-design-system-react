# Portfolio Components Library

A modern, TypeScript-based React component library for building beautiful portfolio websites. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive components
- 📦 Built with TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 📚 Storybook for component development and documentation
- ⚡ TSUP for fast bundling
- 🔍 Fully typed components
- 🧹 ESLint + Prettier for code quality
- 🔄 Husky + lint-staged for pre-commit checks

## Installation

```bash
pnpm add @your-username/portfolio-components
```

## Usage

```tsx
import { Button } from '@your-username/portfolio-components';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Development Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start Storybook for component development:

```bash
pnpm storybook
```

3. Build the library:

```bash
pnpm build
```

4. Run development build with watch mode:

```bash
pnpm dev
```

## Code Quality Tools

### ESLint

- Lint your code:

```bash
pnpm lint
```

- Fix auto-fixable issues:

```bash
pnpm lint:fix
```

### Prettier

- Format your code:

```bash
pnpm format
```

### Pre-commit Hooks

We use Husky and lint-staged to ensure code quality:

- ESLint checks and fixes TypeScript/React files
- Prettier formats all supported files
- Runs automatically on commit

## Testing Guidelines

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

1. Create test files with `.test.tsx` extension in the `__tests__` directory
2. Follow the naming convention: `ComponentName.test.tsx`
3. Include tests for:
   - Component rendering
   - Props validation
   - User interactions
   - Edge cases
   - Accessibility features

Example test structure:

```tsx
describe('ComponentName', () => {
  it('renders correctly', () => {
    // Test basic rendering
  });

  it('handles props correctly', () => {
    // Test props behavior
  });

  it('handles user interactions', () => {
    // Test click, hover, etc.
  });
});
```

## Contributing Guidelines

### Development Workflow

1. Fork and clone the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following our standards
4. Commit your changes (commits will be automatically linted)
5. Push and submit a Pull Request

### Commit Convention

We follow the Conventional Commits specification:

- Format: `<type>(<scope>): <description>`
- Types:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation changes
  - `style`: Code style changes (formatting, etc.)
  - `refactor`: Code refactoring
  - `test`: Adding or updating tests
  - `chore`: Maintenance tasks
- Example: `feat(button): add new variant for primary button`

### Code Style Guidelines

- Use TypeScript with strict mode
- Follow React best practices and hooks guidelines
- Use Tailwind CSS for styling
- Keep components focused and modular
- Document props using JSDoc comments
- Include Storybook stories for all components

### Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows style guidelines
- [ ] Tests are added/updated and passing
- [ ] Storybook stories are added/updated
- [ ] Documentation is updated
- [ ] All pre-commit checks pass
- [ ] Commit messages follow convention
- [ ] PR description is clear and complete

## License

MIT
