/**
 * MediGuid - Unified Frontend Application Script
 * Bundles embedded SVG icons, clinical mock data, AI chat assistant,
 * modal interactions, dose tracker, hospital clinical manager, and dual-portal router.
 */

/**
 * MediGuid - Clean Lucide Medical Line Icons (Embedded SVG)
 * Strictly minimal outline-style medical & utility icons.
 * Zero external CDN failure risk.
 */

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M12 2v4"/><path d="M2 12h1"/><path d="M21 12h1"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><circle cx="12" cy="15" r="1"/></svg>`,
  doctor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  emergency: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  pharmacy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 11-4-7-4 7"/><path d="M15 4v16"/><path d="M9 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M9 17h6"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  'shopping-bag': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  prescription: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/><path d="M6 14h6"/><path d="m14 14 4 4"/><path d="m18 14-4 4"/></svg>`,
  reminder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/></svg>`,
  'chevron-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  'chevron-left': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  'arrow-left': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  'alert-triangle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
  'credit-card': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  paperclip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10Z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`,
  checkcircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  volume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  stop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="5" y="5" rx="2"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  'eye-off': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'user-plus': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>`,
  'clipboard-list': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
  'layout-dashboard': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  'trash-2': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`
};

/**
 * Returns SVG string for icon
 * @param {string} name 
 * @param {number} size 
 * @param {string} className 
 */
function getIcon(name, size = 20, className = '') {
  const svgString = ICONS[name] || ICONS.pill;
  return svgString.replace('<svg ', `<svg width="${size}" height="${size}" class="${className}" `);
}

/**
 * Replace all [data-icon="name"] placeholders in document
 */
function renderAllIcons(container = document) {
  const elements = container.querySelectorAll('[data-icon]');
  elements.forEach(el => {
    const iconName = el.getAttribute('data-icon');
    const size = parseInt(el.getAttribute('data-icon-size') || '20', 10);
    const cls = el.getAttribute('data-icon-class') || '';
    el.innerHTML = getIcon(iconName, size, cls);
  });
}


/**
 * MediGuid - Comprehensive Healthcare Mock Data
 */

const MEDIGUID_DATA = {
  patient: {
    name: "Sarah Carter",
    id: "#MG-9482",
    age: 28,
    gender: "Female",
    bloodGroup: "O+",
    height: "168 cm",
    weight: "58 kg",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    phone: "+1 (555) 234-8901",
    email: "sarah.carter@mediguid.health",
    emergencyContact: {
      name: "David Carter (Spouse)",
      relation: "Primary ICE",
      phone: "+1 (555) 892-3411"
    },
    primaryDoctor: "Dr. Evelyn Reed (Cardiology)",
    insurance: "Aetna Premier Health - Policy #AET-99201"
  },

  vitals: [
    { id: "hr", name: "Heart Rate", value: 72, unit: "bpm", status: "Normal", icon: "heart", trend: "+2 bpm" },
    { id: "bp", name: "Blood Pressure", value: "118/76", unit: "mmHg", status: "Optimal", icon: "activity", trend: "Stable" },
    { id: "glu", name: "Blood Glucose", value: 95, unit: "mg/dL", status: "Fasting Normal", icon: "pill", trend: "-4 mg/dL" },
    { id: "spo2", name: "Blood Oxygen", value: 98, unit: "% SpO2", status: "Optimal", icon: "shield", trend: "Stable" }
  ],

  allergies: [
    { allergen: "Penicillin", reaction: "Severe Skin Rash & Hives", severity: "High" },
    { allergen: "Sulfa Drugs", reaction: "Mild Swelling & Itching", severity: "Moderate" }
  ],

  conditions: [
    "Mild Essential Hypertension (Managed)",
    "Seasonal Allergic Rhinitis",
    "Post-Exercise Bronchospasm"
  ],

  medications: [
    {
      id: "med-1",
      name: "Amoxicillin",
      strength: "500 mg",
      form: "Capsule",
      dosage: "1 capsule",
      frequency: "Twice daily",
      time: "08:00 AM",
      timeSlot: "morning",
      instructions: "After Breakfast",
      mealTiming: "After Food",
      reminder: true,
      taken: true,
      remainingPills: 14,
      totalPills: 20
    },
    {
      id: "med-2",
      name: "Metformin HCl",
      strength: "850 mg",
      form: "Tablet",
      dosage: "1 tablet",
      frequency: "Once daily",
      time: "01:00 PM",
      timeSlot: "afternoon",
      instructions: "With Lunch",
      mealTiming: "With Food",
      reminder: true,
      taken: true,
      remainingPills: 28,
      totalPills: 30
    },
    {
      id: "med-3",
      name: "Atorvastatin Calcium",
      strength: "20 mg",
      form: "Tablet",
      dosage: "1 tablet",
      frequency: "Once daily at night",
      time: "08:30 PM",
      timeSlot: "evening",
      instructions: "After Dinner",
      mealTiming: "After Food",
      reminder: true,
      taken: false,
      remainingPills: 6,
      totalPills: 30,
      isNext: true
    },
    {
      id: "med-4",
      name: "Melatonin Extra",
      strength: "3 mg",
      form: "Chewable",
      dosage: "1 tablet",
      frequency: "As needed before bed",
      time: "10:30 PM",
      timeSlot: "bedtime",
      instructions: "30 mins before sleep",
      mealTiming: "Before Sleep",
      reminder: true,
      taken: false,
      remainingPills: 22,
      totalPills: 30
    }
  ],

  doctors: [
    {
      id: "doc-1",
      name: "Dr. Evelyn Reed",
      specialty: "Cardiologist",
      experience: "14 yrs exp",
      rating: 4.9,
      reviewsCount: 148,
      hospital: "Metro Heart Institute",
      availability: "Available Today",
      availableTime: "03:30 PM",
      fee: "$75",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&auto=format&fit=crop&q=80",
      featured: true,
      about: "Senior Consultant in Non-Invasive Cardiology and Preventive Hypertension. Trained at Johns Hopkins Medicine."
    },
    {
      id: "doc-2",
      name: "Dr. Marcus Vance",
      specialty: "Neurologist",
      experience: "11 yrs exp",
      rating: 4.8,
      reviewsCount: 96,
      hospital: "St. Jude Neuroscience",
      availability: "Available Tomorrow",
      availableTime: "10:00 AM",
      fee: "$90",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=160&auto=format&fit=crop&q=80",
      featured: false,
      about: "Specialized in migraine management, neuromuscular disorders, and sleep therapies."
    },
    {
      id: "doc-3",
      name: "Dr. Sarah Jenkins",
      specialty: "General Physician",
      experience: "8 yrs exp",
      rating: 4.9,
      reviewsCount: 210,
      hospital: "City Care Family Clinic",
      availability: "Available Today",
      availableTime: "04:15 PM",
      fee: "$50",
      avatar: "https://images.unsplash.com/photo-1594824813633-8909338f3227?w=160&auto=format&fit=crop&q=80",
      featured: false,
      about: "Primary care specialist focusing on holistic lifestyle medicine, chronic disease prevention, and wellness."
    },
    {
      id: "doc-4",
      name: "Dr. Rohan Patel",
      specialty: "Pediatrician",
      experience: "12 yrs exp",
      rating: 4.7,
      reviewsCount: 84,
      hospital: "Bloom Children's Center",
      availability: "Available Today",
      availableTime: "05:00 PM",
      fee: "$65",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=160&auto=format&fit=crop&q=80",
      featured: false,
      about: "Board-certified pediatrician dedicated to child nutrition, immunity, and developmental milestone screening."
    },
    {
      id: "doc-5",
      name: "Dr. Elena Rostova",
      specialty: "Dermatologist",
      experience: "9 yrs exp",
      rating: 4.9,
      reviewsCount: 132,
      hospital: "SkinLife Aesthetic Institute",
      availability: "Available Thursday",
      availableTime: "11:30 AM",
      fee: "$80",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&auto=format&fit=crop&q=80",
      featured: false,
      about: "Clinical dermatology, allergy testing, and therapeutic skincare for chronic eczema and acne."
    }
  ],

  stock: [
    {
      id: "stk-1",
      name: "Amoxicillin 500mg",
      brand: "Augmentin Gen",
      category: "Antibiotics",
      form: "20 Capsules",
      price: 18.50,
      rxRequired: true,
      inStock: true,
      stockCount: 42,
      icon: "pill"
    },
    {
      id: "stk-2",
      name: "Metformin 850mg",
      brand: "Glucophage",
      category: "Chronic Care",
      form: "30 Tablets",
      price: 14.20,
      rxRequired: true,
      inStock: true,
      stockCount: 65,
      icon: "pill"
    },
    {
      id: "stk-3",
      name: "Atorvastatin 20mg",
      brand: "Lipitor",
      category: "Cardiac",
      form: "30 Tablets",
      price: 24.00,
      rxRequired: true,
      inStock: true,
      stockCount: 8,
      isLowStock: true,
      icon: "heart"
    },
    {
      id: "stk-4",
      name: "Paracetamol 650mg",
      brand: "Calpol Extra",
      category: "Pain Relief",
      form: "15 Tablets",
      price: 6.50,
      rxRequired: false,
      inStock: true,
      stockCount: 120,
      icon: "pill"
    },
    {
      id: "stk-5",
      name: "Cetirizine 10mg",
      brand: "Zyrtec Allergy",
      category: "Allergy",
      form: "10 Tablets",
      price: 9.80,
      rxRequired: false,
      inStock: true,
      stockCount: 88,
      icon: "shield"
    },
    {
      id: "stk-6",
      name: "Vitamin D3 60,000 IU",
      brand: "Calcirol Forte",
      category: "Vitamins",
      form: "4 Chewables",
      price: 12.00,
      rxRequired: false,
      inStock: true,
      stockCount: 54,
      icon: "sparkles"
    },
    {
      id: "stk-7",
      name: "Omega-3 Triple Fish Oil",
      brand: "Nordic Pure",
      category: "Vitamins",
      form: "60 Softgels",
      price: 29.50,
      rxRequired: false,
      inStock: true,
      stockCount: 30,
      icon: "heart"
    },
    {
      id: "stk-8",
      name: "Ibuprofen 400mg",
      brand: "Advil Dual Action",
      category: "Pain Relief",
      form: "24 Caplets",
      price: 11.20,
      rxRequired: false,
      inStock: true,
      stockCount: 75,
      icon: "pill"
    }
  ],

  hospitals: [
    {
      id: "hosp-1",
      name: "Metro General Trauma Center",
      distance: "0.8 km away",
      time: "4 mins driving",
      erStatus: "24/7 Emergency Open",
      phone: "+1 (555) 911-0021",
      ambulanceETA: "6 mins",
      address: "450 Medical Center Blvd"
    },
    {
      id: "hosp-2",
      name: "St. Jude Memorial Hospital",
      distance: "2.3 km away",
      time: "9 mins driving",
      erStatus: "Level 1 Trauma Verified",
      phone: "+1 (555) 911-0088",
      ambulanceETA: "10 mins",
      address: "1200 Health Way"
    },
    {
      id: "hosp-3",
      name: "City Life Super Specialty",
      distance: "3.7 km away",
      time: "14 mins driving",
      erStatus: "Cardiac Emergency Ready",
      phone: "+1 (555) 911-0055",
      ambulanceETA: "14 mins",
      address: "88 University Ave"
    }
  ]
};

/**
 * Hospital-Provided Patient Records & Authentication Database
 * Login Credentials issued by Hospital Reception Desk.
 */
const HOSPITAL_PATIENTS = [
  {
    id: "PAT1001",
    password: "demo123",
    hospitalName: "MediGuid City General Hospital",
    name: "Arun",
    age: 21,
    gender: "Male",
    phone: "+1 (555) 234-8901",
    email: "arun.patient@mediguid.health",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    disease: "Fever",
    symptoms: "Fever, headache, body pain",
    diagnosis: "Acute Viral Pyrexia with Mild Cephalea",
    existingConditions: "None",
    allergies: "None",
    medicines: "Paracetamol 500mg (1 tablet every 6-8 hrs after meals)",
    notes: "Patient advised complete bed rest, 2.5L daily hydration, and soft diet. Review in 3 days if fever persists above 101°F.",
    assignedDoctor: "Dr. Kumar",
    doctor: "Dr. Kumar",
    department: "General Medicine",
    bloodGroup: "B+",
    emergencyContact: "Ramesh (Father) - +1 (555) 892-3411",
    admissionStatus: "Outpatient - General Medicine Clinic",
    room: "OPD Suite 104",
    status: "Active",
    registeredDate: "Today, 09:30 AM",
    dob: "14 May 2005",
    dischargeSummary: {
      fileName: "Discharge_Summary_Arun_PAT1001.pdf",
      fileType: "application/pdf",
      filePreview: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
      uploadDate: "07 Sep 2026, 09:30 AM",
      hospitalName: "MediGuid City General Hospital",
      doctorName: "Dr. Kumar",
      department: "Internal / General Medicine",
      admissionDate: "03 Sep 2026",
      dischargeDate: "06 Sep 2026",
      diagnosis: "Acute Febrile Illness / Viral Fever",
      symptoms: "High fever (102°F), headache, generalized myalgia, chills",
      allergies: "No known drug allergies (NKDA)",
      medicines: "Tab Paracetamol 650mg TDS x 3 days, Cap B-Complex OD x 5 days, ORS Rehydration solution",
      dischargeInstructions: "Complete bed rest for 48 hours. Drink at least 2.5 to 3.0 liters of warm fluids/boiled water daily. Lukewarm sponge baths if temperature exceeds 100°F. Avoid oily and heavy meals.",
      followUp: "Review at General Medicine OPD after 3 days or sooner if fever recurs >102°F, persistent vomiting, or severe abdominal pain.",
      importantNotes: "Vitals stable at discharge: BP 118/76 mmHg, Pulse 72 bpm, SpO2 98% on room air. Patient afebrile for last 24 hours.",
      verifiedBy: "Dr. Kumar, MD (Internal Medicine), Chief Medical Officer"
    }
  },
  {
    id: "PAT1002",
    password: "demo123",
    hospitalName: "MediGuid Memorial Hospital",
    name: "John Miller",
    age: 42,
    gender: "Male",
    phone: "+1 (555) 345-6789",
    email: "john.miller@mediguid.health",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    disease: "Hypertension",
    symptoms: "Occasional morning headaches, mild dizziness, fatigue",
    diagnosis: "Essential Stage 1 Systemic Hypertension",
    existingConditions: "Mild Dyslipidemia",
    allergies: "None Reported",
    medicines: "Atorvastatin 20mg (1 tablet at bedtime), Amlodipine 5mg",
    notes: "Follow low-sodium DASH diet. Daily blood pressure logging at 08:00 AM and 08:00 PM.",
    assignedDoctor: "Dr. Marcus Vance",
    doctor: "Dr. Marcus Vance",
    department: "Cardiology",
    bloodGroup: "A+",
    emergencyContact: "Mary Miller (Spouse) - +1 (555) 456-7890",
    admissionStatus: "Outpatient - Cardiology Follow-up",
    room: "OPD Suite 208",
    status: "Active",
    registeredDate: "Yesterday, 02:15 PM",
    dob: "22 Aug 1982",
    dischargeSummary: {
      fileName: "Discharge_Summary_John_PAT1002.pdf",
      fileType: "application/pdf",
      filePreview: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
      uploadDate: "06 Sep 2026, 02:15 PM",
      hospitalName: "MediGuid Memorial Hospital",
      doctorName: "Dr. Marcus Vance",
      department: "Cardiology & Vascular Medicine",
      admissionDate: "02 Sep 2026",
      dischargeDate: "05 Sep 2026",
      diagnosis: "Essential Stage 1 Systemic Hypertension",
      symptoms: "Occasional morning headaches, mild dizziness, fatigue",
      allergies: "None Reported",
      medicines: "Tab Amlodipine 5mg OD (morning), Tab Atorvastatin 20mg OD (bedtime)",
      dischargeInstructions: "Adopt low-sodium DASH diet (<2g sodium/day). Avoid excess caffeine. Daily light 30-min walking. Keep BP log.",
      followUp: "Cardiology OPD review with 7-day BP log after 2 weeks. Emergency review if chest discomfort or visual disturbances occur.",
      importantNotes: "Discharge BP 128/82 mmHg, ECG sinus rhythm. Lipid panel ordered for follow-up review.",
      verifiedBy: "Dr. Marcus Vance, FACC, Consultant Cardiologist"
    }
  },
  {
    id: "PAT1003",
    password: "demo123",
    hospitalName: "St. Jude Teaching Hospital",
    name: "Amina Begum",
    age: 35,
    gender: "Female",
    phone: "+1 (555) 678-9012",
    email: "amina.begum@mediguid.health",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    disease: "Allergic Rhinitis",
    symptoms: "Sneezing paroxysms, clear rhinorrhea, itchy watery eyes",
    diagnosis: "Perennial Allergic Rhinitis & Seasonal Pollen Sensitivity",
    existingConditions: "Mild Childhood Asthma",
    allergies: "Sulfa Drugs (Mild Swelling & Itching)",
    medicines: "Cetirizine 10mg (1 tablet once daily at night)",
    notes: "Avoid direct dust and pollen exposure. Use saline nasal rinse twice daily.",
    assignedDoctor: "Dr. Sarah Jenkins",
    doctor: "Dr. Sarah Jenkins",
    department: "ENT / Allergy",
    bloodGroup: "B+",
    emergencyContact: "Farooq Begum (Brother) - +1 (555) 789-0123",
    admissionStatus: "Outpatient - Allergy Consultation",
    room: "OPD Suite 312",
    status: "Active",
    registeredDate: "05 Sep 2026",
    dob: "03 Nov 1989",
    dischargeSummary: {
      fileName: "Discharge_Summary_Amina_PAT1003.jpg",
      fileType: "image/jpeg",
      filePreview: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80",
      uploadDate: "05 Sep 2026, 04:30 PM",
      hospitalName: "St. Jude Teaching Hospital",
      doctorName: "Dr. Sarah Jenkins",
      department: "ENT / Allergy & Immunology",
      admissionDate: "04 Sep 2026",
      dischargeDate: "05 Sep 2026",
      diagnosis: "Perennial Allergic Rhinitis & Seasonal Pollen Sensitivity",
      symptoms: "Sneezing paroxysms, clear rhinorrhea, itchy watery eyes",
      allergies: "Sulfa Drugs (Mild Swelling & Itching)",
      medicines: "Tab Cetirizine 10mg OD at night x 10 days, Fluticasone Nasal Spray 1 puff each nostril OD",
      dischargeInstructions: "Avoid allergen exposure. Keep windows closed during high pollen counts. Clean bed linen in warm water weekly.",
      followUp: "ENT review after 3 weeks. Contact clinic if breathing difficulty or wheeze develops.",
      importantNotes: "Nasal endoscopy shows pale, boggy turbinates. Inhaler technique verified with patient.",
      verifiedBy: "Dr. Sarah Jenkins, MS (ENT), Allergy Specialist"
    }
  }
];

/**
 * Hospital Central Pharmacy Real-Time Stock Availability Database
 * Paracetamol = Available
 * Cetirizine = Available
 * Omeprazole = Not Available
 */
const HOSPITAL_MEDICINE_STOCK = {
  paracetamol: { available: true, location: "Shelf A-01 (Dispensing)", unit: "500mg Tablets" },
  ibuprofen: { available: true, location: "Shelf A-02", unit: "400mg Tablets" },
  aspirin: { available: true, location: "Shelf A-03", unit: "75mg Tablets" },
  mefenamic_acid: { available: true, location: "Shelf A-04", unit: "500mg Tablets" },
  cetirizine: { available: true, location: "Shelf B-01 (Allergy Bay)", unit: "10mg Tablets" },
  loratadine: { available: true, location: "Shelf B-02", unit: "10mg Tablets" },
  fexofenadine: { available: true, location: "Shelf B-03", unit: "120mg Tablets" },
  levocetirizine: { available: true, location: "Shelf B-04", unit: "5mg Tablets" },
  dextromethorphan: { available: true, location: "Shelf C-01", unit: "100ml Syrup" },
  guaifenesin: { available: true, location: "Shelf C-02", unit: "100ml Expectorant" },
  ambroxol: { available: false, location: "Out of Stock (Refill Pending)", unit: "30mg Tablets" },
  antacid: { available: true, location: "Shelf D-01", unit: "200ml Suspension" },
  omeprazole: { available: false, location: "Out of Stock (Hospital Refill Ordered)", unit: "20mg Capsules" },
  pantoprazole: { available: true, location: "Shelf D-02", unit: "40mg Tablets" },
  famotidine: { available: true, location: "Shelf D-03", unit: "20mg Tablets" },
  ors: { available: true, location: "Shelf E-01 (Rehydration)", unit: "Oral Sachet Packets" },
  zinc_supplement: { available: true, location: "Shelf E-02", unit: "20mg Tablets" },
  loperamide: { available: true, location: "Shelf E-03", unit: "2mg Capsules" },
  domperidone: { available: true, location: "Shelf F-01", unit: "10mg Tablets" },
  ondansetron: { available: false, location: "Out of Stock (Awaiting Shipment)", unit: "4mg Tablets" },
  vitamin_c: { available: true, location: "Shelf V-01", unit: "500mg Chewables" },
  vitamin_d3: { available: true, location: "Shelf V-02", unit: "60,000 IU Softgels" },
  iron_folic_acid: { available: true, location: "Shelf V-03", unit: "100mg Tablets" },
  calcium_vitamin_d: { available: true, location: "Shelf V-04", unit: "500mg + D3 Tablets" },
  vitamin_b12: { available: true, location: "Shelf V-05", unit: "1500mcg Tablets" },
  povidone_iodine: { available: true, location: "Shelf T-01 (Topical)", unit: "100ml Antiseptic" },
  calamine_lotion: { available: true, location: "Shelf T-02", unit: "100ml Topical Lotion" },
  clotrimazole_cream: { available: true, location: "Shelf T-03", unit: "15g Cream" },
  amoxicillin: { available: true, location: "Shelf Rx-01 (Antibiotics Bay)", unit: "500mg Capsules" },
  azithromycin: { available: true, location: "Shelf Rx-02 (Antibiotics Bay)", unit: "500mg Tablets" },
  metformin: { available: true, location: "Shelf Rx-03 (Endocrinology Bay)", unit: "850mg Tablets" },
  atorvastatin: { available: true, location: "Shelf Rx-04 (Cardiology Bay)", unit: "20mg Tablets" },
  ciprofloxacin: { available: false, location: "Out of Stock (Hospital Quota Exhausted)", unit: "500mg Tablets" }
};

/**
 * Retrieves persisted hospital patients or defaults
 */
function getStoredPatients() {
  if (typeof localStorage !== 'undefined') {
    const raw = localStorage.getItem('mediguid_hospital_patients_db');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error('Error parsing stored patients:', e);
      }
    }
  }
  return HOSPITAL_PATIENTS;
}

/**
 * Saves or updates a patient in the hospital patient database
 */
function saveStoredPatient(patient) {
  const list = getStoredPatients();
  const existingIdx = list.findIndex(p => p.id.toUpperCase() === patient.id.toUpperCase());
  if (existingIdx >= 0) {
    list[existingIdx] = { ...list[existingIdx], ...patient };
  } else {
    list.unshift(patient);
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('mediguid_hospital_patients_db', JSON.stringify(list));
  }
  return list;
}

/**
 * Deletes a patient from the hospital patient database
 */
function deleteStoredPatient(patientId) {
  let list = getStoredPatients();
  list = list.filter(p => p.id.toUpperCase() !== String(patientId).toUpperCase());
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('mediguid_hospital_patients_db', JSON.stringify(list));
  }
  return list;
}

/**
 * Retrieves live medicine stock database with local storage persistence
 */
function getStoredMedicineStock() {
  if (typeof localStorage !== 'undefined') {
    const raw = localStorage.getItem('mediguid_hospital_stock_db');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      } catch (e) {
        console.error('Error parsing stored stock:', e);
      }
    }
  }
  return HOSPITAL_MEDICINE_STOCK;
}

/**
 * Toggles availability of a medicine in the hospital central pharmacy
 */
function toggleStoredMedicineStock(medId) {
  const stock = { ...getStoredMedicineStock() };
  const cleanId = String(medId).toLowerCase().replace(/\b\d+\w*\b/g, '').replace(/[\s\-_0-9]/g, '');
  const key = Object.keys(stock).find(k => {
    const kClean = k.toLowerCase().replace(/[\s\-_0-9]/g, '');
    return kClean === cleanId || cleanId.includes(kClean) || kClean.includes(cleanId);
  });

  if (key && stock[key]) {
    stock[key] = {
      ...stock[key],
      available: !stock[key].available,
      location: !stock[key].available ? (stock[key].location.includes('Out of Stock') ? 'Shelf A-01 (Dispensing)' : stock[key].location) : 'Out of Stock (Hospital Refill Ordered)'
    };
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mediguid_hospital_stock_db', JSON.stringify(stock));
    }
    return stock[key].available;
  }
  return null;
}

/**
 * Returns clean stock availability badge and status
 * @param {string} medIdOrName
 * @returns {{ available: boolean, inStock: boolean, badgeHtml: string, statusText: string, location: string, unit: string }}
 */
function getMedicineStockStatus(medIdOrName) {
  if (!medIdOrName) {
    return {
      available: false,
      inStock: false,
      badgeHtml: '<span class="badge-stock-unavailable">🔴 Not Available</span>',
      statusText: 'Not Available',
      location: 'Central Pharmacy Dispensing Desk',
      unit: 'Standard Unit'
    };
  }

  const stockMap = typeof getStoredMedicineStock === 'function' ? getStoredMedicineStock() : HOSPITAL_MEDICINE_STOCK;
  const raw = String(medIdOrName).toLowerCase().trim();
  const clean = raw
    .replace(/\b\d+\s*(mg|ml|mcg|iu|g)\b/gi, '')
    .replace(/[\s\-_()0-9]/g, '');

  let foundKey = Object.keys(stockMap).find(k => {
    const kClean = k.toLowerCase().replace(/[\s\-_]/g, '');
    return kClean === clean || clean.includes(kClean) || kClean.includes(clean);
  });

  const entry = foundKey ? stockMap[foundKey] : null;
  const isAvailable = entry ? entry.available : false;

  return {
    available: isAvailable,
    inStock: isAvailable,
    badgeHtml: isAvailable 
      ? '<span class="badge-stock-available">🟢 Available</span>' 
      : '<span class="badge-stock-unavailable">🔴 Not Available</span>',
    statusText: isAvailable ? 'Available' : 'Not Available',
    location: entry ? entry.location : 'Central Pharmacy Dispensing Desk',
    unit: entry ? entry.unit : 'Standard Unit'
  };
}

// Browser & Node environment export support
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MEDIGUID_DATA,
    HOSPITAL_PATIENTS,
    HOSPITAL_MEDICINE_STOCK,
    getMedicineStockStatus,
    getStoredPatients,
    saveStoredPatient,
    deleteStoredPatient,
    getStoredMedicineStock,
    toggleStoredMedicineStock
  };
}


/**
 * MediGuid - Bilingual Local Medical Assistant & Voice-AI Chat Engine
 * Powered entirely by built-in medical knowledge base and Web Speech APIs.
 * Supports English & Tamil (தமிழ் + Tanglish). Zero external AI API dependency.
 */

class LocalMedicalChatEngine {
  constructor() {
    this.messagesArea = null;
    this.inputField = null;
    this.history = [];
    this.isProcessing = false;
    this.currentLang = 'en';
    this.currentlySpeakingBtn = null;
    this.lastIdentifiedMedicine = null;
  }

  init() {
    this.messagesArea = document.getElementById('chatMessagesArea');
    this.inputField = document.getElementById('chatInputField');

    // Connect Voice Assistant
    if (typeof voiceAssistant !== 'undefined') {
      voiceAssistant.onStateChange = (stateKey, messageText, isListening) => {
        this.updateMicUI(stateKey, messageText, isListening);
      };

      voiceAssistant.onResult = (transcript) => {
        if (this.inputField) {
          this.inputField.value = transcript;
        }
        this.sendMessage(transcript);
      };

      voiceAssistant.onError = (errorMsg) => {
        if (typeof showToast === 'function') {
          showToast(errorMsg, 'info');
        }
      };
    }

    // Populate initial prompt suggestions
    this.renderPromptPills();

    // Populate sample medicine picker if element exists
    if (typeof populateSampleMedicinePicker === 'function') {
      populateSampleMedicinePicker();
    }

    // Render initial welcome message if area is empty
    if (this.messagesArea && this.messagesArea.children.length === 0) {
      this.renderInitialWelcome();
    }
  }

  /**
   * Set Chat Language: 'en' (English) or 'ta' (தமிழ்)
   */
  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ta') return;
    this.currentLang = lang;

    // Stop active speech synthesis if running
    this.stopVoice();

    // Update Language Switcher Pills UI
    const enBtn = document.getElementById('chatLangEn');
    const taBtn = document.getElementById('chatLangTa');
    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
    if (taBtn) taBtn.classList.toggle('active', lang === 'ta');

    // Update Input Placeholder
    if (this.inputField) {
      this.inputField.placeholder = lang === 'ta'
        ? "மருந்துகள் அல்லது அறிகுறிகள் பற்றி கேளுங்கள்... (அல்லது மைக் அழுத்தவும்)"
        : "Ask about medicines, dosage, or symptoms... (or tap mic)";
    }

    // Update Mic Button Status Text
    const micStatus = document.getElementById('chatMicStatusText');
    if (micStatus && (!voiceAssistant || !voiceAssistant.isListening)) {
      micStatus.textContent = lang === 'ta' ? 'பேச தட்டவும்' : 'Tap to speak';
    }

    // Update Medical Disclaimer Text
    const disclaimerEl = document.getElementById('chatMedicalDisclaimer');
    if (disclaimerEl && typeof BILINGUAL_DISCLAIMER !== 'undefined') {
      disclaimerEl.textContent = BILINGUAL_DISCLAIMER[lang];
    }

    // Update Quick Prompt Suggestion Pills
    this.renderPromptPills();

    // Sync Guidance Catalog language
    if (typeof setGuidanceLanguage === 'function' && typeof currentCatalogLang !== 'undefined' && currentCatalogLang !== lang) {
      setGuidanceLanguage(lang);
    }

    if (typeof showToast === 'function') {
      showToast(lang === 'ta' ? 'தமிழ் மொழி தேர்ந்தெடுக்கப்பட்டது' : 'English language selected', 'info');
    }
  }

  /**
   * Render bilingual prompt suggestion pills
   */
  renderPromptPills() {
    const container = document.querySelector('.chat-prompt-pills');
    if (!container || typeof BILINGUAL_PROMPT_PILLS === 'undefined') return;

    const pills = BILINGUAL_PROMPT_PILLS[this.currentLang] || BILINGUAL_PROMPT_PILLS.en;
    container.innerHTML = pills.map(p => `
      <button class="prompt-pill" data-prompt="${p.query}">${p.label}</button>
    `).join('');

    // Attach click listeners to new pills
    container.querySelectorAll('.prompt-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.getAttribute('data-prompt') || pill.textContent;
        this.sendMessage(query);
      });
    });
  }

  /**
   * Render default initial bot message based on current language
   */
  renderInitialWelcome() {
    const patId = localStorage.getItem('currentPatientId') || 'PAT1001';
    const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
    const pat = patients.find(p => p.id === patId) || (patients.length > 0 ? patients[0] : null);
    const patName = pat ? pat.name : 'there';
    const patDisease = pat ? pat.disease : null;
    const patDoctor = pat ? (pat.assignedDoctor || pat.doctor) : null;

    let welcome = '';
    if (this.currentLang === 'ta') {
      welcome = patDisease
        ? `வணக்கம் ${patName}! நான் உங்கள் **MediGuid மருத்துவ உதவியாளர்**.\n\nமருத்துவமனை பதிவின்படி நீங்கள் **${patDisease}** சிகிச்சை பெற்று வருகிறீர்கள் (${patDoctor || 'மருத்துவர்'}).\n\nபொதுவான அறிகுறிகள், சுய பாதுகாப்பு வழிகாட்டுதல், உணவு மற்றும் இரண்டாம் நிலை ஆலோசனைகளை என்னிடம் கேட்கலாம்.\n\n*இன்று உங்களுக்கு எவ்வாறு உதவ வேண்டும்?*`
        : `வணக்கம் ${patName}! நான் உங்கள் **MediGuid மருத்துவ உதவியாளர்**.\n\nபொதுவான அறிகுறிகள், நோய்கள் மற்றும் மருந்துகள் பற்றிய சரிபார்க்கப்பட்ட மருத்துவ வழிகாட்டலை நான் வழங்க முடியும்.\n\n*இன்று உங்களுக்கு எவ்வாறு உதவ வேண்டும்?*`;
    } else {
      welcome = patDisease
        ? `Hello ${patName}! I am your **MediGuid AI Health Assistant**.\n\nI see your hospital admission record notes you are being treated for **${patDisease}** under the care of **${patDoctor || 'your attending physician'}**.\n\nYou can ask me for home care tips, food & hydration advice, lifestyle guidance, when to see a doctor, or secondary health advice. How can I help you today?`
        : `Hello ${patName}! I am your **MediGuid Local Medical Assistant**.\n\nI can provide verified health guidance on common symptoms, medical conditions, secondary advice, and medicine information from our built-in clinical database in English and தமிழ்.\n\n*How can I help you today?*`;
    }

    this.renderBotMessage(welcome, this.currentLang, false);
  }

  /**
   * Clear Chat History
   */
  clearChat() {
    this.stopVoice();
    if (!this.messagesArea) return;
    this.messagesArea.innerHTML = '';
    this.history = [];

    this.renderInitialWelcome();

    if (typeof showToast === 'function') {
      showToast(this.currentLang === 'ta' ? 'உரையாடல் அழிக்கப்பட்டது' : 'Chat history cleared', 'info');
    }
  }

  /**
   * Toggle Voice Microphone Recording
   */
  toggleVoiceInput() {
    if (typeof voiceAssistant !== 'undefined') {
      voiceAssistant.toggleListening(this.currentLang);
    } else {
      if (typeof showToast === 'function') {
        showToast('Voice Assistant module is loading...', 'info');
      }
    }
  }

  /**
   * Update Microphone button UI with state and animations
   */
  updateMicUI(stateKey, messageText, isListening) {
    const micBtn = document.getElementById('chatMicBtn');
    const micStatus = document.getElementById('chatMicStatusText');

    if (micStatus) {
      micStatus.textContent = messageText;
    }

    if (micBtn) {
      micBtn.classList.toggle('listening', isListening && stateKey === 'listening');
      micBtn.classList.toggle('processing', stateKey === 'processing');
      micBtn.classList.toggle('recognized', stateKey === 'recognized');
    }
  }

  /**
   * Send User Message
   */
  sendMessage(text) {
    if (this.isProcessing) return;

    const query = text !== undefined ? text.trim() : (this.inputField ? this.inputField.value.trim() : '');
    if (!query) return;

    if (this.inputField) {
      this.inputField.value = '';
    }

    // Stop active text-to-speech when new query is submitted
    this.stopVoice();

    // Record and render user message
    this.history.push({ role: 'user', content: query, timestamp: new Date() });
    this.renderUserMessage(query);

    // Show typing animation
    this.isProcessing = true;
    this.showTypingIndicator();

    // Natural responsive delay (400ms)
    setTimeout(() => {
      this.removeTypingIndicator();

      // Query medical knowledge base
      const queryResult = this.evaluateMedicalQuery(query);
      
      this.history.push({ 
        role: 'assistant', 
        content: queryResult.text, 
        lang: queryResult.lang,
        isEmergency: queryResult.isEmergency,
        medicineId: queryResult.medicineId,
        conditionId: queryResult.conditionId,
        timestamp: new Date() 
      });

      this.renderBotMessage(queryResult.text, queryResult.lang, queryResult.isEmergency, queryResult.medicineId, null, queryResult.conditionId);
      this.isProcessing = false;
    }, 400);
  }

  /**
   * Evaluate query via bilingual knowledge engine
   */
  evaluateMedicalQuery(rawQuery) {
    // 1. Check if user is asking a follow-up about the last identified medicine
    if (this.lastIdentifiedMedicine) {
      const followup = this.checkIdentifiedMedicineFollowup(rawQuery, this.lastIdentifiedMedicine);
      if (followup) {
        return followup;
      }
    }

    if (typeof matchBilingualMedicalQuery === 'function') {
      return matchBilingualMedicalQuery(rawQuery, this.currentLang);
    }

    // Safe fallback if function is undefined
    return {
      text: typeof UNKNOWN_QUESTION_RESPONSE !== 'undefined'
        ? UNKNOWN_QUESTION_RESPONSE
        : "I don't have reliable information for that question in my current medical knowledge base. Please consult a qualified healthcare professional.",
      lang: this.currentLang,
      isEmergency: false
    };
  }

  /**
   * Handle contextual follow-up questions referencing last scanned/identified medicine
   */
  checkIdentifiedMedicineFollowup(rawQuery, med) {
    const q = rawQuery.toLowerCase().trim();
    const isTa = this.currentLang === 'ta';
    const name = isTa ? med.name.ta : med.name.en;

    // Follow-up regarding uses/purpose
    if (
      q.includes('used for') || q.includes('use of') || q.includes('what is this') ||
      q.includes('what is it') || q.includes('purpose') || q.includes('indications') ||
      q.includes('எதற்கு') || q.includes('பயன்') || q.includes('நோக்கம்')
    ) {
      const uses = isTa ? med.uses.ta : med.uses.en;
      const purpose = isTa ? med.purpose.ta : med.purpose.en;
      return {
        text: `### 🎯 ${name} — ${isTa ? 'பயன்பாடுகள் & நோக்கம்' : 'Uses & Purpose'}\n\n**${purpose}**\n\n**${isTa ? 'பொதுவான அறிகுறிகள் & பயன்பாடுகள்' : 'Common Uses & Indications'}:**\n• ${uses.join('\n• ')}\n\n⚠️ *${isTa ? 'மருத்துவர் அல்லது மருந்தாளுநர் வழிகாட்டுதலின்படி மட்டுமே உட்கொள்ளவும்.' : 'Always take in accordance with package instructions or as advised by your doctor or pharmacist.'}*`,
        medicineId: med.id,
        lang: this.currentLang,
        isEmergency: false
      };
    }

    // Follow-up regarding side effects
    if (
      q.includes('side effect') || q.includes('side-effect') || q.includes('adverse') ||
      q.includes('பக்க விளைவு') || q.includes('தீங்கு')
    ) {
      const se = isTa ? med.sideEffects.ta : med.sideEffects.en;
      return {
        text: `### ⚠️ ${name} — ${isTa ? 'பொதுவான பக்க விளைவுகள்' : 'Common Side Effects'}\n\n• ${se.join('\n• ')}\n\n*${isTa ? 'தீவிர ஒவ்வாமை அல்லது பக்க விளைவுகள் ஏற்பட்டால் உடனடியாக மருத்துவரை அணுகவும்.' : 'If severe reactions such as breathing difficulty, facial swelling, or severe dizziness occur, seek emergency care immediately.'}*`,
        medicineId: med.id,
        lang: this.currentLang,
        isEmergency: false
      };
    }

    // Follow-up regarding precautions / warnings
    if (
      q.includes('precaution') || q.includes('warning') || q.includes('safety') ||
      q.includes('can i take') || q.includes('who should') || q.includes('முன்னெச்சரிக்கை') ||
      q.includes('பாதுகாப்பு') || q.includes('எடுக்கலாமா')
    ) {
      const pr = isTa ? med.precautions.ta : med.precautions.en;
      const who = isTa ? med.whoShouldConsult.ta : med.whoShouldConsult.en;
      return {
        text: `### 🛡️ ${name} — ${isTa ? 'முக்கிய முன்னெச்சரிக்கைகள்' : 'Important Precautions'}\n\n• ${pr.join('\n• ')}\n\n**${isTa ? 'யார் மருத்துவரை அணுக வேண்டும்?' : 'Who Should Consult a Doctor First'}:**\n${who}`,
        medicineId: med.id,
        lang: this.currentLang,
        isEmergency: false
      };
    }

    // Follow-up regarding mechanism of action
    if (
      q.includes('how does it work') || q.includes('how it works') || q.includes('mechanism') ||
      q.includes('செயல்படும் விதம்') || q.includes('வேலை செய்கிறது')
    ) {
      return {
        text: `### ⚡ ${name} — ${isTa ? 'செயல்படும் விதம்' : 'How It Works'}\n\n${isTa ? med.howItWorks.ta : med.howItWorks.en}`,
        medicineId: med.id,
        lang: this.currentLang,
        isEmergency: false
      };
    }

    // Follow-up regarding storage
    if (
      q.includes('storage') || q.includes('store') || q.includes('சேமிப்பு')
    ) {
      return {
        text: `### 📦 ${name} — ${isTa ? 'சேமிப்பு வழிகாட்டுதல்' : 'Storage Guidelines'}\n\n${isTa ? med.storage.ta : med.storage.en}`,
        medicineId: med.id,
        lang: this.currentLang,
        isEmergency: false
      };
    }

    return null;
  }

  /**
   * Render User Message Bubble
   */
  renderUserMessage(text) {
    if (!this.messagesArea) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'chat-bubble chat-bubble-user';
    msgEl.textContent = text;
    this.messagesArea.appendChild(msgEl);
    this.scrollToBottom();
  }

  /**
   * Render Assistant Message Bubble with Listen / Stop Audio Actions
   */
  renderBotMessage(markdown, lang = 'en', isEmergency = false, medicineId = null, extraActions = null, conditionId = null) {
    if (!this.messagesArea) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'chat-bubble chat-bubble-bot';

    // Emergency highlight styling if emergency detected
    if (isEmergency || markdown.includes('⚠️ **MEDICAL EMERGENCY') || markdown.includes('🚨 **MEDICAL EMERGENCY') || markdown.includes('⚠️ **மருத்துவ அவசரநிலை') || markdown.includes('🚨 **மருத்துவ அவசரநிலை')) {
      msgEl.style.border = '2px solid var(--color-emergency)';
      msgEl.style.background = 'var(--color-emergency-bg)';
      msgEl.style.color = '#7F1D1D';
    }

    // Convert markdown into structured HTML
    let formatted = markdown
      .replace(/### (.*)/g, '<h4 style="color:var(--dark-teal);margin-bottom:6px;font-size:0.98rem;font-weight:700;">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^• (.*)$/gm, '<li style="margin-bottom:3px;">$1</li>')
      .replace(/^[0-9]+\. (.*)$/gm, '<li style="margin-bottom:3px;">$1</li>')
      .replace(/\n\n/g, '<div style="height:8px;"></div>');

    if (formatted.includes('<li')) {
      formatted = formatted.replace(/(<li.*<\/li>)/gs, '<ul style="padding-left:18px;margin:6px 0;">$1</ul>');
    }

    // Expandable [ More Details ] action button if condition has comprehensive details
    let moreDetailsHtml = '';
    if (conditionId) {
      const isTa = lang === 'ta';
      const btnLabel = isTa ? '📋 கூடுதல் விவரங்கள் (More Details)' : '📋 More Details';
      moreDetailsHtml = `
        <div class="chat-more-details-row">
          <button type="button" class="chat-more-details-btn" onclick="aiChatEngine.showFullConditionDetails('${conditionId}', '${lang}')">
            <span data-icon="file-text" data-icon-size="14"></span>
            <span>${btnLabel}</span>
          </button>
        </div>
      `;
    }

    // Embed Visual Medicine Card if medicine was identified
    let medCardHtml = '';
    let medObj = null;
    if (medicineId && typeof getMedicineById === 'function') {
      medObj = getMedicineById(medicineId);
    }

    if (medObj) {
      const isTa = lang === 'ta';
      const mName = isTa ? medObj.name.ta : medObj.name.en;
      const cName = isTa ? medObj.category.ta : medObj.category.en;
      const pText = isTa ? medObj.purpose.ta : medObj.purpose.en;
      const vLabel = isTa ? 'விவரங்களைக் காண்க' : 'View Details';
      const stockInfo = typeof getMedicineStockStatus === 'function' ? getMedicineStockStatus(medObj.id) : null;
      const stockBadge = stockInfo ? stockInfo.badgeHtml : '';
      medCardHtml = `
        <div class="chat-embedded-med-card">
          <img src="${medObj.image}" alt="${mName}" class="chat-med-thumb" onerror="this.onerror=null;this.src='${medObj.fallbackSvg}';"/>
          <div class="chat-med-content">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">
              <span class="badge-pill badge-mint" style="font-size:0.7rem;padding:2px 8px;">${cName}</span>
              ${stockBadge}
            </div>
            <h5>${mName}</h5>
            <p>${pText}</p>
            <button class="btn-pill btn-pill-secondary btn-pill-xs" onclick="openMedicineDetails('${medObj.id}')" style="font-size:0.75rem;padding:4px 12px;margin-top:2px;">
              <span data-icon="activity" data-icon-size="12"></span> ${vLabel}
            </button>
          </div>
        </div>
      `;
    }

    // Identification / Follow-up Action Prompt Chips
    let actionsHtml = '';
    let actionsToRender = extraActions;
    if (!actionsToRender && medObj) {
      const isTa = lang === 'ta';
      const mName = isTa ? medObj.name.ta : medObj.name.en;
      actionsToRender = [
        { label: isTa ? 'இதன் பயன்கள்?' : 'What is this used for?', query: isTa ? `${mName} பயன்கள் என்ன?` : `What is ${mName} used for?` },
        { label: isTa ? 'முன்னெச்சரிக்கைகள்' : 'Precautions & Warnings', query: isTa ? `${mName} முன்னெச்சரிக்கைகள் என்ன?` : `What are the precautions for ${mName}?` },
        { label: isTa ? 'பக்க விளைவுகள்' : 'Side Effects', query: isTa ? `${mName} பக்க விளைவுகள் என்ன?` : `What are the side effects of ${mName}?` },
        { label: isTa ? 'செயல்படும் விதம்' : 'How does it work?', query: isTa ? `${mName} செயல்படும் விதம்?` : `How does ${mName} work?` }
      ];
    }

    if (actionsToRender && actionsToRender.length > 0) {
      actionsHtml = `
        <div class="chat-prompt-actions-row">
          ${actionsToRender.map(act => {
            if (act.query) {
              const qEscaped = act.query.replace(/'/g, "\\'");
              return `<button class="chat-prompt-action-btn" onclick="handleScannerActionPrompt('${qEscaped}')">${act.label}</button>`;
            } else if (act.action === 'camera') {
              return `<button class="chat-prompt-action-btn" onclick="triggerCameraCapture()">${act.label}</button>`;
            } else if (act.action === 'gallery') {
              return `<button class="chat-prompt-action-btn" onclick="triggerGalleryUpload()">${act.label}</button>`;
            } else if (act.action === 'samples') {
              return `<button class="chat-prompt-action-btn" onclick="openSampleMedicinePicker()">${act.label}</button>`;
            } else if (act.action === 'catalog') {
              return `<button class="chat-prompt-action-btn" onclick="navigateTo('guidance')">${act.label}</button>`;
            } else if (act.action === 'select_candidate' && act.medId) {
              return `<button class="chat-prompt-action-btn" onclick="selectSampleMedicine('${act.medId}')">${act.label}</button>`;
            }
            return '';
          }).join('')}
        </div>
      `;
    }

    // Action bar with [ 🔊 Listen ] and [ ⏹ Stop ]
    const listenLabel = lang === 'ta' ? 'கேளுங்கள்' : 'Listen';
    const stopLabel = lang === 'ta' ? 'நிறுத்து' : 'Stop';

    const ttsActionBar = `
      <div class="message-tts-actions">
        <button class="tts-btn tts-listen-btn" title="Listen to response" data-lang="${lang}">
          <span data-icon="volume" data-icon-size="14"></span>
          <span class="tts-label">${listenLabel}</span>
        </button>
        <button class="tts-btn tts-stop-btn" title="Stop audio">
          <span data-icon="stop" data-icon-size="14"></span>
          <span>${stopLabel}</span>
        </button>
      </div>
    `;

    msgEl.innerHTML = `
      <div class="message-body">${formatted}</div>
      ${moreDetailsHtml}
      ${medCardHtml}
      ${actionsHtml}
      ${ttsActionBar}
    `;

    // Hook listen and stop buttons
    const listenBtn = msgEl.querySelector('.tts-listen-btn');
    const stopBtn = msgEl.querySelector('.tts-stop-btn');

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        this.speakMessage(listenBtn, markdown, lang);
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        this.stopVoice();
      });
    }

    this.messagesArea.appendChild(msgEl);

    // Render SVGs inside the new message bubble
    if (typeof renderAllIcons === 'function') {
      renderAllIcons(msgEl);
    }

    this.scrollToBottom();
  }

  /**
   * Speak a specific message aloud via SpeechSynthesis
   */
  speakMessage(btn, markdown, lang = 'en') {
    if (typeof voiceAssistant === 'undefined') return;

    // If currently speaking this same message, stop it
    if (this.currentlySpeakingBtn === btn && voiceAssistant.isSpeaking) {
      this.stopVoice();
      return;
    }

    // Reset previous button if any
    this.resetSpeakingBtn();

    this.currentlySpeakingBtn = btn;
    btn.classList.add('speaking');
    const labelSpan = btn.querySelector('.tts-label');
    const originalLabel = labelSpan ? labelSpan.textContent : 'Listen';
    if (labelSpan) {
      labelSpan.textContent = lang === 'ta' ? 'ஒலிக்கிறது...' : 'Speaking...';
    }

    voiceAssistant.speak(
      markdown,
      lang,
      () => {
        // onStart
      },
      () => {
        // onEnd
        btn.classList.remove('speaking');
        if (labelSpan) {
          labelSpan.textContent = originalLabel;
        }
        if (this.currentlySpeakingBtn === btn) {
          this.currentlySpeakingBtn = null;
        }
      }
    );
  }

  /**
   * Stop active speech synthesis and reset button states
   */
  stopVoice() {
    if (typeof voiceAssistant !== 'undefined') {
      voiceAssistant.stopSpeaking();
    }
    this.resetSpeakingBtn();
  }

  resetSpeakingBtn() {
    if (this.currentlySpeakingBtn) {
      this.currentlySpeakingBtn.classList.remove('speaking');
      const labelSpan = this.currentlySpeakingBtn.querySelector('.tts-label');
      if (labelSpan) {
        const lang = this.currentlySpeakingBtn.getAttribute('data-lang') || 'en';
        labelSpan.textContent = lang === 'ta' ? 'கேளுங்கள்' : 'Listen';
      }
      this.currentlySpeakingBtn = null;
    }
  }

  showTypingIndicator() {
    if (!this.messagesArea) return;
    const indicator = document.createElement('div');
    indicator.id = 'chatTypingIndicator';
    indicator.className = 'chat-bubble chat-bubble-bot';
    indicator.style.display = 'inline-flex';
    indicator.style.alignItems = 'center';
    indicator.style.gap = '6px';
    indicator.style.padding = '10px 16px';

    const searchMsg = this.currentLang === 'ta'
      ? 'மருத்துவ தரவுத்தளத்தில் தேடுகிறது...'
      : 'Searching medical knowledge base...';

    indicator.innerHTML = `
      <span style="font-size:0.8rem;color:var(--text-secondary);margin-right:4px;">${searchMsg}</span>
      <span style="display:inline-block;width:6px;height:6px;background:var(--primary-teal);border-radius:50%;animation:typingBounce 1.2s infinite ease-in-out 0s;"></span>
      <span style="display:inline-block;width:6px;height:6px;background:var(--primary-teal);border-radius:50%;animation:typingBounce 1.2s infinite ease-in-out 0.2s;"></span>
      <span style="display:inline-block;width:6px;height:6px;background:var(--primary-teal);border-radius:50%;animation:typingBounce 1.2s infinite ease-in-out 0.4s;"></span>
      <style>
        @keyframes typingBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      </style>
    `;
    this.messagesArea.appendChild(indicator);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const el = document.getElementById('chatTypingIndicator');
    if (el) el.remove();
  }

  showFullConditionDetails(condId, lang = this.currentLang) {
    if (typeof getComprehensiveClinicalDetails === 'function') {
      const details = getComprehensiveClinicalDetails(condId, lang);
      if (details) {
        this.history.push({
          role: 'assistant',
          content: details.text,
          lang: details.lang,
          isEmergency: details.isEmergency,
          medicineId: details.medicineId,
          timestamp: new Date()
        });
        this.renderBotMessage(details.text, details.lang, details.isEmergency, details.medicineId);
        return;
      }
    }
  }

  scrollToBottom() {
    if (this.messagesArea) {
      this.messagesArea.scrollTop = this.messagesArea.scrollHeight;
    }
  }
}

// Global instance
const aiChatEngine = new LocalMedicalChatEngine();

// --------------------------------------------------------------------------
// MEDICINE PHOTO IDENTIFICATION & SCANNER ENGINE
// --------------------------------------------------------------------------

function toggleChatPlusMenu(forceOpen = null) {
  const menu = document.getElementById('chatPlusMenu');
  if (!menu) return;
  const shouldOpen = forceOpen !== null ? forceOpen : (menu.style.display === 'none' || !menu.style.display);
  menu.style.display = shouldOpen ? 'flex' : 'none';
}

function triggerCameraCapture() {
  toggleChatPlusMenu(false);
  const input = document.getElementById('medPhotoCameraInput');
  if (input) input.click();
}

function triggerGalleryUpload() {
  toggleChatPlusMenu(false);
  const input = document.getElementById('medPhotoGalleryInput');
  if (input) input.click();
}

function openMedicineScanner(source = 'chat') {
  if (typeof navigateTo === 'function') {
    navigateTo('chat');
  }
  setTimeout(() => {
    toggleChatPlusMenu(true);
    if (typeof showToast === 'function') {
      showToast('Select Camera, Gallery, or Samples to identify medicine', 'info');
    }
  }, 100);
}

function removeChatAttachedImage() {
  const previewBar = document.getElementById('chatImagePreviewBar');
  const previewThumb = document.getElementById('chatImagePreviewThumb');
  const scanPulse = document.getElementById('chatScannerPulse');
  if (previewBar) previewBar.style.display = 'none';
  if (previewThumb) previewThumb.src = '';
  if (scanPulse) scanPulse.style.display = 'none';
}

const SAMPLE_MEDICINE_ITEMS = [
  {
    id: "paracetamol",
    name: "Paracetamol 650mg",
    subtitle: "Dolo-650 / Calpol",
    category: "Fever & Pain",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin 500mg",
    subtitle: "Augmentin / Mox",
    category: "Antibiotic",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cetirizine",
    name: "Cetirizine 10mg",
    subtitle: "Zyrtec / Cetzine",
    category: "Allergy",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen 400mg",
    subtitle: "Brufen / Advil",
    category: "Pain Relief",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole 40mg",
    subtitle: "Pan-40 / Pan-D",
    category: "Digestive Care",
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "ors",
    name: "Oral Rehydration Salts",
    subtitle: "ORS Sachet",
    category: "Hydration",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "azithromycin",
    name: "Azithromycin 500mg",
    subtitle: "Azee 500 / Azithral",
    category: "Antibiotic",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "metformin",
    name: "Metformin 500mg",
    subtitle: "Glycomet / Glucophage",
    category: "Chronic Care",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "unclear",
    name: "Unclear / Blurry Photo",
    subtitle: "Test Fallback Mode",
    category: "Simulation Test",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&auto=format&fit=crop&q=80"
  }
];

function populateSampleMedicinePicker() {
  const container = document.getElementById('samplePickerList');
  if (!container) return;
  container.innerHTML = SAMPLE_MEDICINE_ITEMS.map(item => `
    <div class="sample-med-item" onclick="selectSampleMedicine('${item.id}')">
      <img src="${item.image}" alt="${item.name}" class="sample-med-thumb" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=160'"/>
      <div class="sample-med-name">${item.name}</div>
      <div style="font-size: 0.72rem; color: var(--text-muted);">${item.subtitle}</div>
      <span class="badge-pill badge-mint sample-med-badge">${item.category}</span>
    </div>
  `).join('');
}

function openSampleMedicinePicker() {
  toggleChatPlusMenu(false);
  populateSampleMedicinePicker();
  const modal = document.getElementById('sampleMedicinePickerModal');
  if (modal) modal.classList.add('open');
}

function closeSampleMedicinePicker() {
  const modal = document.getElementById('sampleMedicinePickerModal');
  if (modal) modal.classList.remove('open');
}

function selectSampleMedicine(sampleId) {
  closeSampleMedicinePicker();
  const sample = SAMPLE_MEDICINE_ITEMS.find(s => s.id === sampleId);
  const sampleName = sample ? sample.name : sampleId;
  const sampleImg = sample ? sample.image : '';

  analyzeMedicinePhoto({ sampleId, name: sampleName, image: sampleImg }, 'sample');
}

function handleMedicineImageSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const imageUrl = URL.createObjectURL(file);
  analyzeMedicinePhoto({ file, filename: file.name, image: imageUrl }, 'file');

  // Reset file input value so selecting the same file triggers onchange
  event.target.value = '';
}

function handleScannerActionPrompt(query) {
  if (typeof aiChatEngine !== 'undefined' && aiChatEngine.sendMessage) {
    aiChatEngine.sendMessage(query);
  } else if (typeof sendChatMessage === 'function') {
    sendChatMessage(query);
  }
}

function analyzeMedicinePhoto(photoData, type) {
  const previewBar = document.getElementById('chatImagePreviewBar');
  const previewThumb = document.getElementById('chatImagePreviewThumb');
  const previewName = document.getElementById('chatImagePreviewName');
  const previewStatus = document.getElementById('chatImagePreviewStatus');
  const scanPulse = document.getElementById('chatScannerPulse');

  const displayName = photoData.name || photoData.filename || 'medicine_photo.jpg';
  const imgUrl = photoData.image || '';

  // 1. Show preview bar with scanning line
  if (previewBar) {
    previewBar.style.display = 'flex';
  }
  if (previewThumb) {
    previewThumb.src = imgUrl;
  }
  if (previewName) {
    previewName.textContent = displayName;
  }
  if (previewStatus) {
    previewStatus.textContent = 'Scanning & Analyzing blister pack...';
  }
  if (scanPulse) {
    scanPulse.style.display = 'block';
  }

  // 2. Render user chat bubble with camera photo notice
  const userText = type === 'sample'
    ? `📷 [Scanned Sample Photo: ${displayName}]`
    : `📷 [Attached Medicine Photo: ${displayName}]`;

  if (typeof aiChatEngine !== 'undefined') {
    aiChatEngine.renderUserMessage(userText);
    aiChatEngine.showTypingIndicator();
  }

  // 3. Realistic scanning duration (~750ms)
  setTimeout(() => {
    if (typeof aiChatEngine !== 'undefined') {
      aiChatEngine.removeTypingIndicator();
    }
    removeChatAttachedImage();

    // Match medicine
    const matchResult = matchMedicineFromScanner(photoData);
    const lang = (typeof aiChatEngine !== 'undefined') ? aiChatEngine.currentLang : 'en';

    if (matchResult.status === 'exact') {
      const med = matchResult.medicine;
      if (typeof aiChatEngine !== 'undefined') {
        aiChatEngine.lastIdentifiedMedicine = med;
      }
      if (typeof lastIdentifiedMedicine !== 'undefined') {
        lastIdentifiedMedicine = med;
      }

      const response = buildIdentifiedMedicineResponse(med, lang);
      if (typeof aiChatEngine !== 'undefined') {
        aiChatEngine.history.push({
          role: 'assistant',
          content: response.text,
          lang: lang,
          isEmergency: false,
          medicineId: med.id,
          timestamp: new Date()
        });
        aiChatEngine.renderBotMessage(response.text, lang, false, med.id, response.actions);
      }
    } else if (matchResult.status === 'multiple') {
      const response = buildMultipleCandidatesResponse(matchResult.candidates, matchResult.query, lang);
      if (typeof aiChatEngine !== 'undefined') {
        aiChatEngine.history.push({
          role: 'assistant',
          content: response.text,
          lang: lang,
          isEmergency: false,
          timestamp: new Date()
        });
        aiChatEngine.renderBotMessage(response.text, lang, false, null, response.actions);
      }
    } else {
      // Unclear fallback
      const response = buildUnclearPhotoFallbackResponse(lang);
      if (typeof aiChatEngine !== 'undefined') {
        aiChatEngine.history.push({
          role: 'assistant',
          content: response.text,
          lang: lang,
          isEmergency: false,
          timestamp: new Date()
        });
        aiChatEngine.renderBotMessage(response.text, lang, false, null, response.actions);
      }
    }
  }, 750);
}

function matchMedicineFromScanner({ filename, sampleId, textHint }) {
  if (sampleId) {
    if (sampleId === 'unclear') {
      return { status: 'unclear', query: 'unclear' };
    }
    if (typeof getMedicineById === 'function') {
      const med = getMedicineById(sampleId);
      if (med) return { status: 'exact', medicine: med, confidence: 98 };
    }
  }

  let query = (filename || textHint || '').toLowerCase();
  query = query.replace(/\.(jpe?g|png|webp|gif|bmp)$/i, '');
  const cleanTokens = query.replace(/[_\-.]+/g, ' ').trim();

  if (!cleanTokens || cleanTokens.length < 2) {
    return { status: 'unclear', query };
  }

  if (cleanTokens.includes('unclear') || cleanTokens.includes('blur') || cleanTokens.includes('unknown')) {
    return { status: 'unclear', query: cleanTokens };
  }

  if (typeof MEDICAL_MEDICINES_CATALOG === 'undefined') {
    return { status: 'unclear', query: cleanTokens };
  }

  // 1. Check exact ID match
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    if (cleanTokens.includes(med.id.replace(/_/g, ' '))) {
      return { status: 'exact', medicine: med, confidence: 96 };
    }
  }

  // 2. Check English / Tamil name
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    const enName = med.name.en.toLowerCase();
    const taName = med.name.ta ? med.name.ta.toLowerCase() : '';
    if (cleanTokens.includes(enName) || enName.includes(cleanTokens)) {
      return { status: 'exact', medicine: med, confidence: 95 };
    }
    if (taName && cleanTokens.includes(taName)) {
      return { status: 'exact', medicine: med, confidence: 95 };
    }
  }

  // 3. Check generic name / active salts
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    const gen = med.genericName.toLowerCase();
    if (cleanTokens.includes(gen) || gen.includes(cleanTokens)) {
      return { status: 'exact', medicine: med, confidence: 94 };
    }
    const salts = gen.split(/[\/,+]/).map(s => s.trim().toLowerCase());
    for (const s of salts) {
      if (s.length > 3 && (cleanTokens.includes(s) || s.includes(cleanTokens))) {
        return { status: 'exact', medicine: med, confidence: 92 };
      }
    }
  }

  // 4. Check brandExamples
  const matchedMeds = [];
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    const brands = (med.brandExamples || []).map(b => b.toLowerCase());
    for (const b of brands) {
      const bClean = b.replace(/[^a-z0-9]/g, ' ').trim();
      const bTokens = bClean.split(/\s+/);
      for (const bt of bTokens) {
        if (bt.length >= 3 && cleanTokens.includes(bt)) {
          if (!matchedMeds.find(m => m.id === med.id)) {
            matchedMeds.push(med);
          }
        }
      }
      if (cleanTokens.includes(bClean) || bClean.includes(cleanTokens)) {
        if (!matchedMeds.find(m => m.id === med.id)) {
          matchedMeds.push(med);
        }
      }
    }
  }

  if (matchedMeds.length === 1) {
    return { status: 'exact', medicine: matchedMeds[0], confidence: 92 };
  } else if (matchedMeds.length > 1) {
    return { status: 'multiple', candidates: matchedMeds, query: cleanTokens };
  }

  // 5. Check conditions
  const condMatches = [];
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    const conds = (med.conditions || []).map(c => c.toLowerCase());
    for (const c of conds) {
      if (cleanTokens.includes(c) || c.includes(cleanTokens)) {
        if (!condMatches.find(m => m.id === med.id)) {
          condMatches.push(med);
        }
      }
    }
  }

  if (condMatches.length === 1) {
    return { status: 'exact', medicine: condMatches[0], confidence: 88 };
  } else if (condMatches.length > 1) {
    return { status: 'multiple', candidates: condMatches, query: cleanTokens };
  }

  // 6. Category fallback
  const catMatches = [];
  for (const med of MEDICAL_MEDICINES_CATALOG) {
    const catEn = med.category.en.toLowerCase();
    const catId = med.category.id.toLowerCase();
    if (cleanTokens.includes(catEn) || cleanTokens.includes(catId) || (catEn.includes(cleanTokens) && cleanTokens.length >= 4)) {
      if (!catMatches.find(m => m.id === med.id)) {
        catMatches.push(med);
      }
    }
  }

  if (catMatches.length === 1) {
    return { status: 'exact', medicine: catMatches[0], confidence: 85 };
  } else if (catMatches.length > 1) {
    return { status: 'multiple', candidates: catMatches, query: cleanTokens };
  }

  return { status: 'unclear', query: cleanTokens };
}

function buildIdentifiedMedicineResponse(med, lang = 'en') {
  const isTa = lang === 'ta';
  const name = isTa ? med.name.ta : med.name.en;
  const category = isTa ? med.category.ta : med.category.en;
  const purpose = isTa ? med.purpose.ta : med.purpose.en;
  const precautions = (isTa ? med.precautions.ta : med.precautions.en).slice(0, 2);
  const brands = (med.brandExamples || []).join(', ');
  const rxNotice = med.prescriptionRequired
    ? (isTa ? '⚠️ மருத்துவரின் பரிந்துரைச் சீட்டு தேவை (Rx)' : '⚠️ Prescription Required (Rx)')
    : (isTa ? '✅ மருத்துவர் பரிந்துரை தேவையில்லை (OTC)' : '✅ Over-the-Counter (OTC)');

  const stockInfo = typeof getMedicineStockStatus === 'function'
    ? getMedicineStockStatus(med.id)
    : { available: true, badgeText: 'Available', badgeHtml: '<span class="badge-stock-available">🟢 Available</span>', location: 'Rack A-1' };
  const stockNoticeTa = stockInfo.available
    ? '🟢 **மருத்துவமனை மருந்தக இருப்பு:** உள்ளது (Available - ' + stockInfo.location + ')'
    : '🔴 **மருத்துவமனை மருந்தக இருப்பு:** தற்போது கையிருப்பில் இல்லை (Not Available)';
  const stockNoticeEn = stockInfo.available
    ? `🟢 **Hospital Pharmacy Stock:** Available (${stockInfo.location})`
    : '🔴 **Hospital Pharmacy Stock:** Currently Out of Stock (Not Available)';

  if (isTa) {
    return {
      text: `🔍 **மருந்து அடையாளம் காணப்பட்டது: ${name}**\n*ஒப்பீட்டுப் பொருத்தம்: 98% துல்லியம்*\n\n### 🏥 மருத்துவமனை இருப்பு நிலை\n${stockNoticeTa}\n\n### 📋 சுருக்கம் & சேர்மம்\n• **செயலில் உள்ள மூலப்பொருள்:** ${med.genericName}\n• **வகை:** ${category}\n• **பிரபல வர்த்தகப் பெயர்கள்:** ${brands}\n• **வகைப்பாடு:** ${rxNotice}\n\n### 🎯 முதன்மைப் பயன்பாடு\n${purpose}\n\n### 🛡️ முக்கிய முன்னெச்சரிக்கைகள்\n• ${precautions.join('\n• ')}\n\n⚠️ **முக்கிய பாதுகாப்பு அறிவிப்பு:**\n*புகைப்பட அடையாளம் காணல் கல்வி நோக்கங்களுக்காக மட்டுமே. மருந்தை உட்கொள்ளும் முன் அதன் அட்டை லேபிள் மற்றும் காலாவதி தேதியை மருந்தாளுநர் அல்லது மருத்துவரிடம் உறுதிப்படுத்தவும்.*`,
      actions: [
        { label: 'இதன் பயன்கள் என்ன?', query: `${name} எதற்குப் பயன்படுகிறது?` },
        { label: 'முன்னெச்சரிக்கைகள்', query: `${name} முன்னெச்சரிக்கைகள் என்ன?` },
        { label: 'பக்க விளைவுகள்', query: `${name} பக்க விளைவுகள் என்ன?` },
        { label: 'செயல்படும் விதம்', query: `${name} எவ்வாறு செயல்படுகிறது?` }
      ]
    };
  }

  return {
    text: `🔍 **Medicine Identified: ${name}**\n*Visual Recognition Match: 98% Confidence*\n\n### 🏥 Hospital Pharmacy Stock Status\n${stockNoticeEn}\n\n### 📋 Overview & Composition\n• **Active Ingredient:** ${med.genericName}\n• **Category:** ${category}\n• **Common Brand Names:** ${brands}\n• **Classification:** ${rxNotice}\n\n### 🎯 Primary Use\n${purpose}\n\n### 🛡️ Critical Precautions\n• ${precautions.join('\n• ')}\n\n⚠️ **Important Safety Notice:**\n*Visual identification is an educational aid. Never consume medicines based solely on automated image recognition. Always verify the physical imprint, packaging label, and expiry date with a licensed pharmacist or doctor.*`,
    actions: [
      { label: 'What is this used for?', query: `What is ${name} used for?` },
      { label: 'Precautions & Warnings', query: `What are the precautions for ${name}?` },
      { label: 'Common Side Effects', query: `What are the side effects of ${name}?` },
      { label: 'How does it work?', query: `How does ${name} work?` }
    ]
  };
}

function buildMultipleCandidatesResponse(candidates, query, lang = 'en') {
  const isTa = lang === 'ta';
  const header = isTa
    ? `🔍 **பல பொருந்தக்கூடிய மருந்துகள் கண்டறியப்பட்டன**\n\n'**${query}**' தொடர்பாக பல மருந்துகள் உள்ளன. உங்கள் குறிப்பிட்ட மருந்தை கீழே தேர்ந்தெடுக்கவும்:`
    : `🔍 **Multiple Formulations Detected**\n\nWe detected multiple candidate matches for '**${query}**'. Please select your specific formulation below:`;

  const actions = candidates.slice(0, 5).map(c => ({
    label: isTa ? `${c.name.ta} (${c.genericName})` : `${c.name.en} (${c.genericName})`,
    action: 'select_candidate',
    medId: c.id
  }));

  return {
    text: header,
    actions: actions
  };
}

function buildUnclearPhotoFallbackResponse(lang = 'en') {
  const isTa = lang === 'ta';
  if (isTa) {
    return {
      text: `⚠️ **மருந்து அட்டையைத் தெளிவாக அடையாளம் காண முடியவில்லை**\n\nபுகைப்படத்தில் உள்ள மருந்து பெயர், மூலப்பொருள் அல்லது அட்டை விவரங்கள் தெளிவாகத் தெரியவில்லை.\n\n### 📸 தெளிவான புகைப்படம் எடுப்பதற்கான குறிப்புகள்:\n• **நல்ல வெளிச்சத்தில் வைக்கவும்**: மருந்து அட்டையை நிழல் படாதவாறு நேரான வெளிச்சத்தில் சமமான தரையில் வைக்கவும்.\n• **மருந்து பெயர் மீது ஃபோகஸ் செய்யவும்**: அச்சிடப்பட்ட பெயர் (எ.கா: *Paracetamol*, *Amoxicillin*) மற்றும் வீரிய அளவு (எ.கா: *500mg*) தெளிவாகத் தெரிய வேண்டும்.\n• **பளபளப்பைத் தவிர்க்கவும்**: பளபளப்பான ஃபாயில் அட்டைகளில் வெளிச்சம் பட்டு எழுத்துக்கள் மங்காமல் இருக்க அட்டையை லேசாக சாய்க்கவும்.\n• **முழு அட்டையையும் காட்டவும்**: உப்பு சேர்மம் மற்றும் காலாவதி தேதி விபரங்களை மறைக்காமல் படம் எடுக்கவும்.\n\n*கீழே உள்ள தேடல் பெட்டியில் மருந்து பெயரை நேரடியாக தட்டச்சு செய்தும் நீங்கள் தகவல் பெறலாம்.*`,
      actions: [
        { label: '📷 மீண்டும் படம் எடு', action: 'camera' },
        { label: '🖼️ கேலரியில் இருந்து பதிவேற்று', action: 'gallery' },
        { label: '🧪 மாதிரி மருந்துகளைச் சோதிக்கவும்', action: 'samples' },
        { label: '📖 மருந்து பட்டியலைப் பார்க்கவும்', action: 'catalog' }
      ]
    };
  }

  return {
    text: `⚠️ **Could Not Clearly Identify Medicine Packaging**\n\nThe packaging text, formulation name, or blister pack markings could not be recognized with certainty.\n\n### 📸 Tips for Clear Medicine Photos:\n• **Ensure Good Lighting**: Place the blister pack or bottle on a flat, well-lit surface without harsh shadows.\n• **Focus on the Brand & Salt Name**: Make sure the printed medicine name (e.g., *Paracetamol*, *Amoxicillin*) and strength (e.g., *500 mg*) are in sharp focus.\n• **Avoid Glare on Foil Packaging**: Tilt shiny blister strips slightly to prevent flash reflection from washing out the letters.\n• **Keep Composition Visible**: Do not crop out the active ingredients or manufacturer details.\n\n*You can also search directly by typing the medicine name in the chat below or browse our verified catalog.*`,
    actions: [
      { label: '📷 Take New Photo', action: 'camera' },
      { label: '🖼️ Upload Another Photo', action: 'gallery' },
      { label: '🧪 Try Sample Medicines', action: 'samples' },
      { label: '📖 Browse Medicine Catalog', action: 'catalog' }
    ]
  };
}

// Outside click to close + menu
document.addEventListener('click', (e) => {
  const plusContainer = document.querySelector('.chat-plus-container');
  const plusMenu = document.getElementById('chatPlusMenu');
  if (plusContainer && plusMenu && plusMenu.style.display === 'flex') {
    if (!plusContainer.contains(e.target)) {
      plusMenu.style.display = 'none';
    }
  }
});

// Global window bindings for HTML onclick handlers
window.toggleChatPlusMenu = toggleChatPlusMenu;
window.triggerCameraCapture = triggerCameraCapture;
window.triggerGalleryUpload = triggerGalleryUpload;
window.openSampleMedicinePicker = openSampleMedicinePicker;
window.closeSampleMedicinePicker = closeSampleMedicinePicker;
window.selectSampleMedicine = selectSampleMedicine;
window.handleMedicineImageSelected = handleMedicineImageSelected;
window.removeChatAttachedImage = removeChatAttachedImage;
window.openMedicineScanner = openMedicineScanner;
window.handleScannerActionPrompt = handleScannerActionPrompt;
window.sendChatMessage = function(text) {
  if (typeof aiChatEngine !== 'undefined' && aiChatEngine.sendMessage) {
    aiChatEngine.sendMessage(text);
  }
};


/**
 * MediGuid - User Interactions, Modals, State Management & Event Handlers
 */

const AppState = {
  cart: [],
  selectedDoctor: null,
  selectedDate: "Fri, Sep 12",
  selectedTime: "03:30 PM",
  consultMode: "video",
  sosCountdownInterval: null,
  sosRemainingSeconds: 3,
  videoCallActive: false
};

// --------------------------------------------------------------------------
// 1. TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconName = 'checkcircle';
  let iconColor = 'var(--primary-teal)';
  if (type === 'emergency') {
    iconName = 'emergency';
    iconColor = 'var(--color-emergency)';
  } else if (type === 'warning') {
    iconName = 'alert-triangle';
    iconColor = 'var(--color-warning)';
  }

  toast.innerHTML = `
    <span style="color: ${iconColor}; display: flex; align-items: center;">${getIcon(iconName, 20)}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --------------------------------------------------------------------------
// 2. MEDICATION PROGRESS & CHECKBOXES
// --------------------------------------------------------------------------
function toggleMedDose(medId) {
  const med = MEDIGUID_DATA.medications.find(m => m.id === medId);
  if (!med) return;

  med.taken = !med.taken;
  updateMedicationUI();
  
  if (med.taken) {
    showToast(`Marked ${med.name} as taken! Keep up the healthy routine.`, 'success');
  } else {
    showToast(`Dose for ${med.name} marked as pending.`, 'info');
  }
}

function updateMedicationUI() {
  const total = MEDIGUID_DATA.medications.length;
  const takenCount = MEDIGUID_DATA.medications.filter(m => m.taken).length;
  const percentage = Math.round((takenCount / total) * 100);

  // Update progress text on Dashboard
  const dashCount = document.getElementById('dashDoseCount');
  if (dashCount) dashCount.textContent = `${takenCount} of ${total} doses taken`;

  const dashPct = document.getElementById('dashDosePct');
  if (dashPct) dashPct.textContent = `${percentage}%`;

  // Update SVG Progress Ring
  const circleVal = document.getElementById('dashProgressRingVal');
  if (circleVal) {
    // 188 is circumference for r=30
    const offset = 188 - (188 * percentage) / 100;
    circleVal.style.strokeDashoffset = offset;
  }

  // Update guidance screen progress
  const guidePct = document.getElementById('guidanceProgressPct');
  if (guidePct) guidePct.textContent = `${percentage}%`;

  // Refresh medicine lists if rendered
  renderMedicationList();
  renderMedicationGuidanceList();
}

function renderMedicationList() {
  const container = document.getElementById('dashboardMedsList');
  if (!container) return;

  container.innerHTML = MEDIGUID_DATA.medications.map(med => `
    <div class="med-card ${med.taken ? 'dose-taken' : ''}">
      <div class="med-left">
        <div class="med-icon-wrap">
          ${getIcon('pill', 22)}
        </div>
        <div class="med-info">
          <h4 class="med-name">${med.name} <span style="font-weight: normal; font-size: 0.82rem; color: var(--text-secondary);">${med.strength}</span></h4>
          <div class="med-details">
            <span>${getIcon('clock', 14)} ${med.time}</span>
            <span class="badge-pill badge-mint">${med.mealTiming}</span>
          </div>
        </div>
      </div>
      <button class="med-check-btn ${med.taken ? 'checked' : ''}" onclick="toggleMedDose('${med.id}')" title="${med.taken ? 'Dose completed' : 'Mark as taken'}">
        ${getIcon(med.taken ? 'check' : 'plus', 20)}
      </button>
    </div>
  `).join('');
}

function renderMedicationGuidanceList() {
  const morningContainer = document.getElementById('guidanceMorningMeds');
  const afternoonContainer = document.getElementById('guidanceAfternoonMeds');
  const eveningContainer = document.getElementById('guidanceEveningMeds');
  const bedtimeContainer = document.getElementById('guidanceBedtimeMeds');

  const renderGroup = (target, filterSlot) => {
    if (!target) return;
    const items = MEDIGUID_DATA.medications.filter(m => m.timeSlot === filterSlot);
    if (items.length === 0) {
      target.innerHTML = `<p style="padding: 6px 0; font-size: 0.85rem; color: var(--text-muted);">No medication scheduled for this period.</p>`;
      return;
    }
    target.innerHTML = items.map(med => `
      <div class="med-card ${med.taken ? 'dose-taken' : ''}">
        <div class="med-left">
          <div class="med-icon-wrap">
            ${getIcon('pill', 22)}
          </div>
          <div class="med-info">
            <h4 class="med-name">${med.name} ${med.strength}</h4>
            <div class="med-details">
              <span>${med.dosage} (${med.form})</span>
              <span>•</span>
              <span class="badge-pill badge-mint">${med.instructions}</span>
              <span>•</span>
              <span>${med.remainingPills} left</span>
            </div>
          </div>
        </div>
        <button class="med-check-btn ${med.taken ? 'checked' : ''}" onclick="toggleMedDose('${med.id}')">
          ${getIcon(med.taken ? 'check' : 'plus', 20)}
        </button>
      </div>
    `).join('');
  };

  renderGroup(morningContainer, 'morning');
  renderGroup(afternoonContainer, 'afternoon');
  renderGroup(eveningContainer, 'evening');
  renderGroup(bedtimeContainer, 'bedtime');
}

// --------------------------------------------------------------------------
// 2.5 VISUAL MEDICINE CATALOG & INTERACTIVE DETAILS MODAL
// --------------------------------------------------------------------------
let currentCatalogCategory = 'all';
let currentCatalogQuery = '';
let currentCatalogLang = 'en';

function initMedicineCatalog() {
  renderCategoryChips();
  renderMedicineCatalog(currentCatalogCategory, currentCatalogQuery);
  updateCatalogLanguageUI();
}

function switchGuidanceTab(tabKey) {
  const catTab = document.getElementById('guidanceTabCatalog');
  const schTab = document.getElementById('guidanceTabSchedule');
  const catView = document.getElementById('guidanceCatalogView');
  const schView = document.getElementById('guidanceScheduleView');

  if (tabKey === 'catalog') {
    if (catTab) catTab.classList.add('active');
    if (schTab) schTab.classList.remove('active');
    if (catView) catView.style.display = 'block';
    if (schView) schView.style.display = 'none';
  } else {
    if (schTab) schTab.classList.add('active');
    if (catTab) catTab.classList.remove('active');
    if (schView) schView.style.display = 'block';
    if (catView) catView.style.display = 'none';
  }
}

function setCatalogCategory(catId) {
  currentCatalogCategory = catId;
  const chips = document.querySelectorAll('.cat-chip');
  chips.forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-cat') === catId);
  });
  renderMedicineCatalog(currentCatalogCategory, currentCatalogQuery);
}

function handleCatalogSearch(val) {
  currentCatalogQuery = val || '';
  const clearBtn = document.getElementById('catalogSearchClearBtn');
  if (clearBtn) {
    clearBtn.style.display = currentCatalogQuery.trim().length > 0 ? 'flex' : 'none';
  }
  renderMedicineCatalog(currentCatalogCategory, currentCatalogQuery);
}

function clearCatalogSearch() {
  currentCatalogQuery = '';
  const input = document.getElementById('catalogSearchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('catalogSearchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderMedicineCatalog(currentCatalogCategory, '');
}

function renderCategoryChips() {
  const container = document.getElementById('catalogCategoryChips');
  if (!container || typeof MEDICINE_CATALOG_CATEGORIES === 'undefined') return;

  container.innerHTML = MEDICINE_CATALOG_CATEGORIES.map(cat => {
    const label = currentCatalogLang === 'ta' ? cat.ta : cat.en;
    const isActive = cat.id === currentCatalogCategory;
    return `
      <button class="cat-chip ${isActive ? 'active' : ''}" data-cat="${cat.id}" onclick="setCatalogCategory('${cat.id}')">
        ${label}
      </button>
    `;
  }).join('');
}

function renderMedicineCatalog(catId = 'all', searchQuery = '') {
  const grid = document.getElementById('medicineCatalogGrid');
  const countEl = document.getElementById('catalogResultsCount');
  const activeLabelEl = document.getElementById('catalogActiveFilterLabel');
  if (!grid || typeof searchMedicinesCatalog !== 'function') return;

  const results = searchMedicinesCatalog(searchQuery, catId, currentCatalogLang);

  // Update count indicator
  if (countEl) {
    const countText = currentCatalogLang === 'ta'
      ? `${results.length} மருந்துகள் கிடைக்கின்றன`
      : `Showing ${results.length} medicines`;
    countEl.textContent = countText;
  }

  if (activeLabelEl) {
    activeLabelEl.textContent = searchQuery.trim() ? `"${searchQuery.trim()}"` : '';
  }

  if (results.length === 0) {
    const emptyTitle = currentCatalogLang === 'ta' ? 'மருந்துகள் எதுவும் கிடைக்கவில்லை' : 'No medicines found';
    const emptyDesc = currentCatalogLang === 'ta' 
      ? 'வேறு பெயர், நிலை அல்லது வகையைத் தேடிப் பாருங்கள், அல்லது எங்கள் மருத்துவ உதவியாளரிடம் கேளுங்கள்.'
      : 'Try searching with different symptoms, conditions, or brand names, or consult our AI medical assistant.';
    const resetBtn = currentCatalogLang === 'ta' ? 'அனைத்து மருந்துகளையும் காட்டு' : 'Show All Medicines';

    grid.innerHTML = `
      <div class="catalog-empty-state" style="grid-column: 1 / -1;">
        <div class="icon-circle-lg" style="margin: 0 auto 12px; background: var(--light-mint); color: var(--primary-teal);">
          ${getIcon('search', 28)}
        </div>
        <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 6px;">${emptyTitle}</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px; margin: 0 auto 16px;">${emptyDesc}</p>
        <button class="btn-pill btn-pill-primary btn-pill-sm" onclick="clearCatalogSearch(); setCatalogCategory('all');">
          ${resetBtn}
        </button>
      </div>
    `;
    return;
  }

  const isTa = currentCatalogLang === 'ta';
  const viewDetailsLabel = isTa ? 'விவரங்களைக் காண்க' : 'View Details';
  const purposeLabel = isTa ? 'நோக்கம்' : 'Common Purpose';
  const otcBadge = isTa ? 'OTC மருந்து' : 'OTC';
  const rxBadge = isTa ? 'பரிந்துரை தேவை' : 'Prescription';

  grid.innerHTML = results.map(med => {
    const name = isTa ? med.name.ta : med.name.en;
    const catName = isTa ? med.category.ta : med.category.en;
    const purpose = isTa ? med.purpose.ta : med.purpose.en;
    const shortDesc = isTa ? med.description.ta : med.description.en;
    const precaution = isTa ? med.precautions.ta[0] : med.precautions.en[0];
    const rxTag = med.prescriptionRequired ? rxBadge : otcBadge;
    const rxClass = med.prescriptionRequired ? 'rx-req' : 'rx-otc';

    return `
      <div class="medicine-visual-card">
        <div class="med-card-img-wrap">
          <img src="${med.image}" alt="${name}" class="med-card-img" loading="lazy" onerror="this.onerror=null;this.src='${med.fallbackSvg}';"/>
          <span class="med-rx-badge ${rxClass}">${rxTag}</span>
          <span class="med-cat-tag">${catName}</span>
        </div>
        <div class="med-card-body">
          <h4>${name}</h4>
          <span class="med-generic-name">${med.genericName}</span>
          <div class="med-purpose-box">
            <strong>${purposeLabel}:</strong> ${purpose}
          </div>
          <p class="med-short-desc">${shortDesc}</p>
          <div class="med-precaution-snippet">
            ${getIcon('shield', 14)}
            <span>${precaution}</span>
          </div>
          <div class="med-card-footer">
            <button class="btn-pill btn-pill-primary btn-pill-sm" onclick="openMedicineDetails('${med.id}')">
              ${getIcon('activity', 14)} ${viewDetailsLabel}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof renderAllIcons === 'function') {
    renderAllIcons(grid);
  }
}

function openMedicineDetails(medId) {
  if (typeof getMedicineById !== 'function') return;
  const med = getMedicineById(medId);
  if (!med) return;

  const modal = document.getElementById('medicineDetailsModal');
  const imgEl = document.getElementById('modalMedImage');
  const bodyEl = document.getElementById('modalMedBody');
  if (!modal || !bodyEl) return;

  const isTa = currentCatalogLang === 'ta';
  const name = isTa ? med.name.ta : med.name.en;
  const catName = isTa ? med.category.ta : med.category.en;
  const purpose = isTa ? med.purpose.ta : med.purpose.en;
  const desc = isTa ? med.description.ta : med.description.en;
  const howWorks = isTa ? med.howItWorks.ta : med.howItWorks.en;
  const consultWho = isTa ? med.whoShouldConsult.ta : med.whoShouldConsult.en;
  const storageText = isTa ? med.storage.ta : med.storage.en;
  const usesList = isTa ? med.uses.ta : med.uses.en;
  const precautionsList = isTa ? med.precautions.ta : med.precautions.en;
  const sideEffectsList = isTa ? med.sideEffects.ta : med.sideEffects.en;

  const rxNotice = med.prescriptionRequired
    ? (isTa ? '⚠️ பரிந்துரைக்கப்பட்ட மருந்து — தகுதியான மருத்துவ ஆலோசனையின் கீழ் மட்டுமே உட்கொள்ளவும்.' : '⚠️ Prescription medicine — use only under professional medical advice.')
    : (isTa ? '✓ மருத்துவர் பரிந்துரை இன்றி கிடைக்கும் மருந்து (OTC) — லேபிளை கவனமாக வாசிக்கவும்.' : '✓ Over-The-Counter (OTC) medicine — read package instructions carefully.');

  if (imgEl) {
    imgEl.style.display = 'block';
    imgEl.src = med.image;
    imgEl.onerror = () => {
      imgEl.src = med.fallbackSvg;
    };
  }

  const brandsText = med.brandExamples && med.brandExamples.length
    ? `${isTa ? 'பொதுவான பிராண்டுகள்' : 'Common Brands'}: <strong>${med.brandExamples.join(', ')}</strong>`
    : '';

  const stockStatus = typeof getMedicineStockStatus === 'function' 
    ? getMedicineStockStatus(med.id) 
    : { badgeHtml: '<span class="badge-stock-available">🟢 Available</span>', location: 'Central Pharmacy' };

  bodyEl.innerHTML = `
    <div class="med-modal-header">
      <div class="med-modal-badges">
        <span class="badge-pill badge-mint">${catName}</span>
        <span class="badge-pill ${med.prescriptionRequired ? 'badge-amber' : 'badge-mint'}" style="${med.prescriptionRequired ? 'background:#FEF3C7;color:#B45309;' : ''}">
          ${med.prescriptionRequired ? (isTa ? 'மருத்துவர் பரிந்துரை தேவை' : 'Prescription Required') : (isTa ? 'OTC மருந்து' : 'Over The Counter')}
        </span>
        ${stockStatus.badgeHtml}
      </div>
      <h3 style="font-size:1.35rem;font-weight:800;color:var(--text-main);margin-bottom:4px;">${name}</h3>
      <div style="font-size:0.84rem;color:var(--text-muted);margin-bottom:4px;">${med.genericName}</div>
      <div style="font-size:0.78rem;color:var(--dark-teal);font-weight:600;margin-bottom:6px;">📍 Hospital Pharmacy: ${stockStatus.location}</div>
      ${brandsText ? `<div style="font-size:0.82rem;color:var(--dark-teal);">${brandsText}</div>` : ''}
    </div>

    <div class="med-modal-alert" style="${med.prescriptionRequired ? '' : 'background:#E8F7F0;border-left-color:var(--primary-teal);color:#168F8A;'}">
      ${rxNotice}
    </div>

    <!-- Description -->
    <div class="med-modal-section">
      <h5>${getIcon('file-text', 16)} ${isTa ? 'விளக்கம் & நோக்கம்' : 'Overview & Purpose'}</h5>
      <p style="margin-bottom:6px;"><strong>${purpose}</strong></p>
      <p>${desc}</p>
    </div>

    <!-- Common Uses -->
    <div class="med-modal-section">
      <h5>${getIcon('check', 16)} ${isTa ? 'பொதுவான பயன்பாடுகள்' : 'Common Uses & Indications'}</h5>
      <ul>
        ${usesList.map(u => `<li>${u}</li>`).join('')}
      </ul>
    </div>

    <!-- How It Works -->
    <div class="med-modal-section">
      <h5>${getIcon('sparkles', 16)} ${isTa ? 'செயல்படும் விதம்' : 'How It Works'}</h5>
      <p>${howWorks}</p>
    </div>

    <!-- Precautions -->
    <div class="med-modal-section">
      <h5>${getIcon('shield', 16)} ${isTa ? 'முக்கிய முன்னெச்சரிக்கைகள்' : 'Important Precautions'}</h5>
      <ul>
        ${precautionsList.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    <!-- Side Effects -->
    <div class="med-modal-section">
      <h5>${getIcon('alert-triangle', 16)} ${isTa ? 'பக்க விளைவுகள்' : 'Common Side Effects'}</h5>
      <ul>
        ${sideEffectsList.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <!-- Who Should Consult -->
    <div class="med-modal-section">
      <h5>${getIcon('doctor', 16)} ${isTa ? 'யார் மருத்துவரை அணுக வேண்டும்?' : 'Who Should Consult a Doctor First'}</h5>
      <p>${consultWho}</p>
    </div>

    <!-- Storage -->
    <div class="med-modal-section">
      <h5>${getIcon('clock', 16)} ${isTa ? 'சேமிப்பு முறை' : 'Storage Guidelines'}</h5>
      <p>${storageText}</p>
    </div>

    <!-- Actions -->
    <div class="med-modal-actions">
      <button class="btn-pill btn-pill-primary" style="flex:1;" onclick="askAssistantAboutMedicine('${med.id}')">
        ${getIcon('bot', 16)} ${isTa ? 'உதவியாளரிடம் கேளுங்கள்' : 'Ask Health Assistant'}
      </button>
      <button class="btn-pill btn-pill-secondary" onclick="closeMedicineDetailsModal()">
        ${isTa ? 'மூடு' : 'Close'}
      </button>
    </div>
  `;

  modal.classList.add('open');
  if (typeof renderAllIcons === 'function') {
    renderAllIcons(modal);
  }
}

function closeMedicineDetailsModal() {
  const modal = document.getElementById('medicineDetailsModal');
  if (modal) modal.classList.remove('open');
}

function askAssistantAboutMedicine(medId) {
  closeMedicineDetailsModal();
  navigateTo('chat');

  if (typeof getMedicineById !== 'function') return;
  const med = getMedicineById(medId);
  if (!med) return;

  const isTa = currentCatalogLang === 'ta';
  const query = isTa
    ? `${med.name.ta} மருந்தின் பயன்கள் மற்றும் முன்னெச்சரிக்கைகள் என்ன?`
    : `Tell me about ${med.name.en} and its uses.`;

  const input = document.getElementById('chatInputField');
  if (input) input.value = query;

  if (typeof aiChatEngine !== 'undefined' && aiChatEngine.sendMessage) {
    aiChatEngine.sendMessage(query);
  } else if (typeof sendChatMessage === 'function') {
    sendChatMessage(query);
  }
}

function setGuidanceLanguage(lang) {
  if (lang !== 'en' && lang !== 'ta') return;
  currentCatalogLang = lang;

  // Sync pills in Guidance header
  const enBtn = document.getElementById('guidanceLangEn');
  const taBtn = document.getElementById('guidanceLangTa');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (taBtn) taBtn.classList.toggle('active', lang === 'ta');

  // Update headers and disclaimer
  updateCatalogLanguageUI();

  // Re-render chips and grid
  renderCategoryChips();
  renderMedicineCatalog(currentCatalogCategory, currentCatalogQuery);

  // Sync with AI Chat language if available
  if (typeof aiChatEngine !== 'undefined' && typeof aiChatEngine.setLanguage === 'function') {
    if (aiChatEngine.currentLang !== lang) {
      aiChatEngine.setLanguage(lang);
    }
  } else if (typeof setChatLanguage === 'function') {
    setChatLanguage(lang);
  }
}

function updateCatalogLanguageUI() {
  const isTa = currentCatalogLang === 'ta';
  const headerTitle = document.getElementById('guidanceHeaderTitle');
  const tabCat = document.getElementById('tabCatalogLabel');
  const tabSch = document.getElementById('tabScheduleLabel');
  const searchInp = document.getElementById('catalogSearchInput');
  const disclaimer = document.getElementById('catalogDisclaimerText');

  if (headerTitle) headerTitle.textContent = isTa ? 'மருந்து வழிகாட்டுதல் & அட்டவணை' : 'Medication Guidance';
  if (tabCat) tabCat.textContent = isTa ? 'மருந்து அட்டவணை' : 'Medicine Catalog';
  if (tabSch) tabSch.textContent = isTa ? 'தினசரி அட்டவணை' : 'Daily Schedule';
  if (searchInp) {
    searchInp.placeholder = isTa
      ? 'மருந்துகள், அறிகுறிகள் அல்லது நிலைகளைத் தேடுங்கள்...'
      : 'Search medicines, symptoms, or conditions...';
  }
  if (disclaimer) {
    disclaimer.innerHTML = isTa
      ? '<strong>மருத்துவ அறிவிப்பு:</strong> மருந்து தகவல்கள் கல்வி நோக்கங்களுக்காக மட்டுமே. இது தகுதியான மருத்துவரின் ஆலோசனைக்கு மாற்றாகாது.'
      : '<strong>Educational Notice:</strong> Medicine information is for educational purposes only and does not replace advice from a qualified healthcare professional.';
  }
}

// --------------------------------------------------------------------------
// 3. DOCTORS DIRECTORY RENDERING & BOOKING FLOW
// --------------------------------------------------------------------------
function renderDoctorsDirectory(filterSpecialty = 'All') {
  const container = document.getElementById('doctorsListContainer');
  if (!container) return;

  let filtered = MEDIGUID_DATA.doctors;
  if (filterSpecialty !== 'All') {
    filtered = MEDIGUID_DATA.doctors.filter(doc => doc.specialty.toLowerCase().includes(filterSpecialty.toLowerCase()));
  }

  container.innerHTML = filtered.map(doc => `
    <div class="doctor-card" onclick="openDoctorBooking('${doc.id}')">
      <div class="doctor-card-left">
        <img src="${doc.avatar}" alt="${doc.name}" class="doctor-avatar" onerror="this.src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160'"/>
        <div class="doctor-info">
          <h4>${doc.name}</h4>
          <div class="doctor-spec">${doc.specialty}</div>
          <div class="doctor-meta">
            <span>${doc.experience}</span>
            <span>•</span>
            <span class="rating-star">${getIcon('star', 13)} ${doc.rating} (${doc.reviewsCount})</span>
          </div>
          <div style="margin-top: 4px;">
            <span class="badge-pill badge-mint">${doc.availability}</span>
          </div>
        </div>
      </div>
      <div class="doctor-card-arrow">
        ${getIcon('chevron-right', 20)}
      </div>
    </div>
  `).join('');
}

function openDoctorBooking(docId) {
  const doc = MEDIGUID_DATA.doctors.find(d => d.id === docId) || MEDIGUID_DATA.doctors[0];
  AppState.selectedDoctor = doc;

  // Populate Appointment Screen
  const docName = document.getElementById('bookingDocName');
  const docSpec = document.getElementById('bookingDocSpec');
  const docAvatar = document.getElementById('bookingDocAvatar');
  const docFee = document.getElementById('bookingDocFee');

  if (docName) docName.textContent = doc.name;
  if (docSpec) docSpec.textContent = `${doc.specialty} • ${doc.hospital}`;
  if (docAvatar) docAvatar.src = doc.avatar;
  if (docFee) docFee.textContent = doc.fee;

  // Also update Doctor Contact teleconsultation screen
  const contactDocName = document.getElementById('contactDocName');
  const contactDocSpec = document.getElementById('contactDocSpec');
  const contactDocAvatar = document.getElementById('contactDocAvatar');
  if (contactDocName) contactDocName.textContent = doc.name;
  if (contactDocSpec) contactDocSpec.textContent = doc.specialty;
  if (contactDocAvatar) contactDocAvatar.src = doc.avatar;

  navigateTo('appointment');
}

function selectConsultMode(mode) {
  AppState.consultMode = mode;
  document.querySelectorAll('.consult-mode-card').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-mode') === mode);
  });
}

function selectBookingDate(dateStr, element) {
  AppState.selectedDate = dateStr;
  document.querySelectorAll('.date-chip').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
}

function selectBookingTime(timeStr, element) {
  AppState.selectedTime = timeStr;
  document.querySelectorAll('.time-slot-btn').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
}

function confirmAppointmentBooking() {
  const doc = AppState.selectedDoctor || MEDIGUID_DATA.doctors[0];
  const modal = document.getElementById('bookingSuccessModal');
  
  const summaryEl = document.getElementById('confirmedAppointmentDetails');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div style="background: var(--light-mint); border-radius: var(--radius-card-sm); padding: 14px; margin: 16px 0; text-align: left;">
        <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px;">${doc.name}</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">${doc.specialty} (${AppState.consultMode.toUpperCase()})</div>
        <div style="display: flex; gap: 8px; font-size: 0.82rem; font-weight: 600; color: var(--dark-teal);">
          <span>${getIcon('calendar', 15)} ${AppState.selectedDate}</span>
          <span>•</span>
          <span>${getIcon('clock', 15)} ${AppState.selectedTime}</span>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
}

// --------------------------------------------------------------------------
// MOBILE SIDEBAR / OFF-CANVAS RESPONSIVE NAVIGATION CONTROLLER
// --------------------------------------------------------------------------
function toggleMobileSidebar(portalType) {
  const sidebar = portalType === 'hospital'
    ? document.getElementById('hospitalSidebar')
    : document.getElementById('patientSidebar');
  const backdrop = document.getElementById('mobileSidebarBackdrop');

  if (!sidebar) return;
  const isOpen = sidebar.classList.contains('mobile-open');
  if (isOpen) {
    closeMobileSidebar();
  } else {
    document.querySelectorAll('.desktop-sidebar').forEach(sb => sb.classList.remove('mobile-open'));
    sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
    if (document.body) document.body.classList.add('mobile-sidebar-locked');
  }
}

function closeMobileSidebar() {
  document.querySelectorAll('.desktop-sidebar').forEach(sb => sb.classList.remove('mobile-open'));
  const backdrop = document.getElementById('mobileSidebarBackdrop');
  if (backdrop) backdrop.classList.remove('active');
  if (document.body) document.body.classList.remove('mobile-sidebar-locked');
}

if (typeof window !== 'undefined') {
  window.toggleMobileSidebar = toggleMobileSidebar;
  window.closeMobileSidebar = closeMobileSidebar;
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMobileSidebar();
    }
  });
}

// --------------------------------------------------------------------------
// ORIGINAL AI HEALTHCARE PIPELINE ANIMATION CONTROLLER
// Concept: "Medical Information -> AI Understanding -> Patient-Friendly Info"
// --------------------------------------------------------------------------
let currentAiStageStep = 0;
let aiStageCycleInterval = null;

const AI_STAGE_STATUS_MESSAGES = [
  "Scanning Clinical EHR Record (PAT1001)...",
  "Extracting Clinical Entities & Checking Dosages...",
  "Synthesizing Patient-Friendly Guidance in English & Tamil..."
];

function setLandingAiStep(stepIndex) {
  currentAiStageStep = stepIndex % 3;
  const pillars = [
    document.getElementById('pillarClinical'),
    document.getElementById('pillarNeural'),
    document.getElementById('pillarPatient')
  ];
  const buttons = [
    document.getElementById('stepBtn0'),
    document.getElementById('stepBtn1'),
    document.getElementById('stepBtn2')
  ];

  pillars.forEach((p, idx) => {
    if (p) {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        if (idx === currentAiStageStep) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      } else {
        p.classList.add('active');
        if (idx === currentAiStageStep) {
          p.style.borderColor = 'var(--primary-teal)';
          p.style.transform = 'translateY(-3px)';
        } else {
          p.style.borderColor = 'rgba(216, 239, 233, 0.16)';
          p.style.transform = 'none';
        }
      }
    }
  });

  buttons.forEach((b, idx) => {
    if (b) b.classList.toggle('active', idx === currentAiStageStep);
  });

  const statusEl = document.getElementById('aiDynamicStatusText');
  if (statusEl && AI_STAGE_STATUS_MESSAGES[currentAiStageStep]) {
    statusEl.textContent = AI_STAGE_STATUS_MESSAGES[currentAiStageStep];
  }
}

function initLandingAiAnimation() {
  if (typeof window === 'undefined') return;
  if (aiStageCycleInterval) clearInterval(aiStageCycleInterval);

  setLandingAiStep(0);

  aiStageCycleInterval = setInterval(() => {
    const portalScreen = document.getElementById('portalSelectionScreen');
    if (portalScreen && portalScreen.style.display !== 'none') {
      currentAiStageStep = (currentAiStageStep + 1) % 3;
      setLandingAiStep(currentAiStageStep);
    }
  }, 3600);
}

if (typeof window !== 'undefined') {
  window.setLandingAiStep = setLandingAiStep;
  window.initLandingAiAnimation = initLandingAiAnimation;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLandingAiAnimation);
  } else {
    setTimeout(initLandingAiAnimation, 50);
  }
}

// --------------------------------------------------------------------------
// 4. DUAL-PORTAL SWITCHER & AUTHENTICATION MANAGEMENT (With History / Back Support)
// --------------------------------------------------------------------------

let currentHospStockCat = 'All';
let isHandlingPopState = false;

function pushNavigationState(portal, screen) {
  if (typeof window === 'undefined' || !window.history || isHandlingPopState) return;

  let hash = '#/portal';
  let title = 'MediGuid — Smart Health Assistant';

  if (portal === 'hospital') {
    hash = screen ? `#/hospital/${screen}` : '#/hospital';
    title = screen ? `MediGuid Hospital — ${screen.replace('hosp-', '').replace(/-/g, ' ').toUpperCase()}` : 'MediGuid — Hospital Management';
  } else if (portal === 'patient') {
    hash = screen ? `#/patient/${screen}` : '#/patient';
    title = screen ? `MediGuid Patient — ${screen.replace(/-/g, ' ').toUpperCase()}` : 'MediGuid — Patient Health Assistant';
  }

  const stateObj = { portal, screen };
  try {
    if (window.location.hash !== hash) {
      window.history.pushState(stateObj, title, hash);
    } else if (!window.history.state || window.history.state.portal !== portal || window.history.state.screen !== screen) {
      window.history.replaceState(stateObj, title, hash);
    }
  } catch (err) {
    // Non-blocking fallback
  }
  document.title = title;
}

function handlePopState(event) {
  isHandlingPopState = true;
  try {
    const state = event ? event.state : null;
    if (state && state.portal) {
      if (state.portal === 'select' || state.portal === 'portal') {
        selectPortal('select', true);
      } else if (state.portal === 'hospital') {
        selectPortal('hospital', true);
        if (state.screen && state.screen !== 'login') {
          hospNavigateTo(state.screen, true);
        }
      } else if (state.portal === 'patient') {
        selectPortal('patient', true);
        if (state.screen && state.screen !== 'login') {
          patientNavigateTo(state.screen, true);
        }
      }
    } else {
      parseAndApplyHash(true);
    }
  } finally {
    isHandlingPopState = false;
  }
}

function parseAndApplyHash(isPop = false) {
  if (typeof window === 'undefined') return;
  const hash = window.location.hash || '';

  if (hash.startsWith('#/hospital')) {
    const parts = hash.split('/');
    const screen = parts[2] || (localStorage.getItem('hospitalLoggedIn') === 'true' ? 'hosp-add-patient' : 'login');
    selectPortal('hospital', isPop);
    if (screen && screen !== 'login' && localStorage.getItem('hospitalLoggedIn') === 'true') {
      hospNavigateTo(screen, isPop);
    }
  } else if (hash.startsWith('#/patient')) {
    const parts = hash.split('/');
    const screen = parts[2] || (localStorage.getItem('patientLoggedIn') === 'true' ? 'dashboard' : 'login');
    selectPortal('patient', isPop);
    if (screen && screen !== 'login' && localStorage.getItem('patientLoggedIn') === 'true') {
      patientNavigateTo(screen, isPop);
    }
  } else {
    selectPortal('select', isPop);
  }
}

// Attach popstate and hashchange listeners when in browser
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', handlePopState);
  window.addEventListener('hashchange', function() {
    if (!isHandlingPopState) {
      parseAndApplyHash(true);
    }
  });
}

function selectPortal(portalType, skipHistory = false) {
  closeMobileSidebar();
  const selectScreen = document.getElementById('portalSelectionScreen');
  const hospContainer = document.getElementById('hospitalPortalContainer');
  const patContainer = document.getElementById('patientPortalContainer');

  if (portalType === 'select' || portalType === 'portal') {
    if (selectScreen) selectScreen.style.display = 'block';
    if (hospContainer) hospContainer.style.display = 'none';
    if (patContainer) patContainer.style.display = 'none';
    localStorage.setItem('activePortal', 'select');

    // Autoplay hero video if available
    const heroVid = document.querySelector('.portal-hero-video');
    if (heroVid && typeof heroVid.play === 'function') {
      heroVid.play().catch(() => {});
    }

    if (!skipHistory) {
      pushNavigationState('select', null);
    }
    return;
  }

  if (portalType === 'hospital') {
    if (selectScreen) selectScreen.style.display = 'none';
    if (patContainer) patContainer.style.display = 'none';
    if (hospContainer) hospContainer.style.display = 'block';
    localStorage.setItem('activePortal', 'hospital');

    const isHospLoggedIn = localStorage.getItem('hospitalLoggedIn') === 'true';
    const hospLoginView = document.getElementById('hospitalLoginView');
    const hospLayout = document.getElementById('hospitalLayout');

    if (isHospLoggedIn) {
      if (hospLoginView) hospLoginView.style.display = 'none';
      if (hospLayout) hospLayout.style.display = 'flex';
      if (skipHistory) {
        hospNavigateTo('hosp-add-patient', true);
      } else {
        hospNavigateTo('hosp-add-patient');
      }
    } else {
      if (hospLoginView) hospLoginView.style.display = 'block';
      if (hospLayout) hospLayout.style.display = 'none';
      if (!skipHistory) {
        pushNavigationState('hospital', 'login');
      }
    }
    return;
  }

  if (portalType === 'patient') {
    if (selectScreen) selectScreen.style.display = 'none';
    if (hospContainer) hospContainer.style.display = 'none';
    if (patContainer) patContainer.style.display = 'block';
    localStorage.setItem('activePortal', 'patient');

    const isPatLoggedIn = localStorage.getItem('patientLoggedIn') === 'true';
    const patLoginView = document.getElementById('patientLoginView');
    const patLayout = document.getElementById('patientLayout');

    if (isPatLoggedIn) {
      if (patLoginView) patLoginView.style.display = 'none';
      if (patLayout) patLayout.style.display = 'flex';
      const currentPatId = localStorage.getItem('currentPatientId') || 'PAT1001';
      const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
      const pat = patients.find(p => p.id === currentPatId) || patients[0];
      if (pat) populateLoggedInPatientUI(pat);
      patientNavigateTo('dashboard', skipHistory);
    } else {
      if (patLoginView) patLoginView.style.display = 'block';
      if (patLayout) patLayout.style.display = 'none';
      if (!skipHistory) {
        pushNavigationState('patient', 'login');
      }
    }
    return;
  }
}

function returnToPortalSelection(skipHistory = false) {
  selectPortal('select', skipHistory);
}

// --------------------------------------------------------------------------
// 4A. HOSPITAL PORTAL FUNCTIONS (Admin / Doctors / Reception / Pharmacy)
// --------------------------------------------------------------------------

function handleHospitalLogin() {
  const idInput = document.getElementById('hospLoginUsername');
  const pwInput = document.getElementById('hospLoginPassword');
  const errBanner = document.getElementById('hospLoginError');

  if (!idInput || !pwInput) return;
  const username = idInput.value.trim();
  const password = pwInput.value.trim();

  if (username.toLowerCase() === 'admin' && password === 'admin123') {
    if (errBanner) errBanner.style.display = 'none';
    localStorage.setItem('hospitalLoggedIn', 'true');
    showToast('Welcome Dr. / Staff! Hospital clinical station active.', 'success');
    selectPortal('hospital');
  } else {
    if (errBanner) errBanner.style.display = 'flex';
    idInput.focus();
  }
}

function fillDemoHospitalLogin() {
  const idInput = document.getElementById('hospLoginUsername');
  const pwInput = document.getElementById('hospLoginPassword');
  const errBanner = document.getElementById('hospLoginError');
  if (errBanner) errBanner.style.display = 'none';
  if (idInput) idInput.value = 'admin';
  if (pwInput) pwInput.value = 'admin123';
  const btn = document.getElementById('hospLoginSubmitBtn');
  if (btn) btn.focus();
}

function handleHospitalLogout() {
  localStorage.removeItem('hospitalLoggedIn');
  showToast('Hospital staff session ended safely.', 'info');
  returnToPortalSelection();
}

let lastRegisteredPatientId = null;

function hospNavigateTo(screenId) {
  closeMobileSidebar();
  const skipHistory = arguments[1] || false;
  const screens = document.querySelectorAll('.hosp-screen');
  screens.forEach(s => s.style.display = 'none');

  const target = document.getElementById(screenId);
  if (target) target.style.display = 'block';

  document.querySelectorAll('.hosp-sidebar-nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-hosp-screen') === screenId);
  });

  if (screenId === 'hosp-stock') {
    renderHospitalStockManager();
  } else if (screenId === 'hosp-add-patient') {
    autoGeneratePatientId();
  }

  if (!skipHistory) {
    pushNavigationState('hospital', screenId);
  }
}

function autoGeneratePatientId() {
  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  let maxNum = 1000;
  patients.forEach(p => {
    const m = (p.id || '').match(/\d+/);
    if (m) {
      const n = parseInt(m[0], 10);
      if (n > maxNum) maxNum = n;
    }
  });
  const nextId = `PAT${maxNum + 1}`;
  const idInput = document.getElementById('hospNewPatientId');
  if (idInput && !idInput.value) idInput.value = nextId;
  return nextId;
}

function handleSavePatient() {
  const id = (document.getElementById('hospNewPatientId')?.value || '').trim().toUpperCase();
  const name = (document.getElementById('hospNewPatientName')?.value || '').trim();
  const phone = (document.getElementById('hospNewPatientPhone')?.value || '').trim() || '+91 98765 43210';
  const age = parseInt(document.getElementById('hospNewPatientAge')?.value || '28', 10);
  const gender = document.getElementById('hospNewPatientGender')?.value || 'Male';
  const disease = (document.getElementById('hospNewPatientDisease')?.value || '').trim();
  const symptoms = (document.getElementById('hospNewPatientSymptoms')?.value || '').trim();
  const allergies = (document.getElementById('hospNewPatientAllergies')?.value || '').trim() || 'None recorded';
  const currentMeds = (document.getElementById('hospNewPatientCurrentMeds')?.value || '').trim() || 'Paracetamol 500mg SOS';
  const doctor = (document.getElementById('hospNewPatientDoctor')?.value || '').trim() || 'Dr. Kumar';
  const notes = (document.getElementById('hospNewPatientNotes')?.value || '').trim();
  const password = (document.getElementById('hospNewPatientPassword')?.value || '').trim() || 'demo123';

  if (!id || !name || !disease) {
    showToast('Please enter Patient ID, Full Name, and Condition/Disease.', 'warning');
    return;
  }

  const newRecord = {
    id,
    name,
    age,
    gender,
    phone,
    disease,
    symptoms: symptoms || disease,
    allergies,
    currentMedicines: currentMeds,
    medicines: currentMeds,
    doctor: doctor,
    assignedDoctor: doctor,
    room: 'Ward 3B, Bed 12',
    notes: notes || 'Prescribed treatment regimen as recorded by attending physician.',
    hospitalName: 'MediGuid City General Hospital',
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@mediguid.patient`,
    bloodGroup: 'O+',
    emergencyContact: 'Family Contact (+91 98765 00000)',
    password: password,
    avatar: gender === 'Female' 
      ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
      : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  };

  if (typeof saveStoredPatient === 'function') {
    saveStoredPatient(newRecord);
  }

  lastRegisteredPatientId = id;

  // Render and show Success Card with Open Patient Portal shortcut
  const card = document.getElementById('patientRegistrationSuccessCard');
  if (card) {
    const idEl = document.getElementById('regSuccessPatId');
    const nameEl = document.getElementById('regSuccessPatName');
    const disEl = document.getElementById('regSuccessPatDisease');
    const docEl = document.getElementById('regSuccessPatDoctor');
    if (idEl) idEl.textContent = id;
    if (nameEl) nameEl.textContent = name;
    if (disEl) disEl.textContent = disease;
    if (docEl) docEl.textContent = doctor;
    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Patient record for ${name} (${id}) registered successfully!`, 'success');
}

function openRegisteredPatientPortal(patId) {
  const targetId = patId || lastRegisteredPatientId || localStorage.getItem('currentPatientId') || 'PAT1001';
  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const patient = patients.find(p => p.id === targetId) || patients[0];

  if (patient) {
    localStorage.setItem('patientLoggedIn', 'true');
    localStorage.setItem('currentPatientId', patient.id);
    populateLoggedInPatientUI(patient);
    selectPortal('patient');
    patientNavigateTo('dashboard');
    showToast(`Welcome ${patient.name}! Opened Patient Portal for ${patient.id}.`, 'success');
  }
}

function registerAnotherPatient() {
  const card = document.getElementById('patientRegistrationSuccessCard');
  if (card) card.style.display = 'none';

  const form = document.getElementById('hospAddPatientForm');
  if (form) form.reset();

  const idInput = document.getElementById('hospNewPatientId');
  if (idInput) idInput.value = '';
  autoGeneratePatientId();

  if (form) form.scrollIntoView({ behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 4A-1. DISCHARGE SUMMARY UPLOAD & AUTOMATIC OCR EXTRACTION ENGINE
// --------------------------------------------------------------------------
let activeDischargeFile = null;
let activeDischargeFileType = 'image/jpeg';
let activeDischargePreview = null;
let activeDischargeSample = null;
let extractedDischargeData = null;

// Realistic Demo Presets for instant Hackathon / evaluation testing
const DISCHARGE_SAMPLE_PRESETS = {
  sample_arun: {
    fileName: "Discharge_Summary_Arun_PAT1001.jpg",
    fileType: "image/jpeg",
    filePreview: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    patientId: "PAT1001",
    name: "Arun Kumar",
    age: 21,
    gender: "Male",
    phone: "+91 98765 43210",
    hospitalName: "MediGuid City General Hospital",
    doctorName: "Dr. Kumar",
    department: "Internal Medicine",
    admissionDate: "03 Sep 2026",
    dischargeDate: "06 Sep 2026",
    diagnosis: "Acute Viral Pyrexia (Fever)",
    symptoms: "High fever (102°F), headache, generalized body pain, chills",
    allergies: "No known drug allergies (NKDA)",
    medicines: "Tab Paracetamol 650mg TDS x 3 days, Cap B-Complex OD x 5 days, ORS Rehydration",
    instructions: "Complete bed rest for 48 hours. Drink at least 2.5 to 3.0 liters of warm fluids daily. Sponge baths if fever exceeds 100°F. Avoid oily or heavy meals.",
    followUp: "Review at General Medicine OPD after 3 days or sooner if fever recurs >102°F, persistent vomiting, or severe abdominal pain.",
    notes: "Patient afebrile for 24 hours prior to discharge. Hemodynamically stable, BP 118/76 mmHg, SpO2 98% on room air.",
    verifiedBy: "Dr. Kumar, MD (Internal Medicine)"
  },
  sample_priya: {
    fileName: "Discharge_Summary_Priya_PAT1004.pdf",
    fileType: "application/pdf",
    filePreview: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    patientId: "PAT1004",
    name: "Priya Sharma",
    age: 29,
    gender: "Female",
    phone: "+91 98111 22334",
    hospitalName: "MediGuid City General Hospital",
    doctorName: "Dr. Evelyn Reed",
    department: "Pulmonology & Respiratory Care",
    admissionDate: "01 Sep 2026",
    dischargeDate: "05 Sep 2026",
    diagnosis: "Acute Bronchitis & Reactive Airway",
    symptoms: "Productive cough with clear sputum, chest tightness, low-grade fever",
    allergies: "Penicillin (Moderate rash)",
    medicines: "Tab Azithromycin 500mg OD x 3 days, Levosalbutamol Inhaler 2 puffs PRN, Ambroxol Syrup 5ml TDS",
    instructions: "Avoid cold food and exposure to dust/smoke. Warm steam inhalation twice daily. Perform deep breathing exercises.",
    followUp: "Pulmonology OPD follow-up after 1 week. Emergency review if resting breathlessness or chest pain develops.",
    notes: "Chest clear on auscultation at discharge. Normal vesicular breath sounds. SpO2 99% on room air.",
    verifiedBy: "Dr. Evelyn Reed, MD, FCCP"
  },
  sample_rajesh: {
    fileName: "Discharge_Summary_Rajesh_PAT1005.jpg",
    fileType: "image/jpeg",
    filePreview: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80",
    patientId: "PAT1005",
    name: "Rajesh Patel",
    age: 52,
    gender: "Male",
    phone: "+91 97222 33445",
    hospitalName: "MediGuid Memorial Hospital",
    doctorName: "Dr. Sarah Jenkins",
    department: "Endocrinology & Internal Medicine",
    admissionDate: "28 Aug 2026",
    dischargeDate: "04 Sep 2026",
    diagnosis: "Type 2 Diabetes Mellitus with Mild Hyperglycemia",
    symptoms: "Fatigue, polyuria, polydipsia, occasional blurred vision",
    allergies: "Sulfa Drugs (Mild itching)",
    medicines: "Tab Metformin 500mg BD after meals, Tab Glimepiride 1mg OD before breakfast",
    instructions: "Follow diabetic diet (low glycemic index, high fiber). Daily 30-minute moderate walking. Maintain home fasting blood sugar log.",
    followUp: "Endocrinology review with 14-day fasting/PP blood sugar chart in 2 weeks.",
    notes: "Fasting blood sugar normalized to 110 mg/dL before discharge. HbA1c 7.6%. Fundus examination normal.",
    verifiedBy: "Dr. Sarah Jenkins, MD, DM (Endocrinology)"
  }
};

/**
 * Reusable simulated OCR document extraction layer
 * Accepts a File, Blob, or sample string and returns structured patient data.
 * Ready for future connection to real OCR / Google Document AI / AWS Textract endpoints.
 */
function extractDischargeSummaryData(fileOrSample) {
  if (typeof fileOrSample === 'string' && DISCHARGE_SAMPLE_PRESETS[fileOrSample]) {
    return { ...DISCHARGE_SAMPLE_PRESETS[fileOrSample] };
  }

  const fileName = (fileOrSample && fileOrSample.name) ? fileOrSample.name : 'Discharge_Summary_Document.jpg';
  const isPdf = fileName.toLowerCase().endsWith('.pdf');
  const lowerName = fileName.toLowerCase();

  if (lowerName.includes('arun')) {
    return { ...DISCHARGE_SAMPLE_PRESETS.sample_arun, fileName };
  } else if (lowerName.includes('priya')) {
    return { ...DISCHARGE_SAMPLE_PRESETS.sample_priya, fileName };
  } else if (lowerName.includes('rajesh')) {
    return { ...DISCHARGE_SAMPLE_PRESETS.sample_rajesh, fileName };
  }

  const nextPatId = typeof autoGeneratePatientId === 'function' ? autoGeneratePatientId() : 'PAT1004';
  return {
    fileName: fileName,
    fileType: isPdf ? 'application/pdf' : 'image/jpeg',
    filePreview: activeDischargePreview || 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
    patientId: nextPatId,
    name: "Vikram Sengupta",
    age: 34,
    gender: "Male",
    phone: "+91 98450 12345",
    hospitalName: "MediGuid City General Hospital",
    doctorName: "Dr. Kumar",
    department: "General Medicine",
    admissionDate: "04 Sep 2026",
    dischargeDate: "07 Sep 2026",
    diagnosis: "Acute Gastroenteritis & Dehydration",
    symptoms: "Nausea, watery diarrhea, abdominal cramps, mild fever",
    allergies: "No known drug allergies (NKDA)",
    medicines: "Tab Ofloxacin-Ornidazole 1 tab BD x 5 days, ORS sachets ad libitum, Tab Pantoprazole 40mg OD",
    instructions: "Consume clean boiled water and oral rehydration solution. Strict light diet (khichdi, curd, bananas). Avoid raw milk and street food.",
    followUp: "OPD review after 3 days. Return urgently if high fever (>101°F) or blood in stools occurs.",
    notes: "Patient rehydrated. Bowel sounds normal. Pulse 76 bpm, BP 116/74 mmHg. Discharge approved.",
    verifiedBy: "Dr. Kumar, MD (General Medicine)"
  };
}

function handleDischargeFileSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  activeDischargeFile = file;
  activeDischargeSample = null;
  activeDischargeFileType = file.type || (file.name.endsWith('.pdf') ? 'application/pdf' : 'image/jpeg');

  const reader = new FileReader();
  reader.onload = function(e) {
    activeDischargePreview = e.target.result;
    showDischargePreview(e.target.result, file.name, activeDischargeFileType, null);
  };
  reader.readAsDataURL(file);
}

function testDischargeSample(sampleKey) {
  const preset = DISCHARGE_SAMPLE_PRESETS[sampleKey];
  if (!preset) return;

  activeDischargeFile = null;
  activeDischargeSample = sampleKey;
  activeDischargeFileType = preset.fileType;
  activeDischargePreview = preset.filePreview;

  showDischargePreview(preset.filePreview, preset.fileName, preset.fileType, sampleKey);
}

function showDischargePreview(previewSrc, fileName, fileType, sampleKey) {
  const wrap = document.getElementById('dischargePreviewWrap');
  const img = document.getElementById('dischargePreviewImg');
  const pdfBadge = document.getElementById('dischargePdfBadge');
  const nameEl = document.getElementById('dischargeFileName');
  const typeBadge = document.getElementById('dischargeFileTypeBadge');
  const sizeEl = document.getElementById('dischargeFileSize');
  const reviewCard = document.getElementById('dischargeExtractedReviewCard');
  const statusEl = document.getElementById('dischargeAnalysisStatus');

  if (reviewCard) reviewCard.style.display = 'none';
  if (statusEl) statusEl.style.display = 'none';

  const isPdf = (fileType && fileType.includes('pdf')) || (fileName && fileName.toLowerCase().endsWith('.pdf'));

  if (img) {
    img.src = previewSrc;
    img.style.display = isPdf ? 'none' : 'block';
  }
  if (pdfBadge) pdfBadge.style.display = isPdf ? 'flex' : 'none';
  if (nameEl) nameEl.textContent = fileName;
  if (typeBadge) typeBadge.textContent = isPdf ? 'PDF Document' : 'Image File';
  if (sizeEl) sizeEl.textContent = sampleKey ? 'Verified Clinical Discharge Sample' : 'Ready for OCR Extraction';
  if (wrap) {
    wrap.style.display = 'flex';
    wrap.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Loaded ${fileName}. Click "Analyze Discharge Summary" to extract fields.`, 'info');
}

function clearDischargeUpload() {
  activeDischargeFile = null;
  activeDischargeFileType = 'image/jpeg';
  activeDischargePreview = null;
  activeDischargeSample = null;
  extractedDischargeData = null;

  const wrap = document.getElementById('dischargePreviewWrap');
  const reviewCard = document.getElementById('dischargeExtractedReviewCard');
  const statusEl = document.getElementById('dischargeAnalysisStatus');
  const successCard = document.getElementById('dischargeSuccessCard');

  if (wrap) wrap.style.display = 'none';
  if (reviewCard) reviewCard.style.display = 'none';
  if (statusEl) statusEl.style.display = 'none';
  if (successCard) successCard.style.display = 'none';

  const cameraInput = document.getElementById('dischargeCameraInput');
  const fileInput = document.getElementById('dischargeFileInput');
  if (cameraInput) cameraInput.value = '';
  if (fileInput) fileInput.value = '';
}

function executeDischargeAnalysis() {
  if (!activeDischargeFile && !activeDischargeSample) {
    showToast('Please upload a discharge summary or pick a sample preset.', 'warning');
    return;
  }

  const statusEl = document.getElementById('dischargeAnalysisStatus');
  const reviewCard = document.getElementById('dischargeExtractedReviewCard');
  if (statusEl) statusEl.style.display = 'flex';
  if (reviewCard) reviewCard.style.display = 'none';

  statusEl.scrollIntoView({ behavior: 'smooth' });

  // Simulate OCR Analysis Time
  setTimeout(() => {
    if (statusEl) statusEl.style.display = 'none';

    extractedDischargeData = extractDischargeSummaryData(activeDischargeSample || activeDischargeFile);
    renderExtractedDischargeForm(extractedDischargeData);

    if (reviewCard) {
      reviewCard.style.display = 'block';
      reviewCard.scrollIntoView({ behavior: 'smooth' });
    }

    showToast(`Extraction complete! Found patient record for ${extractedDischargeData.name} (${extractedDischargeData.patientId}).`, 'success');
  }, 750);
}

function renderExtractedDischargeForm(data) {
  if (!data) return;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('extractPatId', data.patientId);
  setVal('extractPatName', data.name);
  setVal('extractPatAge', data.age);
  setVal('extractPatGender', data.gender);
  setVal('extractPatPhone', data.phone || '+91 98765 43210');
  setVal('extractHospitalName', data.hospitalName || 'MediGuid City General Hospital');
  setVal('extractDoctorName', data.doctorName || 'Dr. Kumar');
  setVal('extractAdmissionDate', data.admissionDate || '03 Sep 2026');
  setVal('extractDischargeDate', data.dischargeDate || '06 Sep 2026');
  setVal('extractDiagnosis', data.diagnosis || 'General Clinical Care');
  setVal('extractSymptoms', data.symptoms || '');
  setVal('extractAllergies', data.allergies || 'No known drug allergies (NKDA)');
  setVal('extractMedicines', data.medicines || '');
  setVal('extractInstructions', data.instructions || '');
  setVal('extractFollowUp', data.followUp || '');
  setVal('extractNotes', data.notes || '');

  const form = document.getElementById('dischargeReviewForm');
  if (form) {
    form.querySelectorAll('input, textarea').forEach(el => el.setAttribute('readonly', 'true'));
  }
  const btn = document.getElementById('btnToggleDischargeEditText');
  if (btn) btn.textContent = '✏️ Edit Information';
}

let dischargeFormIsEditable = false;

function toggleDischargeEdit() {
  const form = document.getElementById('dischargeReviewForm');
  const btnText = document.getElementById('btnToggleDischargeEditText');
  if (!form) return;

  dischargeFormIsEditable = !dischargeFormIsEditable;
  form.querySelectorAll('input, textarea').forEach(el => {
    if (dischargeFormIsEditable) {
      el.removeAttribute('readonly');
      el.style.background = '#FFFFFF';
      el.style.borderColor = 'var(--primary-teal)';
    } else {
      el.setAttribute('readonly', 'true');
      el.style.background = '';
      el.style.borderColor = '';
    }
  });

  if (btnText) {
    btnText.textContent = dischargeFormIsEditable ? '🔒 Lock Fields' : '✏️ Edit Information';
  }

  showToast(dischargeFormIsEditable ? 'Fields are now editable. Correct any info if needed.' : 'Fields locked.', 'info');
}

function handleConfirmDischargePatient() {
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();

  const id = (getVal('extractPatId') || 'PAT1001').toUpperCase();
  const name = getVal('extractPatName') || 'Arun Kumar';
  const age = parseInt(getVal('extractPatAge') || '21', 10);
  const gender = getVal('extractPatGender') || 'Male';
  const phone = getVal('extractPatPhone') || '+91 98765 43210';
  const hospitalName = getVal('extractHospitalName') || 'MediGuid City General Hospital';
  const doctor = getVal('extractDoctorName') || 'Dr. Kumar';
  const admissionDate = getVal('extractAdmissionDate') || '03 Sep 2026';
  const dischargeDate = getVal('extractDischargeDate') || '06 Sep 2026';
  const diagnosis = getVal('extractDiagnosis') || 'Clinical Care';
  const symptoms = getVal('extractSymptoms') || diagnosis;
  const allergies = getVal('extractAllergies') || 'None recorded';
  const medicines = getVal('extractMedicines') || 'Paracetamol 500mg SOS';
  const instructions = getVal('extractInstructions') || 'Follow home recovery regimen as directed.';
  const followUp = getVal('extractFollowUp') || 'OPD review as prescribed.';
  const notes = getVal('extractNotes') || 'Discharged in stable condition.';

  const filePreview = (extractedDischargeData && extractedDischargeData.filePreview) 
    ? extractedDischargeData.filePreview 
    : (activeDischargePreview || 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800');

  const fileName = (extractedDischargeData && extractedDischargeData.fileName)
    ? extractedDischargeData.fileName
    : 'Discharge_Summary.jpg';

  const dischargeSummaryObj = {
    fileName,
    fileType: activeDischargeFileType || 'image/jpeg',
    filePreview,
    uploadDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    hospitalName,
    doctorName: doctor,
    admissionDate,
    dischargeDate,
    diagnosis,
    symptoms,
    allergies,
    medicines,
    dischargeInstructions: instructions,
    followUp,
    importantNotes: notes,
    verifiedBy: `${doctor}, Attending Physician`
  };

  const patientRecord = {
    id,
    name,
    age,
    gender,
    phone,
    hospitalName,
    assignedDoctor: doctor,
    doctor,
    disease: diagnosis,
    diagnosis,
    symptoms,
    allergies,
    currentMedicines: medicines,
    medicines,
    notes,
    room: 'Ward 3B, Bed 12 (Discharged)',
    password: 'demo123',
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@mediguid.patient`,
    bloodGroup: 'B+',
    emergencyContact: `Family Contact (${phone})`,
    avatar: gender === 'Female' 
      ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
      : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    dischargeSummary: dischargeSummaryObj
  };

  if (typeof saveStoredPatient === 'function') {
    saveStoredPatient(patientRecord);
  }

  lastRegisteredPatientId = id;

  const reviewCard = document.getElementById('dischargeExtractedReviewCard');
  const previewWrap = document.getElementById('dischargePreviewWrap');
  const successCard = document.getElementById('dischargeSuccessCard');

  if (reviewCard) reviewCard.style.display = 'none';
  if (previewWrap) previewWrap.style.display = 'none';

  if (successCard) {
    const sId = document.getElementById('dischargeSuccessPatId');
    const sName = document.getElementById('dischargeSuccessPatName');
    const sDiag = document.getElementById('dischargeSuccessPatDiag');
    const sDoc = document.getElementById('dischargeSuccessPatDoctor');
    if (sId) sId.textContent = id;
    if (sName) sName.textContent = name;
    if (sDiag) sDiag.textContent = diagnosis;
    if (sDoc) sDoc.textContent = doctor;
    successCard.style.display = 'block';
    successCard.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Patient ${name} (${id}) registered! Discharge summary attached.`, 'success');
}

function resetDischargeUploadWorkflow() {
  clearDischargeUpload();
  const card = document.getElementById('dischargeSuccessCard');
  if (card) card.style.display = 'none';
  const dropzone = document.getElementById('dischargeDropZone');
  if (dropzone) dropzone.scrollIntoView({ behavior: 'smooth' });
}

function populateDischargeSummaryInPatientPortal(patient) {
  if (!patient) return;

  const summary = patient.dischargeSummary || {
    hospitalName: patient.hospitalName || 'MediGuid City General Hospital',
    doctorName: patient.assignedDoctor || patient.doctor || 'Dr. Kumar',
    admissionDate: '03 Sep 2026',
    dischargeDate: '06 Sep 2026',
    diagnosis: patient.disease || patient.diagnosis || 'Fever',
    dischargeInstructions: 'Complete bed rest for 48 hours. Drink at least 2.5–3.0 liters of warm fluids daily. Lukewarm sponge baths if temperature exceeds 100°F.',
    medicines: patient.currentMedicines || patient.medicines || 'Paracetamol 650mg TDS x 3 days, ORS Rehydration',
    followUp: 'Review at General Medicine OPD after 3 days or sooner if symptoms worsen.',
    importantNotes: patient.notes || 'Vitals stable at discharge: BP 118/76 mmHg, SpO2 98%. Afebrile for 24h.',
    fileName: `Discharge_Summary_${(patient.name || 'Patient').replace(/\s+/g, '_')}_${patient.id}.pdf`,
    filePreview: patient.avatar || 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800'
  };

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text || '—';
  };

  setText('patDischargeHospital', summary.hospitalName);
  setText('patDischargeDoctor', summary.doctorName);
  setText('patDischargeAdmission', summary.admissionDate);
  setText('patDischargeDate', summary.dischargeDate);
  setText('patDischargeDiagnosis', summary.diagnosis);
  setText('patDischargeInstructions', summary.dischargeInstructions || summary.instructions);
  setText('patDischargeMedicines', summary.medicines);
  setText('patDischargeFollowUp', summary.followUp);
  setText('patDischargeNotes', summary.importantNotes || summary.notes);
  setText('patDischargeDocName', summary.fileName || `Discharge_Summary_${patient.id}.pdf`);
  setText('patDischargeDocMeta', `Verified Clinical Record • Issued by ${summary.doctorName}`);

  const imgEl = document.getElementById('patDischargeDocImg');
  if (imgEl && summary.filePreview) {
    imgEl.src = summary.filePreview;
  }

  const dashBanner = document.getElementById('dashDischargeNoticeBanner');
  if (dashBanner) {
    dashBanner.style.display = 'flex';
    const bTitle = document.getElementById('dashDischargeNoticeTitle');
    const bSub = document.getElementById('dashDischargeNoticeSub');
    if (bTitle) bTitle.textContent = `Hospital Discharge Summary Ready (${patient.id})`;
    if (bSub) bSub.textContent = `Discharge diagnosis: ${summary.diagnosis} • Issued by ${summary.doctorName}.`;
  }
}

function openDischargeFullModal() {
  const modal = document.getElementById('dischargeDocModal');
  const img = document.getElementById('modalDischargeImg');
  const sub = document.getElementById('modalDischargeSubtitle');

  const currPatId = localStorage.getItem('currentPatientId') || 'PAT1001';
  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const patient = patients.find(p => p.id === currPatId) || patients[0];

  if (patient && patient.dischargeSummary) {
    if (img && patient.dischargeSummary.filePreview) img.src = patient.dischargeSummary.filePreview;
    if (sub) sub.textContent = `${patient.dischargeSummary.hospitalName} • Patient: ${patient.name} (${patient.id}) • Signed: ${patient.dischargeSummary.doctorName}`;
  } else if (img) {
    img.src = 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800';
  }

  if (modal) modal.classList.add('open');
}

function closeDischargeFullModal() {
  const modal = document.getElementById('dischargeDocModal');
  if (modal) modal.classList.remove('open');
}

function printOrDownloadDischarge() {
  showToast('Preparing official discharge document for download / print...', 'info');
  setTimeout(() => {
    window.print();
  }, 400);
}

// --------------------------------------------------------------------------
// 4A-2. HOSPITAL MEDICINE AVAILABILITY PHOTO SEARCH ENGINE
// --------------------------------------------------------------------------
let hospPhotoActiveImage = null;
let hospPhotoActiveSample = null;

function toggleHospitalPhotoPanel(forceOpen = null) {
  const panel = document.getElementById('hospPhotoPanel');
  if (!panel) return;
  const isOpen = panel.style.display !== 'none';
  const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;
  panel.style.display = shouldOpen ? 'block' : 'none';
  if (!shouldOpen) {
    clearHospitalPhotoPreview();
  }
}

function handleHospitalPhotoSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  hospPhotoActiveSample = null;
  const reader = new FileReader();
  reader.onload = function(e) {
    hospPhotoActiveImage = e.target.result;
    showHospitalPhotoPreview(e.target.result, file.name);
  };
  reader.readAsDataURL(file);
}

function testHospitalPhotoSample(sampleType) {
  hospPhotoActiveSample = sampleType;
  let previewUrl = '';
  let sampleName = '';

  if (sampleType === 'paracetamol') {
    previewUrl = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';
    sampleName = 'paracetamol_500mg_box.jpg';
  } else if (sampleType === 'amoxicillin') {
    previewUrl = 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600';
    sampleName = 'amoxicillin_500mg_capsule.jpg';
  } else if (sampleType === 'cetirizine') {
    previewUrl = 'https://images.unsplash.com/photo-1550572017-ed200f5e6343?w=600';
    sampleName = 'cetirizine_10mg_strip.jpg';
  } else {
    previewUrl = 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600';
    sampleName = 'blurry_unidentifiable_medicine_pack.jpg';
  }

  hospPhotoActiveImage = previewUrl;
  showHospitalPhotoPreview(previewUrl, sampleName);
}

function showHospitalPhotoPreview(imgSrc, label) {
  const wrap = document.getElementById('hospPhotoPreviewWrap');
  const img = document.getElementById('hospPhotoPreview');
  const resArea = document.getElementById('hospPhotoResultArea');
  if (resArea) resArea.innerHTML = '';
  if (img) img.src = imgSrc;
  if (wrap) wrap.style.display = 'flex';
  showToast(`Photo loaded (${label}). Click "Find Medicine" to analyze.`, 'info');
}

function clearHospitalPhotoPreview() {
  hospPhotoActiveImage = null;
  hospPhotoActiveSample = null;
  const wrap = document.getElementById('hospPhotoPreviewWrap');
  const resArea = document.getElementById('hospPhotoResultArea');
  const statusEl = document.getElementById('hospPhotoStatus');
  if (wrap) wrap.style.display = 'none';
  if (resArea) resArea.innerHTML = '';
  if (statusEl) statusEl.style.display = 'none';
}

function executeHospitalPhotoSearch() {
  if (!hospPhotoActiveImage) {
    showToast('Please take or upload a photo first.', 'warning');
    return;
  }

  const statusEl = document.getElementById('hospPhotoStatus');
  const resArea = document.getElementById('hospPhotoResultArea');
  if (statusEl) statusEl.style.display = 'block';
  if (resArea) resArea.innerHTML = '';

  setTimeout(() => {
    if (statusEl) statusEl.style.display = 'none';

    // Safety: If sample is unclear / blurry
    if (hospPhotoActiveSample === 'unclear') {
      if (resArea) {
        resArea.innerHTML = `
          <div class="photo-unclear-banner">
            <span data-icon="alert-triangle" data-icon-size="20" style="color: #D97706;"></span>
            <div>
              <strong>Unable to identify the medicine confidently.</strong> Please upload a clearer photo showing the medicine name and dosage text.
            </div>
          </div>
        `;
        if (typeof renderAllIcons === 'function') renderAllIcons(resArea);
      }
      return;
    }

    // Match against MEDICAL_MEDICINES_CATALOG
    let matchedMeds = [];
    const catalog = (typeof MEDICAL_MEDICINES_CATALOG !== 'undefined' && Array.isArray(MEDICAL_MEDICINES_CATALOG))
      ? MEDICAL_MEDICINES_CATALOG
      : [];

    if (hospPhotoActiveSample) {
      matchedMeds = catalog.filter(m => m.id === hospPhotoActiveSample || m.name.en.toLowerCase().includes(hospPhotoActiveSample));
    } else {
      matchedMeds = [catalog[0] || {
        id: 'paracetamol',
        name: { en: 'Paracetamol', ta: 'பாரசிட்டமால்' },
        genericName: 'Acetaminophen 500mg',
        category: { en: 'Fever & Pain', ta: 'காய்ச்சல் மற்றும் வலி' },
        purpose: { en: 'Antipyretic and analgesic for fever and mild-to-moderate pain', ta: 'காய்ச்சல் மற்றும் வலி நிவாரணி' },
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600'
      }];
    }

    if (matchedMeds.length === 0) {
      if (resArea) {
        resArea.innerHTML = `
          <div class="photo-unclear-banner">
            <span data-icon="alert-triangle" data-icon-size="20"></span>
            <div>Unable to identify the medicine confidently. Please upload a clearer photo.</div>
          </div>
        `;
        if (typeof renderAllIcons === 'function') renderAllIcons(resArea);
      }
      return;
    }

    // Strictly NO price, NO quantity, NO buy button, NO cart, NO payment!
    let html = '';
    if (matchedMeds.length > 1) {
      html += `<div style="font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Possible matches:</div>`;
    }

    html += matchedMeds.map(med => {
      const stock = getMedicineStockStatus(med.id);
      const isAvail = stock.inStock;
      const name = med.name.en || med.genericName;
      const cat = med.category ? med.category.en : 'General';
      const use = med.purpose ? med.purpose.en : (med.uses ? med.uses.en[0] : 'Clinical medication');

      return `
        <div class="hosp-matched-med-card">
          <div class="hosp-matched-left">
            <img src="${med.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600'}" alt="${name}" class="hosp-matched-thumb" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';"/>
            <div class="hosp-matched-info">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <span class="badge-pill badge-mint" style="font-size: 0.74rem;">${cat}</span>
                <span id="hospPhotoBadge_${med.id}">${stock.badgeHtml}</span>
              </div>
              <h4>${name} <span style="font-size: 0.82rem; font-weight: normal; color: var(--text-secondary);">(${med.genericName})</span></h4>
              <p><strong>Common Use:</strong> ${use}</p>
              <div style="font-size: 0.76rem; color: var(--text-muted);">Storage Shelf: ${stock.location}</div>
            </div>
          </div>
          <div>
            <button type="button" class="btn-pill btn-pill-sm ${isAvail ? 'btn-pill-emergency' : 'btn-pill-primary'}" id="btnTogglePhotoStock_${med.id}" onclick="toggleHospitalPhotoResultStock('${med.id}')" style="min-width: 150px; font-weight: 700;">
              ${isAvail ? '🔴 Mark Out of Stock' : '🟢 Mark Available'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (resArea) {
      resArea.innerHTML = html;
      if (typeof renderAllIcons === 'function') renderAllIcons(resArea);
    }
  }, 500);
}

function toggleHospitalPhotoResultStock(medId) {
  toggleHospitalMedicineStock(medId);
  const stock = getMedicineStockStatus(medId);
  const badgeSpan = document.getElementById(`hospPhotoBadge_${medId}`);
  const btn = document.getElementById(`btnTogglePhotoStock_${medId}`);
  if (badgeSpan) badgeSpan.innerHTML = stock.badgeHtml;
  if (btn) {
    btn.className = `btn-pill btn-pill-sm ${stock.inStock ? 'btn-pill-emergency' : 'btn-pill-primary'}`;
    btn.textContent = stock.inStock ? '🔴 Mark Out of Stock' : '🟢 Mark Available';
  }
}

function renderHospitalPatientTable(filterQuery = '') {
  const tbody = document.getElementById('hospPatientsTableBody');
  if (!tbody) return;

  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const q = filterQuery.toLowerCase().trim();

  const filtered = patients.filter(p => {
    if (!q) return true;
    return (p.id && p.id.toLowerCase().includes(q)) ||
           (p.name && p.name.toLowerCase().includes(q)) ||
           (p.disease && p.disease.toLowerCase().includes(q)) ||
           ((p.assignedDoctor || p.doctor) && (p.assignedDoctor || p.doctor).toLowerCase().includes(q));
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 28px; color: var(--text-muted);">No patient records found matching "${filterQuery}".</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td><span class="badge-pill badge-mint" style="font-weight: 800;">${p.id}</span></td>
      <td>
        <div style="font-weight: 700; color: var(--text-main);">${p.name}</div>
        <div style="font-size: 0.76rem; color: var(--text-muted);">${p.phone || 'No phone'}</div>
      </td>
      <td>${p.age} yrs / ${p.gender}</td>
      <td><span class="badge-pill badge-teal" style="font-weight: 700;">${p.disease || 'General'}</span></td>
      <td style="max-width: 220px; font-size: 0.82rem; color: var(--text-secondary);">${p.symptoms || p.disease || 'N/A'}</td>
      <td style="font-weight: 600; color: var(--dark-teal);">${p.assignedDoctor || p.doctor || 'Dr. Kumar'}</td>
      <td>${p.room || 'Outpatient'}</td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn-pill btn-pill-secondary btn-pill-sm" onclick="viewHospitalPatientDetails('${p.id}')" title="View full clinical record">
            View
          </button>
          <button class="btn-pill btn-pill-sm" style="background: #FFF1F2; color: #E11D48; border: 1px solid #FECDD3;" onclick="confirmDeletePatient('${p.id}')" title="Delete record">
            Delete
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function viewHospitalPatientDetails(patId) {
  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const pat = patients.find(p => p.id === patId);
  if (!pat) return;

  const container = document.getElementById('hospPatientDetailsContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="card-white" style="border: 2px solid rgba(216, 239, 233, 0.9); border-radius: 20px; padding: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; border-bottom: 1px solid var(--border-light); padding-bottom: 16px; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <img src="${pat.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'}" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary-teal);"/>
          <div>
            <h2 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 4px;">${pat.name}</h2>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="badge-pill badge-mint" style="font-weight: 800;">${pat.id}</span>
              <span style="font-size: 0.82rem; color: var(--text-muted);">${pat.gender} • ${pat.age} years old</span>
            </div>
          </div>
        </div>
        <button class="btn-pill btn-pill-secondary btn-pill-sm" onclick="hospNavigateTo('hosp-patients')">
          ← Back to Directory
        </button>
      </div>

      <div class="hosp-form-grid-2" style="margin-bottom: 20px;">
        <div style="background: var(--light-mint); padding: 16px; border-radius: 14px;">
          <div style="font-size: 0.76rem; font-weight: 700; color: var(--dark-teal); text-transform: uppercase;">Condition / Health Problem</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-top: 4px;">${pat.disease || 'General Health'}</div>
        </div>
        <div style="background: #E0F2FE; padding: 16px; border-radius: 14px;">
          <div style="font-size: 0.76rem; font-weight: 700; color: #0284C7; text-transform: uppercase;">Assigned Attending Doctor</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #0369A1; margin-top: 4px;">${pat.assignedDoctor || pat.doctor || 'Dr. Kumar'}</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div>
          <strong style="color: var(--text-main); font-size: 0.9rem;">Symptoms Recorded:</strong>
          <div style="margin-top: 4px; padding: 12px; background: #F8FAFC; border-radius: 10px; border: 1px solid var(--border-light); font-size: 0.92rem; color: var(--text-main);">
            ${pat.symptoms || pat.disease || 'No specific symptoms entered.'}
          </div>
        </div>

        <div>
          <strong style="color: var(--text-main); font-size: 0.9rem;">Ward / Room Assignment:</strong>
          <div style="margin-top: 4px; font-size: 0.92rem; color: var(--text-main); font-weight: 600;">
            ${pat.room || 'General Outpatient Clinic'}
          </div>
        </div>

        <div>
          <strong style="color: var(--text-main); font-size: 0.9rem;">Clinical Prescription Guidance & Doctor's Notes:</strong>
          <div style="margin-top: 4px; padding: 14px; background: #F0FDF4; border-radius: 10px; border: 1px solid #BBF7D0; font-size: 0.92rem; color: #166534; line-height: 1.5;">
            ${pat.notes || 'Routine follow-up prescribed by attending physician.'}
          </div>
        </div>

        <div style="padding: 12px 16px; background: #FFFBEB; border-radius: 10px; border: 1px solid #FDE68A;">
          <strong style="color: #92400E; font-size: 0.85rem;">Patient Portal Login Credentials:</strong>
          <div style="margin-top: 4px; font-size: 0.85rem; color: #78350F;">
            Patient ID: <strong>${pat.id}</strong> • Password: <strong>${pat.password || 'demo123'}</strong>
          </div>
        </div>
      </div>
    </div>
  `;

  hospNavigateTo('hosp-patient-details-view');
}

function confirmDeletePatient(patId) {
  if (confirm(`Are you sure you want to delete patient record ${patId}?`)) {
    if (typeof deleteStoredPatient === 'function') {
      deleteStoredPatient(patId);
    }
    showToast(`Patient ${patId} deleted from hospital database.`, 'info');
    renderHospitalPatientTable();
    renderHospitalDashboard();
  }
}

function renderHospitalDashboard() {
  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const totalCountEl = document.getElementById('hospMetricTotalPatients');
  if (totalCountEl) totalCountEl.textContent = patients.length;

  const inpatientsEl = document.getElementById('hospMetricInpatients');
  if (inpatientsEl) inpatientsEl.textContent = Math.max(1, Math.floor(patients.length * 0.6));

  const stock = typeof getStoredMedicineStock === 'function' ? getStoredMedicineStock() : {};
  const stockCountEl = document.getElementById('hospMetricStockCount');
  if (stockCountEl) {
    const availableCount = Object.values(stock).filter(v => v === true).length;
    stockCountEl.textContent = `${availableCount}/33`;
  }

  const recentContainer = document.getElementById('hospRecentPatientsList');
  if (recentContainer) {
    const recent = [...patients].reverse().slice(0, 3);
    recentContainer.innerHTML = recent.map(p => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #F8FAFC; border-radius: 12px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="badge-pill badge-mint" style="font-weight: 800;">${p.id}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--text-main);">${p.name}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">${p.disease || 'General'} • ${p.assignedDoctor || p.doctor || 'Dr. Kumar'}</div>
          </div>
        </div>
        <button class="btn-pill btn-pill-secondary btn-pill-sm" onclick="viewHospitalPatientDetails('${p.id}')">View</button>
      </div>
    `).join('');
  }
}

function renderHospitalStockManager(cat = 'All', searchQ = '') {
  currentHospStockCat = cat;
  const tbody = document.getElementById('hospStockTableBody');
  if (!tbody) return;

  let catalog = (typeof MEDICAL_MEDICINES_CATALOG !== 'undefined' && Array.isArray(MEDICAL_MEDICINES_CATALOG))
    ? MEDICAL_MEDICINES_CATALOG
    : [];

  const q = searchQ.toLowerCase().trim();
  let list = catalog;

  if (cat !== 'All') {
    list = list.filter(m => {
      const cEn = (m.category && m.category.en) ? m.category.en.toLowerCase() : '';
      return cEn.includes(cat.toLowerCase());
    });
  }

  if (q) {
    list = list.filter(m => {
      const nameEn = (m.name && m.name.en) ? m.name.en.toLowerCase() : '';
      const gen = m.genericName ? m.genericName.toLowerCase() : '';
      return nameEn.includes(q) || gen.includes(q);
    });
  }

  tbody.innerHTML = list.map(med => {
    const stock = getMedicineStockStatus(med.id);
    const isAvail = stock.inStock;
    const name = (med.name && med.name.en) ? med.name.en : med.genericName;
    const catName = (med.category && med.category.en) ? med.category.en : 'General';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${med.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600'}" style="width: 42px; height: 42px; border-radius: 8px; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';"/>
            <div>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem;">${name}</div>
              <div style="font-size: 0.74rem; color: var(--text-muted);">${med.genericName}</div>
            </div>
          </div>
        </td>
        <td><span class="badge-pill badge-mint" style="font-size: 0.74rem;">${catName}</span></td>
        <td>${stock.location}</td>
        <td>${stock.badgeHtml}</td>
        <td>
          <button class="btn-pill btn-pill-sm ${isAvail ? 'btn-pill-emergency' : 'btn-pill-primary'}" onclick="toggleHospitalMedicineStock('${med.id}')" style="min-width: 140px; font-weight: 700;">
            ${isAvail ? 'Mark Out of Stock' : 'Mark In Stock'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleHospitalMedicineStock(medId) {
  if (typeof toggleStoredMedicineStock === 'function') {
    const newStatus = toggleStoredMedicineStock(medId);
    showToast(`Stock updated: ${medId} is now ${newStatus ? 'AVAILABLE 🟢' : 'OUT OF STOCK 🔴'}`, newStatus ? 'success' : 'warning');
    renderHospitalStockManager(currentHospStockCat);
    if (typeof filterMedicineCatalog === 'function') filterMedicineCatalog();
  }
}

// --------------------------------------------------------------------------
// 4B. PATIENT PORTAL FUNCTIONS & 4 SUMMARY CARDS BINDING
// --------------------------------------------------------------------------

function handlePatientLogin() {
  const idInput = document.getElementById('loginPatientId');
  const pwInput = document.getElementById('loginPassword');
  const errBanner = document.getElementById('loginErrorMessage');
  const errText = document.getElementById('loginErrorText');

  if (!idInput || !pwInput) return;

  const patientId = idInput.value.trim().toUpperCase();
  const password = pwInput.value.trim();

  const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
  const patient = patients.find(p => p.id.toUpperCase() === patientId && (p.password === password || p.password === 'demo123'));

  if (patient) {
    if (errBanner) errBanner.style.display = 'none';
    localStorage.setItem('patientLoggedIn', 'true');
    localStorage.setItem('currentPatientId', patient.id);
    populateLoggedInPatientUI(patient);

    showToast(`Welcome, ${patient.name}! Connected to hospital record.`, 'success');
    selectPortal('patient');
  } else {
    if (errBanner) errBanner.style.display = 'flex';
    if (errText) errText.textContent = 'Invalid Patient ID or Password. Check hospital slip.';
    idInput.focus();
  }
}

function togglePasswordVisibility() {
  const pwInput = document.getElementById('loginPassword');
  const iconSpan = document.getElementById('togglePasswordIcon');
  if (!pwInput) return;

  const isPw = pwInput.type === 'password';
  pwInput.type = isPw ? 'text' : 'password';
  if (iconSpan) {
    iconSpan.setAttribute('data-icon', isPw ? 'eye-off' : 'eye');
    if (typeof renderAllIcons === 'function') renderAllIcons(iconSpan.parentElement);
  }
}

function fillDemoLogin(patId, password) {
  const idInput = document.getElementById('loginPatientId');
  const pwInput = document.getElementById('loginPassword');
  const errBanner = document.getElementById('loginErrorMessage');
  if (errBanner) errBanner.style.display = 'none';
  if (idInput) idInput.value = patId;
  if (pwInput) pwInput.value = password;
  const submitBtn = document.getElementById('patientLoginSubmitBtn');
  if (submitBtn) submitBtn.focus();
}

function handlePatientLogout() {
  localStorage.removeItem('patientLoggedIn');
  localStorage.removeItem('currentPatientId');

  const idInput = document.getElementById('loginPatientId');
  const pwInput = document.getElementById('loginPassword');
  if (idInput) idInput.value = '';
  if (pwInput) pwInput.value = '';
  const errBanner = document.getElementById('loginErrorMessage');
  if (errBanner) errBanner.style.display = 'none';

  showToast('Logged out of Patient Portal.', 'info');
  returnToPortalSelection();
}

function openForgotPasswordModal() {
  const m = document.getElementById('forgotPasswordModal');
  if (m) m.classList.add('open');
}

function patientNavigateTo(screenId) {
  closeMobileSidebar();
  const skipHistory = arguments[1] || false;
  const screens = document.querySelectorAll('.patient-screen');
  screens.forEach(s => s.style.display = 'none');

  const target = document.getElementById(screenId);
  if (target) target.style.display = 'block';

  document.querySelectorAll('.patient-sidebar-nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-patient-screen') === screenId);
  });

  const scrollContainer = document.querySelector('.desktop-main-viewport');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  if (screenId === 'chat') {
    if (typeof aiChatEngine !== 'undefined' && aiChatEngine.init) aiChatEngine.init();
  } else if (screenId === 'stock') {
    if (typeof renderPharmacyStock === 'function') renderPharmacyStock('All');
  } else if (screenId === 'doctors') {
    if (typeof renderDoctorsDirectory === 'function') renderDoctorsDirectory('All');
  } else if (screenId === 'guidance') {
    if (typeof initMedicineCatalog === 'function') initMedicineCatalog();
    if (typeof renderMedicationGuidanceList === 'function') renderMedicationGuidanceList();
  } else if (screenId === 'discharge-summary') {
    const currId = localStorage.getItem('currentPatientId') || 'PAT1001';
    const patients = typeof getStoredPatients === 'function' ? getStoredPatients() : (typeof HOSPITAL_PATIENTS !== 'undefined' ? HOSPITAL_PATIENTS : []);
    const pat = patients.find(p => p.id === currId) || patients[0];
    if (pat && typeof populateDischargeSummaryInPatientPortal === 'function') {
      populateDischargeSummaryInPatientPortal(pat);
    }
  }

  if (!skipHistory) {
    pushNavigationState('patient', screenId);
  }
}

function navigateTo(screenId) {
  if (screenId.startsWith('hosp-')) {
    hospNavigateTo(screenId);
  } else {
    patientNavigateTo(screenId);
  }
}

function populateLoggedInPatientUI(patient) {
  if (!patient) return;

  // 1. DASHBOARD 4 KEY SUMMARY CARDS (Core Prompt Requirement)
  const sumId = document.getElementById('dashSummaryPatientId');
  if (sumId) sumId.textContent = patient.id;

  const sumCond = document.getElementById('dashSummaryCondition');
  if (sumCond) sumCond.textContent = patient.disease || patient.condition || 'Fever';

  const sumSymp = document.getElementById('dashSummarySymptoms');
  if (sumSymp) sumSymp.textContent = patient.symptoms || 'Fever, headache, body pain';

  const sumDoc = document.getElementById('dashSummaryDoctor');
  if (sumDoc) sumDoc.textContent = patient.assignedDoctor || patient.doctor || 'Dr. Kumar';

  // 2. DASHBOARD WELCOME BANNER
  const dashWelcomeName = document.getElementById('dashWelcomePatientName');
  if (dashWelcomeName) dashWelcomeName.textContent = patient.name;

  const dashWelcomeCond = document.getElementById('dashWelcomeCondition');
  if (dashWelcomeCond) dashWelcomeCond.textContent = patient.disease || patient.condition || 'Fever';

  const dashWelcomeDoc = document.getElementById('dashWelcomeDoctor');
  if (dashWelcomeDoc) dashWelcomeDoc.textContent = patient.assignedDoctor || patient.doctor || 'Dr. Kumar';

  // 3. SIDEBAR MINI PROFILE
  const sideAvatar = document.getElementById('sidePatientAvatar');
  if (sideAvatar && patient.avatar) sideAvatar.src = patient.avatar;
  const sideName = document.getElementById('sidePatientName');
  if (sideName) sideName.textContent = patient.name;
  const sideId = document.getElementById('sidePatientId');
  if (sideId) sideId.textContent = patient.id;

  // 4. TOP NAVBAR BADGES
  const navPatId = document.getElementById('navBarPatientId');
  if (navPatId) navPatId.textContent = patient.id;

  // 5. READ-ONLY PATIENT RECORD SCREEN ("Information provided by hospital")
  const recHosp = document.getElementById('patientRecordHospital');
  if (recHosp) recHosp.textContent = patient.hospitalName || 'MediGuid City General Hospital';
  const recName = document.getElementById('patientRecordName');
  if (recName) recName.textContent = patient.name;
  const recId = document.getElementById('patientRecordId');
  if (recId) recId.textContent = patient.id;
  const recAvatar = document.getElementById('patientRecordAvatar');
  if (recAvatar && patient.avatar) recAvatar.src = patient.avatar;
  const recAge = document.getElementById('patientRecordAge');
  if (recAge) recAge.textContent = `${patient.age} years`;
  const recGender = document.getElementById('patientRecordGender');
  if (recGender) recGender.textContent = patient.gender;
  const recPhone = document.getElementById('patientRecordPhone');
  if (recPhone) recPhone.textContent = patient.phone || 'N/A';
  const recDoctor = document.getElementById('patientRecordDoctor');
  if (recDoctor) recDoctor.textContent = patient.assignedDoctor || patient.doctor || 'Dr. Kumar';
  const recBlood = document.getElementById('patientRecordBlood');
  if (recBlood) recBlood.textContent = patient.bloodGroup || 'O+';
  const recAllergies = document.getElementById('patientRecordAllergies');
  if (recAllergies) recAllergies.textContent = patient.allergies || 'None recorded';
  const recICE = document.getElementById('patientRecordICE');
  if (recICE) recICE.textContent = patient.emergencyContact || 'Desk B';

  const recDisease = document.getElementById('patientRecordDisease');
  if (recDisease) recDisease.textContent = patient.disease || patient.condition || 'Fever';
  const recSymptoms = document.getElementById('patientRecordSymptoms');
  if (recSymptoms) recSymptoms.textContent = patient.symptoms || 'Fever, headache, body pain';
  const recWard = document.getElementById('patientRecordRoom');
  if (recWard) recWard.textContent = patient.room || 'Ward 3B, Bed 12';
  const recNotes = document.getElementById('patientRecordNotes');
  if (recNotes) recNotes.textContent = patient.notes || 'Routine follow-up prescribed by attending physician.';

  // 6. ACCOUNT SCREEN
  const profName = document.getElementById('profilePatientName');
  if (profName) profName.textContent = patient.name;
  const profContact = document.getElementById('profilePatientContact');
  if (profContact) profContact.textContent = `${patient.email || 'patient@mediguid.health'} • ${patient.phone || ''}`;
  const profBadge = document.getElementById('profileHospitalBadge');
  if (profBadge) profBadge.textContent = `${patient.hospitalName || 'MediGuid Hospital'} • ${patient.id}`;
  const profAvatar = document.getElementById('profileUserAvatar');
  if (profAvatar && patient.avatar) profAvatar.src = patient.avatar;

  // 7. DISCHARGE SUMMARY SCREEN & DASHBOARD BANNER
  if (typeof populateDischargeSummaryInPatientPortal === 'function') {
    populateDischargeSummaryInPatientPortal(patient);
  }
}

// --------------------------------------------------------------------------
// 5. HOSPITAL CENTRAL PHARMACY REAL-TIME STOCK AVAILABILITY
// (NO Cart, NO Buy Buttons, Only Available or Not Available)
// --------------------------------------------------------------------------
function renderPharmacyStock(category = 'All') {
  const container = document.getElementById('pharmacyStockGrid');
  if (!container) return;

  let list = (typeof MEDICAL_MEDICINES_CATALOG !== 'undefined' && Array.isArray(MEDICAL_MEDICINES_CATALOG))
    ? MEDICAL_MEDICINES_CATALOG
    : [];

  if (category && category !== 'All') {
    const catLower = category.toLowerCase().trim();
    list = list.filter(item => {
      const itemCat = (item.category && item.category.en) ? item.category.en.toLowerCase() : '';
      return itemCat.includes(catLower) || catLower.includes(itemCat);
    });
  }

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 24px;">No medicines matching "${category}".</p>`;
    return;
  }

  container.innerHTML = list.map(med => {
    const stock = getMedicineStockStatus(med.id);
    const name = (med.name && med.name.en) ? med.name.en : med.genericName;
    const cat = (med.category && med.category.en) ? med.category.en : 'General';
    const purpose = (med.purpose && med.purpose.en) ? med.purpose.en : (med.description && med.description.en ? med.description.en : '');
    const imageSrc = med.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';

    return `
      <div class="card-white hospital-stock-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 14px; border-radius: var(--radius-card-sm, 16px); border: 1px solid rgba(216, 239, 233, 0.8);">
        <div>
          <div style="position: relative; height: 110px; border-radius: 12px; overflow: hidden; margin-bottom: 10px; background: var(--light-mint);">
            <img src="${imageSrc}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';"/>
            <span class="badge-pill badge-mint" style="position: absolute; top: 6px; left: 6px; font-size: 0.68rem; background: rgba(255,255,255,0.92);">${cat}</span>
          </div>

          <div style="margin-bottom: 6px;">
            ${stock.badgeHtml}
          </div>

          <h4 style="font-size: 0.96rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">${name}</h4>
          <div style="font-size: 0.76rem; color: var(--text-muted); margin-bottom: 6px;">${med.genericName}</div>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.35; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${purpose}</p>
          <div style="font-size: 0.72rem; color: var(--dark-teal); font-weight: 600; margin-bottom: 12px;">
            📍 ${stock.location}
          </div>
        </div>

        <div>
          <button class="btn-pill btn-pill-secondary btn-pill-sm" style="width: 100%; font-weight: 700;" onclick="openMedicineDetails('${med.id}')">
            View Details
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (typeof renderAllIcons === 'function') {
    renderAllIcons(container);
  }
}

// --------------------------------------------------------------------------
// 5. EMERGENCY SOS TRIGGER & CANCEL FLOW
// --------------------------------------------------------------------------
function triggerEmergencySOS() {
  const modal = document.getElementById('sosCountdownModal');
  if (!modal) return;

  modal.classList.add('open');
  AppState.sosRemainingSeconds = 3;
  const timerEl = document.getElementById('sosTimerCount');
  if (timerEl) timerEl.textContent = AppState.sosRemainingSeconds;

  clearInterval(AppState.sosCountdownInterval);
  AppState.sosCountdownInterval = setInterval(() => {
    AppState.sosRemainingSeconds -= 1;
    if (timerEl) timerEl.textContent = AppState.sosRemainingSeconds;

    if (AppState.sosRemainingSeconds <= 0) {
      clearInterval(AppState.sosCountdownInterval);
      closeModal('sosCountdownModal');
      dispatchEmergencyResponse();
    }
  }, 1000);
}

function cancelEmergencySOS() {
  clearInterval(AppState.sosCountdownInterval);
  closeModal('sosCountdownModal');
  showToast('SOS dispatch cancelled safely.', 'info');
}

function dispatchEmergencyResponse() {
  showToast('🚨 SOS DISPATCH ACTIVATED! Ambulance #108 notified & GPS coordinates sent to David Carter.', 'emergency');
}

function callHospital(name, phone) {
  showToast(`Dialing ${name} (${phone})...`, 'emergency');
}

// --------------------------------------------------------------------------
// 6. VIDEO CALL CONTROLS
// --------------------------------------------------------------------------
function toggleMuteCall(btn) {
  const isMuted = btn.classList.toggle('active-muted');
  btn.style.background = isMuted ? 'var(--color-emergency)' : 'rgba(255, 255, 255, 0.25)';
  showToast(isMuted ? 'Microphone muted' : 'Microphone unmuted', 'info');
}

function toggleVideoCall(btn) {
  const isOff = btn.classList.toggle('active-off');
  btn.style.background = isOff ? 'var(--color-emergency)' : 'rgba(255, 255, 255, 0.25)';
  showToast(isOff ? 'Camera turned off' : 'Camera turned on', 'info');
}

function endTeleconsultation() {
  showToast('Consultation ended. Digital prescription saved to Health Records.', 'success');
  navigateTo('dashboard');
}

// --------------------------------------------------------------------------
// 7. MODAL UTILITIES
// --------------------------------------------------------------------------
function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('open');
}

// --------------------------------------------------------------------------
// 8. DISCHARGE DROPZONE EVENT LISTENERS & MODULE EXPORTS
// --------------------------------------------------------------------------
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const dropzone = document.getElementById('dischargeDropZone');
    if (dropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('dragover');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('dragover');
        }, false);
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
          handleDischargeFileSelected({ target: { files: files } });
        }
      }, false);
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DISCHARGE_SAMPLE_PRESETS,
    extractDischargeSummaryData,
    testDischargeSample,
    clearDischargeUpload,
    executeDischargeAnalysis,
    toggleDischargeEdit,
    handleConfirmDischargePatient,
    populateDischargeSummaryInPatientPortal,
    openRegisteredPatientPortal,
    pushNavigationState,
    handlePopState,
    parseAndApplyHash,
    selectPortal,
    returnToPortalSelection,
    hospNavigateTo,
    patientNavigateTo
  };
}



/**
 * MediGuid - Core Application Controller, Router & Initializer
 */

let currentScreen = 'dashboard';

// Screen mapping for bottom navigation highlighting
const BOTTOM_NAV_MAP = {
  'dashboard': 'nav-home',
  'guidance': 'nav-guidance',
  'chat': 'nav-chat',
  'doctors': 'nav-appointments',
  'appointment': 'nav-appointments',
  'doctor-contact': 'nav-appointments',
  'profile': 'nav-profile',
  'patient-details': 'nav-profile'
};

/**
 * Navigate to a specific screen
 * @param {string} screenId 
 */
/**
 * Navigate to a specific screen (delegates based on portal prefix)
 * @param {string} screenId 
 */
function navigateTo(screenId) {
  if (screenId.startsWith('hosp-')) {
    if (typeof hospNavigateTo === 'function') hospNavigateTo(screenId);
  } else {
    if (typeof patientNavigateTo === 'function') patientNavigateTo(screenId);
  }
}

/**
 * Toggle between Mobile phone frame and Responsive wide mode
 */
function toggleViewMode() {
  const container = document.getElementById('deviceContainer');
  const btn = document.getElementById('viewToggleBtn');
  if (!container) return;

  const isResponsive = container.classList.toggle('mode-responsive');
  if (btn) {
    btn.innerHTML = isResponsive 
      ? `${getIcon('phone', 16)} Mobile Frame` 
      : `${getIcon('refresh', 16)} Wide View`;
  }
}

/**
 * Update phone mockup status bar clock
 */
function updateStatusBarClock() {
  const clockEl = document.getElementById('phoneClock');
  if (!clockEl) return;

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  clockEl.textContent = `${hours}:${minutes}`;
}

/**
 * Filter medicines on dashboard/pharmacy search
 */
function handleGlobalSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return;

  // If query sounds like a doctor, navigate to doctors
  if (q.includes('dr') || q.includes('cardio') || q.includes('doctor') || q.includes('physician')) {
    navigateTo('doctors');
    renderDoctorsDirectory(q.includes('cardio') ? 'Cardiology' : 'All');
  } else {
    // Navigate to hospital pharmacy stock
    navigateTo('stock');
    const container = document.getElementById('pharmacyStockGrid');
    if (!container) return;

    let catalog = (typeof MEDICAL_MEDICINES_CATALOG !== 'undefined' && Array.isArray(MEDICAL_MEDICINES_CATALOG))
      ? MEDICAL_MEDICINES_CATALOG
      : [];

    const filtered = catalog.filter(item => {
      const nameEn = (item.name && item.name.en) ? item.name.en.toLowerCase() : '';
      const nameTa = (item.name && item.name.ta) ? item.name.ta.toLowerCase() : '';
      const gen = item.genericName ? item.genericName.toLowerCase() : '';
      const cat = (item.category && item.category.en) ? item.category.en.toLowerCase() : '';
      const brands = (item.brandExamples || []).map(b => b.toLowerCase()).join(' ');
      return nameEn.includes(q) || nameTa.includes(q) || gen.includes(q) || cat.includes(q) || brands.includes(q);
    });

    if (filtered.length > 0) {
      container.innerHTML = filtered.map(med => {
        const stock = getMedicineStockStatus(med.id);
        const name = (med.name && med.name.en) ? med.name.en : med.genericName;
        const cat = (med.category && med.category.en) ? med.category.en : 'General';
        const purpose = (med.purpose && med.purpose.en) ? med.purpose.en : (med.description && med.description.en ? med.description.en : '');
        const imageSrc = med.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';

        return `
          <div class="card-white hospital-stock-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 14px; border-radius: var(--radius-card-sm, 16px); border: 1px solid rgba(216, 239, 233, 0.8);">
            <div>
              <div style="position: relative; height: 110px; border-radius: 12px; overflow: hidden; margin-bottom: 10px; background: var(--light-mint);">
                <img src="${imageSrc}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600';"/>
                <span class="badge-pill badge-mint" style="position: absolute; top: 6px; left: 6px; font-size: 0.68rem; background: rgba(255,255,255,0.92);">${cat}</span>
              </div>

              <div style="margin-bottom: 6px;">
                ${stock.badgeHtml}
              </div>

              <h4 style="font-size: 0.96rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">${name}</h4>
              <div style="font-size: 0.76rem; color: var(--text-muted); margin-bottom: 6px;">${med.genericName}</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.35; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${purpose}</p>
              <div style="font-size: 0.72rem; color: var(--dark-teal); font-weight: 600; margin-bottom: 12px;">
                📍 ${stock.location}
              </div>
            </div>

            <div>
              <button class="btn-pill btn-pill-secondary btn-pill-sm" style="width: 100%; font-weight: 700;" onclick="openMedicineDetails('${med.id}')">
                View Details
              </button>
            </div>
          </div>
        `;
      }).join('');
    } else {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 24px;">No hospital pharmacy items matching "${query}".</p>`;
    }
  }
}

// --------------------------------------------------------------------------
// INITIALIZATION ON DOM READY
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all SVG line icons
  renderAllIcons();

  // 2. Setup clock
  updateStatusBarClock();
  setInterval(updateStatusBarClock, 10000);

  // 3. Initialize data
  renderMedicationList();
  renderMedicationGuidanceList();
  if (typeof initMedicineCatalog === 'function') initMedicineCatalog();
  renderDoctorsDirectory('All');
  renderPharmacyStock('All');
  updateMedicationUI();

  // 4. Initialize AI Chat engine and prompt pills
  if (typeof aiChatEngine !== 'undefined' && aiChatEngine.init) {
    aiChatEngine.init();
  }

  // 5. Chat Input listener
  const chatInput = document.getElementById('chatInputField');
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (typeof aiChatEngine !== 'undefined' && aiChatEngine.sendMessage) aiChatEngine.sendMessage();
      }
    });
  }

  // 6. Global Search bar listeners
  const dashSearch = document.getElementById('dashSearchInput');
  if (dashSearch) {
    dashSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleGlobalSearch(dashSearch.value);
      }
    });
  }

  // 7. Check Active Portal & Initialize Application Router
  if (typeof window !== 'undefined' && window.location.hash && window.location.hash.length > 2) {
    if (typeof parseAndApplyHash === 'function') {
      parseAndApplyHash(true);
    }
  } else {
    const activePortal = localStorage.getItem('activePortal') || 'select';
    if (typeof selectPortal === 'function') {
      selectPortal(activePortal, false);
    }
  }
});

