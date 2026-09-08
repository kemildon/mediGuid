/**
 * MediGuid - Bilingual Voice Assistant Manager
 * Encapsulates browser-native SpeechRecognition (STT) and SpeechSynthesis (TTS).
 * Supports English (en-IN) and Tamil (ta-IN).
 * Zero external API dependency.
 */

class VoiceAssistantManager {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.isSpeaking = false;
    this.currentLang = 'en';
    this.activeUtterance = null;
    this.availableVoices = [];

    // Callbacks
    this.onStateChange = null; // (stateKey, messageText, isListening)
    this.onResult = null;      // (transcriptText)
    this.onError = null;       // (errorMessage)

    this.initSpeechRecognition();
    this.initSpeechSynthesis();
  }

  /**
   * Initialize Web Speech API SpeechRecognition
   */
  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('SpeechRecognition is not supported in this browser environment.');
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.notifyState('listening', this.currentLang === 'ta' ? 'கேட்கிறது...' : 'Listening...', true);
      };

      this.recognition.onaudiostart = () => {
        if (this.isListening) {
          this.notifyState('listening', this.currentLang === 'ta' ? 'கேட்கிறது...' : 'Listening...', true);
        }
      };

      this.recognition.onspeechend = () => {
        this.notifyState('processing', this.currentLang === 'ta' ? 'செயலாக்குகிறது...' : 'Processing...', true);
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.notifyState('recognized', this.currentLang === 'ta' ? 'பேச்சு உணரப்பட்டது' : 'Speech recognized', false);
        if (typeof this.onResult === 'function') {
          this.onResult(transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition event error:', event.error);
        this.isListening = false;
        let errDesc = 'Microphone error. Please type your query.';
        if (event.error === 'not-allowed') {
          errDesc = 'Microphone permission denied. Please allow microphone access.';
        } else if (event.error === 'no-speech') {
          errDesc = 'No speech detected. Please try speaking again.';
        }

        this.notifyState('idle', this.currentLang === 'ta' ? 'பேச தட்டவும்' : 'Tap to speak', false);
        if (typeof this.onError === 'function') {
          this.onError(errDesc);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        setTimeout(() => {
          this.notifyState('idle', this.currentLang === 'ta' ? 'பேச தட்டவும்' : 'Tap to speak', false);
        }, 1200);
      };
    } catch (e) {
      console.error('Error initializing SpeechRecognition:', e);
      this.recognition = null;
    }
  }

  /**
   * Initialize Web Speech API SpeechSynthesis
   */
  initSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported in this browser environment.');
      return;
    }

    const loadVoices = () => {
      this.availableVoices = window.speechSynthesis.getVoices() || [];
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Notify state change callback
   */
  notifyState(stateKey, messageText, isListening) {
    if (typeof this.onStateChange === 'function') {
      this.onStateChange(stateKey, messageText, isListening);
    }
  }

  /**
   * Start recording user voice
   */
  startListening(lang = 'en') {
    // Stop any ongoing speech output first
    this.stopSpeaking();

    if (!this.recognition) {
      const msg = 'Speech recognition is not supported in your browser. Please type your query.';
      if (typeof this.onError === 'function') {
        this.onError(msg);
      }
      return;
    }

    if (this.isListening) {
      return;
    }

    this.currentLang = lang;
    this.recognition.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';

    try {
      this.recognition.start();
    } catch (err) {
      console.warn('Recognition start exception:', err);
      try {
        this.recognition.abort();
        setTimeout(() => this.recognition.start(), 100);
      } catch (e) {
        console.error('Failed to restart recognition:', e);
      }
    }
  }

  /**
   * Stop recording
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        console.warn('Error stopping recognition:', e);
      }
      this.isListening = false;
    }
    this.notifyState('idle', this.currentLang === 'ta' ? 'பேச தட்டவும்' : 'Tap to speak', false);
  }

  /**
   * Toggle recording state
   */
  toggleListening(lang = 'en') {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening(lang);
    }
  }

  /**
   * Convert markdown/clinical formatting into natural conversational speech text
   */
  cleanMarkdownForSpeech(markdown) {
    if (!markdown) return '';
    return markdown
      .replace(/###\s*(.*)/g, '$1. ')               // headings
      .replace(/\*\*(.*?)\*\*/g, '$1')              // bold
      .replace(/\*(.*?)\*/g, '$1')                  // italics
      .replace(/•\s*(.*)/g, '$1. ')                 // bullet points
      .replace(/^[0-9]+\.\s*(.*)/gm, '$1. ')        // numbered lists
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '') // emojis
      .replace(/<[^>]*>/g, ' ')                     // HTML tags
      .replace(/https?:\/\/\S+/g, '')               // links
      .replace(/\s+/g, ' ')                         // extra spaces
      .trim();
  }

  /**
   * Speak clinical response aloud using SpeechSynthesis
   */
  speak(text, lang = 'en', onStartCallback, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is unavailable.');
      return;
    }

    // Cancel any previous speech
    this.stopSpeaking();

    const cleanText = this.cleanMarkdownForSpeech(text);
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    this.activeUtterance = utterance;

    // Set utterance language
    const voiceLang = lang === 'ta' ? 'ta-IN' : 'en-IN';
    utterance.lang = voiceLang;
    utterance.rate = lang === 'ta' ? 0.95 : 1.0; // Slightly slower for clear Tamil articulation
    utterance.pitch = 1.0;

    // Find the most suitable voice
    if (this.availableVoices.length === 0) {
      this.availableVoices = window.speechSynthesis.getVoices() || [];
    }

    if (this.availableVoices.length > 0) {
      let selectedVoice = null;
      if (lang === 'ta') {
        selectedVoice = this.availableVoices.find(v => v.lang && v.lang.toLowerCase().startsWith('ta')) ||
                        this.availableVoices.find(v => v.name && v.name.toLowerCase().includes('tamil'));
      } else {
        selectedVoice = this.availableVoices.find(v => v.lang && v.lang.toLowerCase().startsWith('en-in')) ||
                        this.availableVoices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (typeof onStartCallback === 'function') onStartCallback();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.activeUtterance = null;
      if (typeof onEndCallback === 'function') onEndCallback();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      this.isSpeaking = false;
      this.activeUtterance = null;
      if (typeof onEndCallback === 'function') onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
  }

  /**
   * Stop active speech synthesis immediately
   */
  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.activeUtterance = null;
  }
}

// Global Voice Manager instance
const voiceAssistant = new VoiceAssistantManager();
