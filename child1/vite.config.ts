// // vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [react(), vitePluginSingleSpa(
    {
      type: 'mife',
      serverPort: 3001,
      spaEntryPoints: 'src/spa.tsx',
    }
  )],
  server: {
    port: 3001,
    strictPort: true,
  },
})

// import path from 'path'
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'



// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "remote_app",
//       filename: "remoteEntry.js",
//       exposes: {
//         './Button': './src/Button.tsx',
//         './App': './src/App.tsx'

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


// variant 3
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001
//   },

//   // build: {
//   //   rollupOptions: {
//   //     input: "src/main.tsx",
//   //     preserveEntrySignatures: "exports-only",
//   //     output: {
//   //       exports: "auto",
//   //       // format: "system",
//   //       entryFileNames: "main.js",
//   //     },
//   //   },
    
//   // },
// });


// export default defineConfig(({  mode }) => {
// console.log('defineConfig ~ mode:', mode);

//   //  const env = loadEnv(mode, process.cwd(), '');
//   return {  plugins: [react({

//   })],
//     server: {
//       port: 3001,
//       // hmr: false,
//     //   hmr: {
//     //     host: 'localhost',
//     //     port: 3001,
//     // }
//     },
//     preview: {
//       port: 3001
//     },



//     // define: {
//     //   global: "window",
//     //   'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
//     // },
//     build: {
//       lib: {
//         entry: 'src/spa.tsx',
//         name: 'MicroFE',
//         fileName: (format) => `micro-fe.${format}.js`,
//       },
//       rollupOptions: {
//         // Ensure we don't bundle React with the micro front-end
//         external: ['react', 'react-dom'],
//         output: {
//           globals: {
//             react: 'React',
//             'react-dom': 'ReactDOM',
//           },
//         },
//       },
//     }}
// })