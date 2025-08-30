import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    base: '/trihelmIG/',   // leading + trailing slash, exact repo name
})
