import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Project Pages URL: https://<user>.github.io/Little-Learners/
  base: '/Little-Learners/',
  plugins: [react(), tailwindcss()],
})
