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
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
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

        // Find CSS and JS bundle files
        let cssContent = '';
        let jsContent = '';
        let jsFileName = '';
        let cssFileName = '';

        if (fs.existsSync(distAssetsDir)) {
          const files = fs.readdirSync(distAssetsDir);
          const cssFile = files.find(f => f.endsWith('.css'));
          const jsFile = files.find(f => f.endsWith('.js'));
          if (cssFile) {
            cssFileName = cssFile;
            cssContent = fs.readFileSync(path.join(distAssetsDir, cssFile), 'utf8');
          }
          if (jsFile) {
            jsFileName = jsFile;
            jsContent = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf8');
          }
        }

        // Build self-contained HTML that opens directly on desktop (file://) AND on GitHub Pages (https://)
        // With inlined styles & scripts, zero CORS restrictions occur when double-clicking locally
        const inlinedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MediGuid — Hospital Discharge & Intelligent WhatsApp Guidance Platform</title>
  <meta name="description" content="Hospital workstation to automatically extract clinical discharge summaries and dispatch personalized medical guidance directly through WhatsApp.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230D9488'><path d='M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M9 17h6' stroke='%23ffffff' stroke-width='2'/></svg>">
  <style>
${cssContent}
  </style>
</head>
<body>
  <div id="root">
    <div style="font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 4rem 1.5rem; color: #0f172a;">
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">MediGuid Hospital Portal</h2>
      <p style="color: #64748b;">Initializing clinical workstation...</p>
    </div>
  </div>
  <script>
${jsContent}
  </script>
</body>
</html>`;

        fs.writeFileSync(path.join(rootDir, 'index.html'), inlinedHtml, 'utf8');
        fs.writeFileSync(path.join(distDir, 'index.html'), inlinedHtml, 'utf8');
      }
    }
  ]
});
