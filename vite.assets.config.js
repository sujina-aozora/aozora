import { defineConfig } from 'vite';

/*
 * Step 2 of the build: bundles src/js/main.js (which imports the SCSS)
 * into a single classic IIFE script + one stylesheet + font files,
 * written into dist/assets/ next to the pages from step 1.
 */
export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    modulePreload: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    target: 'es2019',
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        format: 'iife',
        entryFileNames: 'assets/js/site.js',
        assetFileNames: (info) => {
          const name = info.names?.[0] || info.name || '';
          if (/\.css$/.test(name)) return 'assets/css/site.css';
          if (/\.woff2?$/.test(name)) return 'assets/fonts/[name][extname]';
          return 'assets/img/[name][extname]';
        }
      }
    }
  }
});
