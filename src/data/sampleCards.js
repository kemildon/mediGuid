export const DEFAULT_CARD = {
  id: "CC-8492",
  patientName: "Ravi Kumar",
  age: 58,
  gender: "Male",
  bloodGroup: "O+ Positive",
  hospitalId: "CGH-2026-8492",
  hospitalName: "City General Hospital",
  doctorName: "Dr. A. Sharma, MD",
  department: "Cardiology & Preventive Care",
  dischargeDate: "09 Sept 2026",
  
  healthCondition: "High Blood Pressure",
  conditionSimple: "Your heart is working harder to pump blood. Daily medicines and less salt keep your blood vessels relaxed and protect your heart.",
  
  medicines: {
    morning: {
      enabled: true,
      count: "1 Tablet",
      name: "Amlodipine (5mg)",
      instructions: "Take after breakfast with water",
      pillColor: "#0D9488"
    },
    afternoon: {
      enabled: false,
      count: "None",
      name: "No afternoon medicine needed",
      instructions: "Stay hydrated with fresh water",
      pillColor: "#94A3B8"
    },
    night: {
      enabled: true,
      count: "1 Tablet",
      name: "Telmisartan (40mg)",
      instructions: "Take after dinner before sleeping",
      pillColor: "#3B82F6"
    }
  },

  food: {
    eat: "Fresh green vegetables, apples, bananas, oats, plenty of water",
    avoid: "Reduce salt strictly. Avoid pickles, papads, salted chips, canned soups & oily fried food."
  },

  activity: {
    title: "Walk 20–30 minutes",
    description: "Light walking every morning or evening at a comfortable pace. Do not lift heavy objects."
  },

  nextVisit: {
    date: "15 September 2026",
    time: "10:00 AM",
    location: "OPD Room 204, Cardiology Wing"
  },

  emergency: {
    warning: "Call hospital immediately if severe chest pain or difficulty breathing.",
    action: "Call Emergency Dispatch (108) or Hospital Helpline 044-2450-8800 without delay.",
    hotline: "108 / 044-2450-8800"
  },

  theme: "teal" // teal, blue, coral, green
};

export const CLINICAL_PRESETS = [
  {
    id: "hypertension",
    label: "High Blood Pressure",
    badge: "Cardiovascular",
    icon: "Heart",
    data: { ...DEFAULT_CARD }
  },
  {
    id: "diabetes",
    label: "Type 2 Diabetes",
    badge: "Metabolic Care",
    icon: "Activity",
    data: {
      id: "CC-9104",
      patientName: "Sita Devi",
      age: 62,
      gender: "Female",
      bloodGroup: "B+ Positive",
      hospitalId: "CGH-2026-9104",
      hospitalName: "Apollo Medical Center",
      doctorName: "Dr. Priya Raman, MD",
      department: "Endocrinology",
      dischargeDate: "08 Sept 2026",
      healthCondition: "High Blood Sugar (Type 2 Diabetes)",
      conditionSimple: "Your body needs help processing sugar. Regular tablets and eating on time protect your eyes, kidneys, and feet.",
      medicines: {
        morning: {
          enabled: true,
          count: "1 Tablet",
          name: "Metformin (500mg)",
          instructions: "Take with first bite of breakfast",
          pillColor: "#0D9488"
        },
        afternoon: {
          enabled: false,
          count: "None",
          name: "Check sugar level if feeling dizzy",
          instructions: "Eat lunch on time",
          pillColor: "#94A3B8"
        },
        night: {
          enabled: true,
          count: "1 Tablet",
          name: "Glimepiride (1mg)",
          instructions: "Take 15 minutes before dinner",
          pillColor: "#F59E0B"
        }
      },
      food: {
        eat: "Whole wheat rotis, boiled vegetables, dal, sprouts, methi seeds",
        avoid: "No white sugar, sweets, sodas, fruit juices, honey or white rice."
      },
      activity: {
        title: "Walk 30 minutes daily",
        description: "Brisk morning walk. Inspect feet daily for any small cuts or blisters."
      },
      nextVisit: {
        date: "22 September 2026",
        time: "09:30 AM",
        location: "Diabetes Clinic, Room 102"
      },
      emergency: {
        warning: "Seek help if sudden extreme dizziness, trembling, cold sweat, or confusion.",
        action: "Drink 1/2 glass fruit juice immediately if sugar drops, then call doctor.",
        hotline: "108 / 044-2829-0200"
      },
      theme: "blue"
    }
  },
  {
    id: "knee-surgery",
    label: "Knee Surgery Recovery",
    badge: "Orthopedics",
    icon: "ShieldAlert",
    data: {
      id: "CC-7320",
      patientName: "John David",
      age: 65,
      gender: "Male",
      bloodGroup: "A+ Positive",
      hospitalId: "CGH-2026-7320",
      hospitalName: "Memorial Orthopedic Hospital",
      doctorName: "Dr. K. Nair, MS Ortho",
      department: "Joint Replacement Care",
      dischargeDate: "07 Sept 2026",
      healthCondition: "Right Knee Joint Replacement",
      conditionSimple: "Your new knee joint is healing. Doing gentle exercises, taking pain medicine, and keeping dressing dry prevents infections.",
      medicines: {
        morning: {
          enabled: true,
          count: "1 Tablet + 1 Capsule",
          name: "Antibiotic (Cefixime) + Pantoprazole",
          instructions: "Take before and after breakfast",
          pillColor: "#0D9488"
        },
        afternoon: {
          enabled: true,
          count: "1 Tablet",
          name: "Paracetamol (650mg)",
          instructions: "Take only if knee pain is severe",
          pillColor: "#E11D48"
        },
        night: {
          enabled: true,
          count: "1 Tablet",
          name: "Blood Thinner (Aspirin 75mg)",
          instructions: "Take after dinner with milk/water",
          pillColor: "#8B5CF6"
        }
      },
      food: {
        eat: "High protein: eggs, paneer, milk, lentils, fresh oranges for Vitamin C",
        avoid: "Avoid excess oily foods and smoking completely."
      },
      activity: {
        title: "Walker Assisted Steps",
        description: "10-minute slow walking with walker 3 times a day. Ice knee for 15 minutes."
      },
      nextVisit: {
        date: "18 September 2026",
        time: "11:00 AM",
        location: "Suture Removal Room, 1st Floor"
      },
      emergency: {
        warning: "Call immediately if high fever > 101°F, calf swelling, or foul discharge from wound.",
        action: "Do not put full weight without walker. Call surgical helpline immediately.",
        hotline: "108 / 044-2234-9911"
      },
      theme: "coral"
    }
  },
  {
    id: "asthma",
    label: "Asthma & Breathing Care",
    badge: "Pulmonology",
    icon: "Wind",
    data: {
      id: "CC-6510",
      patientName: "Meera Patel",
      age: 34,
      gender: "Female",
      bloodGroup: "O- Negative",
      hospitalId: "CGH-2026-6510",
      hospitalName: "LifeCare Chest Hospital",
      doctorName: "Dr. Vikram Seth, MD",
      department: "Respiratory Medicine",
      dischargeDate: "09 Sept 2026",
      healthCondition: "Severe Asthma & Wheezing",
      conditionSimple: "Your airways are sensitive to dust and smoke. Inhaling daily medicine keeps your chest open and prevents sudden attacks.",
      medicines: {
        morning: {
          enabled: true,
          count: "2 Inhaler Puffs",
          name: "Budesonide Rotahaler",
          instructions: "Rinse mouth thoroughly with water after puff",
          pillColor: "#0D9488"
        },
        afternoon: {
          enabled: false,
          count: "None",
          name: "Keep Blue Inhaler nearby in purse",
          instructions: "Use only if acute shortness of breath",
          pillColor: "#94A3B8"
        },
        night: {
          enabled: true,
          count: "1 Tablet + 2 Puffs",
          name: "Montelukast 10mg + Inhaler",
          instructions: "Take tablet before bedtime with warm water",
          pillColor: "#059669"
        }
      },
      food: {
        eat: "Warm soups, herbal ginger tea, steamed vegetables, warm drinking water",
        avoid: "Avoid ice-cold water, ice creams, cold carbonated drinks, refrigerated curds."
      },
      activity: {
        title: "Breathing Exercises",
        description: "15 minutes of slow diaphragmatic breathing. Avoid running in cold outdoor air."
      },
      nextVisit: {
        date: "25 September 2026",
        time: "02:00 PM",
        location: "Pulmonology Lab, 3rd Floor"
      },
      emergency: {
        warning: "Call immediately if blue lips, inability to speak full sentences, or severe chest retractions.",
        action: "Take 4 emergency reliever puffs with spacer, then call emergency services.",
        hotline: "108 / 044-2888-1122"
      },
      theme: "green"
    }
  }
];

export const MULTILINGUAL_DICTIONARY = {
  en: {
    careCard: "CARE CARD",
    tagline: "Your Health. Made Simple.",
    patient: "Patient",
    age: "Age",
    id: "Hospital ID",
    condition: "Health Condition",
    medicines: "MEDICINES",
    morning: "Morning",
    afternoon: "Afternoon",
    night: "Night",
    tablet: "Tablet",
    food: "FOOD",
    eat: "Eat",
    avoid: "Reduce / Avoid",
    activity: "ACTIVITY",
    nextVisit: "NEXT VISIT",
    emergency: "EMERGENCY",
    frontSide: "FRONT: Patient Info & Condition",
    backSide: "BACK: Medicines, Food, Activity & Warning",
    flipCard: "Flip Card",
    printCard: "Print CareCard"
  },
  ta: {
    careCard: "கேர் கார்டு (CARE CARD)",
    tagline: "உங்கள் உடல்நலம். எளிய வடிவில்.",
    patient: "நோயாளி பெயர்",
    age: "வயது",
    id: "மருத்துவமனை எண்",
    condition: "உடல் நிலை / நோய்",
    medicines: "மருந்துகள்",
    morning: "காலை",
    afternoon: "மதியம்",
    night: "இரவு",
    tablet: "மாத்திரை",
    food: "உணவு முறை",
    eat: "சாப்பிட வேண்டியவை",
    avoid: "தவிர்க்க / குறைக்க வேண்டியவை",
    activity: "உடற்பயிற்சி / செயல்பாடு",
    nextVisit: "அடுத்த பரிசோதனை நாள்",
    emergency: "அவசர உதவி",
    frontSide: "முன்பக்கம்: நோயாளி விவரம் & நோய் விளக்கம்",
    backSide: "பின்பக்கம்: மருந்துகள், உணவு, உடற்பயிற்சி & எச்சரிக்கை",
    flipCard: "கார்டை திருப்புக (Flip)",
    printCard: "கார்டை அச்சிடுக (Print)"
  },
  hi: {
    careCard: "केयर कार्ड (CARE CARD)",
    tagline: "आपका स्वास्थ्य। आसान भाषा में।",
    patient: "मरीज़ का नाम",
    age: "उम्र",
    id: "अस्पताल आईडी",
    condition: "बीमारी / स्वास्थ्य स्थिति",
    medicines: "दवाइयां",
    morning: "सुबह",
    afternoon: "दोपहर",
    night: "रात",
    tablet: "गोली",
    food: "खान-पान",
    eat: "क्या खाएं",
    avoid: "क्या न खाएं / कम करें",
    activity: "दिनचर्या / व्यायाम",
    nextVisit: "अगली मुलाकात",
    emergency: "आपातकालीन स्थिति",
    frontSide: "सामने का भाग: मरीज़ की जानकारी",
    backSide: "पीछे का भाग: दवाइयां, खान-पान व चेतावनी",
    flipCard: "कार्ड पलटें (Flip)",
    printCard: "कार्ड प्रिंट करें (Print)"
  },
  es: {
    careCard: "CARE CARD",
    tagline: "Su Salud. Simplificada.",
    patient: "Paciente",
    age: "Edad",
    id: "ID de Hospital",
    condition: "Condición de Salud",
    medicines: "MEDICAMENTOS",
    morning: "Mañana",
    afternoon: "Tarde",
    night: "Noche",
    tablet: "Tableta",
    food: "ALIMENTACIÓN",
    eat: "Comer",
    avoid: "Reducir / Evitar",
    activity: "ACTIVIDAD",
    nextVisit: "PRÓXIMA CITA",
    emergency: "EMERGENCIA",
    frontSide: "FRENTE: Información del Paciente",
    backSide: "REVERSO: Medicinas, Dieta, Actividad y Alertas",
    flipCard: "Girar Tarjeta (Flip)",
    printCard: "Imprimir Tarjeta"
  }
};
