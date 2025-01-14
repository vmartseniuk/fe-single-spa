import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';


export default defineConfig({
  plugins: [react(), vitePluginSingleSpa(
    {
      type: 'mife',
      serverPort: 3002,
      spaEntryPoints: 'src/spa.tsx',
    }
  )],
  server: {
    port: 3002,
    strictPort: true,
  },
})