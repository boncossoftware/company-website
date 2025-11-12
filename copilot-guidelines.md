# GitHub Copilot Guidelines for `company-website`

## Purpose

This document provides best practices and usage guidelines for leveraging GitHub Copilot in the development of the `company-website` project. These guidelines ensure consistency, maintainability, and quality across the codebase.

## General Principles

- Use Copilot to accelerate development, generate boilerplate, and suggest code improvements.
- Always review Copilot-generated code for correctness, security, and maintainability.
- Do not blindly accept suggestions—validate logic and ensure alignment with project requirements.
- Treat Copilot as a productivity tool, not a replacement for understanding the code you write.

## Project Architecture

### Directory Structure

- **`src/components/`**: Reusable UI components (buttons, sections, headers, footers, etc.)
- **`src/containers/`**: Page-level components that compose multiple components (e.g., `Home`)
- **`src/assets/`**: Static assets like images, fonts, and icons
- **`public/`**: Public static files served directly

### Component Hierarchy

- **Containers** orchestrate layout and compose multiple components
- **Components** are self-contained, reusable UI elements
- Avoid deep nesting—keep component trees shallow for better maintainability

## Code Style & Standards

### TypeScript & JavaScript

- **Prefer TypeScript** for all new components and containers (`.tsx` files)
- Use `type` or `interface` for defining component props (prefer `type` for consistency with existing code)
- Enable strict type checking—avoid `any` types unless absolutely necessary
- Use descriptive prop names and document complex types with JSDoc comments
- Follow the existing pattern: PascalCase for components, camelCase for variables/functions

### React Best Practices

- **Use functional components** with React hooks (no class components)
- Prefer arrow function syntax for component definitions
- Use destructuring for props (see existing pattern: `const Section = ({title, children}:Props) => {...}`)
- Keep components focused on a single responsibility
- Extract complex logic into custom hooks when appropriate

### Naming Conventions

- **Components**: PascalCase (e.g., `Section`, `WelcomeTextSectionContent`)
- **Files**: kebab-case for component files (e.g., `point-section-content.tsx`)
- **CSS Classes**: kebab-case with BEM methodology where applicable (e.g., `section-inner-container`)
- **Props Types**: Use `Props` or `ComponentNameProps` pattern

### Styling

- Use **SCSS** for all styles, not inline styles or CSS-in-JS
- Each component should have its own `.scss` file with the same base name
- Import styles at the top of each component file
- Use class selectors, avoid ID selectors for styling
- Keep styles scoped to components—prefix class names with component name to avoid conflicts
- Follow mobile-first responsive design principles

### Import Organization

- Group imports in this order:
  1. React and external libraries
  2. Internal components and containers
  3. Styles
  4. Types (if in separate files)
- Use absolute imports from `src` (configured in `tsconfig.json` with `"baseUrl": "src"`)
- Example: `import Section from 'components/section'` instead of `'./components/section'`

## Component Development

### Creating New Components

- **Check for existing components first**: Review `src/components` to avoid duplication
- **Follow the three-file pattern** for each component:
  - `component-name.tsx` - Component logic and JSX
  - `component-name.scss` - Component styles
  - `component-name.test.tsx` - Unit tests
- Use the existing components as templates when prompting Copilot

### Component Structure Template

```typescript
import "./component-name.scss";

type Props = {
  // Define your props here
  title?: string;
  children?: React.ReactNode;
};

const ComponentName = ({ title, children }: Props) => {
  return <div className="component-name">{/* Component JSX */}</div>;
};

export default ComponentName;
```

### Container Development

- Place page-level components in `src/containers/[PageName]/`
- Each container should have its own folder with an `index.js` or `index.tsx` file
- Containers compose components and handle page-level state/logic
- Keep business logic in containers, keep components presentational when possible

### Props Best Practices

- Make props optional with `?` when they have sensible defaults
- Use `React.ReactNode` for children props
- Keep prop interfaces simple—if you have more than 5-7 props, consider refactoring
- Document complex props with JSDoc comments

## Testing Standards

### Test Coverage

- **Every component must have a corresponding test file**
- Use React Testing Library and Jest (already configured in the project)
- Test user interactions and component rendering, not implementation details
- Aim for meaningful tests, not just coverage percentages

### Test Structure

```typescript
import { render, screen } from "@testing-library/react";
import ComponentName from "./component-name";

describe("ComponentName", () => {
  it("should render without crashing", () => {
    render(<ComponentName />);
  });

  it("should display title when provided", () => {
    render(<ComponentName title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
```

### What to Test

- Component renders without errors
- Props are correctly displayed/applied
- Conditional rendering works as expected
- User interactions trigger expected behavior
- Accessibility attributes are present

## Security & Privacy

- Do not use Copilot to generate or suggest code that handles sensitive data without manual review
- **Never commit** hardcoded secrets, credentials, API keys, or tokens
- Reject Copilot suggestions that include sensitive data or credentials
- Use environment variables for configuration (create `.env.local` for local secrets)
- Review all external dependencies suggested by Copilot for known vulnerabilities

## Accessibility & Performance

### Accessibility (a11y)

- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, etc.)
- Include proper ARIA attributes when needed (but prefer semantic HTML first)
- Ensure proper heading hierarchy (h1 → h2 → h3, no skipping levels)
- Add `alt` text to all images
- Ensure keyboard navigation works for all interactive elements
- Maintain sufficient color contrast ratios (WCAG AA minimum)

### Performance

- Avoid unnecessary re-renders by using `React.memo`, `useMemo`, and `useCallback` appropriately
- Lazy load images and components when beneficial (especially for containers)
- Keep bundle size small—review dependencies before adding new ones
- Optimize images before adding them to `src/assets/img/`
- Use the React DevTools Profiler to identify performance bottlenecks

## Git & Version Control

### Commit Messages

- Write clear, descriptive commit messages
- Use conventional commit format when possible:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `refactor:` for code refactoring
  - `style:` for formatting/styling changes
  - `test:` for adding/updating tests
  - `docs:` for documentation changes

### Pull Requests

- Document Copilot-assisted changes in PR descriptions when significant
- Review all Copilot-generated code before committing
- Run tests locally before pushing (`npm test`)
- Build the project to ensure no errors (`npm run build`)

## Collaboration

- Communicate with team members about Copilot usage and share useful prompts or completions
- Document Copilot-assisted changes in pull requests when relevant
- Share effective prompting strategies that yield good results
- Discuss patterns and conventions when Copilot suggestions conflict with team standards

## Prompting Copilot Effectively

### Best Practices for Prompts

- Be specific and descriptive in comments when requesting code generation
- Provide context about the component's purpose and requirements
- Reference existing components to maintain consistency
- Example: `// Create a Button component following the Section component pattern with primary/secondary variants`

### Using Copilot Chat

- Ask Copilot to explain unfamiliar code or patterns
- Request refactoring suggestions for complex components
- Use `/explain` to understand generated code
- Use `/tests` to generate test cases
- Use `/fix` to address linting or type errors

### When to Ignore Copilot

- Suggestions that don't match the project's architecture or conventions
- Code that introduces unnecessary dependencies
- Overly complex solutions when simpler ones exist
- Anything that violates these guidelines

## Code Quality & Maintenance

### Code Review Checklist

Before committing Copilot-generated code, verify:

- [ ] Code follows TypeScript strict mode requirements
- [ ] Component follows the three-file pattern (tsx, scss, test)
- [ ] Tests are included and passing
- [ ] No console.log or debugging code remains
- [ ] No unused imports or variables
- [ ] Proper error handling is in place
- [ ] Code is accessible and performant
- [ ] Documentation/comments explain complex logic

### Refactoring Guidelines

- Keep functions and components small and focused
- Extract reusable logic into custom hooks
- Use composition over duplication
- When Copilot suggests similar code multiple times, consider abstracting it
- Regular refactoring prevents technical debt accumulation

### Dependencies

- Review package.json before accepting Copilot's dependency suggestions
- Prefer well-maintained packages with active communities
- Check bundle size impact of new dependencies (`npm run build`)
- Ensure licenses are compatible with project requirements

## Common Pitfalls to Avoid

### Don't Let Copilot...

- Create inconsistent naming conventions across files
- Add dependencies without review
- Generate overly complex solutions
- Skip TypeScript type definitions
- Ignore existing patterns in the codebase
- Create components without tests
- Use deprecated React patterns (e.g., class components)
- Mix TypeScript and JavaScript unnecessarily

### When You Should Manually Code

- Critical business logic requiring careful review
- Complex state management patterns
- Security-sensitive operations
- Performance-critical sections
- When you don't fully understand the generated code

## Project-Specific Patterns

### Icon Usage

- Use `react-icons` library (already included in dependencies)
- Import icons from their specific packages (e.g., `react-icons/fa` for Font Awesome)
- Keep icon usage consistent across components

### Responsive Design

- Follow mobile-first approach (design for mobile, enhance for desktop)
- Use SCSS mixins or variables for breakpoints
- Test components at multiple viewport sizes

### Content Sections

- Leverage existing section components (`Section`, `WelcomeTextSectionContent`, etc.)
- Maintain consistent spacing and layout patterns
- Use the section pattern for major page divisions

## Troubleshooting

### Common Issues

- **Copilot suggests outdated React patterns**: Reject class components, use functional components and hooks
- **Type errors in generated code**: Review and add proper TypeScript types, don't use `any`
- **Inconsistent styling**: Ensure SCSS files are imported and class names follow project conventions
- **Missing tests**: Prompt Copilot specifically to generate tests using React Testing Library
- **Import path issues**: Use absolute imports from `src` (e.g., `components/section`)

### When to Ask for Help

- If Copilot repeatedly suggests code that doesn't fit the project structure
- When generated code introduces bugs or breaks existing functionality
- If you're unsure whether a Copilot suggestion is appropriate
- Report issues or unexpected behavior to the team and consider disabling Copilot for specific files if needed

## Resources

### Documentation

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [React Best Practices](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Project Commands

```bash
npm start          # Start development server
npm test           # Run tests in watch mode
npm run build      # Build for production
npm run eject      # Eject from Create React App (use with caution)
```

### Useful VS Code Extensions

- ESLint - Linting and code quality
- Prettier - Code formatting
- SCSS IntelliSense - SCSS autocomplete
- React DevTools - Component debugging
- axe Accessibility Linter - Accessibility checking

---

_Last updated: November 12, 2025_
