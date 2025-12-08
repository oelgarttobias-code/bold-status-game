# Bold Status Game

## Project Info

This is a React-based web application for the Bold Status Game, a Telegram-based clicker game with a competitive ranking system.

## How to Edit This Code

There are several ways of editing your application.

**Use your preferred IDE**

Clone this repo and push changes. The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd bold-status-game

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- React Router

## Deployment to Vercel

This project is configured for deployment to Vercel. Follow these steps:

1. Sign in to your [Vercel account](https://vercel.com/)
2. Click "New Project"
3. Import this Git repository
4. Vercel will automatically detect the Vite framework and configure the build settings
5. Set the following environment variables if needed:
   - `VITE_BASE_URL` = `/` (for proper routing)
6. Click "Deploy"

The project includes:
- `vercel.json` configuration file
- Proper routing configuration
- Optimized build settings

## Manual Deployment Commands

If deploying manually, use these commands:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build
npm run preview
```

## Custom Domain

To connect a custom domain:

1. In your Vercel dashboard, navigate to your project
2. Go to Settings > Domains
3. Add your custom domain
4. Follow the DNS configuration instructions provided by Vercel
