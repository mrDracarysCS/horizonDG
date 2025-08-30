import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'horizonDG',   // <-- add this if your URL is https://yourname.github.io/<YOUR_REPO>/
})
