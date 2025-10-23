import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment:
  // If your repository is named username.github.io, leave base as '/'
  // If your repository has a different name, update base to '/your-repo-name/'
  base: '/',
})
