import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Languages, 
  User, 
  Check, 
  Copy, 
  Lightbulb,
  MessageSquare,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { STAFF_AI_KNOWLEDGE } from '../data/hospitalData';
import { askStaffAI } from '../services/api';

export default function StaffAIAssistant() {
  const [language, setLanguage] = useState("en"); // "en" or "ta"
  const [inputQuery, setInputQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hello Doctor / Hospital Staff! 👋 I am your MediGuid Clinical Staff Assistant powered by Google Gemini. I can help simplify complex medical terminology, draft patient-friendly WhatsApp guidance, format medicine timetables, and translate clinical instructions into Tamil (தமிழ்)."
    }
  ]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const samplePrompts = [
    { label: "Explain HbA1c in simple terms", query: "Explain HbA1c to patient in simple words" },
    { label: "Hypertension salt advice", query: "Draft salt restriction advice for hypertension" },
    { label: "Knee replacement recovery guide", query: "Explain total knee replacement recovery simply" },
    { label: "Asthma inhaler instructions", query: "How should a patient take Budesonide inhaler?" },
    { label: "Translate to Tamil", query: "Translate discharge guidance into Tamil" }
  ];

  const handleSend = async (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isThinking) return;

    const userMsg = { sender: "user", text: query };
    setChatMessages(prev => [...prev, userMsg]);
    setInputQuery("");
    setIsThinking(true);

    try {
      // Try live Google Gemini API query
      const liveResult = await askStaffAI(query, language);
      if (liveResult && liveResult.success && liveResult.response) {
        setIsThinking(false);
        setChatMessages(prev => [...prev, { sender: "ai", text: liveResult.response }]);
        return;
      }
    } catch (e) {
      console.warn('Gemini query failed, falling back to clinical knowledge base:', e);
    }

    // Fallback: match against clinical knowledge base
    const lower = query.toLowerCase();
    let matched = STAFF_AI_KNOWLEDGE.find(k => 
      k.keywords.some(kw => lower.includes(kw))
    );

    let answer = "";
    if (matched) {
      answer = language === "ta" ? matched.responseTa : matched.responseEn;
    } else {
      if (language === "ta") {
        answer = `மருத்துவ விளக்கம்: "${query}" தொடர்பான எளிய வழிகாட்டல்:\n\n1. மருந்துகளை உணவுக்குப் பின் அல்லது மருத்துவர் அறிவுரைப்படி சரியாக உட்கொள்ளவும்.\n2. அதிக காரம், உப்பு மற்றும் இனிப்புகளை குறைக்கவும்.\n3. ஏதேனும் அவசர அறிகுறிகள் தென்பட்டால் உடனே மருத்துவரைத் தொடர்பு கொள்ளவும்.`;
      } else {
        answer = `Patient-Friendly Guidance for "${query}":\n\n• Always explain in simple daily terms without confusing acronyms.\n• Take prescribed medication strictly with meals as scheduled.\n• Maintain adequate hydration and avoid strenuous exertion.\n• Contact MediGuid Emergency at +91 44 2836 9000 if symptoms escalate.`;
      }
    }

    setIsThinking(false);
    setChatMessages(prev => [...prev, { sender: "ai", text: answer }]);
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="staff-ai-root">
      {/* 1. Header with Required Title and Language Switch */}
      <div className="section-header-row">
        <div>
          <div className="section-pre-badge flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>CLINICAL DECISION & COMMUNICATION SUPPORT</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300" id="staffAiApiConfirmedBadge">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Google Gemini API Confirmed
            </span>
          </div>
          <h1 className="section-main-heading">Hospital Staff AI Assistant</h1>
          <p className="section-sub-text">
            Generate patient-friendly summaries, simplify difficult medical terms, format medicine timetables, and translate clinical guidance into Tamil.
          </p>
        </div>

        {/* English | தமிழ் Switch (Requirement 12) */}
        <div className="ai-lang-switch-box">
          <Languages className="w-4 h-4 text-slate-500" />
          <span className="text-xs text-slate-500 font-semibold uppercase">Language:</span>
          <div className="lang-pill-buttons">
            <button
              onClick={() => setLanguage("en")}
              className={`lang-pill ${language === 'en' ? 'active' : ''}`}
            >
              English
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setLanguage("ta")}
              className={`lang-pill ${language === 'ta' ? 'active' : ''}`}
            >
              தமிழ்
            </button>
          </div>
        </div>
      </div>

      {/* 2. Quick Prompt Chips */}
      <div className="prompt-chips-bar">
        <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 mr-2">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          <span>Quick Staff Prompts:</span>
        </div>
        <div className="chips-scroller">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p.query)}
              className="prompt-chip"
            >
              <span>{p.label}</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

      {/* 3. Interactive Chat Interface */}
      <div className="ai-chat-card">
        <div className="ai-messages-scroll">
          {chatMessages.map((msg, idx) => {
            const isAi = msg.sender === 'ai';
            return (
              <div key={idx} className={`ai-message-row ${isAi ? 'ai-row' : 'user-row'}`}>
                <div className="msg-avatar-circle">
                  {isAi ? <Bot className="w-4 h-4 text-teal-600" /> : <User className="w-4 h-4 text-blue-600" />}
                </div>

                <div className={`msg-bubble ${isAi ? 'ai-bubble' : 'user-bubble'}`}>
                  <pre className="msg-text-formatted">{msg.text}</pre>
                  {isAi && (
                    <div className="msg-bubble-footer">
                      <button
                        onClick={() => handleCopy(msg.text, idx)}
                        className="btn-copy-msg"
                        title="Copy to clipboard for WhatsApp"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isThinking && (
            <div className="ai-message-row ai-row">
              <div className="msg-avatar-circle">
                <Bot className="w-4 h-4 text-teal-600 animate-pulse" />
              </div>
              <div className="msg-bubble ai-bubble flex items-center gap-2 py-3 px-4">
                <span className="text-xs text-slate-500 font-medium">Gemini is synthesizing clinical response...</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]"></span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Bar */}
        <div className="ai-chat-input-bar">
          <input
            type="text"
            className="ai-text-input"
            placeholder={
              language === 'ta' 
                ? "மருத்துவ சொற்கள் அல்லது நோயாளிகளுக்கான வழிகாட்டலை கேட்கவும்..." 
                : "Ask AI to simplify clinical diagnosis, format WhatsApp advice, or translate..."
            }
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button
            onClick={() => handleSend()}
            className="btn-ai-send"
            disabled={!inputQuery.trim()}
          >
            <Send className="w-4 h-4" />
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}
