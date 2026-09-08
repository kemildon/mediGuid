const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');

console.log('Synchronizing root with frontend directory...');

// 1. Build frontend/style.css from css/design-system.css + css/components.css + css/screens.css
const designSystemCss = fs.readFileSync(path.join(rootDir, 'css', 'design-system.css'), 'utf8');
const componentsCss = fs.readFileSync(path.join(rootDir, 'css', 'components.css'), 'utf8');
const screensCss = fs.readFileSync(path.join(rootDir, 'css', 'screens.css'), 'utf8');

const combinedCss = `/* MediGuid Unified Desktop Stylesheet */\n\n${designSystemCss}\n\n${componentsCss}\n\n${screensCss}\n`;
fs.writeFileSync(path.join(frontendDir, 'style.css'), combinedCss, 'utf8');
console.log('✓ frontend/style.css updated successfully.');

// 2. Build frontend/app.js from js/icons.js + js/data.js + js/chat.js + js/interactions.js + js/app.js
const iconsJs = fs.readFileSync(path.join(rootDir, 'js', 'icons.js'), 'utf8');
const dataJs = fs.readFileSync(path.join(rootDir, 'js', 'data.js'), 'utf8');
const chatJs = fs.readFileSync(path.join(rootDir, 'js', 'chat.js'), 'utf8');
const interactionsJs = fs.readFileSync(path.join(rootDir, 'js', 'interactions.js'), 'utf8');
const appJs = fs.readFileSync(path.join(rootDir, 'js', 'app.js'), 'utf8');

const combinedAppJs = `/**
 * MediGuid - Unified Frontend Application Script
 * Bundles embedded SVG icons, clinical mock data, AI chat assistant,
 * modal interactions, dose tracker, hospital clinical manager, and dual-portal router.
 */

${iconsJs}

${dataJs}

${chatJs}

${interactionsJs}

${appJs}
`;
fs.writeFileSync(path.join(frontendDir, 'app.js'), combinedAppJs, 'utf8');
console.log('✓ frontend/app.js updated successfully.');

// 3. Build frontend/index.html based on root index.html
let rootIndexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// Adjust CSS links in frontend/index.html to use single style.css
rootIndexHtml = rootIndexHtml.replace(
  /<link rel="stylesheet" href="css\/design-system\.css">\s*<link rel="stylesheet" href="css\/components\.css">\s*<link rel="stylesheet" href="css\/screens\.css">/,
  '<link rel="stylesheet" href="style.css">'
);

// Adjust JS script tags at bottom to match frontend/ dependencies:
// medicalKnowledge.js, medicalMedicines.js, voice.js, app.js
rootIndexHtml = rootIndexHtml.replace(
  /<script src="js\/icons\.js"><\/script>\s*<script src="js\/data\.js"><\/script>\s*<script src="js\/medicalKnowledge\.js"><\/script>\s*<script src="js\/medicalMedicines\.js"><\/script>\s*<script src="js\/voice\.js"><\/script>\s*<script src="js\/chat\.js"><\/script>\s*<script src="js\/interactions\.js"><\/script>\s*<script src="js\/app\.js"><\/script>/,
  `<script src="medicalKnowledge.js"></script>\n<script src="medicalMedicines.js"></script>\n<script src="voice.js"></script>\n<script src="app.js"></script>`
);

fs.writeFileSync(path.join(frontendDir, 'index.html'), rootIndexHtml, 'utf8');
console.log('✓ frontend/index.html updated successfully.');

// 4. Copy standalone knowledge files to frontend directory
fs.copyFileSync(path.join(rootDir, 'js', 'medicalKnowledge.js'), path.join(frontendDir, 'medicalKnowledge.js'));
fs.copyFileSync(path.join(rootDir, 'js', 'medicalMedicines.js'), path.join(frontendDir, 'medicalMedicines.js'));
fs.copyFileSync(path.join(rootDir, 'js', 'voice.js'), path.join(frontendDir, 'voice.js'));
console.log('✓ frontend/medicalKnowledge.js, medicalMedicines.js, voice.js copied successfully.');

console.log('All frontend assets synchronized with 100% dual-directory parity.');
