# Boncos Company Website

This is our company website's source code. Feel free to copy and use as needed.

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type-safe development
- **Vitest** - Fast, modern testing framework
- **Sass** - Modern CSS with `@use` modules
- **Google App Engine** - Hosting on Node.js 22 runtime

## Development

### Prerequisites

- Node.js 22 or higher
- npm (comes with Node.js)

### Getting Started

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to Google App Engine via GitHub Actions when changes are pushed to the `master` branch.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to App Engine
gcloud app deploy
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── containers/  # Page containers
│   └── assets/      # Images and media
├── app.yaml        # Google App Engine configuration
└── vite.config.ts  # Vite configuration
```

## CI/CD

- Automated testing and deployment via GitHub Actions
- Uses Workload Identity Federation for secure Google Cloud authentication
- Deployments automatically stop previous versions

## License

Feel free to use this code for your own projects!
