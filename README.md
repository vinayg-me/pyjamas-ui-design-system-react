# Portfolio Components Library

A modern, TypeScript-based React component library for building beautiful portfolio websites. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive components
- 📦 Built with TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 📚 Storybook for component development and documentation
- ⚡ TSUP for fast bundling
- 🔍 Fully typed components

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

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start Storybook:
```bash
pnpm storybook
```

3. Build the library:
```bash
pnpm build
```

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

### Pre-commit Hooks
This project uses Husky and lint-staged to run quality checks before each commit:
- ESLint will check and fix code style
- Prettier will format the code
- Jest will run tests related to changed files

The checks run automatically when you commit changes. If any check fails:
1. Review the error messages
2. Fix the issues
3. Stage your changes
4. Try committing again

### Commit Messages
We follow the Conventional Commits specification:
- Format: `<type>(<scope>): <description>`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(button): add new variant for primary button`

### Pull Request Process
1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards:
   - Use TypeScript strictly
   - Follow existing component patterns
   - Add tests for new features
   - Update Storybook documentation

3. Submit a Pull Request:
   - Fill out the PR template completely
   - Link related issues
   - Add screenshots for UI changes
   - Ensure all tests pass
   - Request review from maintainers

### Code Style Guidelines
- Use TypeScript strictly with proper types
- Follow React best practices and hooks guidelines
- Use Tailwind CSS for styling
- Keep components focused and modular
- Document props using JSDoc comments
- Include Storybook stories for all components

### Quality Checklist
- [ ] TypeScript types are properly defined
- [ ] Components are properly tested
- [ ] Storybook stories are added/updated
- [ ] Documentation is clear and complete
- [ ] Code follows project style guide
- [ ] No console errors or warnings
- [ ] Responsive design is implemented
- [ ] Accessibility features are included

## License

MIT 