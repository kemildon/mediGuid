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

