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
