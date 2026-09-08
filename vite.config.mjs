import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
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
    {
      name: 'copy-standalone-scripts',
      closeBundle() {
        const files = ['medicalKnowledge.js', 'medicalMedicines.js', 'voice.js', 'app.js', 'style.css'];
        const distDir = path.resolve(__dirname, 'dist');
        if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
        files.forEach(file => {
          if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.join(distDir, file));
          }
        });
      }
    }
  ]
});
