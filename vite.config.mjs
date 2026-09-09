import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'template.html')
      }
    }
  },
  server: {
    port: 5173,
    open: false,
    host: true
  },
  preview: {
    port: 4173,
    open: false,
    host: true
  },
  plugins: [
    react(),
    {
      name: 'sync-root-deploy',
      closeBundle() {
        const rootDir = __dirname;
        const distDir = path.resolve(rootDir, 'dist');
        const assetsDir = path.resolve(rootDir, 'assets');
        const distAssetsDir = path.join(distDir, 'assets');
        
        // Copy dist/assets/* into assets/
        if (fs.existsSync(distAssetsDir)) {
          if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
          fs.readdirSync(distAssetsDir).forEach(file => {
            fs.copyFileSync(path.join(distAssetsDir, file), path.join(assetsDir, file));
          });
        }

        // Copy dist/template.html to root index.html and dist/index.html
        const distTemplate = path.join(distDir, 'template.html');
        if (fs.existsSync(distTemplate)) {
          const builtHtml = fs.readFileSync(distTemplate, 'utf8');
          fs.writeFileSync(path.join(rootDir, 'index.html'), builtHtml, 'utf8');
          fs.writeFileSync(path.join(distDir, 'index.html'), builtHtml, 'utf8');
        }
      }
    }
  ]
});
