import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for MatchSync (React + TailwindCSS)
export default defineConfig({
  plugins: [react()],
  base: '/', // Set to './' if deploying to subdirectory (e.g. GitHub Pages)
});
