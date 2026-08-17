# Frontend

This is the frontend application built with React and Vite.

## Tech Stack

- React
- Vite
- JavaScript
- CSS / Tailwind CSS
- React Router (if used)

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_FRONTEND_REPOSITORY_URL
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will run on the local development server shown by Vite.

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the frontend root directory.

Example:

```env
VITE_API_URL=http://localhost:5000
```

For production, use your deployed backend URL:

```env
VITE_API_URL=https://your-backend.vercel.app
```

> Never commit `.env` files containing secrets to GitHub.

## Deployment

The frontend can be deployed separately using Vercel.

### Vercel Settings

- Framework Preset: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── ...
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is private and proprietary.
