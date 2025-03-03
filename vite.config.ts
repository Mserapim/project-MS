import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-MS/", // Adicione essa linha com o nome exato do repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
