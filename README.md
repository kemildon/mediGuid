# MediGuid — Healthcare & Medication Guidance Platform

🌐 **Live Public Website**: **[https://kemildon.github.io/mediGuid/](https://kemildon.github.io/mediGuid/)**  
*(Accessible from any device, system, smartphone, or browser globally with zero setup)*

> **Pure Client-Side Frontend Architecture**: Zero backend dependencies. Runs completely in a single terminal via Vite or directly on GitHub Pages.
> **Design System**: Pastel Mint `#D8EFE9`, Vibrant Medical Teal `#20B2AA`, Dark Teal `#168F8A`, Light Mint `#EAF7F4`, White Rounded Cards, Soft Elevation Shadows, Pill Buttons, and Minimal Medical Line Icons.

---

## ⚡ Quick Start (Single Terminal)

You only need **ONE** terminal to run the complete MediGuid application. No backend or database required!

### Option 1: Modern Frontend Dev Server (Recommended)
```bash
npm run dev
```
Starts the high-speed Vite dev server with instant Hot Module Reloading (HMR) at:
**`http://localhost:5173`**

### Option 2: Start & Auto-Open Browser
```bash
npm start
```
Starts the frontend dev server and automatically launches your default browser.

### Option 3: Windows One-Click Launcher
Double-click **`start.bat`** (or run `.\start.bat` in PowerShell).

### Option 4: Direct Browser Execution
Open `index.html` directly in any modern web browser.

---

## 🏥 Dual Healthcare Portals & All Application Features

### 1. Dual Portal Selector (Desktop Landing Screen)
- **Hospital Clinical Portal**: Designed for doctors and clinical staff to manage inpatient admissions, discharge summaries, and ward bed allocations.
- **Patient Health Companion Portal**: Dedicated personal healthcare portal for patients (Sarah Carter, `#MG-9482`) with medication tracking, teleconsultation, and clinical guidance.

### 2. Hospital Management Portal
- **Real-Time Ward Overview**: Active patient admissions, bed occupancy, doctor roster, and critical alerts.
- **Discharge Summary OCR & Document Center**: High-resolution clinical discharge previews with simulated OCR extraction, download, and print capabilities.
- **Bed Status & Emergency Admission Trackers**: Instant status toggles and patient intake recording.

### 3. Patient Health Companion Portal
- **Dashboard (`#dashboard`)**: Daily medication adherence circular progress indicator (e.g. *2 of 4 doses taken - 50%*), one-tap dose check-off, upcoming teleconsultation card, and daily cardiovascular tips.
- **Patient Details (`#patient-details`)**: Patient ID `#MG-9482`, blood group `O+`, vitals telemetry (Heart Rate 72 bpm, BP 118/76 mmHg, SpO2 98%), critical allergies, and primary physician contact.
- **Medication Schedule & Timeline (`#guidance`)**: Morning (08:00 AM), Afternoon (01:00 PM), Evening (08:30 PM), Bedtime (10:30 PM) schedule with food relationship badges and drug interaction warning alerts.
- **MediBot AI Clinical Assistant (`#chat`)**: Pure client-side bilingual clinical consultation (English + Tamil + Tanglish). Covers 38 conditions with zero external AI API required.
- **Voice Assistant (`voice.js`)**: Speech recognition (STT) and clinical speech synthesis (TTS) powered entirely by the browser's Web Speech API.
- **Pharmacy Catalog & Cart (`#stock`)**: Medicine search, stock status badges, category filters, quantity counter, and sliding checkout drawer.
- **Doctors Directory (`#doctors`)**: Specialist directory with credentials, star ratings, and instant appointment booking.
- **Appointment Booking (`#appointment`)**: In-clinic / video call selector, interactive calendar, and time-slot booking.
- **Doctor Teleconsultation (`#doctor-contact`)**: Simulated video consultation interface with doctor stream, PIP preview, and clinical chat.
- **Emergency SOS (`#emergency`)**: 3-second safety countdown, direct 108/911 emergency dispatch, and nearby trauma centers list.

---

## 📁 Project Architecture

```
mediGuid/
├── index.html            # Main SPA entry point (Dual Portals: Hospital & Patient)
├── style.css             # Root stylesheet
├── app.js                # Consolidated frontend application script
├── medicalKnowledge.js   # 38 clinical conditions, bilingual NLP engine
├── medicalMedicines.js   # 33 verified medications catalog & stock index
├── voice.js              # Speech recognition & synthesis manager
├── vite.config.js        # Vite frontend server configuration
├── package.json          # Frontend scripts (npm run dev, npm start, npm run build)
├── start.bat             # Single-terminal Windows launcher
├── css/                  # Stylesheets workspace
│   ├── style.css         # Complete stylesheet
│   ├── design-system.css # Color tokens & typography
│   ├── components.css    # Cards, pills, buttons, navigation
│   └── screens.css       # Screen layouts & modals
├── js/                   # Scripts workspace
│   ├── app.js            # Main application router
│   ├── chat.js           # MediBot chat engine
│   ├── data.js           # Clinical mock records
│   ├── icons.js          # SVG icon library
│   ├── interactions.js   # Event listeners & dose tracker
│   ├── medicalKnowledge.js
│   ├── medicalMedicines.js
│   └── voice.js
├── frontend/             # Standalone frontend application package
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── medicalKnowledge.js
│   ├── medicalMedicines.js
│   ├── voice.js
│   └── package.json
└── scratch/              # Development testing & validation tools
```
