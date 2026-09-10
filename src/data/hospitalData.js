// MediGuid Hospital Portal - Clinical Data & Sample Presets

export const INITIAL_PATIENTS = [
  {
    id: "MG-PAT-2026-081",
    name: "Arun",
    age: 52,
    gender: "Male",
    phone: "+91 98765 43210",
    diagnosis: "Type 2 Diabetes Mellitus",
    doctor: "Dr. R. K. Sharma, MD (Endocrinology)",
    hospital: "MediGuid Central Multi-Specialty Hospital",
    admissionDate: "02 September 2026",
    dischargeDate: "08 September 2026",
    uploadDate: "08 September 2026, 11:30 AM",
    processingStatus: "OCR Extraction Complete",
    guidanceStatus: "Ready to Send",
    whatsappStatus: "Pending Send",
    lastSentDate: null,
    medicines: [
      { name: "Metformin 500mg", dosage: "1 Tablet", frequency: "Twice daily", foodRelation: "After breakfast & dinner", duration: "90 Days" },
      { name: "Glimepiride 1mg", dosage: "1 Tablet", frequency: "Once daily", foodRelation: "Before breakfast", duration: "90 Days" },
      { name: "Atorvastatin 10mg", dosage: "1 Tablet", frequency: "Once daily at night", foodRelation: "After dinner", duration: "90 Days" }
    ],
    foodInstructions: "Follow a low carbohydrate and low sugar diet. Avoid sweetened beverages, sweets, and fried snacks. Eat high-fiber green leafy vegetables and whole grains.",
    dailyCare: "Check fasting blood sugar twice weekly. Engage in 30 minutes of brisk walking. Inspect feet daily for cuts or sores. Maintain adequate hydration.",
    warningSigns: "Sudden extreme dizziness, tremors, heavy sweating, confusion (hypoglycemia), or persistent blood sugar above 250 mg/dL.",
    followUpDate: "20 September 2026",
    emergencyInstructions: "If experiencing severe dizziness, sweating, or unconsciousness, administer 15g oral glucose immediately and contact Emergency at +91 44 2836 9000."
  },
  {
    id: "MG-PAT-2026-075",
    name: "Priya Sharma",
    age: 46,
    gender: "Female",
    phone: "+91 98412 34567",
    diagnosis: "Essential Hypertension (Stage 2)",
    doctor: "Dr. Arvind Swaminathan, MD (Cardiology)",
    hospital: "MediGuid Central Multi-Specialty Hospital",
    admissionDate: "03 September 2026",
    dischargeDate: "07 September 2026",
    uploadDate: "07 September 2026, 04:15 PM",
    processingStatus: "OCR Extraction Complete",
    guidanceStatus: "Guidance Sent",
    whatsappStatus: "✓ Sent on WhatsApp",
    lastSentDate: "07 September 2026, 04:45 PM",
    medicines: [
      { name: "Amlodipine 5mg", dosage: "1 Tablet", frequency: "Every morning", foodRelation: "After breakfast", duration: "60 Days" },
      { name: "Telmisartan 40mg", dosage: "1 Tablet", frequency: "Every night", foodRelation: "After dinner", duration: "60 Days" }
    ],
    foodInstructions: "Strict low sodium (DASH) diet. Strictly limit salt to under 1 teaspoon daily. Avoid pickles, papads, canned foods, and salty snacks.",
    dailyCare: "Record blood pressure daily morning and evening. Avoid sudden posture changes. Perform 20–30 minutes of mild walking.",
    warningSigns: "Severe throbbing headache, blurred vision, chest tightness, shortness of breath, or BP reading exceeding 180/110 mmHg.",
    followUpDate: "18 September 2026",
    emergencyInstructions: "In case of severe chest pain, radiating shoulder pain, or difficulty breathing, dial Emergency immediately: +91 44 2836 9000."
  },
  {
    id: "MG-PAT-2026-068",
    name: "Kavitha Raman",
    age: 63,
    gender: "Female",
    phone: "+91 97890 12345",
    diagnosis: "Right Total Knee Arthroplasty (Post-Op)",
    doctor: "Dr. S. Sundararajan, MS (Orthopedics)",
    hospital: "MediGuid Central Multi-Specialty Hospital",
    admissionDate: "28 August 2026",
    dischargeDate: "05 September 2026",
    uploadDate: "05 September 2026, 02:20 PM",
    processingStatus: "OCR Extraction Complete",
    guidanceStatus: "Guidance Sent",
    whatsappStatus: "✓ Sent on WhatsApp",
    lastSentDate: "05 September 2026, 03:00 PM",
    medicines: [
      { name: "Paracetamol 650mg", dosage: "1 Tablet", frequency: "Every 8 hours as needed", foodRelation: "After food", duration: "10 Days" },
      { name: "Cefuroxime 500mg", dosage: "1 Tablet", frequency: "Twice daily", foodRelation: "After meals", duration: "5 Days" },
      { name: "Aspirin 75mg", dosage: "1 Tablet", frequency: "Once daily", foodRelation: "After lunch", duration: "21 Days" }
    ],
    foodInstructions: "High protein diet with calcium and vitamin D rich foods (milk, paneer, eggs, legumes). Drink 2.5 liters of water daily.",
    dailyCare: "Keep surgical wound clean and completely dry. Perform guided knee flexion exercises 3 times daily using walker. Do not squat on the floor.",
    warningSigns: "Redness, swelling, heat or foul-smelling discharge around knee incision, fever above 101°F, or sudden calf pain.",
    followUpDate: "19 September 2026 (Suture Removal)",
    emergencyInstructions: "If you develop sudden chest pain, coughing blood, or severe leg swelling, contact Ortho Emergency immediately: +91 44 2836 9000."
  },
  {
    id: "MG-PAT-2026-059",
    name: "Rajesh Kannan",
    age: 38,
    gender: "Male",
    phone: "+91 99400 87654",
    diagnosis: "Acute Bronchial Asthma Exacerbation",
    doctor: "Dr. Meenakshi Venkat, MD (Pulmonology)",
    hospital: "MediGuid Central Multi-Specialty Hospital",
    admissionDate: "30 August 2026",
    dischargeDate: "04 September 2026",
    uploadDate: "04 September 2026, 10:10 AM",
    processingStatus: "OCR Extraction Complete",
    guidanceStatus: "Guidance Sent",
    whatsappStatus: "✓ Sent on WhatsApp",
    lastSentDate: "04 September 2026, 11:00 AM",
    medicines: [
      { name: "Budesonide + Formoterol Inhaler (200/6)", dosage: "2 Puffs", frequency: "Twice daily", foodRelation: "Rinse mouth with water after inhaling", duration: "30 Days" },
      { name: "Montelukast 10mg", dosage: "1 Tablet", frequency: "Once daily at night", foodRelation: "Before sleep", duration: "30 Days" },
      { name: "Levosalbutamol Inhaler", dosage: "2 Puffs", frequency: "SOS (As needed for wheezing)", foodRelation: "Anytime during sudden breathlessness", duration: "As needed" }
    ],
    foodInstructions: "Avoid ice-cold beverages, refrigerated dairy, citrus fruits at night, and foods with artificial preservatives or colors.",
    dailyCare: "Always keep rescue inhaler within arm's reach. Avoid dust, smoke, incense, and strong room fresheners. Monitor peak flow regularly.",
    warningSigns: "Severe breathlessness not relieved after 4 puffs of rescue inhaler, blue lips/fingernails, inability to speak full sentences.",
    followUpDate: "22 September 2026",
    emergencyInstructions: "Take 4 puffs of rescue inhaler via spacer immediately; if symptoms persist for 5 minutes, call Pulmonary Emergency: +91 44 2836 9000."
  }
];

export const SAMPLE_DISCHARGE_PRESETS = [
  {
    id: "sample-arun-diabetes",
    label: "Arun (Type 2 Diabetes Mellitus)",
    badge: "Endocrinology",
    previewText: "MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nDEPARTMENT OF ENDOCRINOLOGY & METABOLISM\nDISCHARGE SUMMARY\n\nPatient Name: Arun\nPatient ID: MG-PAT-2026-081\nAge / Gender: 52 Yrs / Male\nMobile / WhatsApp: +91 98765 43210\nAdmission Date: 02-09-2026\nDischarge Date: 08-09-2026\nConsultant: Dr. R. K. Sharma, MD (Endocrinology)\n\nDIAGNOSIS:\nType 2 Diabetes Mellitus with Poor Glycemic Control (HbA1c: 9.4%)\n\nDISCHARGE MEDICATIONS:\n1. Tab Metformin 500 mg - 1 tab twice daily (After breakfast & dinner) x 90 days\n2. Tab Glimepiride 1 mg - 1 tab once daily (Before breakfast) x 90 days\n3. Tab Atorvastatin 10 mg - 1 tab at bedtime (After dinner) x 90 days\n\nDIETARY & LIFESTYLE ADVICE:\n- Diabetic low glycemic diet. Restrict carbohydrates, eliminate sweets and sugary drinks.\n- 30 minutes daily brisk walk. Regular foot care.\n\nFOLLOW-UP:\nReview in Endocrinology OPD on 20-09-2026 with FBS/PPBS fasting chart.\n\nEMERGENCY SIGNS:\nSevere sweating, tremors, confusion (Hypoglycemia) - take glucose. Call +91 44 2836 9000.",
    extractedData: { ...INITIAL_PATIENTS[0] }
  },
  {
    id: "sample-priya-hypertension",
    label: "Priya Sharma (Stage 2 Hypertension)",
    badge: "Cardiology",
    previewText: "MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nDEPARTMENT OF CARDIOLOGY\nDISCHARGE SUMMARY\n\nPatient Name: Priya Sharma\nPatient ID: MG-PAT-2026-075\nAge / Gender: 46 Yrs / Female\nMobile / WhatsApp: +91 98412 34567\nAdmission Date: 03-09-2026\nDischarge Date: 07-09-2026\nConsultant: Dr. Arvind Swaminathan, MD (Cardiology)\n\nDIAGNOSIS:\nEssential Hypertension Stage 2 (Controlled)\n\nDISCHARGE MEDICATIONS:\n1. Tab Amlodipine 5 mg - 1 tab morning (After breakfast) x 60 days\n2. Tab Telmisartan 40 mg - 1 tab night (After dinner) x 60 days\n\nDIET & EXERCISE:\n- Strict Low Salt DASH Diet (< 2g sodium/day). Avoid salted butter, pickles, chips.\n- Light aerobic walking 20-30 minutes daily.\n\nFOLLOW-UP:\nCardiology OPD on 18-09-2026 with 7-day BP log.\n\nEMERGENCY SIGNS:\nSevere chest tightness, headache with visual blur, BP > 180/110 mmHg. Call +91 44 2836 9000.",
    extractedData: { ...INITIAL_PATIENTS[1] }
  },
  {
    id: "sample-kavitha-knee",
    label: "Kavitha Raman (Knee Replacement)",
    badge: "Orthopedics",
    previewText: "MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nDEPARTMENT OF ORTHOPEDIC SURGERY\nDISCHARGE SUMMARY\n\nPatient Name: Kavitha Raman\nPatient ID: MG-PAT-2026-068\nAge / Gender: 63 Yrs / Female\nMobile / WhatsApp: +91 97890 12345\nAdmission Date: 28-08-2026\nDischarge Date: 05-09-2026\nConsultant: Dr. S. Sundararajan, MS (Orthopedics)\n\nDIAGNOSIS:\nStatus Post Right Total Knee Arthroplasty (TKR)\n\nDISCHARGE MEDICATIONS:\n1. Tab Paracetamol 650 mg - 1 tab every 8 hours as needed for pain (After food) x 10 days\n2. Tab Cefuroxime 500 mg - 1 tab twice daily (After food) x 5 days\n3. Tab Aspirin 75 mg - 1 tab daily (After lunch) x 21 days (DVT Prophylaxis)\n\nPOST-OP CARE:\n- Keep wound clean and dry. No wet baths until stitch removal.\n- Perform bedside physio exercises 3x daily. Walker support mandatory.\n\nFOLLOW-UP:\nReview on 19-09-2026 for surgical wound check and suture removal.",
    extractedData: { ...INITIAL_PATIENTS[2] }
  },
  {
    id: "sample-rajesh-asthma",
    label: "Rajesh Kannan (Asthma Exacerbation)",
    badge: "Pulmonology",
    previewText: "MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nDEPARTMENT OF PULMONARY MEDICINE\nDISCHARGE SUMMARY\n\nPatient Name: Rajesh Kannan\nPatient ID: MG-PAT-2026-059\nAge / Gender: 38 Yrs / Male\nMobile / WhatsApp: +91 99400 87654\nAdmission Date: 30-08-2026\nDischarge Date: 04-09-2026\nConsultant: Dr. Meenakshi Venkat, MD (Pulmonology)\n\nDIAGNOSIS:\nAcute Exacerbation of Bronchial Asthma (Resolved)\n\nDISCHARGE MEDICATIONS:\n1. Inhaler Budesonide + Formoterol (200/6) - 2 puffs twice daily (Rinse mouth) x 30 days\n2. Tab Montelukast 10 mg - 1 tab at night (Before sleep) x 30 days\n3. Inhaler Levosalbutamol - 2 puffs SOS for sudden wheezing\n\nPRECAUTIONS:\n- Strictly avoid cold drinks, dust, and smoke. Keep rescue inhaler accessible.\n\nFOLLOW-UP:\nPulmonology Clinic on 22-09-2026 with spirometry review.",
    extractedData: { ...INITIAL_PATIENTS[3] }
  }
];

export const WHATSAPP_CATEGORIES = [
  {
    id: "full",
    label: "🏥 Complete Discharge Guidance",
    badge: "Recommended",
    description: "Sends full synthesized discharge guidance with medicines, diet, follow-up, and emergency warnings."
  },
  {
    id: "medicine",
    label: "💊 Medicine Schedule",
    badge: "Prescription",
    description: "Focuses specifically on exact dosage, frequency, and before/after food timing."
  },
  {
    id: "discharge",
    label: "🏥 Discharge Instructions",
    badge: "Care Plan",
    description: "Summary of hospital discharge procedures, wound/rest management, and doctor contacts."
  },
  {
    id: "diet",
    label: "🍎 Diet Guidance",
    badge: "Nutrition",
    description: "Personalized nutrition dos & don'ts specifically aligned with the patient's diagnosis."
  },
  {
    id: "followup",
    label: "📅 Follow-up Reminder",
    badge: "Appointment",
    description: "Exact upcoming consultation date, OPD department, and required lab reports."
  },
  {
    id: "warning",
    label: "⚠️ Warning Signs",
    badge: "Safety Alert",
    description: "Urgent red-flag symptoms requiring emergency contact or immediate hospital return."
  },
  {
    id: "general",
    label: "❤️ General Care Guidance",
    badge: "Daily Health",
    description: "Daily hydration, activity routines, and stress management."
  }
];

export function buildWhatsAppMessage(patient, categoryId = "full", lang = "en") {
  if (!patient) return "";

  if (lang === "ta") {
    if (categoryId === "medicine") {
      const medList = patient.medicines?.map((m, i) => `${i + 1}. *${m.name}* – ${m.dosage} (${m.frequency}, ${m.foodRelation})`).join("\n") || "";
      return `வணக்கம் ${patient.name} 👋\n\n*MediGuid மருத்துவமனை - மருந்து அட்டவணை:*\n\n💊 *மருந்துகள்:*\n${medList}\n\n⚠️ மருத்துவர் பரிந்துரைத்தபடி தவறாமல் உட்கொள்ளவும்.\n\nநலமுடன் இருங்கள்! ❤️`;
    }
    if (categoryId === "diet") {
      return `வணக்கம் ${patient.name} 👋\n\n*MediGuid உணவு வழிகாட்டுதல் (${patient.diagnosis}):*\n\n🍎 *உணவு அறிவுரைகள்:*\n${patient.foodInstructions}\n\nநன்னீர் போதுமான அளவு பருகவும். நலமுடன் வாழ்க!`;
    }
    if (categoryId === "followup") {
      return `வணக்கம் ${patient.name} 👋\n\n*மருத்துவமனை மறுபரிசீலனை நினைவூட்டல்:*\n\n📅 *அடுத்த சந்திப்பு நாள்:* ${patient.followUpDate}\n🏥 *மருத்துவமனை:* ${patient.hospital}\n👨‍⚕️ *மருத்துவர்:* ${patient.doctor}\n\nபரிசோதனை அறிக்கைகளுடன் குறித்த நேரத்தில் வரவும்.`;
    }
    if (categoryId === "warning") {
      return `⚠️ *அவசர எச்சரிக்கை அறிகுறிகள் (${patient.name}):*\n\nஉங்களுக்கு கீழ்க்காணும் அறிகுறிகள் தென்பட்டால் உடனடியாக மருத்துவரைத் தொடர்பு கொள்ளவும்:\n- ${patient.warningSigns}\n\n🚨 *அவசர உதவி எண்:* +91 44 2836 9000`;
    }
    const medList = patient.medicines?.map((m, i) => `${i + 1}. *${m.name}* – ${m.dosage} (${m.foodRelation})`).join("\n") || "";
    return `வணக்கம் ${patient.name} 👋\n\n*MediGuid மருத்துவமனை வெளியேற்ற வழிகாட்டுதல்:*\n\n📋 *நோய் கண்டறிதல்:* ${patient.diagnosis}\n\n💊 *மருந்துகள்:*\n${medList}\n\n🍎 *உணவு:* ${patient.foodInstructions}\n\n📅 *அடுத்த சந்திப்பு:* ${patient.followUpDate}\n\n⚠️ *எச்சரிக்கை:* ஏதேனும் தீவிர அறிகுறிகள் தோன்றினால் உடனடியாக மருத்துவரைத் தொடர்பு கொள்ளவும்.\n\nஉடல்நலத்தை பாதுகாத்துக் கொள்ளுங்கள்!`;
  }

  // English formatting (matches user's exact specification)
  if (categoryId === "medicine") {
    const medList = patient.medicines?.map((m, i) => `${i + 1}. *${m.name}* – ${m.dosage} (${m.frequency}, ${m.foodRelation})`).join("\n") || "";
    return `Hello ${patient.name} 👋\n\nYour prescribed medication schedule from *${patient.hospital}*:\n\n💊 *Medicines:*\n${medList}\n\n⏰ *Duration:* Follow this course exactly as prescribed.\n💧 Take tablets with a full glass of drinking water.\n\nTake care and follow your prescribed treatment.`;
  }

  if (categoryId === "discharge") {
    return `Hello ${patient.name} 👋\n\n*Discharge Care Instructions from MediGuid:*\n\n🏥 *Hospital:* ${patient.hospital}\n👨‍⚕️ *Consultant:* ${patient.doctor}\n📅 *Discharge Date:* ${patient.dischargeDate}\n\n🩺 *Diagnosis:* ${patient.diagnosis}\n\n❤️ *Home Care:* ${patient.dailyCare}\n\n📅 *Next Appointment:* ${patient.followUpDate}\n\nWe wish you a smooth and speedy recovery!`;
  }

  if (categoryId === "diet") {
    return `Hello ${patient.name} 👋\n\n*Personalized Nutrition & Diet Guidance from MediGuid:*\n\n🩺 *Condition:* ${patient.diagnosis}\n\n🍎 *Food Guidance:*\n${patient.foodInstructions}\n\n💧 *Hydration:* Maintain clean drinking water intake daily.\n🚫 Avoid foods not recommended on your clinical discharge summary.`;
  }

  if (categoryId === "followup") {
    return `Hello ${patient.name} 👋\n\n*Follow-up Consultation Reminder:*\n\n📅 *Scheduled Date:* ${patient.followUpDate}\n🏥 *Hospital:* ${patient.hospital}\n👨‍⚕️ *Doctor:* ${patient.doctor}\n\n📋 Please bring your discharge summary and previous blood/imaging reports with you.\n\nFor rescheduling, call: +91 44 2836 9000.`;
  }

  if (categoryId === "warning") {
    return `⚠️ *URGENT MEDICAL WARNING SIGNS for ${patient.name}:*\n\nIf you experience any of the following symptoms, contact your doctor immediately:\n\n🚨 ${patient.warningSigns}\n\n📞 *Emergency Hospital Hotline:* +91 44 2836 9000 (24/7)\n🏥 *Emergency Address:* Emergency Trauma Block, MediGuid Central Hospital.\n\nDo not delay if severe symptoms occur.`;
  }

  if (categoryId === "general") {
    return `Hello ${patient.name} 👋\n\n*Daily Health & Recovery Advice from MediGuid:*\n\n❤️ *Daily Care Routine:*\n${patient.dailyCare}\n\n💤 Ensure 7-8 hours of restful sleep.\n🚶 Avoid strenuous lifting or sudden physical exertion.\n\nYour health is our top priority!`;
  }

  // Exact full discharge message from user prompt
  const medList = patient.medicines?.map((m, i) => `${i + 1}. ${m.name} – ${m.dosage} ${m.foodRelation}`).join("\n") || "";
  return `Hello ${patient.name} 👋\n\nYour discharge guidance from MediGuid:\n\n💊 Medicines:\n\n${medList}\n\n🍎 Food:\n${patient.foodInstructions}\n\n📅 Follow-up:\nVisit the hospital on ${patient.followUpDate}.\n\n⚠️ If you experience severe symptoms, contact your doctor immediately.\n\nTake care and follow your prescribed treatment.`;
}

export const STAFF_AI_KNOWLEDGE = [
  {
    keywords: ["hba1c", "diabetes", "blood sugar", "glucose", "metformin"],
    responseEn: "HbA1c measures average blood sugar over the past 2 to 3 months. In simple patient words: 'A normal score is below 5.7%. Arun's score of 9.4% means blood sugar has stayed high recently. Taking Metformin regularly and reducing rice, sweets, and sodas will help lower it safely.'",
    responseTa: "HbA1c என்பது கடந்த 2-3 மாதங்களில் இரத்தத்தில் சர்க்கரையின் சராசரி அளவாகும். எளிய விளக்கம்: 'அருண் அவர்களுக்கு 9.4% உள்ளது. இது சர்க்கரை அதிகம் இருப்பதைக் காட்டுகிறது. தவறாமல் மருந்து உட்கொண்டு இனிப்புகளை தவிர்த்தால் இது இயல்பு நிலைக்கு வரும்.'"
  },
  {
    keywords: ["hypertension", "bp", "blood pressure", "pressure", "amlodipine"],
    responseEn: "Stage 2 Hypertension means the heart is pumping against high vascular resistance. Patient-friendly explanation: 'Your blood pressure is running higher than safe levels. Taking Amlodipine in the morning and Telmisartan at night relaxes blood vessels. Cutting salt is the most important daily step.'",
    responseTa: "இரத்த அழுத்தம் இயல்பை விட அதிகமாக உள்ளது. காலை ஆம்லோடிபின், இரவு டெல்மிசார்ட்டன் மாத்திரைகள் இரத்தக் குழாய்களை தளர்த்தி அழுத்தத்தை சீராக்கும். உப்பை உணவில் குறைப்பது மிக முக்கியமானது."
  },
  {
    keywords: ["knee", "tkr", "arthroplasty", "joint", "surgery"],
    responseEn: "Total Knee Arthroplasty (TKR) recovery: Simple patient guidance: 'Your damaged knee joint has been replaced with a smooth titanium prosthesis. Keep the wound dry, walk with your walker every 2 hours, and take blood thinner Aspirin to prevent leg clots.'",
    responseTa: "முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சை: காயத்தில் தண்ணீர் படாமல் பார்த்துக் கொள்ளவும். வாக்கர் உதவியுடன் நடக்கவும். கால் நரம்புகளில் இரத்தம் உறைவதைத் தடுக்க அஸ்பிரின் மாத்திரை உட்கொள்ளவும்."
  },
  {
    keywords: ["asthma", "inhaler", "wheezing", "budesonide"],
    responseEn: "Asthma inhaler education: Simple patient guidance: 'The Budesonide inhaler is your protector to stop swelling inside the breathing tubes. Always rinse your mouth with water after inhaling. Keep the Levosalbutamol rescue inhaler in your pocket for sudden shortness of breath.'",
    responseTa: "ஆஸ்துமா இன்ஹேலர் வழிகாட்டல்: காலை, மாலை இருவேளை இன்ஹேலர் பயன்படுத்திய பின் வாயை நீரால் கொப்பளிக்கவும். அவசர மூச்சுத் திணறலுக்கு நிவாரண இன்ஹேலரை எப்போதும் அருகில் வைத்திருக்கவும்."
  },
  {
    keywords: ["translate", "tamil", "தமிழ்"],
    responseEn: "Here is the standard Tamil discharge guidance template ready for WhatsApp:\n'வணக்கம்! MediGuid மருத்துவமனை வெளியேற்ற வழிகாட்டுதல். மருந்துகளை குறித்த நேரத்தில் உட்கொள்ளவும். நலமுடன் வாழ்க!'",
    responseTa: "மருத்துவமனை வெளியேற்ற வழிகாட்டுதல் தயாராக உள்ளது. வாட்ஸ்அப் மூலம் உடனடியாக நோயாளிகளுக்கு அனுப்பலாம்."
  }
];
