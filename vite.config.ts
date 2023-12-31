import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/

const config = {
  poc: {
    entry: '/src/main.poc.ts',
    fileName: 'lrs-poc.js',
  },
  prod: {
    entry: '/src/main.prod.ts',
    fileName: 'lrs.js',
  },
};

const currentConfig = config[import.meta.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid');
}

export default defineConfig({
  plugins: [svelte()],
  build: {
    cssCodeSplit: false,
    lib: {
      ...currentConfig,
    },
    rollupOptions: {
      output: {
        dir: '../dist',
      },
    },
  },
});
