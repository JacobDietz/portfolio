import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react() ,tailwindcss(), ],
  // build: {
  //   rollupOptions: {
  //     external: [
  //       'module-to', // Externalize a specific module
  //       /^node:.*/,               // Externalize all Node.js built-in modules (e.g., 'node:fs', 'node:path')
  //       'another-module',
  //       // Add more modules or regex patterns as needed
  //     ]
  //   }
  // }

})
