import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://elmermendc.github.io/react-crud-post/",
  plugins: [react()],
})
