import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import fs from 'fs';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  server: {
    https: {
      cert: fs.readFileSync('./ssl/localhost.pem'),
      key: fs.readFileSync('./ssl/localhost-key.pem')
    },
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://djgram.onrender.com',
        changeOrigin: true,
        secure: false
      },

      '/ws': {
        target: 'https://djgram.onrender.com',
        ws: true,
        changeOrigin: true,
        secure: false
      }
  }
}})