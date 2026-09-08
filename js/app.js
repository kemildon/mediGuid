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

  // 7. Check Active Portal & Initialize Application
  const activePortal = localStorage.getItem('activePortal') || 'select';
  if (typeof selectPortal === 'function') {
    selectPortal(activePortal);
  }
});
