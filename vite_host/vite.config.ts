// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '3.1.1',
      
    })
  ],
  base: '/',
  server: {
    port: 3000,
    strictPort: true,
    },
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'app',
//       remotes: {
//         remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
//       },
//       shared: ['react','react-dom']
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false
//   }
// })

// //varaitn 3
// export default defineConfig({
//   plugins: [react(),
//          vitePluginSingleSpa({
//     type: 'root',
//     imo: '3.1.1'
//   })
//   ],
//   // server: {
//   //   proxy: {
//   //     '/micro-fe': {
//   //       target: 'http://localhost:3001',
//   //       changeOrigin: true,
//   //       rewrite: (path) => path.replace(/^\/micro-fe/, '')
//   //     }
//   //   }
//   // }
// });

