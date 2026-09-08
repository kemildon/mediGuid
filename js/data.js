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
