# MediGuid — Healthcare & Medication Guidance Application

> **Design System:** Pastel Mint `#D8EFE9`, Vibrant Medical Teal `#20B2AA`, Dark Teal `#168F8A`, Light Mint `#EAF7F4`, White Surfaces, Large Rounded Corners (20–28px), Soft Shadows, Pill Buttons, and Minimal Medical Line Icons.

---

## 🌟 Overview

**MediGuid** is a unified healthcare and medication management application built to provide patients with an intuitive, calm, and reassuring medical companion. Every screen strictly follows the medical design system:

- **Pastel Mint Background (`#D8EFE9`)**: Soft, fresh, and glare-free background with subtle gradient accents.
- **Primary Teal (`#20B2AA`) & Dark Teal (`#168F8A`)**: Interactive buttons, active navigation states, selected calendar dates, and featured highlights.
- **Light Mint (`#EAF7F4`)**: Circular icon containers and pill badges.
- **White Rounded Cards (`#FFFFFF`)**: 20–28px border-radii with soft elevation shadows.
- **Clean Typography**: High legibility powered by Plus Jakarta Sans / Poppins.
- **Minimal Medical Line Icons**: Lucide outline-style icons with zero emoji clutter.
- **Floating Rounded Bottom Navigation Bar**: Fixed floating bar with circular icon containers for seamless switching between core tabs.

---

## 📱 The 11 Connected Application Screens

1. **Dashboard (`#dashboard`) — Flagship Screen**:
   - Patient greeting for Sarah Carter with avatar and unread notification bell.
   - Global search for medicines, symptoms, or doctors.
   - Featured Daily Medication Card in teal gradient with live SVG progress ring (e.g. *2 of 4 doses taken - 50%*).
   - Today's medication checklist with instant check-off feedback.
   - Quick-Access Grid (Guidance, AI Doctor, Doctors, Emergency SOS).
   - Upcoming doctor consultation card with direct teleconsultation join action.
   - Daily cardiovascular & hydration tip card.

2. **Patient Details (`#patient-details`)**:
   - Header with patient photo, patient ID (`#MG-9482`), blood group `O+`, age 28, gender Female.
   - Vitals grid: Heart Rate (72 bpm), Blood Pressure (118/76 mmHg), Blood Glucose (95 mg/dL), Blood Oxygen (98% SpO2).
   - Critical allergy warning card (Penicillin, Sulfa drugs).
   - Primary care physician and ICE emergency contact details.

3. **Medication Guidance (`#guidance`)**:
   - Protocol banner with adherence progress.
   - Schedule grouped by Morning (08:00 AM), Afternoon (01:00 PM), Evening (08:30 PM), and Bedtime (10:30 PM).
   - Connected vertical timeline with teal node circles.
   - Detailed medicine cards with dosage, remaining count, before/after food pill badges.
   - Drug interaction safety checker card with advice on food/grapefruit interactions.

4. **AI Medical Chatbot (`#chat`) — MediBot**:
   - Clean medical conversation interface with online clinical status.
   - Quick prompt suggestion pills for instant questions (*Side effects of Metformin*, *Paracetamol + Amoxicillin safety*, *Missed dose protocol*, *Headache symptoms*).
   - Clinically structured responses with recommendations, cautions, and dosage rules.
   - Simulated prescription attachment and message dispatch.

5. **Pharmacy & Stock Catalog (`#stock`)**:
   - Instant search bar and category filter pills (*All Items*, *Antibiotics*, *Chronic Care*, *Pain Relief*, *Vitamins*).
   - Medicine cards with stock levels (*In Stock* vs *Low Stock (8 left)*), Rx required tags, and prices.
   - Quantity counter and "Add to Cart" button.
   - Sticky floating cart indicator with item count, total price, and express checkout drawer.

6. **Doctors Directory (`#doctors`)**:
   - Featured doctor hero banner in teal gradient with large doctor image and rating badge (*Dr. Evelyn Reed - Cardiologist*).
   - Specialty filter chips (*Cardiology*, *Neurology*, *General Medicine*, *Pediatrics*).
   - Doctor cards with circular avatars, specialty, experience, star rating badge, and circular light-mint arrow buttons.

7. **Appointment Booking (`#appointment`)**:
   - Selected doctor summary card and consultation fee.
   - Consultation mode selector (*In-Clinic*, *Video Call*, *Audio Call*).
   - Horizontal scrollable calendar date picker with teal active selector.
   - Time slot grid (*09:30 AM*, *11:00 AM*, *02:15 PM*, *03:30 PM*, *04:45 PM*, *06:00 PM*).
   - Patient symptom note textarea and "Confirm Appointment" button triggering an animated confirmation modal.

8. **Doctor Contact & Teleconsultation (`#doctor-contact`)**:
   - Live video call interface with doctor stream, picture-in-picture patient preview, and live call timer.
   - Video call controls: Mute/Unmute microphone, Camera on/off, End call.
   - Direct consultation chat thread for prescription and instruction exchanges.

9. **Emergency SOS (`#emergency`)**:
   - High-visibility emergency header.
   - Massive red pulsating SOS button (`#EF5350`) with an animated 3-second countdown modal to prevent accidental activation.
   - 1-tap emergency dispatch buttons: Call 108 / 911, Alert ICE Contact with live GPS.
   - Nearby trauma hospitals list with driving times, distance (*0.8 km*), ER status, and direct call buttons.
   - Emergency Medical ID card.

10. **Orders & Delivery Tracking (`#orders`)**:
    - Active order tracking card with an animated 4-step delivery progress stepper (*Order Placed → Verified → Packed → Delivering*).
    - Courier arrival estimate (Marcus on Electric Bike - ETA 18 mins).
    - Prescribed medicines breakdown and payment summary.
    - Prescription upload dropzone card.

11. **Profile & Settings (`#profile`)**:
    - Patient health card with insurance details (*Aetna Premier Health*).
    - Navigation menu items to health vitals, prescription protocols, and order invoices.
    - Preferences for pill reminder alarms, biometric security FaceID toggle, and emergency contacts.

---

## 🚀 How to Run

### Option 1: Direct File Open
Simply double-click **`index.html`** in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option 2: Local Python Server
Run the included Python server script:
```powershell
python server.py
```
This starts a local HTTP server at `http://localhost:8000` and automatically opens your default browser.

---

## 🛠️ Project Structure

```
mediGuid/
├── index.html                 # Main SPA entry point containing all 11 screens & modals
├── css/
│   ├── design-system.css      # Palette tokens, pastel mint background, typography, soft shadows
│   ├── components.css         # White cards, pill buttons, circular icons, floating bottom nav
│   └── screens.css            # Screen layouts (Dashboard, Guidance, Chat, Emergency, etc.)
├── js/
│   ├── icons.js               # Embedded clean Lucide medical line SVG icons
│   ├── data.js                # Clinical datasets (medications, doctors, vitals, stock)
│   ├── chat.js                # AI Doctor chatbot engine with clinical responses
│   ├── interactions.js        # Doses toggle, cart checkout, SOS countdown, booking flow
│   └── app.js                 # Router, screen navigation, bottom bar syncing, initialization
├── server.py                  # Zero-dependency local development server
└── README.md                  # Documentation
```
