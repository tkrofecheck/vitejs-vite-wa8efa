import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

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
  plugins: [
    cssInjectedByJsPlugin(),
    svelte({
      preprocess: autoPreprocess(),
    }),
    typescript(),
  ],
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
