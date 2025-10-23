import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If your repository is named username.github.io, leave base as '/'
  // If your repository has a different name, uncomment and update the line below:
  // base: '/your-repo-name/',
  base: '/',
})
