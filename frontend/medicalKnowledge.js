/**
 * MediGuid - Bilingual Local Medical Knowledge Base (English & தமிழ் + Tanglish)
 * Standalone clinical repository. Zero external AI API dependency.
 * Features comprehensive secondary advice across 38 clinical conditions.
 */

const BILINGUAL_DISCLAIMER = {
  en: "Medical information is for educational purposes only and does not replace professional medical advice.",
  ta: "இந்த மருத்துவ தகவல்கள் கல்வி நோக்கத்திற்காக மட்டுமே வழங்கப்படுகின்றன. இது மருத்துவரின் ஆலோசனைக்கு மாற்றாகாது."
};

const BILINGUAL_UNKNOWN = {
  en: "I don't have reliable information for that question in my current medical knowledge base. Please consult a qualified healthcare professional.",
  ta: "இந்த கேள்விக்கான நம்பகமான தகவல் தற்போது என்னுடைய மருத்துவ அறிவுத் தரவுத்தளத்தில் இல்லை. தகுதியான சுகாதார நிபுணரை அணுகவும்."
};

const BILINGUAL_EMERGENCY = {
  keywords: {
    en: [
      "severe chest pain", "chest pain", "difficulty breathing", "cant breathe", "can't breathe",
      "shortness of breath", "trouble breathing", "unconsciousness", "unconscious", "passed out",
      "fainted and not waking", "severe bleeding", "heavy bleeding", "bleeding heavily", "seizure",
      "convulsion", "sudden weakness", "sudden weakness on one side", "face drooping", "arm weakness",
      "slurred speech", "stroke symptoms", "severe allergic reaction", "anaphylaxis",
      "swelling of lips and throat", "blue lips", "cyanosis", "blue tongue", "severe confusion"
    ],
    ta: [
      "நெஞ்சு வலி", "கடுமையான நெஞ்சு வலி", "மூச்சுத் திணறல்", "மூச்சு விட முடியவில்லை", "மயக்கம்",
      "கடுமையான இரத்தப்போக்கு", "வலிப்பு", "திடீர் பலவீனம்", "நீல நிற உதடுகள்", "கடுமையான ஒவ்வாமை",
      "குழப்பம்", "nenju vali", "severe chest pain", "moochu thinaral", "moochu vida mudiyala",
      "breathless", "breathing difficulty", "mayakkam", "valippu", "rathapokku", "severe bleeding",
      "unconscious", "blue lips", "stroke"
    ]
  },
  response: {
    en: `🚨 **MEDICAL EMERGENCY ALERT**
• This is a potential medical emergency — seek immediate emergency medical care (dial **108** or **911**).
• Do not delay or attempt self-treatment at home.
• Tap the **Emergency SOS** button in MediGuid for rapid dispatch assistance.`,
    ta: `🚨 **மருத்துவ அவசரநிலை எச்சரிக்கை**
• இது அவசர மருத்துவ நிலை — உடனடியாக **108** அல்லது **911** என்ற எண்ணை அழையுங்கள்.
• தாமதிக்க வேண்டாம் அல்லது சுயமாக சிகிச்சை செய்ய முயற்சிக்காதீர்கள்.
• உடனடி உதவி பெற MediGuid-ல் உள்ள **SOS** பொத்தானை உடனே அழுத்தவும்.`
  }
};

// --------------------------------------------------------------------------
// COMPREHENSIVE CLINICAL CONDITIONS DATABASE (38 CONDITIONS)
// --------------------------------------------------------------------------
const CLINICAL_CONDITIONS = [
  {
    "id": "fever",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "fever",
        "temperature",
        "high temperature",
        "febrile",
        "hot body",
        "chills",
        "fevr",
        "have fever",
        "got fever"
      ],
      "ta": [
        "காய்ச்சல்",
        "உடல் சூடு",
        "சுரம்",
        "kaichal",
        "kaachal",
        "suram",
        "temperature",
        "enakku fever irukku",
        "fever irukku",
        "enakku kaichal",
        "kaichal irukku"
      ]
    },
    "en": {
      "name": "Fever",
      "explanation": "Fever is a temporary increase in body temperature above 98.6°F (37°C), commonly an immune defense response against viral or bacterial infections.",
      "symptoms": [
        "Elevated core temperature (>99.5°F / 37.5°C)",
        "Shivering, chills, and intermittent sweating",
        "Generalized headache and muscle fatigue",
        "Loss of appetite and mild dehydration"
      ],
      "selfCare": [
        "Drink plenty of fluids: water, warm herbal broths, coconut water, or ORS",
        "Wear loose, lightweight cotton clothing to facilitate heat dissipation",
        "Rest in a well-ventilated, comfortably cool room",
        "Apply a lukewarm (not cold) damp sponge bath to forehead, neck, and underarms"
      ],
      "secondaryAdvice": [
        "Log your body temperature with a digital thermometer every 4 to 6 hours",
        "Avoid sudden temperature transitions, heavy blankets, or ice baths that induce shivering",
        "Ensure gentle room airflow without directing cold drafts onto the body",
        "Observe for emerging symptoms such as skin rashes, stiff neck, or localized pain",
        "Practice respiratory and hand hygiene if living with vulnerable family members"
      ],
      "foodAdvice": [
        "Sip warm liquids: soups, clear broths, warm lemon water, and electrolyte drinks",
        "Eat light, easily digestible bland meals: rice porridge (kanji), boiled oats, steamed apples, toast",
        "Avoid oily, deep-fried, heavily spiced meals, caffeine, and alcohol"
      ],
      "restAdvice": [
        "Prioritize 8–10 hours of uninterrupted sleep and avoid strenuous physical exertion",
        "Minimize screen time to prevent eye strain and secondary tension headaches",
        "Allow at least 24 hours of fever-free rest (without antipyretics) before resuming work or school"
      ],
      "whenToSeeDoctor": [
        "Fever persists beyond 3 consecutive days without improvement",
        "Temperature exceeds 103°F (39.4°C) or fails to respond to antipyretics",
        "Accompanied by persistent vomiting or inability to retain fluids",
        "If you have pre-existing chronic conditions (diabetes, heart disease, kidney illness)"
      ],
      "emergencySigns": [
        "Difficulty breathing, rapid breathing, or chest tightness",
        "Stiff neck, severe photophobia (pain looking at light), or mental confusion",
        "Bluish lips, tongue, or fingertips, or seizure/convulsion",
        "Unresponsiveness, extreme lethargy, or inability to wake up"
      ],
      "medicines": {
        "categories": "Antipyretics / Analgesics (e.g., Paracetamol / Acetaminophen)",
        "relevantIds": [
          "paracetamol"
        ],
        "disclaimer": "Educational medicine information only. Do not self-prescribe or exceed 4,000 mg/day of paracetamol in adults. Consult a healthcare provider for personalized dosing."
      },
      "prevention": [
        "Wash hands regularly with soap and water for at least 20 seconds",
        "Avoid sharing personal utensils, cups, or towels when someone is unwell",
        "Maintain updated seasonal vaccinations (such as annual flu shot)",
        "Ensure adequate dietary zinc and vitamin C through fresh fruits and vegetables"
      ]
    },
    "ta": {
      "name": "காய்ச்சல் (Fever)",
      "explanation": "காய்ச்சல் என்பது உடலின் வெப்பநிலை இயல்பான அளவை விட (98.6°F / 37°C) அதிகரிக்கும் நிலை. இது உடலின் நோய் எதிர்ப்பு அமைப்பு தொற்றுக்கு எதிராக போராடும் இயற்கையான பாதுகாப்பு எதிர்வினையாகும்.",
      "symptoms": [
        "உடல் உஷ்ணம் அதிகரித்தல் (99.5°F-க்கு மேல்)",
        "குளிர் நடுக்கம் மற்றும் வியர்த்தல்",
        "தலைவலி மற்றும் உடல்/தசை சோர்வு",
        "பசியின்மை மற்றும் பலவீனம்"
      ],
      "selfCare": [
        "சுத்தமான குடிநீர், இளநீர், கஞ்சி அல்லது ஓ.ஆர்.எஸ் நீர் போன்றவற்றை அடிக்கடி அருந்துங்கள்",
        "மெல்லிய, காற்றோட்டமான பருத்தி ஆடைகளை அணியுங்கள்",
        "காற்றோட்டமுள்ள அறையில் முழுமையான ஓய்வு எடுங்கள்",
        "உடல் அனல் அதிகமாக இருந்தால் வெதுவெதுப்பான நீரில் நனைத்த துணியால் நெற்றி, கழுத்தில் ஒத்தடம் கொடுங்கள்"
      ],
      "secondaryAdvice": [
        "உடல் வெப்பநிலையை தர்மாமீட்டர் கொண்டு ஒவ்வொரு 4-6 மணி நேரத்திற்கும் குறித்துக் கொள்ளுங்கள்",
        "திடீர் தீவிர குளிர் காற்று, கனமான போர்வைகள் அல்லது ஐஸ் தண்ணீர் குளியல் போன்றவற்றைத் தவிர்க்கவும்",
        "அறையில் நேரடி காற்று உங்கள் மீது வீசாமல் மென்மையான காற்றோட்டம் இருப்பதை உறுதிசெய்யவும்",
        "தோல் தடிப்பு, கழுத்து விறைப்பு அல்லது ஏதேனும் புதிய அறிகுறிகள் தென்படுகிறதா என்பதைக் கவனியுங்கள்",
        "குடும்பத்தில் பிறருக்கு தொற்று பரவாமல் இருக்க தனி தட்டு, டம்ளர் மற்றும் கைச்சுத்தம் பேணுங்கள்"
      ],
      "foodAdvice": [
        "சூடான சூப், ரசம், கஞ்சி மற்றும் மூலிகை பானங்கள் அருந்தவும்",
        "எளிதில் செரிமானமாகும் மென்மையான உணவுகள் (இட்லி, கஞ்சி, ஆவி பறக்கும் காய்கறி) உண்ணவும்",
        "எண்ணெயில் பொரித்த, அதிக காரமான உணவுகள் மற்றும் காஃபினைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "8–10 மணி நேர நிம்மதியான தூக்கம் மற்றும் கடுமையான வேலைகளைத் தவிர்ப்பது அவசியம்",
        "மொபைல் மற்றும் டிவி திரைகளைப் பார்ப்பதைக் குறைத்து கண்களுக்கு ஓய்வு கொடுங்கள்",
        "காய்ச்சல் முற்றிலும் நின்ற பின்னரே வழக்கமான வேலைகளுக்குத் திரும்பவும்"
      ],
      "whenToSeeDoctor": [
        "காய்ச்சல் 3 நாட்களுக்கு மேல் தொடர்ந்து நீடித்தால்",
        "உடல் வெப்பநிலை 103°F (39.4°C)-ஐத் தாண்டினால்",
        "தொடர்ந்து வாந்தி ஏற்பட்டு நீர் அருந்த முடியாமல் போனால்",
        "சர்க்கரை நோய் அல்லது பிற நாட்பட்ட உடல் நலக்குறைவு உள்ளவர்கள் உடனடியாக மருத்துவரை அணுக வேண்டும்"
      ],
      "emergencySigns": [
        "மூச்சுத்திணறல் அல்லது நெஞ்சு பாரம்",
        "கழுத்து விறைப்பு, கடுமையான தலைவலி அல்லது குழப்பமான மனநிலை",
        "உதடுகள் நீல நிறமாதல் அல்லது வலிப்பு ஏற்படுதல்",
        "மயக்கம் அல்லது விழிப்புணர்வில் தீவிரக் குறைவு"
      ],
      "medicines": {
        "categories": "காய்ச்சல் தணிக்கும் மருந்துகள் (எ.கா. பாரசிட்டமால்)",
        "relevantIds": [
          "paracetamol"
        ],
        "disclaimer": "மருந்துத் தகவல்கள் கல்வி நோக்கத்திற்காக மட்டுமே. மருத்துவர் அல்லது மருந்தாளுநரின் ஆலோசனையின்றி சுயமாக மருந்தளவு எடுக்க வேண்டாம்."
      },
      "prevention": [
        "சோப்பு போட்டு கைகளை அடிக்கடி கழுவுங்கள்",
        "தொற்று உள்ளவர்களிடம் இருந்து போதிய இடைவெளி கடைபிடிக்கவும்",
        "சத்தான உணவுகள் மூலம் நோய் எதிர்ப்பு சக்தியைப் பேணுங்கள்"
      ]
    }
  },
  {
    "id": "severe_fever",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "severe fever",
        "high fever",
        "very high fever",
        "burning fever",
        "104 fever",
        "103 fever",
        "high temperature",
        "spike fever"
      ],
      "ta": [
        "கடுமையான காய்ச்சல்",
        "அதிக காய்ச்சல்",
        "severe fever",
        "high fever",
        "kadu maana kaichal",
        "romba fever",
        "heavy fever",
        "adhiga kaichal"
      ]
    },
    "en": {
      "name": "Severe / High Fever",
      "explanation": "Severe fever indicates body temperature exceeding 102.5°F (39.2°C), typically signifying acute systemic inflammation, severe viral illness (such as Dengue or Influenza), or acute bacterial infection.",
      "symptoms": [
        "Core temperature consistently above 102.5°F (39.2°C)",
        "Intense shivering, severe rigors, or profuse sweating",
        "Pounding frontal headache and profound fatigue",
        "Disorientation, lightheadedness, or extreme thirst"
      ],
      "selfCare": [
        "Apply lukewarm wet towels to forehead, nape of neck, and groin continuously",
        "Hydrate continuously with small sips of electrolyte fluid or ORS",
        "Keep ambient room temperature cool and remove heavy blankets immediately",
        "Avoid any strenuous movement and stay strictly in bed"
      ],
      "secondaryAdvice": [
        "Measure temperature digitally every 2 hours and maintain an hourly log",
        "Never use alcohol rubs, cold showers, or icepacks as they induce vasoconstriction and worsen internal fever",
        "Keep emergency contacts and hospital admission details accessible",
        "Ensure an adult family member or caregiver is physically present to monitor sensorium",
        "Inspect the skin for petechiae (small red/purple spots) or rash twice daily"
      ],
      "foodAdvice": [
        "Frequent sips of tender coconut water, ORS, and diluted pomegranate juice",
        "Clear broths, rice water with a pinch of rock salt",
        "Avoid solid heavy foods until core temperature stabilizes"
      ],
      "restAdvice": [
        "Absolute bed rest in a quiet, darkened room",
        "Avoid any screen exposure, reading, or mental exertion",
        "Resume physical activity strictly under medical clearance"
      ],
      "whenToSeeDoctor": [
        "Temperature does not reduce below 102°F within 2 hours of standard antipyretics",
        "Fever lasts over 48 hours continuously",
        "Accompanying severe abdominal pain or constant vomiting"
      ],
      "emergencySigns": [
        "Stiff neck with inability to touch chin to chest",
        "Hallucinations, delirium, slurred speech, or seizure",
        "Shortness of breath, chest pain, or bluish discoloration",
        "Spontaneous bleeding from gums, nose, or skin bruises"
      ],
      "medicines": {
        "categories": "Antipyretics under physician guidance (Paracetamol 650mg)",
        "relevantIds": [
          "paracetamol"
        ],
        "disclaimer": "Severe high fever warrants formal clinical evaluation. Avoid NSAIDs like Aspirin/Ibuprofen until Dengue is ruled out."
      },
      "prevention": [
        "Seek timely medical attention at early symptom onset",
        "Use mosquito repellents and mosquito nets in endemic areas",
        "Isolate from vulnerable individuals during high viremic phase"
      ]
    },
    "ta": {
      "name": "கடுமையான / அதிக காய்ச்சல் (Severe High Fever)",
      "explanation": "உடல் வெப்பநிலை 102.5°F (39.2°C)-க்கு மேல் உயரும் நிலை. இது தீவிர வைரஸ் தொற்று (டெங்கு, ஃப்ளூ) அல்லது பாக்டீரியா தொற்றின் அறிகுறியாக இருக்கலாம்.",
      "symptoms": [
        "102.5°F-க்கு அதிகமான தொடர் வெப்பநிலை",
        "கடுமையான நடுக்கம் மற்றும் தீவிர வியர்த்தல்",
        "தாங்க முடியாத தலைவலி மற்றும் கடுமையான சோர்வு",
        "குழப்பம் அல்லது அதீத தாகம்"
      ],
      "selfCare": [
        "நெற்றி, கழுத்து பகுதிகளில் வெதுவெதுப்பான ஈரத்துணியால் தொடர்ந்து ஒத்தடம் கொடுக்கவும்",
        "ஓ.ஆர்.எஸ் (ORS) அல்லது இளநீரை சிறிது சிறிதாக தொடர்ந்து அருந்தவும்",
        "அறையை குளிர்ச்சியாக வைத்து, தடிமனான போர்வைகளை உடனே அகற்றவும்",
        "முழுமையான படுக்கை ஓய்வு எடுக்கவும்"
      ],
      "secondaryAdvice": [
        "ஒவ்வொரு 2 மணி நேரத்திற்கும் வெப்பநிலையைக் குறித்துக் கொள்ளுங்கள்",
        "ஐஸ் தண்ணீர் அல்லது ஆல்கஹால் துடைப்பை ஒருபோதும் பயன்படுத்தாதீர்கள்",
        "அருகிலுள்ள மருத்துவமனை அவசர தொடர்பு எண்களை தயாராக வையுங்கள்",
        "நோயாளியைக் கண்காணிக்க ஒருவர் உடனிருப்பது அவசியம்",
        "தோலில் சிவந்த புள்ளிகள் தென்படுகிறதா என்று கவனியுங்கள்"
      ],
      "foodAdvice": [
        "இளநீர், கஞ்சி தண்ணீர், உப்பு கலந்த மோர் அருந்தவும்",
        "எளிதில் செரிக்கும் திரவ உணவுகளை மட்டுமே உட்கொள்ளவும்",
        "கடினமான, காரமான உணவுகளை முற்றிலும் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "அமைதியான, இருண்ட அறையில் முழு படுக்கை ஓய்வு",
        "மொபைல், டிவி பார்ப்பதை தவிர்க்கவும்",
        "மருத்துவர் அனுமதித்த பின்னரே பணிகளுக்குத் திரும்பவும்"
      ],
      "whenToSeeDoctor": [
        "மருந்து உட்கொண்டும் 2 மணி நேரத்தில் காய்ச்சல் குறையாவிட்டால்",
        "48 மணி நேரத்திற்கு மேல் காய்ச்சல் நீடித்தால்",
        "கடுமையான வயிற்று வலி அல்லது தொடர் வாந்தி இருந்தால்"
      ],
      "emergencySigns": [
        "கழுத்து விறைப்பு, பார்வை மங்குதல் அல்லது வலிப்பு",
        "மூச்சுத்திணறல் அல்லது நீல நிற உதடுகள்",
        "மூக்கு அல்லது ஈறுகளில் இரத்தப்போக்கு",
        "மயக்கம் மற்றும் சுயநினைவின்மை"
      ],
      "medicines": {
        "categories": "மருத்துவர் பரிந்துரைக்கும் காய்ச்சல் மருந்துகள் (பாரசிட்டமால்)",
        "relevantIds": [
          "paracetamol"
        ],
        "disclaimer": "கடுமையான காய்ச்சலுக்கு மருத்துவப் பரிசோதனை அவசியம். டெங்கு இல்லை என்பதை உறுதி செய்யும் வரை ஆஸ்பிரின் அல்லது இப்யூபுரூஃபன் எடுக்க வேண்டாம்."
      },
      "prevention": [
        "ஆரம்ப நிலையிலேயே மருத்துவரை அணுகவும்",
        "கொசுவலை மற்றும் கொசு விரட்டிகளைப் பயன்படுத்தவும்",
        "சுத்தமான காய்ச்சி வடிகட்டிய நீரைக் குடிக்கவும்"
      ]
    }
  },
  {
    "id": "flu",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "flu",
        "influenza",
        "seasonal flu",
        "flu symptoms",
        "viral flu"
      ],
      "ta": [
        "ஃப்ளூ",
        "இன்ஃப்ளூயன்ஸா",
        "பருவகால காய்ச்சல்",
        "flu",
        "influenza"
      ]
    },
    "en": {
      "name": "Influenza (Flu)",
      "explanation": "Influenza is an acute, contagious viral respiratory infection caused by influenza viruses A and B, typically presenting with rapid onset of systemic and respiratory symptoms.",
      "symptoms": [
        "Sudden high fever and severe shaking chills",
        "Profound musculoskeletal aches and extreme fatigue",
        "Dry hacking cough, sore throat, and nasal congestion",
        "Throbbing frontal headache and photophobia"
      ],
      "selfCare": [
        "Stay home from work or public places to prevent spreading the virus",
        "Drink at least 2.5 to 3 liters of fluids daily to thin respiratory mucus",
        "Use steam inhalation with warm water twice daily to ease congestion",
        "Keep the upper torso elevated with extra pillows during sleep"
      ],
      "secondaryAdvice": [
        "Isolate in a dedicated room away from infants, pregnant women, and elderly family members",
        "Disinfect high-touch surfaces (doorknobs, phone screens, light switches) daily",
        "Monitor blood oxygen saturation (SpO2) with a pulse oximeter if available (normal >95%)",
        "Use disposable tissues when coughing or sneezing and discard in a closed bin",
        "Avoid vigorous exercise until 1 week after fever has completely subsided"
      ],
      "foodAdvice": [
        "Hot chicken or vegetarian soups with ginger, garlic, and turmeric",
        "Warm citrus teas, honey-lemon water, and steamed vegetables",
        "Avoid cold sodas, ice creams, greasy foods, and alcohol"
      ],
      "restAdvice": [
        "Strict bed rest for 3–5 days during the peak viral replication period",
        "Prioritize deep sleep to optimize lymphocyte and antibody production",
        "Avoid driving or operating machinery if feeling dizzy or fatigued"
      ],
      "whenToSeeDoctor": [
        "Fever lasts longer than 4 days or returns after initially resolving",
        "Symptoms worsen significantly after day 5",
        "Severe persistent sinus pain or earache"
      ],
      "emergencySigns": [
        "Shortness of breath, rapid respiration, or chest tightness",
        "Confusion, severe dizziness, or sudden weakness",
        "Coughing up blood or blood-tinged sputum",
        "SpO2 dropping below 93% on pulse oximeter"
      ],
      "medicines": {
        "categories": "Antipyretics, decongestants, and hydration support",
        "relevantIds": [
          "paracetamol",
          "cetirizine"
        ],
        "disclaimer": "Antibiotics are ineffective against viral flu. Antiviral medications (if indicated) must be prescribed by a physician within 48 hours of onset."
      },
      "prevention": [
        "Receive the annual seasonal influenza vaccine",
        "Practice frequent hand washing with soap for 20 seconds",
        "Wear a surgical mask when near coughing individuals"
      ]
    },
    "ta": {
      "name": "இன்ஃப்ளூயன்ஸா (Flu / ஃப்ளூ)",
      "explanation": "இன்ஃப்ளூயன்ஸா என்பது இன்ஃப்ளூயன்ஸா வைரஸ்களால் ஏற்படும் கடுமையான, வேகமாகப் பரவக்கூடிய சுவாசப்பாதை தொற்று ஆகும்.",
      "symptoms": [
        "திடீர் அதிக காய்ச்சல் மற்றும் கடுமையான குளிர் நடுக்கம்",
        "தீவிர தசை வலி, மூட்டு வலி மற்றும் அதிக சோர்வு",
        "வறட்டு இருமல், தொண்டை வலி மற்றும் மூக்கடைப்பு",
        "கடுமையான தலைவலி"
      ],
      "selfCare": [
        "தொற்று பிறருக்குப் பரவாமல் இருக்க வீட்டில் முழு ஓய்வு எடுங்கள்",
        "தினமும் 2.5 முதல் 3 லிட்டர் வெதுவெதுப்பான நீர் அருந்துங்கள்",
        "மூக்கடைப்பு குறைய ஒரு நாளைக்கு இருமுறை நீராவி பிடிக்கவும்",
        "தூங்கும்போது தலையை சற்று உயரமாக வைத்து படுக்கவும்"
      ],
      "secondaryAdvice": [
        "குழந்தைகள் மற்றும் முதியவர்களிடம் இருந்து தற்காலிகமாக விலகி இருங்கள்",
        "கதவு கைப்பிடிகள் மற்றும் மொபைல் திரைகளை கிருமிநாசினி கொண்டு துடைக்கவும்",
        "ஆக்சிஜன் அளவை (SpO2) பல்ஸ் ஆக்சிமீட்டர் மூலம் கண்காணிக்கவும் (இயல்பு >95%)",
        "தும்மும்போது அல்லது இரும்பும்போது வாய் மற்றும் மூக்கை மூடவும்",
        "காய்ச்சல் நின்ற பின்னரும் சில நாட்கள் கடின உழைப்பைத் தவிர்க்கவும்"
      ],
      "foodAdvice": [
        "இஞ்சி, பூண்டு, மிளகு கலந்த சூடான சூப் மற்றும் ரசம் சாதம்",
        "வெதுவெதுப்பான சுக்கு காபி, மூலிகை தேநீர் மற்றும் கஞ்சி",
        "குளிர்ந்த பானங்கள் மற்றும் எண்ணெயில் பொரித்த உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "3 முதல் 5 நாட்களுக்கு முழுமையான படுக்கை ஓய்வு",
        "உடலுக்கு தேவையான நிம்மதியான தூக்கம்",
        "சோர்வாக இருக்கும்போது வாகனம் ஓட்டுவதைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "காய்ச்சல் 4 நாட்களுக்கு மேல் நீடித்தால்",
        "குறைந்த காய்ச்சல் மீண்டும் திடீரென அதிகரித்தால்",
        "கடுமையான காது வலி அல்லது சைனஸ் வலி ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "மூச்சுத்திணறல் அல்லது நெஞ்சு அழுத்தம்",
        "குழப்பம் அல்லது அதீத தலைசுற்றல்",
        "சளியில் இரத்தம் வருதல்",
        "ஆக்சிஜன் அளவு 93%-க்கு கீழ் குறைதல்"
      ],
      "medicines": {
        "categories": "காய்ச்சல் மற்றும் ஒவ்வாமை எதிர்ப்பு மருந்துகள்",
        "relevantIds": [
          "paracetamol",
          "cetirizine"
        ],
        "disclaimer": "வைரஸ் ஃப்ளூவுக்கு ஆன்டிபயாடிக் மருந்துகள் வேலை செய்யாது. மருத்துவர் பரிந்துரைக்கும் மருந்துகளை மட்டுமே உட்கொள்ளவும்."
      },
      "prevention": [
        "வருடாந்திர ஃப்ளூ தடுப்பூசி போட்டுக்கொள்ளுங்கள்",
        "கைகளை சோப்பு போட்டு அடிக்கடி கழுவுங்கள்",
        "கூட்டமான இடங்களுக்கு செல்லும்போது முகக்கவசம் அணியுங்கள்"
      ]
    }
  },
  {
    "id": "common_cold",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "cold",
        "common cold",
        "runny nose",
        "stuffy nose",
        "nasal congestion",
        "sneezing",
        "sneeze",
        "cold symptoms"
      ],
      "ta": [
        "சளி",
        "மூக்கடைப்பு",
        "தும்மல்",
        "ஜலதோஷம்",
        "cold",
        "sali",
        "jaladosham",
        "mookkadaippu",
        "thummal"
      ]
    },
    "en": {
      "name": "Common Cold",
      "explanation": "A mild, self-limiting viral infection of the upper respiratory tract, most commonly caused by rhinoviruses.",
      "symptoms": [
        "Clear to cloudy runny nose and nasal stuffiness",
        "Frequent sneezing and watery eyes",
        "Mild scratchy sore throat",
        "Low-grade or no fever, with mild body fatigue"
      ],
      "selfCare": [
        "Use warm saline nasal drops or saline spray to loosen dried nasal crusts",
        "Inhale steam with a towel over your head for 5–10 minutes twice daily",
        "Gargle with warm salt water (1/2 tsp salt in 1 glass warm water) 3 times daily",
        "Drink warm water, green tea, or warm lemon-honey water continuously"
      ],
      "secondaryAdvice": [
        "Blow your nose gently, one nostril at a time, to avoid ear pressure spikes",
        "Wash your hands frequently to avoid transferring viral droplets to surfaces",
        "Avoid smoking and exposure to secondhand smoke or heavy perfumes",
        "Keep bedroom humidity balanced using a humidifier or a bowl of water in dry weather",
        "Allow 7 to 10 days for your body's immune system to naturally clear the rhinovirus"
      ],
      "foodAdvice": [
        "Warm soups, ginger tea, turmeric milk, and warm broths",
        "Fresh fruits rich in vitamin C (oranges, amla/gooseberry, kiwi)",
        "Avoid icy beverages, refrigerated water, and heavy greasy dairy"
      ],
      "restAdvice": [
        "Ensure 7–9 hours of sleep with head elevated on an extra pillow",
        "Take frequent resting breaks during work or study",
        "Avoid intense cardio or cold-weather outdoor activities"
      ],
      "whenToSeeDoctor": [
        "Symptoms worsen or fail to improve after 10 days",
        "Development of high fever (>101°F) or severe facial sinus pressure",
        "Ear pain or discharge indicating secondary middle ear infection"
      ],
      "emergencySigns": [
        "Difficulty breathing or persistent wheezing",
        "Severe chest pain when taking a deep breath",
        "Inability to swallow liquids or saliva"
      ],
      "medicines": {
        "categories": "Antihistamines / Decongestants (e.g., Cetirizine, Loratadine)",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "Cold medications relieve symptoms only; they do not cure the virus. Antibiotics are not indicated for uncomplicated viral colds."
      },
      "prevention": [
        "Wash hands frequently with soap and water",
        "Avoid touching your eyes, nose, and mouth with unwashed hands",
        "Maintain adequate vitamin C and balanced dietary hydration"
      ]
    },
    "ta": {
      "name": "சாதாரண சளி / ஜலதோஷம் (Common Cold)",
      "explanation": "சாதாரண சளி என்பது ரைனோவைரஸ் (Rhinovirus) போன்ற வைரஸ்களால் மூக்கு மற்றும் தொண்டையில் ஏற்படும் லேசான தொற்றாகும்.",
      "symptoms": [
        "மூக்கொழுகுதல் மற்றும் மூக்கடைப்பு",
        "அடிக்கடி தும்மல் மற்றும் கண்களில் நீர் வடிதல்",
        "தொண்டை கரகரப்பு மற்றும் லேசான இருமல்",
        "லேசான உடல் சோர்வு (காய்ச்சல் பெரும்பாலும் இருக்காது)"
      ],
      "selfCare": [
        "உப்பு நீர் ஸ்ப்ரே அல்லது துளிகள் மூலம் மூக்கடைப்பை நீக்கவும்",
        "தினமும் இரண்டு முறை நீராவி பிடிக்கவும்",
        "வெதுவெதுப்பான உப்பு நீரில் வாய் கொப்பளிக்கவும்",
        "சுடுநீர் அல்லது மூலிகை தேநீர் அடிக்கடி அருந்தவும்"
      ],
      "secondaryAdvice": [
        "மூக்கை ஒரே பக்கமாக மெதுவாக சிந்தவும் (செவிப்பறை அழுத்தத்தைத் தவிர்க்க)",
        "கைகளை அடிக்கடி சோப்பு போட்டு கழுவவும்",
        "புகைபிடித்தல் மற்றும் கடுமையான வாசனை திரவியங்களைத் தவிர்க்கவும்",
        "அறையை மிதமான வெப்பநிலையில் வைக்கவும்",
        "இது குணமாக பொதுவாக 7 முதல் 10 நாட்கள் ஆகும்"
      ],
      "foodAdvice": [
        "சூடான மிளகு ரசம், இஞ்சி டீ, மஞ்சள் கலந்த பால்",
        "வைட்டமின் சி நிறைந்த நெல்லிக்காய், ஆரஞ்சு போன்ற பழங்கள்",
        "குளிர்ந்த நீர் மற்றும் ஐஸ்கிரீம் போன்றவற்றை முற்றிலும் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தலையை சற்று உயர்த்தி வைத்து 8 மணி நேரம் தூங்குங்கள்",
        "வேலைப்பளுவை குறைத்து உடலுக்கு ஓய்வு கொடுங்கள்",
        "குளிர்ந்த காற்றில் செல்வதைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "சளி 10 நாட்களுக்கு மேல் நீடித்தால்",
        "அதிக காய்ச்சல் அல்லது கடுமையான முக/சைனஸ் வலி ஏற்பட்டால்",
        "காது வலி அல்லது சீழ் வடிதல் இருந்தால்"
      ],
      "emergencySigns": [
        "மூச்சு விடுவதில் சிரமம் அல்லது இளைப்பு",
        "மூச்சு விடும்போது நெஞ்சு வலி",
        "எச்சில் அல்லது நீர் கூட விழுங்க முடியாமை"
      ],
      "medicines": {
        "categories": "ஒவ்வாமை எதிர்ப்பு மாத்திரைகள் (செட்டிரிசின்)",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "சளி மருந்துகள் அறிகுறிகளை மட்டுமே தணிக்கும்; வைரஸை அழிக்காது. சாதாரண சளிக்கு ஆன்டிபயாடிக் தேவையில்லை."
      },
      "prevention": [
        "கைகளை சுத்தமாக வைத்திருங்கள்",
        "கழுவாத கைகளால் முகம், மூக்கைத் தொடாதீர்கள்",
        "நீர்ச்சத்து குறையாமல் பார்த்துக்கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "viral_infection",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "viral infection",
        "viral fever",
        "viral illness",
        "virus fever",
        "seasonal viral"
      ],
      "ta": [
        "வைரஸ் காய்ச்சல்",
        "வைரஸ் தொற்று",
        "viral infection",
        "viral fever",
        "virus kaichal"
      ]
    },
    "en": {
      "name": "Viral Infection / Viral Fever",
      "explanation": "A generalized infection caused by airborne or foodborne viruses triggering systemic inflammation, fatigue, and pyrexia.",
      "symptoms": [
        "Intermittent fever with chills and flushing",
        "Widespread myalgia (muscle aches) and joint soreness",
        "Fatigue, loss of appetite, and mild gastrointestinal upset",
        "Mild sore throat, headache, or eye burning"
      ],
      "selfCare": [
        "Drink electrolyte fluids, tender coconut water, and clean water regularly",
        "Take complete bed rest in a quiet and comfortable setting",
        "Wear soft, breathable natural fabrics",
        "Use lukewarm compresses for temperature management"
      ],
      "secondaryAdvice": [
        "Monitor temperature 3–4 times daily and keep an organized log",
        "Avoid taking unprescribed antibiotics; viruses do not respond to antibacterial drugs",
        "Observe urine color: pale yellow indicates healthy hydration; dark amber indicates dehydration",
        "Avoid exertion, gym workouts, or driving during the acute viremic period",
        "Clean hands frequently with alcohol sanitizer or soap"
      ],
      "foodAdvice": [
        "Light easily digestible soft diet: rice kanji, vegetable soups, boiled lentils, steamed idli",
        "Fresh fruit juices without added sugar or ice",
        "Avoid fried, heavily spiced, and street food"
      ],
      "restAdvice": [
        "Complete physical rest for 3 to 7 days depending on recovery pace",
        "Sleep 8–10 hours each night to bolster immune response",
        "Refrain from returning to school or work until 24 hours fever-free"
      ],
      "whenToSeeDoctor": [
        "Fever lasts over 3 days without downward trend",
        "Inability to retain oral liquids due to vomiting or nausea",
        "Appearance of bleeding spots, dark stools, or severe abdominal pain"
      ],
      "emergencySigns": [
        "Extreme drowsiness, confusion, or fainting",
        "Difficulty breathing or chest pain",
        "Persistent vomiting and inability to pass urine for over 8 hours"
      ],
      "medicines": {
        "categories": "Antipyretics and hydration (e.g., Paracetamol, ORS)",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "Supportive care is the cornerstone of viral fever management. Always consult a physician if fever is persistent."
      },
      "prevention": [
        "Drink boiled and cooled drinking water",
        "Wash raw fruits and vegetables thoroughly before consumption",
        "Avoid crowded enclosed places during seasonal outbreaks"
      ]
    },
    "ta": {
      "name": "வைரஸ் காய்ச்சல் / வைரஸ் தொற்று (Viral Fever)",
      "explanation": "காற்றின் மூலமாகவோ அல்லது அசுத்தமான நீர் மூலமாகவோ பரவும் வைரஸ்களால் உடலில் ஏற்படும் பொதுவான தொற்று மற்றும் காய்ச்சல் நிலை.",
      "symptoms": [
        "விட்டு விட்டு வரும் காய்ச்சல் மற்றும் நடுக்கம்",
        "உடல் முழுவதும் தசை மற்றும் மூட்டு வலி",
        "தீவிர சோர்வு மற்றும் பசியின்மை",
        "தொண்டை வலி மற்றும் தலைவலி"
      ],
      "selfCare": [
        "இளநீர், ஓ.ஆர்.எஸ் மற்றும் சுத்தமான சுடுநீர் தொடர்ந்து குடிக்கவும்",
        "அமைதியான சூழலில் முழு ஓய்வு எடுக்கவும்",
        "பருத்தி ஆடைகளை அணியவும்",
        "வெதுவெதுப்பான நீரில் நனைத்த துணியால் உடல் சூட்டை தணிக்கவும்"
      ],
      "secondaryAdvice": [
        "ஒரு நாளைக்கு 3-4 முறை உடல் வெப்பநிலையைக் குறித்துக் கொள்ளுங்கள்",
        "சுயமாக ஆன்டிபயாடிக் மருந்துகளை எடுக்க வேண்டாம் (வைரஸுக்கு ஆன்டிபயாடிக் பலனளிக்காது)",
        "சிறுநீர் நிறத்தைக் கவனிக்கவும் (அடர் மஞ்சள் நிறம் நீர்ச்சத்து குறைவைக் குறிக்கும்)",
        "காய்ச்சல் இருக்கும்போது உடற்பயிற்சி அல்லது கடின வேலைகளைத் தவிர்க்கவும்",
        "கைகளை சுத்தமாக கழுவுங்கள்"
      ],
      "foodAdvice": [
        "எளிதில் செரிக்கும் கஞ்சி, இட்லி, சூடான காய்கறி சூப்",
        "பழச்சாறுகள் (ஐஸ் மற்றும் சர்க்கரை இல்லாமல்)",
        "எண்ணெய் மற்றும் காரமான உணவுகளை முற்றிலும் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "3 முதல் 7 நாட்களுக்கு போதுமான ஓய்வு",
        "இரவில் 8-10 மணி நேரம் நிம்மதியான தூக்கம்",
        "காய்ச்சல் நின்ற பின்னரே வேலைக்குச் செல்லவும்"
      ],
      "whenToSeeDoctor": [
        "காய்ச்சல் 3 நாட்களுக்கு மேல் குறையாமல் இருந்தால்",
        "தொடர் வாந்தியால் நீர் குடிக்க முடியாமல் போனால்",
        "தோலில் இரத்தப் புள்ளிகள் அல்லது கடுமையான வயிற்று வலி ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "அதிக மயக்கம், குழப்பம் அல்லது சுயநினைவின்மை",
        "மூச்சுத்திணறல் அல்லது நெஞ்சு வலி",
        "8 மணி நேரத்திற்கு மேலாக சிறுநீர் கழிக்காமல் இருத்தல்"
      ],
      "medicines": {
        "categories": "காய்ச்சல் தணிக்கும் மருந்துகள் மற்றும் ஓ.ஆர்.எஸ்",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "வைரஸ் காய்ச்சலுக்கு ஆதரவான சிகிச்சையே முதன்மையானது. சந்தேகம் இருந்தால் உடனடியாக மருத்துவரை அணுகவும்."
      },
      "prevention": [
        "காய்ச்சி வடிகட்டிய நீரைக் குடிக்கவும்",
        "பழங்கள், காய்கறிகளை நன்கு கழுவிப் பயன்படுத்தவும்",
        "பருவகால மாற்றங்களின் போது கூட்டமான இடங்களைத் தவிர்க்கவும்"
      ]
    }
  },
  {
    "id": "dengue_awareness",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "dengue",
        "dengue fever",
        "breakbone fever",
        "dengue awareness",
        "platelet drop"
      ],
      "ta": [
        "டெங்கு",
        "டெங்கு காய்ச்சல்",
        "dengue",
        "dengue kaichal"
      ]
    },
    "en": {
      "name": "Dengue Awareness",
      "explanation": "A mosquito-borne viral infection transmitted by female Aedes mosquitoes. Known for high fever, retro-orbital eye pain, and severe bone and joint aches.",
      "symptoms": [
        "Sudden high fever (104°F / 40°C)",
        "Severe retro-orbital pain (behind the eyes)",
        "Severe muscle, bone, and joint aches ('breakbone fever')",
        "Nausea, vomiting, and skin rash appearing 2–5 days after fever onset"
      ],
      "selfCare": [
        "Drink plenty of hydrating fluids: tender coconut water, ORS, fresh fruit juices, and soups",
        "Rest strictly in bed under a mosquito net to prevent mosquito transmission",
        "Apply lukewarm wet towels to control high body temperature",
        "Never take Aspirin, Ibuprofen, or other NSAIDs (increases bleeding risk)"
      ],
      "secondaryAdvice": [
        "Get a Complete Blood Count (CBC) with platelet count and Dengue NS1/IgM test as advised by a doctor",
        "Monitor platelet counts daily if prescribed by your physician",
        "Inspect skin and gums for any spontaneous bleeding or petechial spots",
        "Ensure no stagnant water exists in coolers, flowerpots, or tires around the home",
        "The critical phase begins 3–7 days after fever onset when temperature drops; monitor very closely"
      ],
      "foodAdvice": [
        "Papaya leaf extract (if recommended by healthcare provider), pomegranate juice, kiwi",
        "Oral rehydration salts (ORS), tender coconut water, and rice congee",
        "Avoid dark-colored foods (cola, chocolate) that could mask gastrointestinal bleeding"
      ],
      "restAdvice": [
        "Strict, uninterrupted bed rest until platelet counts stabilize and clinical recovery occurs",
        "Avoid any sports or activities with fall/injury risk due to bleeding hazard"
      ],
      "whenToSeeDoctor": [
        "Any suspected dengue must be formally evaluated by a qualified doctor immediately",
        "Persistent vomiting, severe abdominal tenderness, or lethargy",
        "Rapid drop in platelet count on laboratory reports"
      ],
      "emergencySigns": [
        "Severe abdominal pain or persistent vomiting",
        "Bleeding from gums, nose, vomit, or black tarry stools",
        "Cold, clammy skin, rapid weak pulse, or difficulty breathing (Dengue Shock Syndrome)",
        "Extreme restlessness or lethargy"
      ],
      "medicines": {
        "categories": "Paracetamol ONLY for fever (Strictly NO NSAIDs like Ibuprofen/Aspirin)",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "Strict Warning: NEVER take Ibuprofen, Aspirin, or Diclofenac during suspected Dengue, as they can cause life-threatening internal bleeding."
      },
      "prevention": [
        "Eliminate stagnant water sources within and around the house weekly",
        "Use mosquito repellent creams and wear long-sleeved clothing",
        "Use mosquito nets and window screens"
      ]
    },
    "ta": {
      "name": "டெங்கு விழிப்புணர்வு (Dengue Awareness)",
      "explanation": "ஏடிஸ் (Aedes) வகை பெண் கொசுக்கள் கடிப்பதால் பரவும் தீவிர வைரஸ் தொற்று. அதிக காய்ச்சல் மற்றும் கண் இமைகளுக்குப் பின்னால் கடுமையான வலியை ஏற்படுத்தும்.",
      "symptoms": [
        "திடீர் அதிக காய்ச்சல் (104°F வரை)",
        "கண் இமைகளுக்குப் பின்னால் தாங்க முடியாத வலி",
        "எலும்பு முறிவு போன்ற கடுமையான தசை மற்றும் மூட்டு வலி",
        "குமட்டல், வாந்தி மற்றும் தோலில் சிவப்பு தடிப்புகள்"
      ],
      "selfCare": [
        "இளநீர், ஓ.ஆர்.எஸ், மாதுளை சாறு போன்ற திரவங்களை நிறைய அருந்துங்கள்",
        "கொசுவலைக்குள் படுத்து முழு படுக்கை ஓய்வு எடுங்கள்",
        "வெதுவெதுப்பான நீரில் நனைத்த துணியால் உடல் சூட்டைத் தணிக்கவும்",
        "ஆஸ்பிரின் அல்லது இப்யூபுரூஃபன் போன்ற மருந்துகளை ஒருபோதும் எடுக்காதீர்கள் (இரத்தப்போக்கு ஆபத்து)"
      ],
      "secondaryAdvice": [
        "மருத்துவர் ஆலோசனையுடன் இரத்த தட்டணுக்கள் (Platelets) பரிசோதனை மற்றும் டெங்கு பரிசோதனை செய்யவும்",
        "தட்டணுக்களின் எண்ணிக்கையை தொடர்ந்து கண்காணிக்கவும்",
        "ஈறுகள், மூக்கு அல்லது தோலில் இரத்தப்போக்கு உள்ளதா என்று கவனியுங்கள்",
        "வீட்டைச் சுற்றி தண்ணீர் தேங்காமல் பார்த்துக் கொள்ளுங்கள்",
        "காய்ச்சல் குறையும் 3-7 நாட்களில் தான் தீவிர ஆபத்து காலம் தொடங்கும்; அப்போது விழிப்புடன் இருக்கவும்"
      ],
      "foodAdvice": [
        "நிலவேம்பு குடிநீர், பப்பாளி இலை சாறு (மருத்துவ ஆலோசனையுடன்), மாதுளை",
        "ஓ.ஆர்.எஸ் மற்றும் இளநீர் மூலம் நீர்ச்சத்தை இழக்காமல் பார்த்துக் கொள்ளுங்கள்",
        "கருப்பு நிற பானங்கள் மற்றும் சாக்லேட்டுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "இரத்த தட்டணுக்கள் சீராகும் வரை முழுமையான படுக்கை ஓய்வு",
        "காயம் ஏற்படக்கூடிய எந்தவொரு வேலையையும் செய்யாதீர்கள்"
      ],
      "whenToSeeDoctor": [
        "டெங்கு அறிகுறி தெரிந்தவுடன் உடனே மருத்துவரிடம் செல்லுங்கள்",
        "கடுமையான வயிற்று வலி அல்லது தொடர் வாந்தி இருந்தால்",
        "இரத்த தட்டணுக்கள் வேகமாக குறைந்தால்"
      ],
      "emergencySigns": [
        "கடுமையான வயிற்று வலி மற்றும் தொடர்ந்து வாந்தி",
        "ஈறுகள், மூக்கிலிருந்து இரத்தம் வடிதல் அல்லது கருப்பு நிற மலம்",
        "உடல் குளிர்ந்து போதல், பலவீனமான நாடித்துடிப்பு, மூச்சுத்திணறல் (Dengue Shock)",
        "அதிக மயக்கம் அல்லது சோர்வு"
      ],
      "medicines": {
        "categories": "காய்ச்சலுக்கு பாரசிட்டமால் மட்டுமே (இப்யூபுரூஃபன்/ஆஸ்பிரின் முற்றிலும் கூடாது)",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "எச்சரிக்கை: டெங்கு காய்ச்சலின் போது இப்யூபுரூஃபன் அல்லது ஆஸ்பிரின் உட்கொண்டால் தீவிர இரத்தப்போக்கு ஏற்படும் ஆபத்து உள்ளது."
      },
      "prevention": [
        "வீட்டைச் சுற்றி தண்ணீர் தேங்க விடாதீர்கள்",
        "கொசு விரட்டிகளைப் பயன்படுத்துங்கள் மற்றும் உடலை மூடும் ஆடைகளை அணியுங்கள்",
        "ஜன்னல்களில் கொசுவலைகளைப் பொருத்துங்கள்"
      ]
    }
  },
  {
    "id": "malaria_awareness",
    "category": "fever_infection",
    "keywords": {
      "en": [
        "malaria",
        "malaria awareness",
        "plasmodium",
        "chills and fever",
        "cyclical fever"
      ],
      "ta": [
        "மலேரியா",
        "மலேரியா காய்ச்சல்",
        "malaria",
        "malaria kaichal"
      ]
    },
    "en": {
      "name": "Malaria Awareness",
      "explanation": "A life-threatening disease caused by Plasmodium parasites transmitted through the bites of infected female Anopheles mosquitoes.",
      "symptoms": [
        "Recurrent cycles of shaking chills, high fever, and profuse sweating",
        "Severe headache, body aches, and nausea",
        "Fatigue, anemia (pale skin/conjunctiva), and mild jaundice",
        "Enlarged spleen or liver on clinical examination"
      ],
      "selfCare": [
        "Keep the patient warm during the chill stage with light blankets",
        "Hydrate aggressively with clean water and oral rehydration salts",
        "Apply cool wet compresses once the sweating/fever stage peaks",
        "Do not self-medicate; prompt laboratory diagnosis via blood smear/RDT is vital"
      ],
      "secondaryAdvice": [
        "Undergo immediate blood smear microscopy or Rapid Diagnostic Test (RDT) for malaria parasites",
        "Complete the full course of prescribed antimalarial medications even if symptoms vanish early",
        "Sleep under insecticide-treated bed nets (ITNs)",
        "Report any dark, tea-colored urine immediately (indicates red cell hemolysis)",
        "Monitor family members for similar cyclical fever symptoms"
      ],
      "foodAdvice": [
        "High-energy easily digestible foods: boiled lentils, rice, vegetable purées, soft fruits",
        "Hydrating fluids: ORS, lemon water, and clear soups",
        "Avoid heavy fats, fried spices, and unpasteurized milk"
      ],
      "restAdvice": [
        "Strict bed rest during fever paroxysms",
        "Avoid strenuous activity until hemoglobin and energy levels are restored"
      ],
      "whenToSeeDoctor": [
        "Cyclical fever with shaking chills requires urgent diagnostic confirmation",
        "Fever returning every 24 to 48 hours",
        "Signs of jaundice (yellow eyes/skin) or dark urine"
      ],
      "emergencySigns": [
        "Cerebral malaria signs: confusion, seizures, or coma",
        "Severe breathing difficulty (acidotic breathing)",
        "Severe anemia, extreme pallor, or black-colored urine (blackwater fever)"
      ],
      "medicines": {
        "categories": "Physician-prescribed Antimalarials (e.g., Artemisinin-based combinations) and Paracetamol",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "Malaria requires prescription antimalarial therapy based on species identification. Never rely solely on home remedies."
      },
      "prevention": [
        "Sleep under insecticide-treated bed nets",
        "Use indoor mosquito sprays and repellents",
        "Eliminate stagnant outdoor water where Anopheles mosquitoes breed"
      ]
    },
    "ta": {
      "name": "மலேரியா விழிப்புணர்வு (Malaria Awareness)",
      "explanation": "அனாபிலிஸ் (Anopheles) கொசுக்கள் கடிப்பதால் பிளாஸ்மோடியம் ஒட்டுண்ணிகளால் ஏற்படும் உயிருக்கு ஆபத்தான தொற்று நோய்.",
      "symptoms": [
        "சுழற்சி முறையில் வரும் நடுக்கம் (குளிர் நிலை), அதிக காய்ச்சல் (வெப்ப நிலை) மற்றும் தீவிர வியர்வை (வியர்வை நிலை)",
        "கடுமையான தலைவலி, உடல் வலி மற்றும் குமட்டல்",
        "சோர்வு, வெளிறிய தோல் (இரத்த சோகை) மற்றும் லேசான மஞ்சள் காமாலை",
        "மண்ணீரல் வீக்கம்"
      ],
      "selfCare": [
        "குளிர் எடுக்கும் போது மெல்லிய போர்வை போர்த்தவும்",
        "சுத்தமான நீர் மற்றும் ஓ.ஆர்.எஸ் நிறைய குடிக்கவும்",
        "காய்ச்சல் அதிகமாகும் போது வெதுவெதுப்பான நீரில் ஒத்தடம் கொடுக்கவும்",
        "சுயமாக மருந்து எடுக்காமல் உடனே இரத்தப் பரிசோதனை செய்யவும்"
      ],
      "secondaryAdvice": [
        "உடனே மலேரியா இரத்தப் பரிசோதனை (Blood Smear / RDT) செய்துகொள்ளுங்கள்",
        "மருத்துவர் பரிந்துரைத்த முழு மருந்து மாத்திரைகளையும் தவறாமல் உட்கொள்ளுங்கள்",
        "கொசுவலைக்குள் மட்டுமே தூங்குங்கள்",
        "சிறுநீர் தேநீர் நிறத்தில் (அடர் நிறமாக) வெளியேறினால் உடனே மருத்துவரிடம் செல்லுங்கள்",
        "குடும்பத்தில் மற்றவர்களுக்கும் இந்த அறிகுறி உள்ளதா என்று கவனியுங்கள்"
      ],
      "foodAdvice": [
        "சத்து நிறைந்த எளிதில் செரிக்கும் பருப்பு சாதம், காய்கறி சூப், கஞ்சி",
        "எலுமிச்சை சாறு, ஓ.ஆர்.எஸ் நீர் மற்றும் இளநீர்",
        "எண்ணெய், மசாலா உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "காய்ச்சல் குறையும் வரை முழு படுக்கை ஓய்வு",
        "உடலில் இரத்தம் மற்றும் தெம்பு கூடும் வரை கடின வேலைகளைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "நடுக்கத்துடன் காய்ச்சல் வந்தால் உடனே மருத்துவரை அணுகவும்",
        "ஒன்று அல்லது இரண்டு நாட்களுக்கு ஒருமுறை விட்டு விட்டு காய்ச்சல் வந்தால்",
        "கண்கள் மஞ்சள் நிறமாதல் அல்லது அடர் நிற சிறுநீர் வெளியேறினால்"
      ],
      "emergencySigns": [
        "மூளை மலேரியா அறிகுறிகள்: வலிப்பு, குழப்பம் அல்லது சுயநினைவின்மை",
        "தீவிர மூச்சுத்திணறல்",
        "அதிக இரத்த சோகை மற்றும் கருப்பு நிற சிறுநீர்"
      ],
      "medicines": {
        "categories": "மருத்துவர் பரிந்துரைக்கும் மலேரியா எதிர்ப்பு மருந்துகள் மற்றும் பாரசிட்டமால்",
        "relevantIds": [
          "paracetamol",
          "ors"
        ],
        "disclaimer": "மலேரியாவுக்கு தகுதியான மருத்துவ சிகிச்சை கட்டாயம் தேவை. சுயமாக சிகிச்சை எடுக்காதீர்கள்."
      },
      "prevention": [
        "கொசுவலைகளைப் பயன்படுத்துங்கள்",
        "கொசுக்கள் உற்பத்தியாகும் சாக்கடைகள் மற்றும் தேங்கிய நீரை அப்புறப்படுத்துங்கள்",
        "கொசு விரட்டி மருந்துகளைப் பயன்படுத்துங்கள்"
      ]
    }
  },
  {
    "id": "cough",
    "category": "respiratory",
    "keywords": {
      "en": [
        "cough",
        "coughing",
        "couph",
        "have cough",
        "bad cough"
      ],
      "ta": [
        "இருமல்",
        "இருமல் வருது",
        "இருமல் இருக்கு",
        "cough",
        "irumal",
        "enakku irumal"
      ]
    },
    "en": {
      "name": "Cough (General)",
      "explanation": "A protective physiological reflex that clears your airways of mucus, irritants, and foreign pathogens.",
      "symptoms": [
        "Expulsive reflex sound from the airway",
        "Throat tickle, scratchiness, or irritation",
        "Mild chest wall soreness from frequent coughing",
        "Mucus production or dry irritation"
      ],
      "selfCare": [
        "Sip warm water mixed with pure honey and lemon (for adults and children over 1 year)",
        "Inhale steam from a bowl of hot water for 5–10 minutes",
        "Gargle with warm salt water 2–3 times a day",
        "Elevate head with two pillows while resting to prevent post-nasal drip pooling"
      ],
      "secondaryAdvice": [
        "Stay away from tobacco smoke, dust, pet dander, and harsh chemical sprays",
        "Drink at least 2 liters of warm fluids daily to liquefy thick bronchial secretions",
        "Note the color and consistency of any sputum produced (clear, yellow, green, or blood-tinged)",
        "Use a cool-mist humidifier in dry bedrooms",
        "Avoid speaking continuously or shouting to rest irritated vocal cords"
      ],
      "foodAdvice": [
        "Warm soups, ginger tea, herbal teas, and turmeric milk",
        "Soft warm meals like oats, khichdi, and steamed vegetables",
        "Avoid cold sodas, ice creams, very sour foods, and deep-fried snacks"
      ],
      "restAdvice": [
        "Rest your voice and avoid dry, dusty environments",
        "Ensure adequate overnight sleep to support respiratory mucosal healing"
      ],
      "whenToSeeDoctor": [
        "Cough lasts longer than 3 weeks (chronic cough)",
        "Cough produces thick green or foul-smelling sputum with high fever",
        "Significant unexplained weight loss or night sweats"
      ],
      "emergencySigns": [
        "Coughing up blood (hemoptysis)",
        "Severe shortness of breath, audible stridor, or gasping",
        "Inability to speak in full sentences due to lack of breath",
        "Bluish lips or nails"
      ],
      "medicines": {
        "categories": "Expectorants (Guaifenesin) or Antitussives (Dextromethorphan)",
        "relevantIds": [
          "dextromethorphan",
          "guaifenesin",
          "cough_syrup"
        ],
        "disclaimer": "Match the medicine to the type of cough (expectorant for wet cough, suppressant for dry cough). Always consult a pharmacist."
      },
      "prevention": [
        "Avoid exposure to active and passive smoke",
        "Wear a face mask in polluted or dusty conditions",
        "Wash hands frequently to minimize viral transmission"
      ]
    },
    "ta": {
      "name": "இருமல் (Cough)",
      "explanation": "இருமல் என்பது சுவாசப்பாதையில் உள்ள சளி, தூசி மற்றும் கிருமிகளை வெளியேற்ற உடல் மேற்கொள்ளும் ஒரு இயற்கையான பாதுகாப்பு அனிச்சை செயலாகும்.",
      "symptoms": [
        "தொண்டையில் உறுத்தல் அல்லது அரிப்பு",
        "தொடர்ந்து இருமுவதால் நெஞ்சில் லேசான வலி",
        "சளியுடன் கூடிய அல்லது வறட்டு இருமல்",
        "குரல் கரகரப்பு"
      ],
      "selfCare": [
        "வெதுவெதுப்பான நீரில் தேன் மற்றும் எலுமிச்சை சாறு கலந்து குடிக்கவும்",
        "ஒரு நாளைக்கு 1-2 முறை நீராவி பிடிக்கவும்",
        "வெதுவெதுப்பான உப்பு நீரில் வாய் கொப்பளிக்கவும்",
        "படுக்கும் போது தலையை சற்று உயரமாக வைத்து படுக்கவும்"
      ],
      "secondaryAdvice": [
        "புகை, தூசி மற்றும் வாசனை திரவியங்களைத் தவிர்க்கவும்",
        "சளியை இளக்க தினமும் 2 லிட்டர் வெதுவெதுப்பான நீர் அருந்தவும்",
        "சளியின் நிறத்தைக் கவனியுங்கள் (வெள்ளை, மஞ்சள் அல்லது இரத்தம் கலந்ததா)",
        "தொண்டைக்கு ஓய்வு கொடுக்க தொடர்ந்து பேசுவதைத் தவிர்க்கவும்",
        "அறையை காற்றோட்டமாக வையுங்கள்"
      ],
      "foodAdvice": [
        "மிளகு ரசம், இஞ்சி டீ, மஞ்சள் பால் மற்றும் சூடான சூப்",
        "எளிதில் செரிக்கும் சூடான உணவுகள்",
        "குளிர்ந்த நீர், ஐஸ்கிரீம் மற்றும் எண்ணெயில் பொரித்த உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "பேசுவதைக் குறைத்து தொண்டைக்கு ஓய்வு கொடுங்கள்",
        "இரவில் நிம்மதியான தூக்கம் அவசியம்"
      ],
      "whenToSeeDoctor": [
        "இருமல் 3 வாரங்களுக்கு மேல் நீடித்தால்",
        "காய்ச்சலுடன் அடர் மஞ்சள் அல்லது பச்சை நிற சளி வந்தால்",
        "இரவில் கடுமையான வியர்வை மற்றும் எடை குறைவு ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "இருமலில் இரத்தம் வருதல்",
        "கடுமையான மூச்சுத்திணறல் அல்லது மூச்சு வாங்குதல்",
        "பேச முடியாத அளவுக்கு மூச்சுத் திணறல்",
        "உதடுகள் நீல நிறமாதல்"
      ],
      "medicines": {
        "categories": "இருமல் சிரப்புகள் (எக்ஸ்பெக்டோரண்ட் அல்லது சப்ரசன்ட்)",
        "relevantIds": [
          "dextromethorphan",
          "guaifenesin",
          "cough_syrup"
        ],
        "disclaimer": "சளி இருமலுக்கு சளியை வெளியேற்றும் மருந்தும், வறட்டு இருமலுக்கு இருமலைத் தணிக்கும் மருந்தும் உட்கொள்ள வேண்டும்."
      },
      "prevention": [
        "புகைபிடிப்பதைத் தவிர்க்கவும்",
        "தூசி நிறைந்த இடங்களுக்குச் செல்லும்போது முகக்கவசம் அணியவும்",
        "கைகளை சுத்தமாக கழுவவும்"
      ]
    }
  },
  {
    "id": "dry_cough",
    "category": "respiratory",
    "keywords": {
      "en": [
        "dry cough",
        "tickly cough",
        "hacking cough",
        "non productive cough",
        "throat tickle cough"
      ],
      "ta": [
        "வறட்டு இருமல்",
        "தொண்டை வறட்சி இருமல்",
        "dry cough",
        "varattu irumal",
        "varattu irumal marunthu"
      ]
    },
    "en": {
      "name": "Dry Cough",
      "explanation": "A non-productive cough where no phlegm or mucus is produced, usually caused by viral airway hyperresponsiveness, allergies, dry air, or acid reflux (GERD).",
      "symptoms": [
        "Continuous dry, hacking cough fits",
        "Persistent tickle or raw sensation in the throat",
        "Chest wall soreness from frequent coughing spells",
        "Disturbed nighttime sleep"
      ],
      "selfCare": [
        "Take a spoonful of pure honey to coat and soothe irritated pharyngeal nerve endings",
        "Sip warm water frequently throughout the day",
        "Suck on soothing lozenges or hard candies to stimulate saliva",
        "Use steam inhalation with a few drops of eucalyptus oil"
      ],
      "secondaryAdvice": [
        "Sleep with the head of your bed elevated 6 inches to minimize acid reflux triggers",
        "Avoid eating within 3 hours of bedtime if acid reflux is suspected",
        "Check your medications: ACE inhibitors (for blood pressure) commonly cause chronic dry cough",
        "Avoid air conditioners blowing cold, dry air directly onto your face",
        "Keep bedroom air comfortably moist with a room vaporizer"
      ],
      "foodAdvice": [
        "Warm chamomile or ginger tea with honey, warm vegetable broths",
        "Soft foods: mashed potatoes, oatmeal, warm custards",
        "Avoid dry crunchy chips, spicy peppers, acidic vinegar, and citrus fruits"
      ],
      "restAdvice": [
        "Rest in an upright or propped-up sleeping posture",
        "Practice slow, nasal breathing exercises to avoid dry-mouth airway irritation"
      ],
      "whenToSeeDoctor": [
        "Dry cough persists beyond 2 weeks",
        "Accompanied by heartburn, regurgitation, or hoarseness",
        "New onset dry cough while taking blood pressure medications"
      ],
      "emergencySigns": [
        "Inability to inhale adequately or feeling of choking",
        "Stridor (high-pitched whistling sound during inhalation)",
        "Chest tightness and blue discoloration of lips"
      ],
      "medicines": {
        "categories": "Cough Suppressants / Antitussives (e.g., Dextromethorphan) or Antihistamines",
        "relevantIds": [
          "dextromethorphan",
          "cough_syrup",
          "cetirizine"
        ],
        "disclaimer": "Dry cough suppressants dampen the brain's cough reflex. Follow packaging instructions carefully."
      },
      "prevention": [
        "Stay well-hydrated throughout the day",
        "Use a humidifier in air-conditioned rooms",
        "Manage gastroesophageal reflux with diet modifications"
      ]
    },
    "ta": {
      "name": "வறட்டு இருமல் (Dry Cough)",
      "explanation": "சளி எதுவும் வெளிவராமல் தொண்டையில் ஏற்படும் வறட்சி மற்றும் உறுத்தலால் தொடர்ந்து வரும் இருமல். இது ஒவ்வாமை, அசிடிட்டி அல்லது வைரஸ் தொற்றால் வரலாம்.",
      "symptoms": [
        "சளி இல்லாத தொடர் இருமல்",
        "தொண்டையில் தீவிர உறுத்தல் மற்றும் அரிப்பு",
        "தொடர் இருமலால நெஞ்சு மற்றும் விலா எலும்பு வலி",
        "இரவில் தூக்கமின்மை"
      ],
      "selfCare": [
        "ஒரு ஸ்பூன் சுத்தமான தேன் சாப்பிடுவது தொண்டை எரிச்சலைக் குறைக்கும்",
        "நாள் முழுவதும் வெதுவெதுப்பான நீரை சிறிது சிறிதாக குடிக்கவும்",
        "தொண்டை வறட்சியைப் போக்க லோசன்ஜஸ் (Lozenges) சுவைக்கவும்",
        "சுடுநீரில் நீராவி பிடிக்கவும்"
      ],
      "secondaryAdvice": [
        "தூங்கும் போது தலையை உயரமாக வைத்து படுக்கவும் (அசிடிட்டியால் வரும் இருமலைத் தடுக்க)",
        "தூங்குவதற்கு 3 மணி நேரத்திற்கு முன்பே உணவருந்தவும்",
        "இரத்த அழுத்த மாத்திரைகள் (ACE inhibitors) சாப்பிடுபவரா என்று கவனிக்கவும்",
        "ஏசி காற்று நேரடியாக முகத்தில் படுவதைத் தவிர்க்கவும்",
        "அறையில் ஈரப்பதம் இருக்குமாறு பார்த்துக்கொள்ளுங்கள்"
      ],
      "foodAdvice": [
        "இஞ்சி தேநீர், அதிமதுரக் குடிநீர், வெதுவெதுப்பான சூப்",
        "மென்மையான கஞ்சி மற்றும் அவல்",
        "காரமான சிப்ஸ், வறுத்த உணவுகள் மற்றும் புளிப்பான உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தலையை உயர்த்தி சாய்ந்த நிலையில் ஓய்வெடுங்கள்",
        "மூக்கு வழியாக மெதுவாக மூச்சுவிடும் பயிற்சி செய்யுங்கள்"
      ],
      "whenToSeeDoctor": [
        "வறட்டு இருமல் 2 வாரங்களுக்கு மேல் நீடித்தால்",
        "நெஞ்செரிச்சல் அல்லது குரல் மாற்றத்துடன் இருந்தால்",
        "இரத்த அழுத்த மாத்திரை சாப்பிட்ட பின் இருமல் தொடங்கியிருந்தால்"
      ],
      "emergencySigns": [
        "சுவாசிக்க முடியாமல் மூச்சுத்திணறல் ஏற்படுவது",
        "மூச்சு விடும்போது விசிலடிப்பது போன்ற சத்தம்",
        "நெஞ்சு இறுக்கம் மற்றும் உதடுகள் நீலமாதல்"
      ],
      "medicines": {
        "categories": "இருமல் தணிப்பான் (Dextromethorphan) அல்லது ஆன்டிஹிஸ்டமைன்",
        "relevantIds": [
          "dextromethorphan",
          "cough_syrup",
          "cetirizine"
        ],
        "disclaimer": "வறட்டு இருமல் மருந்துகள் மூளையில் இருமல் தூண்டுதலைக் கட்டுப்படுத்துகின்றன. மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்."
      },
      "prevention": [
        "நிறைய தண்ணீர் குடித்து தொண்டையை வறண்டு போகாமல் பார்த்துக் கொள்ளுங்கள்",
        "ஏசி அறைகளில் ஈரப்பதம் பேணுங்கள்",
        "அசிடிட்டி வராமல் உணவுப் பழக்கத்தை மாற்றிக்கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "sore_throat",
    "category": "respiratory",
    "keywords": {
      "en": [
        "sore throat",
        "throat pain",
        "pain swallowing",
        "itchy throat",
        "scratchy throat",
        "pharyngitis",
        "throat hurt"
      ],
      "ta": [
        "தொண்டை வலி",
        "தொண்டை கரகரப்பு",
        "விழுங்கும்போது வலி",
        "sore throat",
        "thondai vali",
        "thondai kattu",
        "thondai erichal"
      ]
    },
    "en": {
      "name": "Sore Throat",
      "explanation": "Inflammation of the pharynx or tonsils, most frequently triggered by viral respiratory infections, dry air, or bacterial pathogens (such as Group A Streptococcus).",
      "symptoms": [
        "Painful or scratchy sensation in the throat",
        "Difficulty or sharp pain when swallowing (odynophagia)",
        "Red, swollen tonsils, sometimes with white patches",
        "Tender, swollen lymph nodes in the neck and jawline"
      ],
      "selfCare": [
        "Gargle with warm salt water (1/2 teaspoon salt in 8 oz warm water) every 3–4 hours",
        "Drink warm water with honey and lemon to coat mucosal tissues",
        "Suck on throat lozenges or ice chips to temporarily numb pain receptors",
        "Use a cool-mist humidifier in the bedroom to keep mucous membranes moist"
      ],
      "secondaryAdvice": [
        "Replace your toothbrush after recovery to prevent reinfecting yourself",
        "Avoid shouting, whispering, or excessive talking to prevent vocal cord strain",
        "Do not share drinking glasses, straws, or cutlery with anyone",
        "Inspect the back of your throat using a mirror and flashlight for white exudate (spots)",
        "Wash hands frequently to curb viral and bacterial transmission"
      ],
      "foodAdvice": [
        "Soothing, soft, room-temperature or warm liquids: broths, soups, oatmeal, fruit smoothies",
        "Ice pops, cold yogurt, or ice water if warm drinks exacerbate swelling",
        "Strictly avoid crunchy chips, spicy chilies, hot sauces, and acidic citrus"
      ],
      "restAdvice": [
        "Voice rest: limit phone calls and prolonged conversations",
        "Get 8 hours of sleep with extra hydration breaks"
      ],
      "whenToSeeDoctor": [
        "Severe throat pain lasting over 5 days without improvement",
        "Fever over 101°F without cough (possible Strep throat requiring antibiotics)",
        "Visible white patches or pus coating the tonsils"
      ],
      "emergencySigns": [
        "Inability to swallow saliva, leading to drooling",
        "Difficulty opening mouth fully (trismus — possible peritonsillar abscess)",
        "Stridor, gasping, or difficulty breathing",
        "Severe unilateral neck swelling"
      ],
      "medicines": {
        "categories": "Analgesics (Paracetamol / Ibuprofen) and antiseptic throat lozenges",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "Most sore throats are viral and resolve on their own. Antibiotics are ONLY indicated if a throat swab confirms bacterial Strep throat."
      },
      "prevention": [
        "Wash hands regularly and avoid sharing drinking containers",
        "Stay away from secondhand smoke and environmental pollution",
        "Stay well hydrated"
      ]
    },
    "ta": {
      "name": "தொண்டை வலி (Sore Throat)",
      "explanation": "வைரஸ் தொற்று, பாக்டீரியா அல்லது வறண்ட காற்றினால் தொண்டை மற்றும் டான்சில் பகுதிகளில் ஏற்படும் அழற்சி மற்றும் வலி.",
      "symptoms": [
        "தொண்டையில் வலி மற்றும் கரகரப்பு",
        "உணவு அல்லது நீர் விழுங்கும்போது தீவிர வலி",
        "டான்சில் வீக்கம் மற்றும் சிவந்து போதல்",
        "கழுத்தில் நெறிக்கட்டுதல் (நிணநீர் முடிச்சுகள் வீங்குதல்)"
      ],
      "selfCare": [
        "வெதுவெதுப்பான உப்பு நீரில் ஒரு நாளைக்கு 3-4 முறை வாய் கொப்பளிக்கவும்",
        "வெதுவெதுப்பான சுடுநீரில் தேன் கலந்து குடிக்கவும்",
        "தொண்டை மாத்திரைகள் (Lozenges) சுவைக்கலாம்",
        "அறையை ஈரப்பதமாக வைக்க நீராவி அல்லது ஹுமிடிஃபையர் பயன்படுத்தவும்"
      ],
      "secondaryAdvice": [
        "நோய் குணமானதும் உங்கள் பல் துலக்கும் பிரஷை மாற்றவும்",
        "அதிகமாக பேசுவதைத் தவிர்த்து குரலுக்கு ஓய்வு கொடுக்கவும்",
        "உங்கள் தட்டு, டம்ளர்களை பிறருடன் பகிர்ந்து கொள்ளாதீர்கள்",
        "தொண்டையில் வெள்ளை புள்ளிகள் உள்ளதா என்று கண்ணாடியில் பார்க்கவும்",
        "கைகளை சுத்தமாக கழுவுங்கள்"
      ],
      "foodAdvice": [
        "மென்மையான கஞ்சி, ஆவி பறக்கும் சூப், இட்லி, தயிர்",
        "தொண்டை எரிச்சலுக்கு குளிர்ந்த நீர் அல்லது ஐஸ் கட்டி கூட இதமளிக்கும்",
        "காரமான உணவுகள், மொறுமொறுப்பான சிப்ஸ் மற்றும் புளிப்பான உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "பேசுவதைக் குறைத்து தொண்டைக்கு முழு ஓய்வு கொடுங்கள்",
        "நன்றாக தூங்கி உடலுக்கு ஓய்வளியுங்கள்"
      ],
      "whenToSeeDoctor": [
        "தொண்டை வலி 5 நாட்களுக்கு மேல் நீடித்தால்",
        "இருமல் இல்லாமல் அதிக காய்ச்சல் இருந்தால் (பாக்டீரியா தொற்றாக இருக்கலாம்)",
        "டான்சில் பகுதியில் வெள்ளை சீழ் புள்ளிகள் தென்பட்டால்"
      ],
      "emergencySigns": [
        "எச்சில் கூட விழுங்க முடியாமல் வாய்வழியே வழிதல்",
        "வாயை முழுமையாக திறக்க முடியாமை (தாடை இறுக்கம்)",
        "மூச்சுத்திணறல் அல்லது இளைப்பு",
        "கழுத்தின் ஒரு பக்கத்தில் கடுமையான வீக்கம்"
      ],
      "medicines": {
        "categories": "வலி நிவாரணிகள் (பாரசிட்டமால் / இப்யூபுரூஃபன்) மற்றும் தொண்டை மாத்திரைகள்",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "பெரும்பாலான தொண்டை வலி வைரஸால் ஏற்படுவதால் தானாகவே குணமாகும். மருத்துவர் உறுதி செய்தால் மட்டுமே ஆன்டிபயாடிக் தேவைப்படும்."
      },
      "prevention": [
        "கைகளை சுத்தமாக கழுவுங்கள்",
        "புகை மற்றும் தூசியிலிருந்து விலகி இருங்கள்",
        "போதுமான அளவு தண்ணீர் குடியுங்கள்"
      ]
    }
  },
  {
    "id": "asthma_awareness",
    "category": "respiratory",
    "keywords": {
      "en": [
        "asthma",
        "wheezing",
        "asthma awareness",
        "bronchial asthma",
        "asthma attack prevention"
      ],
      "ta": [
        "ஆஸ்துமா",
        "இளைப்பு நோய்",
        "வீசிங்",
        "asthma",
        "wheezing",
        "ilaippu",
        "moochu thinaral asthma"
      ]
    },
    "en": {
      "name": "Asthma Awareness",
      "explanation": "A chronic inflammatory condition of the airways that causes periodic hyperreactivity, bronchial constriction, airway wall swelling, and excessive mucus production.",
      "symptoms": [
        "Recurrent episodes of wheezing (whistling sound during exhalation)",
        "Shortness of breath and chest tightness",
        "Nighttime or early morning coughing fits",
        "Exercise-induced or cold air-triggered breathlessness"
      ],
      "selfCare": [
        "Sit upright comfortably; never lie down during an episode of breathlessness",
        "Use your prescribed fast-acting rescue inhaler (e.g., Salbutamol) via spacer as instructed by your doctor",
        "Practice slow, controlled pursed-lip breathing to prevent lung hyperinflation",
        "Identify and eliminate personal triggers (cat dander, dust mites, pollen, mold)"
      ],
      "secondaryAdvice": [
        "Maintain an updated written Asthma Action Plan provided by your pulmonologist",
        "Monitor your Peak Expiratory Flow Rate (PEFR) with a peak flow meter if prescribed",
        "Wash bed linens weekly in hot water (>55°C) to kill allergen-producing dust mites",
        "Avoid NSAID painkillers like Aspirin and Ibuprofen if you have aspirin-sensitive asthma",
        "Ensure rescue inhalers are kept within arm's reach at all times (not expired)"
      ],
      "foodAdvice": [
        "Anti-inflammatory diet rich in omega-3 fatty acids, fresh leafy vegetables, and fruits",
        "Light, easily digestible warm meals",
        "Avoid foods with sulfite preservatives (dried fruits, wine, canned foods)"
      ],
      "restAdvice": [
        "Sleep with head elevated in a clean, dust-free, pet-free bedroom",
        "Engage in doctor-approved low-intensity activities like swimming or walking"
      ],
      "whenToSeeDoctor": [
        "Needing your rescue inhaler more than 2–3 times a week (poor control)",
        "Frequent nighttime awakenings with coughing or wheezing",
        "Drop in peak flow readings below 80% of your personal best"
      ],
      "emergencySigns": [
        "Rescue inhaler provides no relief or wears off within minutes",
        "Severe breathlessness, inability to speak more than a few words per breath",
        "Chest and neck sucking in during inhalation (retractions)",
        "Cyanosis: gray or bluish discoloration of lips, face, or fingernails"
      ],
      "medicines": {
        "categories": "Bronchodilators and Corticosteroid Inhalers under clinical prescription",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "Asthma requires formal physician diagnosis and prescription inhalers. Never stop preventive maintenance inhalers abruptly."
      },
      "prevention": [
        "Avoid known allergic and environmental triggers",
        "Take preventive controller inhalers consistently as prescribed",
        "Receive annual influenza and pneumococcal immunizations"
      ]
    },
    "ta": {
      "name": "ஆஸ்துமா விழிப்புணர்வு (Asthma Awareness)",
      "explanation": "ஆஸ்துமா என்பது சுவாசப்பாதையில் ஏற்படும் நாட்பட்ட அழற்சியால் மூச்சுக்குழாய் சுருங்கி, வீங்கி, அதிக சளி உருவாகி மூச்சுத்திணறலை ஏற்படுத்தும் நிலையாகும்.",
      "symptoms": [
        "மூச்சு விடும்போது விசிலடிப்பது போன்ற சத்தம் (வீசிங்)",
        "மூச்சுத்திணறல் மற்றும் நெஞ்சு இறுக்கம்",
        "இரவு அல்லது அதிகாலை நேரத்தில் தீவிர இருமல்",
        "குளிர்ந்த காற்று அல்லது உடற்பயிற்சியால் ஏற்படும் மூச்சு வாங்குதல்"
      ],
      "selfCare": [
        "மூச்சுத்திணறல் ஏற்படும் போது படுக்காமல் நேராக நிமிர்ந்து உட்காருங்கள்",
        "மருத்துவர் பரிந்துரைத்த இன்ஹேலரை (Rescue Inhaler) உடனே பயன்படுத்தவும்",
        "மெதுவாக மூச்சை உள்ளிழுத்து மெதுவாக வெளிவிடும் சுவாசப் பயிற்சி செய்யவும்",
        "தூசி, புகை போன்ற தூண்டுதல்களில் இருந்து உடனே விலகுங்கள்"
      ],
      "secondaryAdvice": [
        "மருத்துவர் வழங்கிய ஆஸ்துமா செயல் திட்டத்தைப் பின்பற்றுங்கள்",
        "பீக் ஃப்ளோ மீட்டர் (Peak Flow Meter) மூலம் சுவாசத் திறனைக் கண்காணிக்கவும்",
        "படுக்கை விரிப்புகளை வாரந்தோறும் சுடுநீரில் துவைக்கவும்",
        "ஆஸ்பிரின், இப்யூபுரூஃபன் போன்ற வலி நிவாரணிகளைத் தவிர்க்கவும்",
        "இன்ஹேலரை எப்போதும் எளிதில் எடுக்கும் தூரத்தில் தயாராக வையுங்கள்"
      ],
      "foodAdvice": [
        "ஆன்டிஆக்ஸிடன்ட் நிறைந்த புதிய காய்கறிகள், பழங்கள்",
        "வெதுவெதுப்பான சத்தான உணவுகள்",
        "பதப்படுத்தப்பட்ட உணவுகள், சல்பைட் கலந்த உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தூசி இல்லாத சுத்தமான அறையில் தலையை சற்று உயர்த்தி படுக்கவும்",
        "மருத்துவர் அனுமதித்த எளிய நடைப்பயிற்சி செய்யலாம்"
      ],
      "whenToSeeDoctor": [
        "வாரத்திற்கு 2 முறைக்கு மேல் இன்ஹேலர் தேவைப்பட்டால்",
        "இரவில் இருமலால் தூக்கம் தடைபட்டால்",
        "வழக்கமான வேலைகளைச் செய்யும்போது அதிக மூச்சு வாங்கினால்"
      ],
      "emergencySigns": [
        "இன்ஹேலர் பயன்படுத்தியும் மூச்சுத்திணறல் குறையாவிட்டால்",
        "ஒரே மூச்சில் சில வார்த்தைகளுக்கு மேல் பேச முடியாமை",
        "மூச்சு விடும்போது நெஞ்சுப் பகுதி உள்வாங்குதல்",
        "உதடுகள் அல்லது விரல் நகங்கள் நீல நிறமாக மாறுதல்"
      ],
      "medicines": {
        "categories": "சுவாசக்குழாய் விரிப்பான்கள் மற்றும் இன்ஹேலர்கள் (மருத்துவர் பரிந்துரை)",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "ஆஸ்துமாவுக்கு தகுதியான மருத்துவரிடம் முறையான பரிசோதனையும், இன்ஹேலர் சிகிச்சையும் அவசியம். இன்ஹேலரை சுயமாக நிறுத்தக்கூடாது."
      },
      "prevention": [
        "தூசி, புகை மற்றும் செல்லப்பிராணிகளின் முடியைத் தவிர்க்கவும்",
        "பரிந்துரைக்கப்பட்ட மருந்துகளைத் தவறாமல் எடுக்கவும்",
        "குளிர்காலத்தில் முகத்தை மூடும் ஸ்கார்ஃப் அணியுங்கள்"
      ]
    }
  },
  {
    "id": "breathing_difficulty",
    "category": "respiratory",
    "keywords": {
      "en": [
        "breathing difficulty",
        "shortness of breath",
        "cant breathe",
        "can't breathe",
        "breathless",
        "dyspnea",
        "struggling to breathe"
      ],
      "ta": [
        "மூச்சுத்திணறல்",
        "மூச்சு விட முடியவில்லை",
        "மூச்சு வாங்குது",
        "moochu thinaral",
        "moochu vida mudiyala",
        "breathless",
        "shortness of breath"
      ]
    },
    "en": {
      "name": "Breathing Difficulty (Emergency Intercept)",
      "explanation": "Acute shortness of breath (dyspnea) is a critical symptom that may indicate life-threatening cardiac, pulmonary, or severe allergic emergencies.",
      "symptoms": [
        "Inability to get enough air into the lungs",
        "Rapid, shallow, or labored breathing",
        "Chest tightness, pain, or pressure",
        "Bluish tint to lips, skin, or tongue"
      ],
      "selfCare": [
        "Sit upright immediately and lean slightly forward with hands resting on knees",
        "Loosen tight collars, ties, belts, and constrictive clothing",
        "Keep calm and breathe slowly through pursed lips",
        "Seek emergency medical help immediately (Call 108 or 911)"
      ],
      "secondaryAdvice": [
        "Do NOT attempt home remedies or wait for online responses",
        "Alert someone nearby immediately so you are not alone",
        "If you have diagnosed asthma and a prescribed inhaler, take it immediately",
        "If experiencing hives and lip swelling (anaphylaxis), use an EpiPen if available",
        "Tap the Emergency SOS button in this application to contact dispatch"
      ],
      "foodAdvice": [
        "Do NOT eat or drink anything while struggling to breathe (choking hazard)"
      ],
      "restAdvice": [
        "Remain seated upright; do NOT lie flat on your back"
      ],
      "whenToSeeDoctor": [
        "All sudden or unexplained breathing difficulties require immediate emergency room care"
      ],
      "emergencySigns": [
        "Chest pain radiating to jaw, neck, or left arm",
        "Cyanosis (blue or gray lips and face)",
        "Confusion, dizziness, or loss of consciousness",
        "Stridor (high-pitched gasping sound) or sudden facial swelling"
      ],
      "medicines": {
        "categories": "Emergency Hospital Care ONLY",
        "relevantIds": [],
        "disclaimer": "No home over-the-counter medicine treats acute emergency breathing difficulty. Call 108 / 911 immediately."
      },
      "prevention": [
        "Follow clinical management for underlying heart or lung conditions",
        "Never ignore early signs of respiratory distress"
      ]
    },
    "ta": {
      "name": "மூச்சுத்திணறல் (அவசர மருத்துவ நிலை)",
      "explanation": "திடீர் மூச்சுத்திணறல் என்பது இதயம், நுரையீரல் அல்லது தீவிர ஒவ்வாமையால் ஏற்படும் அவசர மருத்துவ நிலையாகும்.",
      "symptoms": [
        "போதுமான அளவு மூச்சுக்காற்றை உள்ளிழுக்க முடியாமை",
        "வேகமான, சிரமமான சுவாசம்",
        "நெஞ்சு பாரம், வலி அல்லது இறுக்கம்",
        "உதடுகள் அல்லது முகம் நீல நிறமாதல்"
      ],
      "selfCare": [
        "உடனே நிமிர்ந்து அமர்ந்து முன்னால் சற்று சாய்ந்து கொள்ளுங்கள்",
        "இறுக்கமான ஆடைகள் மற்றும் காலரைத் தளர்த்தவும்",
        "அமைதியாக இருந்து மூக்கை மெதுவாக சுவாசிக்கவும்",
        "உடனடியாக அவசர சிகிச்சை அழைக்கவும் (அழைக்க: 108 அல்லது 911)"
      ],
      "secondaryAdvice": [
        "வீட்டு வைத்தியங்களை செய்து நேரத்தை வீணடிக்காதீர்கள்",
        "தனியாக இருக்காமல் உடனே அருகிலுள்ளவர்களுக்கு தகவல் தெரிவிக்கவும்",
        "ஆஸ்துமா உள்ளவர்கள் உடனடியாக இன்ஹேலரை பயன்படுத்தவும்",
        "செயலியில் உள்ள SOS பொத்தானை அழுத்தி உடனடி உதவி பெறவும்"
      ],
      "foodAdvice": [
        "மூச்சுத்திணறல் இருக்கும் போது எதையும் சாப்பிடவோ குடிக்கவோ கூடாது (புரை ஏறும் ஆபத்து)"
      ],
      "restAdvice": [
        "நேராக நிமிர்ந்து அமர்ந்திருக்கவும்; மல்லாந்து படுக்க வேண்டாம்"
      ],
      "whenToSeeDoctor": [
        "திடீர் மூச்சுத்திணறலுக்கு உடனடியாக அவசர சிகிச்சைப் பிரிவுக்குச் செல்ல வேண்டும்"
      ],
      "emergencySigns": [
        "நெஞ்சு வலி தோள்பட்டை, கை அல்லது தாடைக்கு பரவுதல்",
        "உதடுகள் நீல நிறமாக மாறுதல்",
        "மயக்கம், குழப்பம் அல்லது சுயநினைவின்மை",
        "முகம், உதடுகள் திடீரென வீங்குதல்"
      ],
      "medicines": {
        "categories": "அவசர மருத்துவமனை சிகிச்சை மட்டுமே",
        "relevantIds": [],
        "disclaimer": "மூச்சுத்திணறலுக்கு சுயமாக எந்த மருந்தும் உட்கொள்ளக்கூடாது. உடனடியாக 108 அல்லது 911 அவசர எண்ணை அழைக்கவும்."
      },
      "prevention": [
        "இதயம் மற்றும் நுரையீரல் நோய்களுக்கான சிகிச்சையைத் தவறாமல் தொடரவும்",
        "மூச்சு வாங்கும் ஆரம்ப அறிகுறிகளை அலட்சியப்படுத்தாதீர்கள்"
      ]
    }
  },
  {
    "id": "chest_congestion",
    "category": "respiratory",
    "keywords": {
      "en": [
        "chest congestion",
        "wet cough",
        "phlegm",
        "mucus in chest",
        "rattling chest",
        "bronchial mucus"
      ],
      "ta": [
        "கபக்கட்டு",
        "நெஞ்சு சளி",
        "கோழை",
        "chest congestion",
        "nenju sali",
        "phlegm",
        "kappam"
      ]
    },
    "en": {
      "name": "Chest Congestion / Phlegm Cough",
      "explanation": "Accumulation of excess fluids and thick mucus in the lower respiratory passages and bronchial tubes, commonly triggered by bronchitis, viral infections, or environmental pollutants.",
      "symptoms": [
        "Rattling or heavy sensation in the chest when breathing",
        "Productive wet cough bringing up thick phlegm",
        "Mild wheezing or crackling chest sounds",
        "Fatigue and mild throat irritation"
      ],
      "selfCare": [
        "Drink abundant warm water, herbal teas, and hot clear broths to thin thick mucus",
        "Inhale warm steam for 10–15 minutes twice daily with a towel tent",
        "Perform deep breathing and gentle postural drainage (lying on side with hips elevated)",
        "Use an expectorant syrup containing Guaifenesin as per packaging directions"
      ],
      "secondaryAdvice": [
        "Avoid cough suppressants if you have wet congestion; coughing helps expel infected secretions",
        "Notice the color of your sputum: clear/white is common in early viral states; rust or blood requires urgent care",
        "Avoid all dairy if it causes subjective sensation of thicker saliva",
        "Avoid cold drafts, smoky rooms, and chemical air fresheners",
        "Wash your hands frequently after clearing nasal and chest secretions"
      ],
      "foodAdvice": [
        "Warm ginger-garlic soups, hot water with lemon, spiced rasam, and warm herbal teas",
        "Light easily digestible foods like porridge, soft rotis, and stewed vegetables",
        "Avoid chilled dairy, cold carbonated drinks, and oily fried foods"
      ],
      "restAdvice": [
        "Elevate head and shoulders with 2 pillows during sleep to assist mucus clearance",
        "Avoid lying flat on your back for prolonged periods"
      ],
      "whenToSeeDoctor": [
        "Congestion lasts over 10 days without improvement",
        "Accompanied by high fever (>102°F) and chills",
        "Phlegm is foul-smelling or blood-streaked"
      ],
      "emergencySigns": [
        "Shortness of breath, gasping, or blue lips",
        "Severe chest pain when inhaling deeply",
        "Confusion or extreme lethargy"
      ],
      "medicines": {
        "categories": "Expectorants / Mucolytics (e.g., Guaifenesin)",
        "relevantIds": [
          "guaifenesin",
          "cough_syrup"
        ],
        "disclaimer": "Expectorants help loosen secretions so you can cough them up. Stay well hydrated for expectorants to work effectively."
      },
      "prevention": [
        "Stay hydrated to prevent mucus from thickening",
        "Avoid smoking and exposure to secondary air pollution",
        "Practice regular steam inhalation during winter months"
      ]
    },
    "ta": {
      "name": "நெஞ்சு சளி / கபக்கட்டு (Chest Congestion)",
      "explanation": "சுவாசப்பாதையில் அதிகப்படியான அடர்த்தியான சளி (கோழை) தேங்கி நெஞ்சில் கனத்தையும், ஈர இருமலையும் ஏற்படுத்தும் நிலை.",
      "symptoms": [
        "சுவாசிக்கும் போது நெஞ்சில் சளி சத்தம் அல்லது கனமான உணர்வு",
        "சளியுடன் கூடிய இருமல்",
        "லேசான மூச்சு இரைப்பு",
        "தொண்டை கரகரப்பு மற்றும் சோர்வு"
      ],
      "selfCare": [
        "சளியை இளக்க நிறைய சுடுநீர் மற்றும் சூடான சூப் குடிக்கவும்",
        "தினமும் 2 முறை நீராவி பிடிக்கவும்",
        "ஆழமாக மூச்சை உள்ளிழுத்து மெதுவாக இருமி சளியை வெளியேற்றவும்",
        "மருத்துவர் பரிந்துரைத்த எக்ஸ்பெக்டோரண்ட் (Expectorant) சிரப் உட்கொள்ளலாம்"
      ],
      "secondaryAdvice": [
        "நெஞ்சு சளி இருக்கும்போது இருமலை அடக்கும் மருந்துகளை எடுக்காதீர்கள் (சளி வெளியேறுவது நல்லது)",
        "சளியின் நிறத்தைக் கவனியுங்கள் (இரத்தம் கலந்திருந்தால் உடனே மருத்துவரிடம் செல்லவும்)",
        "புகை, தூசி மற்றும் இரசாயன வாசனைகளில் இருந்து விலகி இருங்கள்",
        "சளி சிந்திய பின் கைகளை சோப்பு போட்டு கழுவுங்கள்",
        "அறையை மிதமான வெப்பத்தில் வையுங்கள்"
      ],
      "foodAdvice": [
        "சூடான மிளகு ரசம், இஞ்சி-பூண்டு சூப், சுக்கு காபி",
        "எளிதில் செரிக்கும் சூடான இட்லி, கஞ்சி",
        "குளிர்ந்த நீர், ஐஸ்கிரீம் மற்றும் நெய்/எண்ணெய் பலகாரங்களைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தூங்கும் போது தலையை உயர்த்தி வைக்கவும் (சளி நெஞ்சில் அடைப்பதைத் தடுக்க)",
        "முதுகில் தட்டி கொடுப்பது சளி வெளியேற உதவும்"
      ],
      "whenToSeeDoctor": [
        "நெஞ்சு சளி 10 நாட்களுக்கு மேல் நீடித்தால்",
        "அதிக காய்ச்சல் மற்றும் குளிர் நடுக்கம் இருந்தால்",
        "சளியில் இரத்தம் வந்தால் அல்லது துர்நாற்றம் அடித்தால்"
      ],
      "emergencySigns": [
        "மூச்சு விடுவதில் கடுமையான சிரமம்",
        "நெஞ்சில் தாங்க முடியாத வலி",
        "உதடுகள் நீல நிறமாதல்"
      ],
      "medicines": {
        "categories": "சளியை இளக்கும் மருந்துகள் (Guaifenesin)",
        "relevantIds": [
          "guaifenesin",
          "cough_syrup"
        ],
        "disclaimer": "சளி இளக்கும் மருந்து நன்றாக வேலை செய்ய நிறைய தண்ணீர் குடிக்க வேண்டும். மருத்துவ ஆலோசனையுடன் உட்கொள்ளவும்."
      },
      "prevention": [
        "தினமும் போதுமான வெதுவெதுப்பான நீர் அருந்துங்கள்",
        "புகைபிடிப்பதைத் தவிர்க்கவும்",
        "குளிர்காலத்தில் கவனமாக இருக்கவும்"
      ]
    }
  },
  {
    "id": "headache",
    "category": "pain",
    "keywords": {
      "en": [
        "headache",
        "head pain",
        "throbbing head",
        "head ache",
        "head hurt",
        "headach",
        "have headache"
      ],
      "ta": [
        "தலைவலி",
        "தலை வலி",
        "தலையிடி",
        "headache",
        "thalai vali",
        "thala vali",
        "thalavali",
        "thalai vali irukku",
        "thala vali irukku",
        "enakku thalai vali",
        "enakku thala vali"
      ]
    },
    "en": {
      "name": "Headache (Tension / Mild)",
      "explanation": "Pain or discomfort in the head or scalp, most commonly caused by muscle contractions in the neck and scalp from stress, fatigue, dehydration, or prolonged screen time.",
      "symptoms": [
        "Dull, aching head pain like a tight band around the forehead",
        "Tenderness on the scalp, neck, and shoulder muscles",
        "Fatigue and sensitivity to bright light or noise",
        "Difficulty concentrating"
      ],
      "selfCare": [
        "Drink a large glass (300–500 ml) of room-temperature water immediately",
        "Rest in a quiet, dark, well-ventilated room with closed eyes",
        "Apply a cold compress to the forehead or a warm compress to the nape of the neck",
        "Gently massage your temples, neck, and jawline in circular motions"
      ],
      "secondaryAdvice": [
        "Follow the 20-20-20 rule if working on screens: every 20 minutes look at an object 20 feet away for 20 seconds",
        "Check your posture: ensure your neck is not jutting forward towards your computer monitor",
        "Avoid skipping meals; low blood sugar (hypoglycemia) is a common headache trigger",
        "Avoid excessive caffeine consumption or sudden caffeine withdrawal",
        "Keep an ocular check: uncorrected refractive eye errors often cause end-of-day headaches"
      ],
      "foodAdvice": [
        "Hydrating water, electrolyte drinks, coconut water, or herbal peppermint tea",
        "Magnesium-rich foods: bananas, soaked almonds, spinach, and whole grains",
        "Avoid aged cheeses, processed deli meats, artificial sweeteners, and alcohol"
      ],
      "restAdvice": [
        "Take a 20–30 minute nap in a completely silent room",
        "Ensure consistent 7–8 hours of nightly sleep schedule"
      ],
      "whenToSeeDoctor": [
        "Headache is frequent (>3 times per week) or progressively worsening",
        "Triggered by coughing, bending, or physical exertion",
        "Accompanied by persistent nausea or vomiting"
      ],
      "emergencySigns": [
        "Sudden, explosive, worst headache of your life ('thunderclap' headache)",
        "Headache with fever, stiff neck, and confusion (suspected meningitis)",
        "Associated with unilateral facial droop, arm weakness, or slurred speech (stroke warning)",
        "Following a direct head injury or concussion"
      ],
      "medicines": {
        "categories": "Analgesics (e.g., Paracetamol or Ibuprofen)",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "Do not overuse pain relievers (>15 days/month) to avoid medication-overuse 'rebound' headaches."
      },
      "prevention": [
        "Maintain regular meal times and consistent daily hydration",
        "Incorporate daily neck and shoulder stretching exercises",
        "Manage stress through deep breathing or yoga"
      ]
    },
    "ta": {
      "name": "தலைவலி (Headache)",
      "explanation": "தலை மற்றும் நெற்றிப் பகுதியில் ஏற்படும் வலி. இது மன அழுத்தம், நீரிழப்பு, தூக்கமின்மை அல்லது தொடர்ந்து மொபைல்/கணினி திரைகளைப் பார்ப்பதால் ஏற்படுகிறது.",
      "symptoms": [
        "தலையைச் சுற்றி இறுக்கமாக ஒரு பட்டை கட்டியது போன்ற வலி",
        "கழுத்து மற்றும் தோள்பட்டை தசைகளில் இறுக்கம்",
        "வெளிச்சம் அல்லது சத்தத்தைப் பார்க்கும்போது சலிப்பு",
        "கவனம் செலுத்துவதில் சிரமம்"
      ],
      "selfCare": [
        "உடனடியாக ஒரு பெரிய டம்ளர் சுத்தமான தண்ணீர் குடியுங்கள்",
        "அமைதியான, இருண்ட அறையில் கண்களை மூடி ஓய்வெடுங்கள்",
        "நெற்றியில் குளிர்ந்த துணியையோ அல்லது கழுத்தில் வெதுவெதுப்பான ஒத்தடத்தையோ வைக்கவும்",
        "நெற்றிப் பொட்டு மற்றும் கழுத்துப் பகுதியை மெதுவாக மசாஜ் செய்யுங்கள்"
      ],
      "secondaryAdvice": [
        "கணினியில் வேலை செய்பவர்கள் ஒவ்வொரு 20 நிமிடங்களுக்கும் கண்களுக்கு ஓய்வு கொடுங்கள்",
        "தலையை முன்னோக்கி குனிந்து மொபைல் பார்ப்பதைத் தவிருங்கள் (சரியான தோரணை அவசியம்)",
        "உணவைத் தவிர்க்காதீர்கள்; பசியினால் ஏற்படும் இரத்த சர்க்கரை குறைவு தலைவலியை உண்டாக்கும்",
        "அளவுக்கு அதிகமாக காபி/டீ குடிப்பதைத் தவிர்க்கவும்",
        "பார்வை பரிசோதனை செய்து கொள்ளவும் (கண் கண்ணாடி பவர் மாறுபாட்டால் தலைவலி வரலாம்)"
      ],
      "foodAdvice": [
        "தண்ணீர், இளநீர், புதினா டீ",
        "வாழைப்பழம், பாதாம் மற்றும் கீரைகள்",
        "பதப்படுத்தப்பட்ட உணவுகள், அஜினோமோட்டோ மற்றும் மதுவைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "அமைதியான அறையில் 20-30 நிமிடங்கள் தூங்குங்கள்",
        "தினமும் 7-8 மணி நேர ஆழ்ந்த தூக்கம் அவசியம்"
      ],
      "whenToSeeDoctor": [
        "தலைவலி வாரத்திற்கு 3 முறைக்கு மேல் தொடர்ந்து வந்தால்",
        "இருமும்போது அல்லது குனியும்போது தலைவலி அதிகரித்தால்",
        "தொடர்ந்து வாந்தியுடன் தலைவலி இருந்தால்"
      ],
      "emergencySigns": [
        "திடீரென மின்னல் வெட்டியது போன்ற தாங்க முடியாத கடுமையான தலைவலி (Thunderclap)",
        "காய்ச்சல், கழுத்து விறைப்புடன் கூடிய தலைவலி",
        "முகம் ஒருபக்கமாக கோணிக்கொள்ளுதல் அல்லது கை கால் பலவீனம்",
        "தலையில் பலத்த அடிபட்ட பின் வரும் தலைவலி"
      ],
      "medicines": {
        "categories": "வலி நிவாரணிகள் (பாரசிட்டமால் அல்லது இப்யூபுரூஃபன்)",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "வலி நிவாரணிகளை அடிக்கடி தொடர்ந்து உட்கொண்டால் 'மீண்டும் வரும் தலைவலி' (Rebound headache) ஏற்படலாம். மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்."
      },
      "prevention": [
        "நேரத்திற்கு சாப்பிடுங்கள் மற்றும் நிறைய தண்ணீர் குடியுங்கள்",
        "கழுத்து, தோள்பட்டை நீட்சிப் பயிற்சிகளைச் செய்யுங்கள்",
        "மன அழுத்தத்தைக் குறைக்கும் தியானம் செய்யுங்கள்"
      ]
    }
  },
  {
    "id": "migraine",
    "category": "pain",
    "keywords": {
      "en": [
        "migraine",
        "one sided headache",
        "throbbing headache",
        "aura headache",
        "migrane",
        "severe migraine"
      ],
      "ta": [
        "ஒற்றைத் தலைவலி",
        "மைக்ரேன்",
        "migraine",
        "ottrai thalavali",
        "migrane"
      ]
    },
    "en": {
      "name": "Migraine",
      "explanation": "A neurological disorder characterized by recurrent attacks of moderate to severe throbbing, unilateral headache often preceded by sensory warning signs (aura) and accompanied by nausea and sensory hypersensitivity.",
      "symptoms": [
        "Intense, pulsating or throbbing pain typically on one side of the head",
        "Extreme sensitivity to light (photophobia), sound (phonophobia), and odors",
        "Nausea, vomiting, or stomach upset",
        "Visual disturbances (flashing lights, blind spots, zigzag patterns) during aura"
      ],
      "selfCare": [
        "Retreat to a pitch-black, dead-silent bedroom immediately upon aura onset",
        "Apply an ice pack wrapped in a cloth to the painful temple or forehead",
        "Drink a small cup of black coffee or tea (early caffeine can constrict dilated cerebral vessels)",
        "Sip cool water slowly to prevent dehydration-induced exacerbation"
      ],
      "secondaryAdvice": [
        "Maintain a detailed Migraine Diary recording triggers (stress, aged cheese, MSG, weather, sleep changes)",
        "Take prescribed abortive medications (e.g., Triptans) at the earliest sensation of pain",
        "Avoid screen exposure, television, headphones, or noisy environments during an attack",
        "Practice progressive muscle relaxation or biofeedback techniques",
        "Women should monitor menstrual cycle associations (menstrual migraines)"
      ],
      "foodAdvice": [
        "Electrolyte-rich water, ginger tea to alleviate nausea",
        "Light bland meals: crackers, steamed rice, plain toast",
        "Strictly avoid known migraine triggers: red wine, aged cheese, chocolate, artificial sweeteners, MSG"
      ],
      "restAdvice": [
        "Sleep is the most effective natural migraine abortive; attempt to sleep through the attack",
        "Maintain strict, consistent sleep-wake times 7 days a week"
      ],
      "whenToSeeDoctor": [
        "Migraine attacks occur more than 4 days per month (may require preventive therapy)",
        "Attacks last longer than 72 hours (status migrainosus)",
        "Medications no longer provide adequate pain relief"
      ],
      "emergencySigns": [
        "Sudden 'thunderclap' onset headache peaking in seconds",
        "Aura with speech loss, confusion, or unilateral limb paralysis",
        "Headache with persistent high fever, neck stiffness, and rash"
      ],
      "medicines": {
        "categories": "NSAIDs (Ibuprofen / Naproxen) or Prescription Triptans (Sumatriptan)",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "Migraine management requires clinical diagnosis and tailored abortive/preventive prescriptions. Avoid overuse of analgesics."
      },
      "prevention": [
        "Identify and avoid personalized dietary and sensory triggers",
        "Engage in regular aerobic exercise between attacks",
        "Maintain strict hydration and consistent daily meal timing"
      ]
    },
    "ta": {
      "name": "ஒற்றைத் தலைவலி (Migraine)",
      "explanation": "தலையின் ஒரு பகுதியில் மட்டும் துடிக்கும் வலியுடன், குமட்டல், வாந்தி மற்றும் வெளிச்சம்/சத்தத்தை தாங்க முடியாத உணர்வை ஏற்படுத்தும் நரம்பியல் சார்ந்த தலைவலி நிலை.",
      "symptoms": [
        "தலையின் ஒரு பக்கம் மட்டும் தீவிரமாக துடிக்கும் வலி",
        "வெளிச்சம், அதிக சத்தம் மற்றும் கடுமையான வாசனை தாங்க முடியாமை",
        "குமட்டல் மற்றும் வாந்தி",
        "கண்களுக்கு முன் மின்னல் போன்ற ஒளிரும் புள்ளிகள் (Aura) தோன்றுதல்"
      ],
      "selfCare": [
        "வலி தொடங்கிய உடனேயே முற்றிலும் இருண்ட, அமைதியான அறைக்குச் சென்று படுங்கள்",
        "வலிக்கும் நெற்றி அல்லது பொட்டுப் பகுதியில் ஐஸ் ஒத்தடம் வையுங்கள்",
        "லேசான காபி அல்லது டீ குடிக்கலாம் (ஆரம்ப கட்டத்தில் ரத்த நாளங்களை சுருக்க உதவும்)",
        "குளிர்ந்த நீரை சிறிது சிறிதாக குடிக்கவும்"
      ],
      "secondaryAdvice": [
        "எந்தெந்த உணவுகள் அல்லது சூழல் மைக்ரேனைத் தூண்டுகிறது என்பதை ஒரு குறிப்பேட்டில் குறித்துக் கொள்ளுங்கள்",
        "மருத்துவர் பரிந்துரைத்த மைக்ரேன் மாத்திரைகளை வலி தொடங்கிய உடனேயே உட்கொள்ளுங்கள்",
        "மொபைல், டிவி, கணினி திரைகளைப் பார்ப்பதை உடனே நிறுத்துங்கள்",
        "மூச்சுப்பயிற்சி மற்றும் தியானம் செய்து மன அழுத்தத்தைக் குறையுங்கள்",
        "மாதவிடாய் காலத்தில் வரக்கூடியதா என்பதைக் கவனியுங்கள்"
      ],
      "foodAdvice": [
        "இஞ்சி டீ (குமட்டலைத் தணிக்க உதவும்), எலுமிச்சை சாறு, தண்ணீர்",
        "எளிய ரசம் சாதம், கஞ்சி, பிரெட்",
        "சாக்லேட், சீஸ், பதப்படுத்தப்பட்ட உணவுகள் மற்றும் குளிர்பானங்களைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தூக்கமே மைக்ரேனுக்கு சிறந்த மருந்து; அமைதியாக தூங்க முயற்சிக்கவும்",
        "தினமும் ஒரே நேரத்தில் தூங்கி எழும் பழக்கத்தைக் கடைபிடியுங்கள்"
      ],
      "whenToSeeDoctor": [
        "மாதத்திற்கு 4 முறைக்கு மேல் ஒற்றைத் தலைவலி வந்தால்",
        "வலி 3 நாட்களுக்கு மேல் (72 மணி நேரம்) தொடர்ந்தால்",
        "வழக்கமான மாத்திரைகள் பலனளிக்காமல் போனால்"
      ],
      "emergencySigns": [
        "திடீரென தாங்க முடியாத அளவுக்கு தீவிரமாகும் மின்னல் தலைவலி",
        "பேச்சு குழறுதல், பார்வை பறிபோதல் அல்லது கை கால் பலவீனம்",
        "காய்ச்சல் மற்றும் கழுத்து விறைப்புடன் கூடிய தலைவலி"
      ],
      "medicines": {
        "categories": "அழற்சி எதிர்ப்பு மருந்துகள் (இப்யூபுரூஃபன்) அல்லது மைக்ரேன் சிறப்பு மருந்துகள்",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "ஒற்றைத் தலைவலிக்கு மருத்துவப் பரிசோதனையும், மருத்துவர் பரிந்துரைக்கும் குறிப்பிட்ட மருந்துகளும் தேவை."
      },
      "prevention": [
        "மைக்ரேனைத் தூண்டும் உணவுகள் மற்றும் அதிக வெயிலைத் தவிர்க்கவும்",
        "வழக்கமான உடற்பயிற்சி மற்றும் யோகா செய்யுங்கள்",
        "நேரத்திற்கு உணவருந்தி நீர்ச்சத்து குறையாமல் பார்த்துக் கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "body_pain",
    "category": "pain",
    "keywords": {
      "en": [
        "body pain",
        "body ache",
        "generalized body aches",
        "full body pain",
        "myalgia",
        "whole body hurting"
      ],
      "ta": [
        "உடல் வலி",
        "உடம்பு வலி",
        "முழு உடல் வலி",
        "body pain",
        "udambu vali",
        "udal vali",
        "udambu vali irukku"
      ]
    },
    "en": {
      "name": "Body Pain / Generalized Myalgia",
      "explanation": "Widespread aches and stiffness across muscles and joints, frequently stemming from viral infections, physical overexertion, stress, or poor sleep.",
      "symptoms": [
        "Diffuse dull ache across multiple muscle groups and joints",
        "Stiffness after periods of inactivity",
        "General feeling of fatigue and physical heaviness",
        "Tender trigger points upon gentle pressure"
      ],
      "selfCare": [
        "Take a relaxing warm shower or soak in a warm Epsom salt bath",
        "Stay hydrated with warm water, coconut water, or herbal infusions",
        "Perform gentle, slow stretching exercises without jerking",
        "Apply warm heating pads to the most aching muscle areas"
      ],
      "secondaryAdvice": [
        "Evaluate sleep surface: an unsupportive or sagging mattress is a leading cause of morning body aches",
        "Check your Vitamin D and B12 levels if generalized body pain is chronic",
        "Avoid intense gym sessions until muscle recovery is complete",
        "Ensure ergonomic chair support if seated for prolonged office shifts",
        "Alternate heat therapy (for muscle relaxation) with cold therapy (for acute strain)"
      ],
      "foodAdvice": [
        "Anti-inflammatory spices: turmeric milk with black pepper, ginger tea, garlic",
        "Protein and mineral-rich foods: lentils, tofu, green vegetables, nuts",
        "Avoid ultra-processed snacks, high refined sugars, and excessive alcohol"
      ],
      "restAdvice": [
        "Get 8–9 hours of restorative sleep in a neutral spine sleeping posture",
        "Take short 5-minute walking and stretching breaks every hour during work"
      ],
      "whenToSeeDoctor": [
        "Body pain persists for more than 7 days without clear cause",
        "Accompanied by joint swelling, redness, or heat",
        "Progressive muscle weakness where you struggle to climb stairs or lift objects"
      ],
      "emergencySigns": [
        "Severe muscle pain with dark brown, tea-colored urine (suspected rhabdomyolysis)",
        "Sudden inability to move an arm or leg",
        "Body pain with high fever, stiff neck, and confusion"
      ],
      "medicines": {
        "categories": "Analgesics / NSAIDs (e.g., Paracetamol or Ibuprofen)",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "Take NSAIDs with food to prevent gastric irritation. Consult a doctor for chronic musculoskeletal pain."
      },
      "prevention": [
        "Engage in regular warm-ups before exercise and cool-downs afterwards",
        "Maintain adequate hydration and balanced electrolyte levels",
        "Ensure ergonomic sleeping and working posture"
      ]
    },
    "ta": {
      "name": "உடல் வலி (Body Pain / Generalized Myalgia)",
      "explanation": "உடல் முழுவதும் தசைகள் மற்றும் மூட்டுகளில் ஏற்படும் வலி மற்றும் அசதி. இது அதிக உழைப்பு, வைரஸ் காய்ச்சல், மன அழுத்தம் அல்லது தூக்கமின்மையால் ஏற்படலாம்.",
      "symptoms": [
        "தசைகள் மற்றும் மூட்டுகளில் பரவலான வலி",
        "அமர்ந்து எழும்போது ஏற்படும் தசை இறுக்கம்",
        "உடல் சோர்வு மற்றும் பாரமான உணர்வு",
        "லேசாக தொட்டாலும் வலிப்பது போன்ற உணர்வு"
      ],
      "selfCare": [
        "வெதுவெதுப்பான நீரில் குளிப்பது தசைகளுக்கு இதமளிக்கும்",
        "சூடான சுடுநீர், இளநீர் அல்லது மூலிகை தேநீர் அருந்துங்கள்",
        "மெதுவான தசை நீட்சிப் பயிற்சிகளை (Stretching) செய்யுங்கள்",
        "வலி உள்ள பகுதிகளில் வெந்நீர் ஒத்தடம் கொடுக்கலாம்"
      ],
      "secondaryAdvice": [
        "உங்கள் படுக்கை மெத்தை முதுகுக்கு சரியான ஆதரவு தருகிறதா என்று பாருங்கள்",
        "வைட்டமின் டி (Vitamin D) மற்றும் பி12 குறைபாடு உள்ளதா என்று இரத்தப் பரிசோதனை செய்யுங்கள்",
        "வலி குறையும் வரை கடினமான உடற்பயிற்சிகளைத் தவிர்க்கவும்",
        "அலுவலகத்தில் உட்காரும் நாற்காலி முதுகுக்கு வசதியாக உள்ளதா என்று கவனியுங்கள்",
        "ஒரே இடத்தில் பல மணி நேரம் அசையாமல் அமர்வதைத் தவிர்க்கவும்"
      ],
      "foodAdvice": [
        "மஞ்சள் மற்றும் மிளகு கலந்த சூடான பால், இஞ்சி சூப்",
        "புரதச்சத்து நிறைந்த பருப்பு வகைகள், முட்டை, பச்சை காய்கறிகள்",
        "எண்ணெயில் பொரித்த உணவுகள் மற்றும் இனிப்புகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "முதுகுத்தண்டு நேராக இருக்கும்படி 8 மணி நேரம் ஆழ்ந்து தூங்குங்கள்",
        "வேலைக்கு இடையே 5 நிமிட நடைப்பயிற்சி செய்யுங்கள்"
      ],
      "whenToSeeDoctor": [
        "உடல் வலி 7 நாட்களுக்கு மேல் நீடித்தால்",
        "மூட்டுகளில் வீக்கம், சிவத்தல் அல்லது கடுமையான சூடு இருந்தால்",
        "படிக்கட்டுகளில் ஏற முடியாத அளவுக்கு தசை பலவீனம் ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "கடுமையான தசை வலியுடன் சிறுநீர் அடர் கருப்பு/தேநீர் நிறத்தில் போதல் (Rhabdomyolysis)",
        "கை அல்லது காலை அசைக்க முடியாத திடீர் பலவீனம்",
        "அதிக காய்ச்சல் மற்றும் கழுத்து விறைப்புடன் கூடிய வலி"
      ],
      "medicines": {
        "categories": "வலி நிவாரணிகள் (பாரசிட்டமால் அல்லது இப்யூபுரூஃபன்)",
        "relevantIds": [
          "paracetamol",
          "ibuprofen"
        ],
        "disclaimer": "இப்யூபுரூஃபன் மாத்திரையை எப்போதும் உணவு உண்ட பின்னரே உட்கொள்ள வேண்டும்."
      },
      "prevention": [
        "உடற்பயிற்சிக்கு முன் வார்ம்-அப் (Warm-up) செய்யுங்கள்",
        "நிறைய தண்ணீர் அருந்துங்கள்",
        "சரியான தோரணையில் அமர்ந்து வேலை செய்யுங்கள்"
      ]
    }
  },
  {
    "id": "back_pain",
    "category": "pain",
    "keywords": {
      "en": [
        "back pain",
        "lower back pain",
        "lumbar pain",
        "spine pain",
        "stiff back",
        "backache"
      ],
      "ta": [
        "முதுகு வலி",
        "இடுப்பு வலி",
        "கீழ் முதுகு வலி",
        "back pain",
        "muthugu vali",
        "iduppu vali",
        "muthugu vali irukku"
      ]
    },
    "en": {
      "name": "Back Pain (Lower Back / Musculoskeletal)",
      "explanation": "Pain in the lumbar or spinal region, most commonly caused by muscle strain, ligament sprain, prolonged sitting, poor lifting ergonomics, or disc irritation.",
      "symptoms": [
        "Aching or stiffness along the spine or lower back",
        "Sharp or catching pain when bending, twisting, or lifting",
        "Muscle spasms in the paraspinal muscles",
        "Difficulty standing completely upright"
      ],
      "selfCare": [
        "Apply an ice pack for 15–20 minutes every 2–3 hours for the first 48 hours to reduce inflammation",
        "Transition to moist heat packs after 48 hours to relieve muscle spasms",
        "Stay gently active: short, gentle walks on flat ground prevent muscle deconditioning (avoid strict bed rest)",
        "Sleep on your side with a pillow between your knees, or on your back with a pillow beneath knees"
      ],
      "secondaryAdvice": [
        "Never lift heavy objects by bending at the waist; bend at the knees and lift using your legs",
        "Use lumbar support rolls or a small rolled towel behind your lower back when driving or seated",
        "Avoid high heels and unsupportive flip-flops that alter pelvic tilt",
        "Incorporate core-strengthening exercises (bird-dog, pelvic tilts) once acute pain resolves",
        "Take standing and posture breaks every 30 minutes if working a desk job"
      ],
      "foodAdvice": [
        "Anti-inflammatory foods: berries, fatty fish, turmeric, walnuts, green tea",
        "Calcium and vitamin D rich foods: yogurt, sesame seeds, fortifed plant milks",
        "Stay hydrated to maintain spinal intervertebral disc hydration"
      ],
      "restAdvice": [
        "Avoid strict bed rest beyond 24–48 hours as it weakens spinal stabilizing muscles",
        "Rest in comfortable neutral spine positions between gentle walking intervals"
      ],
      "whenToSeeDoctor": [
        "Back pain does not improve within 2 weeks of conservative care",
        "Pain radiates down past the knee into the calf or foot (sciatica)",
        "Accompanied by unexplained fever or history of cancer"
      ],
      "emergencySigns": [
        "Loss of bowel or bladder control (incontinence or urinary retention — Cauda Equina Syndrome)",
        "Numbness around the groin, buttocks, or inner thighs ('saddle anesthesia')",
        "Progressive foot drop or leg paralysis"
      ],
      "medicines": {
        "categories": "NSAIDs (e.g., Ibuprofen) and topical analgesic gels",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "Topical pain relief creams and oral NSAIDs relieve inflammation. Consult a physical therapist or spine specialist for persistent back pain."
      },
      "prevention": [
        "Maintain core abdominal and back muscle strength",
        "Practice proper lifting mechanics at home and workplace",
        "Maintain a healthy body weight to reduce lumbar spinal pressure"
      ]
    },
    "ta": {
      "name": "முதுகு வலி / இடுப்பு வலி (Back Pain)",
      "explanation": "கீழ் முதுகு அல்லது முதுகுத்தண்டு பகுதியில் ஏற்படும் வலி. இது தவறான முறையில் உட்காருவது, அதிக எடையை குனிந்து தூக்குவது அல்லது தசைப் பிடிப்பால் ஏற்படுகிறது.",
      "symptoms": [
        "முதுகுத்தண்டு அல்லது இடுப்பில் வலி மற்றும் இறுக்கம்",
        "குனியும் போதோ அல்லது திரும்பும் போதோ சுளுக்கு போன்ற வலி",
        "முதுகுத் தசைகளில் பிடிப்பு",
        "நேராக நிமிர்ந்து நிற்க சிரமம்"
      ],
      "selfCare": [
        "ஆரம்ப 48 மணி நேரத்திற்கு ஐஸ் ஒத்தடம் கொடுக்கவும் (வீக்கத்தைக் குறைக்க)",
        "48 மணி நேரத்திற்குப் பின் வெந்நீர் ஒத்தடம் கொடுத்து தசைகளை தளர்த்தவும்",
        "அதிக நேரம் படுக்கையில் இருக்காமல், சமதளத்தில் மெதுவாக நடைப்பயிற்சி செய்யுங்கள்",
        "தூங்கும்போது பக்கவாட்டில் படுத்து முழங்கால்களுக்கு இடையில் தலையணை வைக்கவும்"
      ],
      "secondaryAdvice": [
        "கனமான பொருட்களை தூக்கும்போது இடுப்பை வளைக்காமல், முழங்கால்களை மடக்கி கால்களின் பலத்தால் தூக்குங்கள்",
        "நாற்காலியில் அமரும்போது இடுப்புக்கு பின்னால் ஒரு சிறிய தலையணை வையுங்கள்",
        "ஹை-ஹீல்ஸ் செருப்புகளைத் தவிர்க்கவும்",
        "வலி குறைந்த பின் முதுகு மற்றும் வயிற்றுத் தசைகளை பலப்படுத்தும் உடற்பயிற்சிகளைச் செய்யுங்கள்",
        "ஒவ்வொரு 30 நிமிடங்களுக்கும் ஒருமுறை எழுந்து நில்லுங்கள்"
      ],
      "foodAdvice": [
        "கால்சியம் மற்றும் வைட்டமின் டி நிறைந்த பால், தயிர், கேழ்வரகு, கீரைகள்",
        "மஞ்சள், இஞ்சி கலந்த சூப்",
        "முதுகுத்தண்டு வட்டுக்களுக்கு (Discs) நீர்ச்சத்து தேவை என்பதால் நிறைய தண்ணீர் குடியுங்கள்"
      ],
      "restAdvice": [
        "தொடர்ந்து படுத்தே இருக்காதீர்கள்; இது முதுகை மேலும் பலவீனப்படுத்தும்",
        "சமமான உறுதியான படுக்கையில் தூங்குங்கள்"
      ],
      "whenToSeeDoctor": [
        "முதுகு வலி 2 வாரங்களுக்கு மேல் நீடித்தால்",
        "வலி இடுப்பிலிருந்து கால், பாதம் வரை பரவினால் (சயாட்டிகா - Sciatica)",
        "காய்ச்சலுடன் கூடிய முதுகு வலி இருந்தால்"
      ],
      "emergencySigns": [
        "சிறுநீர் அல்லது மலம் கழிப்பதில் கட்டுப்பாடு இழத்தல் (Cauda Equina Syndrome)",
        "இடுப்பு இடுக்கு மற்றும் தொடைப் பகுதியில் உணர்வின்மை",
        "கால்களில் திடீர் பலவீனம் அல்லது பாதம் தொய்ந்து போதல்"
      ],
      "medicines": {
        "categories": "அழற்சி எதிர்ப்பு மருந்துகள் (இப்யூபுரூஃபன்) மற்றும் வலி நிவாரண களிம்புகள்",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "வலி நிவாரண ஜெல் மற்றும் மாத்திரைகள் தற்காலிக நிவாரணம் தரும். தொடர் வலிக்கு பிசியோதெரபி சிகிச்சை சிறந்தது."
      },
      "prevention": [
        "வயிற்று மற்றும் முதுகுத் தசைகளை வலுப்படுத்துங்கள்",
        "எடையை சரியான முறையில் தூக்குங்கள்",
        "உடல் எடையை சீராக வைத்திருங்கள்"
      ]
    }
  },
  {
    "id": "muscle_pain",
    "category": "pain",
    "keywords": {
      "en": [
        "muscle pain",
        "muscle cramp",
        "muscle spasm",
        "pulled muscle",
        "muscle strain",
        "sore muscles"
      ],
      "ta": [
        "தசை வலி",
        "தசை பிடிப்பு",
        "சுளுக்கு",
        "muscle pain",
        "thasai vali",
        "thasai pidippu",
        "sulukku"
      ]
    },
    "en": {
      "name": "Muscle Pain / Muscle Strain",
      "explanation": "Localized injury to muscle fibers or tendons caused by sudden overstretching, heavy resistance, fatigue, or electrolyte depletion.",
      "symptoms": [
        "Sharp pain at the moment of strain or dull soreness developing over 24 hours",
        "Localized swelling, tenderness, or mild bruising",
        "Involuntary muscle cramping or twitching spasms",
        "Restricted range of motion in the affected limb"
      ],
      "selfCare": [
        "Follow the R.I.C.E protocol: Rest the muscle, Ice for 15 mins every 2–3 hours, Compress with elastic bandage, Elevate above heart level",
        "Gently stretch and massage the muscle if in active spasm",
        "Drink electrolyte fluids containing magnesium, potassium, and sodium",
        "Apply topical analgesic gels containing menthol or diclofenac"
      ],
      "secondaryAdvice": [
        "Do not massage vigorously in the first 24 hours (can aggravate internal capillary bleeding)",
        "Avoid applying intense heat in the acute inflammatory phase (first 48 hours)",
        "Stay hydrated: dehydration and low potassium/magnesium directly provoke muscle cramps",
        "Warm up muscles with 5–10 minutes of light dynamic movement prior to workouts",
        "Wear proper supportive athletic footwear"
      ],
      "foodAdvice": [
        "Potassium and magnesium foods: bananas, sweet potatoes, coconut water, pumpkin seeds",
        "Lean protein to rebuild micro-torn muscle fibers",
        "Avoid dehydrating alcohol and high-sodium junk foods"
      ],
      "restAdvice": [
        "Immobilize and rest the strained muscle group for 48–72 hours",
        "Resume light mobility exercises gradually as tolerated"
      ],
      "whenToSeeDoctor": [
        "Severe pain with audible 'pop' or snap sound during injury",
        "Inability to bear weight on the affected limb",
        "Pain and swelling failing to improve after 5 days"
      ],
      "emergencySigns": [
        "Rapidly expanding swelling or tense, rock-hard muscle compartment (compartment syndrome)",
        "Numbness, tingling, or coldness distal to the strained muscle",
        "Dark brown cola-colored urine following extreme muscular exertion"
      ],
      "medicines": {
        "categories": "NSAIDs (Ibuprofen) and topical pain relief ointments",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "Use topical NSAID creams for localized muscle relief. Consult a sports medicine physician for significant tears."
      },
      "prevention": [
        "Warm up dynamic muscles before exercise and stretch after",
        "Increase training volume and weights progressively, not abruptly",
        "Maintain adequate hydration during strenuous work"
      ]
    },
    "ta": {
      "name": "தசை வலி / தசைப் பிடிப்பு (Muscle Strain & Cramps)",
      "explanation": "தசைகள் அளவுக்கு அதிகமாக இழுக்கப்படுவதாலோ, அதிக பாரம் தூக்குவதாலோ அல்லது எலக்ட்ரோலைட் குறைபாட்டாலோ தசைகளில் ஏற்படும் சுளுக்கு மற்றும் வலி.",
      "symptoms": [
        "தசையில் திடீர் சுருக்கு என்ற வலி அல்லது பிடிப்பு",
        "வீக்கம், தொட்டால் வலி மற்றும் லேசான கன்றிப்போதல்",
        "தசை இறுக்கம் அல்லது தன்னிச்சையான துடிப்பு",
        "கையை அல்லது காலை அசைப்பதில் சிரமம்"
      ],
      "selfCare": [
        "R.I.C.E முறை: ஓய்வு (Rest), ஐஸ் ஒத்தடம் (Ice), பேண்டேஜ் கட்டு (Compress), காலை உயர்த்தி வைத்தல் (Elevate)",
        "பிடிப்பு உள்ள தசையை மென்மையாக நீட்டி அசைக்கவும்",
        "எலுமிச்சை சாறு, இளநீர், உப்பு-சர்க்கரை கரைசல் குடிக்கவும்",
        "வலி நிவாரண களிம்புகளைத் தடவலாம்"
      ],
      "secondaryAdvice": [
        "ஆரம்ப 24 மணி நேரத்திற்கு கடுமையாக அழுத்திக் கொண்டு மசாஜ் செய்யாதீர்கள் (உள் இரத்தப்போக்கு அதிகமாகலாம்)",
        "ஆரம்ப 48 மணி நேரத்திற்கு அதிக சூடான ஒத்தடத்தைத் தவிர்க்கவும்",
        "நீர்ச்சத்து குறைவு மற்றும் பொட்டாசியம் குறைபாடே தசைப் பிடிப்புக்கு முக்கிய காரணம்",
        "உடற்பயிற்சிக்கு முன் தசைகளை வார்ம்-அப் செய்து தயார்படுத்துங்கள்",
        "சரியான காலணிகளை அணியுங்கள்"
      ],
      "foodAdvice": [
        "பொட்டாசியம், மெக்னீசியம் நிறைந்த வாழைப்பழம், இளநீர், உலர் திராட்சை",
        "புரதச்சத்து நிறைந்த உணவுகள் தசை பழுதுபார்க்க உதவும்",
        "மது அருந்துவதைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "சுளுக்கு உள்ள தசைக்கு 2-3 நாட்கள் முழு ஓய்வு கொடுங்கள்",
        "வலி குறைந்த பின்னரே மீண்டும் உடற்பயிற்சி செய்ய வேண்டும்"
      ],
      "whenToSeeDoctor": [
        "காயம் ஏற்படும்போது தசையில் 'டப்' என்ற சத்தம் கேட்டிருந்தால்",
        "கால் அல்லது கையில் எடையைத் தாங்க முடியாவிட்டால்",
        "5 நாட்களுக்கு மேலாக வீக்கம் குறையாமல் இருந்தால்"
      ],
      "emergencySigns": [
        "காயம் அடைந்த தசை மிகக் கடுமையாக இறுகி, கல் போன்று மாறுதல்",
        "கால் விரல்களில் உணர்வின்மை அல்லது குளிர்ந்து போதல்",
        "சிறுநீர் கருப்பாக வெளியேறுதல்"
      ],
      "medicines": {
        "categories": "அழற்சி எதிர்ப்பு மருந்துகள் (இப்யூபுரூஃபன்) மற்றும் வலி நிவாரண ஜெல்",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "வலி நிவாரண மருந்துகளை மருத்துவர் ஆலோசனையுடன் குறுகிய காலத்திற்கு மட்டுமே உட்கொள்ளவும்."
      },
      "prevention": [
        "உடற்பயிற்சிக்கு முன் தசை நீட்சிப் பயிற்சிகள் செய்யுங்கள்",
        "உடற்பயிற்சி தீவிரத்தை படிப்படியாக அதிகரியுங்கள்",
        "நிறைய தண்ணீர் மற்றும் எலக்ட்ரோலைட் திரவங்களை அருந்துங்கள்"
      ]
    }
  },
  {
    "id": "toothache",
    "category": "pain",
    "keywords": {
      "en": [
        "toothache",
        "tooth pain",
        "dental pain",
        "teeth hurt",
        "swollen gum",
        "gum pain"
      ],
      "ta": [
        "பல் வலி",
        "பல் கூச்சம்",
        "ஈறு வீக்கம்",
        "toothache",
        "pal vali",
        "pal vali irukku",
        "eery vali"
      ]
    },
    "en": {
      "name": "Toothache / Dental Pain",
      "explanation": "Pain in or around a tooth, typically resulting from dental caries (cavities), pulpitis (nerve inflammation), cracked enamel, impacted wisdom tooth, or periodontal abscess.",
      "symptoms": [
        "Sharp, throbbing, or constant toothache",
        "Pain exacerbated by hot, cold, or sugary foods",
        "Swelling and redness in the gums surrounding the tooth",
        "Pain when biting down or chewing"
      ],
      "selfCare": [
        "Rinse mouth thoroughly with warm salt water (1/2 tsp salt in 1 glass warm water) for 30 seconds",
        "Apply a drop of natural clove oil (eugenol) on a sterile cotton pellet directly onto the cavity",
        "Gently floss around the painful tooth to dislodge trapped food debris",
        "Keep head elevated with extra pillows when resting to decrease dental throbbing"
      ],
      "secondaryAdvice": [
        "Never place an Aspirin tablet directly onto the gum tissue (causes chemical burns)",
        "Avoid biting or chewing on the affected side of your jaw",
        "Brush gently with a soft-bristle toothbrush and desensitizing toothpaste",
        "Avoid ice cubes, boiling hot soups, or hard candies that shock the pulp nerve",
        "Book an appointment with a dentist; home remedies provide temporary relief only"
      ],
      "foodAdvice": [
        "Soft, lukewarm foods: mashed potatoes, soft pasta, lukewarm soups, yogurt",
        "Avoid sticky sweets, sodas, caramels, and very acidic foods"
      ],
      "restAdvice": [
        "Rest with head propped up at a 45-degree angle to lower hydrostatic pressure in the head",
        "Avoid intense physical exertion which increases blood flow and dental throbbing"
      ],
      "whenToSeeDoctor": [
        "Toothache lasts longer than 2 days without improvement",
        "Pain is intense, preventing sleep or eating",
        "Presence of a visible pimple or pus bubble on the gum line (dental abscess)"
      ],
      "emergencySigns": [
        "Swelling of the cheek, jaw, or neck spreading towards the eye or airway (Ludwig's Angina)",
        "Difficulty swallowing, breathing, or opening mouth fully",
        "High fever associated with facial cellulitis"
      ],
      "medicines": {
        "categories": "Analgesics / NSAIDs (e.g., Ibuprofen) and Clove Oil",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "Ibuprofen is effective for dental nerve inflammation. Antibiotics are only prescribed by a dentist if active infection spreads."
      },
      "prevention": [
        "Brush twice daily with fluoride toothpaste for two minutes",
        "Floss daily to remove interdental plaque",
        "Visit a dentist every 6 months for professional cleaning and checkup"
      ]
    },
    "ta": {
      "name": "பல் வலி (Toothache)",
      "explanation": "பல் சொத்தை, நரம்பு அழற்சி, ஈறு தொற்று அல்லது உடைந்த பல்லால் பல் மற்றும் தாடைப் பகுதியில் ஏற்படும் தாங்க முடியாத வலி.",
      "symptoms": [
        "துடிக்கும் அல்லது தொடர்ச்சியான பல் வலி",
        "சூடான, குளிர்ந்த அல்லது இனிப்பான உணவுகளை உண்ணும்போது பல் கூச்சம்",
        "பல்லைச் சுற்றியுள்ள ஈறுகளில் வீக்கம் மற்றும் சிவத்தல்",
        "உணவை மெல்லும்போது வலி"
      ],
      "selfCare": [
        "வெதுவெதுப்பான உப்பு நீரில் 30 வினாடிகள் வாய் கொப்பளிக்கவும்",
        "சிறிய பஞ்சில் கிராம்பு எண்ணெய் நனைத்து வலிக்கும் பல்லின் மீது வைக்கவும் (இதமளிக்கும்)",
        "பற்களுக்கு இடையே உணவு துகள்கள் சிக்கியிருந்தால் மெதுவாக ஃப்ளாஸ் (Floss) செய்து அகற்றவும்",
        "படுக்கும் போது தலையை உயரமாக வைத்து படுக்கவும்"
      ],
      "secondaryAdvice": [
        "ஆஸ்பிரின் மாத்திரையை நேரடியாக ஈறுகளின் மீது வைக்காதீர்கள் (ஈறுகள் புண்ணாகும்)",
        "வலிக்கும் பக்கத்தில் உணவை மெல்ல வேண்டாம்",
        "மென்மையான பிரஷ் கொண்டு மெதுவாக பல் துலக்கவும்",
        "ஐஸ் கட்டிகள், அதிக சூடான உணவுகள் மற்றும் சாக்லேட்டுகளைத் தவிர்க்கவும்",
        "உடனடியாக பல் மருத்துவரை அணுகி சிகிச்சை பெறுங்கள் (வீட்டு வைத்தியம் தற்காலிகமானது மட்டுமே)"
      ],
      "foodAdvice": [
        "மென்மையான கஞ்சி, ஆறிய சூப், இட்லி, தயிர்",
        "ஒட்டும் தன்மையுள்ள மிட்டாய்கள் மற்றும் இனிப்புகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தலையை உயர்த்தி வைத்து படுங்கள் (பல் துடிப்பு வலி குறையும்)",
        "அதிக கடின உழைப்பைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "பல் வலி 2 நாட்களுக்கு மேல் நீடித்தால்",
        "வலி தூங்கவோ சாப்பிடவோ விடாமல் செய்தால்",
        "ஈறுகளில் சீழ் அல்லது கொப்புளம் தோன்றினால்"
      ],
      "emergencySigns": [
        "கன்னம், தாடை அல்லது கழுத்துப் பகுதியில் தீவிர வீக்கம் ஏற்படுதல்",
        "எச்சில் விழுங்கவோ அல்லது வாயைத் திறக்கவோ முடியாமை",
        "கடுமையான காய்ச்சலுடன் கூடிய முக வீக்கம்"
      ],
      "medicines": {
        "categories": "வலி நிவாரணிகள் (இப்யூபுரூஃபன் / பாரசிட்டமால்) மற்றும் கிராம்பு எண்ணெய்",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "இப்யூபுரூஃபன் பல் நரம்பு அழற்சிக்கு நல்ல நிவாரணம் அளிக்கும். தொற்று இருந்தால் பல் மருத்துவர் மட்டுமே ஆன்டிபயாடிக் பரிந்துரைப்பார்."
      },
      "prevention": [
        "தினமும் இருமுறை ஃப்ளூரைடு பற்பசை கொண்டு பல் துலக்குங்கள்",
        "தினமும் பற்களுக்கு இடையே ஃப்ளாஸ் செய்யுங்கள்",
        "6 மாதங்களுக்கு ஒருமுறை பல் மருத்துவரிடம் சென்று பரிசோதித்துக் கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "joint_pain",
    "category": "pain",
    "keywords": {
      "en": [
        "joint pain",
        "knee pain",
        "arthritic pain",
        "arthritis awareness",
        "stiff joints",
        "swollen joint"
      ],
      "ta": [
        "மூட்டு வலி",
        "முழங்கால் வலி",
        "வாத வலி",
        "joint pain",
        "moottu vali",
        "muzhangal vali",
        "moottu vali irukku"
      ]
    },
    "en": {
      "name": "Joint Pain / Arthritis Awareness",
      "explanation": "Pain, discomfort, and inflammation in one or more joints, commonly stemming from osteoarthritis (cartilage wear), rheumatoid arthritis (autoimmune), gout (uric acid crystals), or post-viral arthralgia.",
      "symptoms": [
        "Aching, throbbing, or burning sensation inside joint structures",
        "Morning joint stiffness lasting 30–60 minutes",
        "Visible swelling, warmth, or crepitus (grating/popping sensations)",
        "Decreased joint flexibility and range of movement"
      ],
      "selfCare": [
        "Apply moist heat packs for 15–20 minutes before activity to loosen stiff joints",
        "Apply ice packs wrapped in towels for 15 minutes after activity to calm inflammation",
        "Perform non-weight-bearing low-impact exercises: swimming, stationary cycling, water aerobics",
        "Maintain joint mobility through gentle daily range-of-motion routines"
      ],
      "secondaryAdvice": [
        "Maintain a healthy body weight: each pound lost relieves 4 pounds of pressure on knee joints",
        "Use assistive devices (knee braces, walking cane, ergonomic jar openers) during flare-ups",
        "Wear cushioned, shock-absorbing supportive shoes with arch support",
        "Avoid high-impact jumping, running on concrete, and deep squatting during acute pain",
        "Consult a rheumatologist if multiple small joints (fingers, wrists) are symmetrically swollen"
      ],
      "foodAdvice": [
        "Mediterranean anti-inflammatory diet: olive oil, walnuts, flaxseeds, oily fish, colorful berries",
        "Spices with proven anti-inflammatory properties: turmeric with black pepper, ginger",
        "Avoid purine-rich foods (red meat, shellfish, beer) if gout is suspected; avoid sugary processed snacks"
      ],
      "restAdvice": [
        "Balance periods of activity with rest to prevent joint exhaustion",
        "Sleep with joints in neutral extended alignment; avoid pillows tucked beneath knees for prolonged hours"
      ],
      "whenToSeeDoctor": [
        "Joint pain persists beyond 2 weeks or worsens progressively",
        "Joint is visibly hot, red, and swollen with fever (suspected septic arthritis)",
        "Morning stiffness exceeds 1 hour daily"
      ],
      "emergencySigns": [
        "Sudden intense joint swelling with high fever and chills (urgent septic arthritis risk)",
        "Complete inability to move or bear weight on the joint",
        "Severe deformity following trauma"
      ],
      "medicines": {
        "categories": "NSAIDs (Ibuprofen / Naproxen) and topical analgesic gels",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "NSAIDs reduce joint inflammation. Take with meals. Long-term arthritis management requires clinical oversight."
      },
      "prevention": [
        "Engage in lifelong low-impact physical exercise",
        "Maintain a healthy body mass index (BMI)",
        "Protect joints from sports injuries with proper form and protective gear"
      ]
    },
    "ta": {
      "name": "மூட்டு வலி / வாத விழிப்புணர்வு (Joint Pain & Arthritis)",
      "explanation": "மூட்டுகளில் ஏற்படும் வலி, வீக்கம் மற்றும் விறைப்பு. இது மூட்டு தேய்மானம் (Osteoarthritis), வாத நோய் (Rheumatoid arthritis) அல்லது யூரிக் அமிலம் அதிகரிப்பதால் (Gout) வரலாம்.",
      "symptoms": [
        "மூட்டுகளில் தொடர் வலி அல்லது எரிச்சல்",
        "காலையில் எழும்போது 30 நிமிடங்களுக்கு மேல் மூட்டுகளில் இறுக்கம்",
        "மூட்டுகளில் வீக்கம், சூடு மற்றும் நடக்கும்போது சத்தம்",
        "கால்களை மடக்கி நீட்டுவதில் சிரமம்"
      ],
      "selfCare": [
        "மூட்டு இறுக்கத்தைப் போக்க வெந்நீர் ஒத்தடம் கொடுக்கவும்",
        "வீக்கம் இருக்கும்போது ஐஸ் ஒத்தடம் கொடுக்கவும்",
        "மூட்டுகளுக்கு அழுத்தம் தராத நடைப்பயிற்சி அல்லது நீச்சல் பயிற்சி செய்யுங்கள்",
        "தினமும் எளிய மூட்டு சுழற்சிப் பயிற்சிகளைச் செய்யுங்கள்"
      ],
      "secondaryAdvice": [
        "உடல் எடையைக் கட்டுக்குள் வையுங்கள் (ஒவ்வொரு கிலோ எடை குறைப்பும் முழங்கால் அழுத்தத்தை 4 மடங்கு குறைக்கும்)",
        "வலி அதிகமாக இருக்கும்போது முழங்கால் பெல்ட் (Knee brace) அல்லது கைத்தடியைப் பயன்படுத்துங்கள்",
        "மென்மையான குஷன் காலணிகளை அணியுங்கள்",
        "கடினமான தரையில் ஓடுவது அல்லது கீழே சம்மணம் போட்டு அமர்வதைத் தவிர்க்கவும்",
        "கை விரல்கள், மணிக்கட்டுகளில் சமச்சீராக வீக்கம் இருந்தால் முடக்குவாத மருத்துவரை அணுகவும்"
      ],
      "foodAdvice": [
        "மஞ்சள், இஞ்சி, ஆலிவ் எண்ணெய், பாதாம், வால்நட்ஸ்",
        "கால்சியம் மற்றும் வைட்டமின் டி நிறைந்த உணவுகள்",
        "யூரிக் அமிலம் அதிகம் உள்ள சிவப்பு இறைச்சி, கடல் உணவுகள் மற்றும் மதுவைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "வேலைக்கு இடையே மூட்டுகளுக்கு ஓய்வு கொடுங்கள்",
        "முழங்கால்களுக்கு அடியில் தலையணை வைத்து நீண்ட நேரம் படுப்பதைத் தவிர்க்கவும் (மூட்டு மடங்கி இறுக்கமாகும்)"
      ],
      "whenToSeeDoctor": [
        "மூட்டு வலி 2 வாரங்களுக்கு மேல் நீடித்தால்",
        "மூட்டு மிகவும் சூடாகவும், சிவந்தும் காணப்பட்டால்",
        "காலையில் மூட்டு விறைப்பு 1 மணி நேரத்திற்கு மேல் இருந்தால்"
      ],
      "emergencySigns": [
        "கடுமையான காய்ச்சலுடன் கூடிய திடீர் மூட்டு வீக்கம் (Septic Arthritis தொற்று ஆபத்து)",
        "காலில் எடையை சுத்தமாக தாங்க முடியாமை",
        "காயத்திற்கு பின் மூட்டு உருமாற்றம் அடைதல்"
      ],
      "medicines": {
        "categories": "அழற்சி எதிர்ப்பு மருந்துகள் (இப்யூபுரூஃபன்) மற்றும் வலி நிவாரண ஜெல்",
        "relevantIds": [
          "ibuprofen",
          "paracetamol"
        ],
        "disclaimer": "மூட்டு அழற்சிக்கு இப்யூபுரூஃபன் நிவாரணம் தரும். நீண்டகால மூட்டு நோய்களுக்கு மருத்துவப் பரிசோதனை கட்டாயம் தேவை."
      },
      "prevention": [
        "எளிய நடைப்பயிற்சி மற்றும் யோகா பழகுங்கள்",
        "உடல் எடையை சீராக வையுங்கள்",
        "மூட்டுகளில் அடிபடாமல் பார்த்துக் கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "acidity",
    "category": "digestive",
    "keywords": {
      "en": [
        "acidity",
        "heartburn",
        "acid reflux",
        "gerd",
        "sour burp",
        "burning chest"
      ],
      "ta": [
        "அசிடிட்டி",
        "நெஞ்செரிச்சல்",
        "புளித்த ஏப்பம்",
        "acidity",
        "nenjerichal",
        "pulitha yeppam",
        "gas acid",
        "acidity irukku"
      ]
    },
    "en": {
      "name": "Acidity & Heartburn (Acid Reflux)",
      "explanation": "Backward flow of acidic gastric juices from the stomach into the esophagus, irritating the sensitive mucosal lining and causing retrosternal burning.",
      "symptoms": [
        "Burning sensation in the chest behind the breastbone (heartburn), often after meals",
        "Sour or bitter acid regurgitation into the mouth or throat",
        "Bloating, excessive upper abdominal gas, and sour burping",
        "Feeling of a lump or irritation in the throat"
      ],
      "selfCare": [
        "Drink a glass of cold or room-temperature water in slow, measured sips",
        "Take an over-the-counter antacid (liquid or chewable) for fast acid neutralization",
        "Loosen tight belts, waistbands, and constrictive clothing",
        "Stand up or walk slowly; stay strictly upright for at least 2 hours following meals"
      ],
      "secondaryAdvice": [
        "Do NOT lie down or go to bed within 3 hours of eating dinner",
        "Elevate the head of your bed 6 to 8 inches using wooden bed blocks (not extra pillows)",
        "Eat smaller, more frequent meals rather than large, heavy banquets",
        "Sleep on your left side: this keeps the gastroesophageal junction above the gastric pool",
        "Avoid chewing gum with peppermint, which relaxes the lower esophageal sphincter"
      ],
      "foodAdvice": [
        "Alkaline and stomach-soothing foods: cold skim milk, ripe bananas, oatmeal, melons, cucumber",
        "Ginger tea or chamomile tea",
        "Avoid reflux triggers: fried foods, hot peppers, tomatoes, chocolate, citrus, caffeine, carbonated sodas, and alcohol"
      ],
      "restAdvice": [
        "Avoid vigorous bending, abdominal crunches, or heavy lifting after eating",
        "Practice relaxed diaphragmatic breathing to strengthen the esophageal hiatus"
      ],
      "whenToSeeDoctor": [
        "Heartburn occurs more than twice weekly (suspected GERD)",
        "Antacids provide only momentary or no relief",
        "Difficulty swallowing or food feeling stuck in the esophagus"
      ],
      "emergencySigns": [
        "Chest pain radiating to the left arm, neck, jaw, or back with cold sweats (rule out heart attack)",
        "Vomiting coffee-ground material or bright red blood",
        "Black, tarry, sticky stools (melena)"
      ],
      "medicines": {
        "categories": "Antacids (Gelusil / Digene / Eno) or H2 Blockers (Famotidine) / PPIs (Omeprazole / Pantoprazole)",
        "relevantIds": [
          "antacids",
          "omeprazole",
          "pantoprazole",
          "famotidine"
        ],
        "disclaimer": "Antacids provide fast temporary relief. Proton Pump Inhibitors (PPIs) take 1–4 days for full effect. Consult a doctor if taking over 14 days."
      },
      "prevention": [
        "Eat meals at fixed times daily",
        "Maintain a healthy body weight to minimize intra-abdominal pressure",
        "Avoid tobacco smoking, which weakens the esophageal sphincter"
      ]
    },
    "ta": {
      "name": "அசிடிட்டி & நெஞ்செரிச்சல் (Acidity & Heartburn)",
      "explanation": "வயிற்றில் உள்ள அமிலம் உணவுக்குழாய்க்குள் மேல்நோக்கி வந்து நெஞ்சு மற்றும் தொண்டைப் பகுதியில் கடுமையான எரிச்சலையும் புளித்த ஏப்பத்தையும் உண்டாக்கும் நிலை.",
      "symptoms": [
        "உணவு உண்ட பின் நெஞ்சுப் பகுதியில் ஏற்படும் கடுமையான எரிச்சல்",
        "தொண்டை மற்றும் வாயில் புளிப்பு அல்லது கசப்பு நீர் வருதல்",
        "வயிற்று உப்புசம், வாயு மற்றும் புளித்த ஏப்பம்",
        "தொண்டையில் ஏதோ அடைப்பது போன்ற உணர்வு"
      ],
      "selfCare": [
        "ஒரு டம்ளர் குளிர்ந்த அல்லது சாதாரண நீரைக் குடியுங்கள்",
        "அன்டாசிட் (Antacid) சிரப் அல்லது மெல்லும் மாத்திரையை எடுத்துக் கொள்ளுங்கள்",
        "இடுப்பில் உள்ள இறுக்கமான பெல்ட் அல்லது ஆடைகளைத் தளர்த்தவும்",
        "சாப்பிட்ட பின் படுக்காமல் குறைந்தது 2 மணி நேரம் நேராக நிமிர்ந்து அமரவும்"
      ],
      "secondaryAdvice": [
        "சாப்பிட்ட உடனே ஒருபோதும் படுக்கைக்குச் செல்லாதீர்கள் (குறைந்தது 3 மணி நேர இடைவெளி தேவை)",
        "தூங்கும்போது தலையணை மட்டும் வைக்காமல், கட்டிலின் தலைப்பகுதியை 6 அங்குலம் உயர்த்தவும்",
        "ஒரே நேரத்தில் அதிகமாக உண்ணாமல், அளவாக பல வேளைகளாக உண்ணுங்கள்",
        "இடதுபுறமாக ஒருக்களித்து படுப்பது அமில பின்னோட்டத்தைத் தடுக்கும்",
        "புகைபிடித்தல் மற்றும் மது அருந்துவதைத் தவிருங்கள்"
      ],
      "foodAdvice": [
        "குளிர்ந்த பால், வாழைப்பழம், வெள்ளரிக்காய், தர்பூசணி, ஓட்ஸ், மோர்",
        "சீரகத் தண்ணீர், சோம்பு நீர் மற்றும் இளநீர்",
        "காரமான உணவுகள், எண்ணெயில் பொரித்தவை, டீ, காபி, தக்காளி மற்றும் குளிர்பானங்களைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "சாப்பிட்ட பின் குனிந்து வேலை செய்வதையோ அல்லது எடை தூக்குவதையோ தவிர்க்கவும்",
        "அமைதியாக அமர்ந்து சீரான மூச்சுப்பயிற்சி செய்யுங்கள்"
      ],
      "whenToSeeDoctor": [
        "வாரத்திற்கு 2 முறைக்கு மேல் நெஞ்செரிச்சல் ஏற்பட்டால்",
        "மாத்திரைகள் சாப்பிட்டும் வலி குறையாவிட்டால்",
        "உணவு விழுங்குவதில் சிரமம் ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "நெஞ்சு வலி இடது கை, தோள்பட்டை, தாடைக்கு பரவுதல் மற்றும் தீவிர வியர்வை (மாரடைப்பு அறிகுறி)",
        "வாந்தியில் இரத்தம் அல்லது காபி தூள் போன்ற படிவுகள் வருதல்",
        "கருப்பு நிறத்தில் மலம் வெளியேறுதல்"
      ],
      "medicines": {
        "categories": "அன்டாசிட் (Antacid), ஒமிபிரசோல் (Omeprazole), பான்டோபிரசோல் (Pantoprazole)",
        "relevantIds": [
          "antacids",
          "omeprazole",
          "pantoprazole",
          "famotidine"
        ],
        "disclaimer": "அன்டாசிட் உடனடி நிவாரணம் தரும். அமிலத் தடுப்பு மாத்திரைகளை 2 வாரங்களுக்கு மேல் தொடர்ந்து உட்கொள்வதற்கு முன் மருத்துவ ஆலோசனை பெறவும்."
      },
      "prevention": [
        "சரியான நேரத்திற்கு சாப்பிடுங்கள்",
        "உடல் எடையை சீராக வையுங்கள்",
        "அதிக இரவு நேர உணவுகளைத் தவிர்க்கவும்"
      ]
    }
  },
  {
    "id": "gastritis",
    "category": "digestive",
    "keywords": {
      "en": [
        "gastritis",
        "stomach inflammation",
        "burning stomach",
        "epigastric pain",
        "stomach lining irritated"
      ],
      "ta": [
        "இரைப்பை அழற்சி",
        "வயிற்றுப்புண்",
        "gastritis",
        "iraippai azharchi",
        "vayiru erichal"
      ]
    },
    "en": {
      "name": "Gastritis",
      "explanation": "Inflammation, irritation, or erosion of the stomach lining (gastric mucosa), commonly triggered by Helicobacter pylori bacteria, chronic NSAID painkiller use, stress, or alcohol.",
      "symptoms": [
        "Gnawing, burning ache in the upper abdomen (epigastrium)",
        "Nausea, occasional vomiting, and hiccups",
        "Early satiety (feeling uncomfortably full quickly during meals)",
        "Bloating, belching, and loss of appetite"
      ],
      "selfCare": [
        "Eat small, bland meals at frequent 3-hour intervals",
        "Drink lukewarm water, coconut water, or rice water",
        "Immediately discontinue NSAID painkillers (Ibuprofen, Aspirin, Diclofenac)",
        "Avoid smoking, alcohol, and carbonated beverages"
      ],
      "secondaryAdvice": [
        "Consult a physician to test for Helicobacter pylori infection via breath or stool antigen test",
        "Never take NSAID painkillers on an empty stomach; discuss alternatives with your doctor",
        "Avoid prolonged fasting or skipping breakfast, which exposes bare gastric mucosa to concentrated hydrochloric acid",
        "Manage psychological stress through mindfulness, as stress hormones increase stomach acid secretion",
        "Avoid lying flat immediately after meals"
      ],
      "foodAdvice": [
        "Stomach-coating bland foods: rice congee (kanji), boiled potatoes, steamed carrots, oats",
        "Probiotic yogurt, tender coconut water, diluted buttermilk",
        "Avoid chili powder, black pepper, citrus juices, raw onions, garlic, vinegar, and coffee"
      ],
      "restAdvice": [
        "Rest in an upright or 30-degree inclined resting position",
        "Practice relaxation techniques to reduce gastric hyperacidity"
      ],
      "whenToSeeDoctor": [
        "Gastric burning persists beyond 1 week despite dietary adjustments",
        "Unexplained weight loss or chronic loss of appetite",
        "Persistent vomiting preventing food retention"
      ],
      "emergencySigns": [
        "Vomiting bright red blood or dark coffee-ground particles",
        "Black, tarry, foul-smelling stools (melena)",
        "Sudden, severe, knife-like sharp abdominal pain (suspected perforation)"
      ],
      "medicines": {
        "categories": "Proton Pump Inhibitors (Omeprazole, Pantoprazole) and Antacids",
        "relevantIds": [
          "omeprazole",
          "pantoprazole",
          "antacids"
        ],
        "disclaimer": "Take PPIs once daily 30 minutes before breakfast for optimal mucosal healing. Never ignore bloody vomit or black stools."
      },
      "prevention": [
        "Avoid routine unprescribed use of NSAID painkillers",
        "Maintain hygienic food and clean drinking water practices to avoid H. pylori",
        "Eat balanced meals at consistent daily hours"
      ]
    },
    "ta": {
      "name": "இரைப்பை அழற்சி (Gastritis)",
      "explanation": "வயிற்றின் உள்பகுதியில் உள்ள சளிச்சவ்வு படலத்தில் ஏற்படும் அழற்சி அல்லது புண். இது எச்.பைலோரி பாக்டீரியா, வலி நிவாரணி மாத்திரைகள், அதிக காரம் அல்லது மன அழுத்தத்தால் ஏற்படுகிறது.",
      "symptoms": [
        "மேல் வயிற்றில் தீவிர எரிச்சல் அல்லது குடைச்சல் போன்ற வலி",
        "குமட்டல், வாந்தி மற்றும் அடிக்கடி விக்கல்",
        "சிறிது சாப்பிட்ட உடனேயே வயிறு நிரம்பியது போன்ற உணர்வு",
        "பசியின்மை மற்றும் வயிறு உப்புசம்"
      ],
      "selfCare": [
        "சிறிது சிறிதாக எளிதில் செரிக்கும் உணவுகளை 3 மணி நேரத்திற்கு ஒருமுறை உண்ணுங்கள்",
        "இளநீர், மோர், அரிசிக் கஞ்சி நிறைய குடியுங்கள்",
        "இப்யூபுரூஃபன், ஆஸ்பிரின் போன்ற வலி நிவாரணி மாத்திரைகளை உடனே நிறுத்துங்கள்",
        "புகை, மது மற்றும் குளிர்பானங்களை முற்றிலும் தவிர்க்கவும்"
      ],
      "secondaryAdvice": [
        "எச்.பைலோரி (H. pylori) பாக்டீரியா தொற்று உள்ளதா என்று மருத்துவப் பரிசோதனை செய்யவும்",
        "வெறும் வயிற்றில் வலி நிவாரணி மாத்திரைகளை ஒருபோதும் சாப்பிடாதீர்கள்",
        "நீண்ட நேரம் பட்டினி கிடப்பதைத் தவிருங்கள் (இது வயிற்று அமிலத்தால் சுவரை அரிக்கும்)",
        "மன அழுத்தத்தைக் குறையுங்கள்",
        "சாப்பிட்ட உடனே படுக்க வேண்டாம்"
      ],
      "foodAdvice": [
        "ஆறிய அரிசிக் கஞ்சி, வேகவைத்த உருளைக்கிழங்கு, இட்லி, ஆப்பிள்",
        "புரோபயாடிக் நிறைந்த தயிர், மோர் மற்றும் இளநீர்",
        "காரமான மசாலாக்கள், மிளகு, ஊறுகாய், காபி மற்றும் டீயைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "சாப்பிட்ட பின் சற்று நிமிர்ந்து அமர்ந்து ஓய்வெடுங்கள்",
        "இரவில் நிம்மதியான தூக்கம் அவசியம்"
      ],
      "whenToSeeDoctor": [
        "வயிற்று வலி 1 வாரத்திற்கு மேல் நீடித்தால்",
        "உடல் எடை குறைதல் அல்லது பசியின்மை ஏற்பட்டால்",
        "தொடர்ந்து வாந்தி வந்தால்"
      ],
      "emergencySigns": [
        "வாந்தியில் இரத்தம் வருதல் அல்லது காபி தூள் நிறத்தில் வாந்தி",
        "கருப்பு நிறத்தில் மலம் வெளியேறுதல்",
        "திடீரென தாங்க முடியாத அளவுக்கு கத்தியால் குத்துவது போன்ற கடுமையான வயிற்று வலி"
      ],
      "medicines": {
        "categories": "அமிலத் தடுப்பிகள் (Omeprazole, Pantoprazole) மற்றும் அன்டாசிட்",
        "relevantIds": [
          "omeprazole",
          "pantoprazole",
          "antacids"
        ],
        "disclaimer": "ஒமிபிரசோல் அல்லது பான்டோபிரசோல் மாத்திரையை காலையில் உணவருந்துவதற்கு 30 நிமிடங்களுக்கு முன்பே வெறும் வயிற்றில் உட்கொள்ள வேண்டும்."
      },
      "prevention": [
        "சுயமாக வலி நிவாரணி மாத்திரைகளை எடுப்பதைத் தவிர்க்கவும்",
        "காய்ச்சி வடிகட்டிய சுத்தமான தண்ணீரைக் குடிக்கவும்",
        "நேரத்திற்கு உணவருந்துங்கள்"
      ]
    }
  },
  {
    "id": "stomach_pain",
    "category": "digestive",
    "keywords": {
      "en": [
        "stomach pain",
        "abdominal pain",
        "belly ache",
        "tummy ache",
        "cramps in stomach",
        "stomach cramps"
      ],
      "ta": [
        "வயிற்று வலி",
        "வயிறு வலி",
        "வயிறு பிடிப்பு",
        "stomach pain",
        "vayiru vali",
        "vaitru vali",
        "vayiru vali irukku",
        "vaitru vali irukku",
        "enakku vayiru vali",
        "enakku vaitru vali"
      ]
    },
    "en": {
      "name": "Stomach Pain / Abdominal Cramps",
      "explanation": "Pain or cramping in the abdominal region, commonly resulting from trapped intestinal gas, indigestion, viral gastroenteritis, muscle strain, or dietary indiscretion.",
      "symptoms": [
        "Dull, aching, or cramping sensation in the belly",
        "Abdominal bloating, gurgling noises, and flatulence",
        "Mild nausea or altered bowel movement",
        "Temporary relief following passage of gas or stool"
      ],
      "selfCare": [
        "Apply a warm heating pad or hot water bottle across the abdomen to relax cramping smooth muscles",
        "Sip warm water, peppermint tea, or chamomile tea slowly",
        "Rest in a comfortable curled-up posture on your side with knees bent",
        "Avoid eating heavy solid foods until cramps settle"
      ],
      "secondaryAdvice": [
        "Do NOT take NSAID painkillers (Ibuprofen/Aspirin) for unexplained stomach pain (they irritate gastric lining)",
        "Track the exact location: right lower quadrant pain may indicate acute appendicitis",
        "Observe for any relationship to meals (e.g. pain 1 hour after fatty food suggests gallbladder issues)",
        "Do not apply intense heat if appendicitis is suspected",
        "Avoid dairy products and carbonated sodas until symptoms resolve"
      ],
      "foodAdvice": [
        "BRAT diet: Bananas, Rice, Applesauce, Toast",
        "Clear broths, ginger tea, warm cumin water (jeera water)",
        "Avoid greasy, cheesy, deep-fried foods, legumes, and artificial sweeteners"
      ],
      "restAdvice": [
        "Rest in a quiet comfortable room with knees drawn up to relieve abdominal wall tension",
        "Avoid lifting heavy objects or performing strenuous core exercises"
      ],
      "whenToSeeDoctor": [
        "Stomach pain lasts longer than 24–48 hours or worsens steadily",
        "Pain moves to the lower right abdomen and is tender to the touch (appendicitis warning)",
        "Accompanied by recurrent vomiting, high fever, or inability to keep fluids down"
      ],
      "emergencySigns": [
        "Sudden, severe, unbearable abdominal pain",
        "Abdomen becomes rigid, board-like, or extremely tender when released (rebound tenderness)",
        "Vomiting blood or passing bloody/black stools",
        "Dizziness, fainting, rapid heartbeat, or shock symptoms"
      ],
      "medicines": {
        "categories": "Antispasmodics (under clinical advice), Antacids, or ORS",
        "relevantIds": [
          "antacids",
          "ors"
        ],
        "disclaimer": "Never self-medicate severe unexplained abdominal pain. Avoid NSAID painkillers like Ibuprofen as they can mask emergency surgical signs."
      },
      "prevention": [
        "Chew food slowly and avoid gulping air while eating",
        "Maintain regular bowel habits with adequate dietary fiber",
        "Avoid known food intolerances and unhygienic street foods"
      ]
    },
    "ta": {
      "name": "வயிற்று வலி (Stomach Pain / Abdominal Cramps)",
      "explanation": "வயிற்றில் ஏற்படும் தசைப்பிடிப்பு அல்லது வலி. இது வாயுத் தொல்லை, அஜீரணம், உணவு ஒவ்வாமை அல்லது குடல் தொற்றால் பொதுவாக ஏற்படுகிறது.",
      "symptoms": [
        "வயிற்றில் விட்டு விட்டு வரும் பிடிப்பு அல்லது வலி",
        "வயிறு உப்புசம், சத்தம் மற்றும் வாயு வெளியேறுதல்",
        "லேசான குமட்டல் அல்லது மலம் கழிப்பதில் மாற்றம்",
        "வாயு அல்லது மலம் கழித்த பின் வலி சற்று குறைதல்"
      ],
      "selfCare": [
        "வயிற்றின் மீது வெந்நீர் ஒத்தடம் கொடுப்பது தசைப்பிடிப்பை தளர்த்தும்",
        "சீரகத் தண்ணீர், ஓமத் தண்ணீர் அல்லது சுடுநீரை சிறிது சிறிதாக குடிக்கவும்",
        "முழங்கால்களை வயிற்றுக்கு அருகில் மடக்கி ஒருக்களித்து படுக்கவும்",
        "வலி குறையும் வரை கடினமான திட உணவுகளைத் தவிர்க்கவும்"
      ],
      "secondaryAdvice": [
        "வயிற்று வலிக்கு இப்யூபுரூஃபன், ஆஸ்பிரின் மாத்திரைகளை ஒருபோதும் எடுக்காதீர்கள் (இவை வயிற்றுப் புண்ணை உண்டாக்கும்)",
        "வலி அடிவயிற்றின் வலது பக்கத்தில் உள்ளதா என்று கவனியுங்கள் (அப்பண்டிக்ஸ் அறிகுறியாக இருக்கலாம்)",
        "எண்ணெய் பலகாரங்கள் சாப்பிட்ட பின் வலி வருகிறதா என்று பாருங்கள் (பித்தப்பை கல் அறிகுறி)",
        "அப்பண்டிக்ஸ் சந்தேகம் இருந்தால் சுடுநீர் ஒத்தடம் கொடுக்காதீர்கள்",
        "பால் மற்றும் குளிர்பானங்களைத் தவிர்க்கவும்"
      ],
      "foodAdvice": [
        "எளிதில் செரிக்கும் கஞ்சி, இட்லி, சுடுநீரில் சீரகம் கலந்து குடித்தல்",
        "வாழைப்பழம், ஆப்பிள் மற்றும் இளநீர்",
        "எண்ணெயில் பொரித்தவை, பருப்பு வகைகள், கார உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "கால்களை மடக்கி படுத்து ஓய்வெடுங்கள்",
        "கடினமான வேலைகளைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "வயிற்று வலி 24 மணி நேரத்திற்கு மேல் நீடித்தால்",
        "வலி அடிவயிற்றின் வலது பக்கத்திற்கு மாறினால் (Appendicitis)",
        "தொடர் வாந்தி அல்லது அதிக காய்ச்சலுடன் வலி இருந்தால்"
      ],
      "emergencySigns": [
        "திடீரென தாங்க முடியாத கடுமையான வயிற்று வலி",
        "வயிறு பலகை போன்று கடினமாக மாறுதல் மற்றும் தொட்டாலே துடித்தல்",
        "வாந்தியில் இரத்தம் அல்லது மலத்தில் இரத்தம் போதல்",
        "அதிக மயக்கம் மற்றும் நாடித்துடிப்பு குறைதல்"
      ],
      "medicines": {
        "categories": "அன்டாசிட் மற்றும் ஓ.ஆர்.எஸ்",
        "relevantIds": [
          "antacids",
          "ors"
        ],
        "disclaimer": "காரணம் தெரியாத கடுமையான வயிற்று வலிக்கு சுயமாக மருந்துகளை உட்கொள்ளக்கூடாது. உடனடியாக மருத்துவரை அணுகவும்."
      },
      "prevention": [
        "உணவை நன்றாக மென்று சாப்பிடுங்கள்",
        "நிறைய தண்ணீர் குடியுங்கள்",
        "சுத்தமற்ற தெருவோர உணவுகளைத் தவிர்க்கவும்"
      ]
    }
  },
  {
    "id": "indigestion",
    "category": "digestive",
    "keywords": {
      "en": [
        "indigestion",
        "dyspepsia",
        "upset stomach",
        "heavy stomach",
        "fullness after eating",
        "food not digesting"
      ],
      "ta": [
        "அஜீரணம்",
        "செரிமானமின்மை",
        "வயிறு மந்தம்",
        "indigestion",
        "ajeeranam",
        "seriyana ajeeranam",
        "serimaanam aagala"
      ]
    },
    "en": {
      "name": "Indigestion (Dyspepsia)",
      "explanation": "Impaired digestion causing functional discomfort in the upper gastrointestinal tract, commonly provoked by eating too fast, high-fat meals, or stress.",
      "symptoms": [
        "Uncomfortable fullness during or shortly after starting a meal",
        "Bloating and tight feeling in the upper belly",
        "Frequent belching, mild nausea, and flatulence",
        "Mild burning sensation in the upper abdomen"
      ],
      "selfCare": [
        "Take a short, gentle 10–15 minute walk to stimulate natural gastric motility",
        "Sip warm water with a squeeze of fresh lemon or warm ginger tea",
        "Avoid tight clothing that exerts pressure on the epigastrium",
        "Refrain from snacking or eating solid foods until gastric heaviness eases"
      ],
      "secondaryAdvice": [
        "Chew each mouthful of food thoroughly (20–30 times) before swallowing",
        "Avoid carbonated beverages, which inflate the stomach with excess carbon dioxide gas",
        "Do not drink large quantities of ice water immediately with or after meals (dilutes digestive enzymes)",
        "Avoid eating late at night within 3 hours of sleep",
        "Identify potential food intolerances (such as dairy lactose or gluten)"
      ],
      "foodAdvice": [
        "Warm ginger tea, peppermint tea, warm fennel seed water, or cumin water",
        "Bland soft foods: papaya, ripe pineapple (contains bromelain enzymes), light vegetable soup",
        "Avoid heavy fats, deep-fried snacks, spicy curries, and rich creams"
      ],
      "restAdvice": [
        "Stay upright; do NOT lie down or slump on a sofa after eating",
        "Practice relaxed post-meal posture to assist gastrointestinal transit"
      ],
      "whenToSeeDoctor": [
        "Indigestion is chronic (lasting over 2 weeks)",
        "Accompanied by unintentional weight loss or poor appetite",
        "Difficulty or pain while swallowing"
      ],
      "emergencySigns": [
        "Indigestion sensation accompanied by shortness of breath, sweating, or chest pressure radiating to jaw/arm",
        "Frequent vomiting or vomiting blood",
        "Black, tarry bowel movements"
      ],
      "medicines": {
        "categories": "Antacids, Digestive Enzymes, or H2 Blockers (Famotidine)",
        "relevantIds": [
          "antacids",
          "famotidine"
        ],
        "disclaimer": "Over-the-counter antacids provide symptomatic relief. Chronic unexplained dyspepsia in adults over 45 requires endoscopy evaluation."
      },
      "prevention": [
        "Eat at fixed times in a calm, unhurried atmosphere",
        "Avoid talking continuously while eating to minimize aerophagia (air-swallowing)",
        "Limit alcohol and quit smoking"
      ]
    },
    "ta": {
      "name": "அஜீரணம் / செரிமானமின்மை (Indigestion)",
      "explanation": "உண்ட உணவு சரியாக செரிக்காமல் மேல் வயிற்றில் மந்தம், உப்புசம் மற்றும் ஏப்பத்தை ஏற்படுத்தும் செரிமான மண்டலக் கோளாறு.",
      "symptoms": [
        "சிறிது சாப்பிட்ட உடனேயே வயிறு அடைத்தது போன்ற பாரமான உணர்வு",
        "மேல் வயிற்றில் உப்புசம் மற்றும் இறுக்கம்",
        "அடிக்கடி ஏப்பம் வருதல் மற்றும் லேசான குமட்டல்",
        "மேல் வயிற்றில் லேசான எரிச்சல்"
      ],
      "selfCare": [
        "சாப்பிட்ட பின் 10-15 நிமிடங்கள் மெதுவாக நடைப்பயிற்சி செய்யுங்கள்",
        "வெதுவெதுப்பான இஞ்சி டீ அல்லது சீரகத் தண்ணீர் அருந்துங்கள்",
        "இடுப்பில் உள்ள இறுக்கமான ஆடைகளைத் தளர்த்தவும்",
        "வயிறு மந்தம் குறையும் வரை அடுத்த வேளை உணவைத் தள்ளிப்போடுங்கள்"
      ],
      "secondaryAdvice": [
        "உணவை அவசர அவசரமாக விழுங்காமல், நன்றாக மென்று நிதானமாக உண்ணுங்கள்",
        "சாப்பிடும் போது குளிர்பானங்கள் குடிப்பதைத் தவிருங்கள் (இது வயிற்றில் வாயுவை அதிகரிக்கும்)",
        "சாப்பிடும் போது நிறைய குளிர்ந்த நீர் குடிப்பதைத் தவிர்க்கவும் (செரிமான நொதிகளை நீர்த்துப்போகச் செய்யும்)",
        "இரவு தாமதமாக சாப்பிடுவதைத் தவிருங்கள்",
        "எந்த உணவு அஜீரணத்தை ஏற்படுத்துகிறது என்பதைக் கவனியுங்கள்"
      ],
      "foodAdvice": [
        "சீரகத் தண்ணீர், சோம்பு நீர், இஞ்சி தேநீர், மோர்",
        "பப்பாளி பழம், எளிதில் செரிக்கும் ரசம் சாதம்",
        "எண்ணெயில் பொரித்த உணவுகள், அதிக மசாலா மற்றும் இனிப்புகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "சாப்பிட்ட உடனே படுக்க வேண்டாம்; நேராக நிமிர்ந்து அமர்ந்திருங்கள்",
        "மனதை அமைதியாக வையுங்கள்"
      ],
      "whenToSeeDoctor": [
        "அஜீரணம் 2 வாரங்களுக்கு மேல் தொடர்ந்தால்",
        "காரணமின்றி உடல் எடை குறைந்தால்",
        "உணவு விழுங்குவதில் சிரமம் ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "அஜீரண உணர்வுடன் நெஞ்சு வலி, மூச்சுத்திணறல் மற்றும் அதீத வியர்வை (மாரடைப்பு ஆபத்து)",
        "தொடர் வாந்தி அல்லது இரத்த வாந்தி",
        "கருப்பு நிறத்தில் மலம் போதல்"
      ],
      "medicines": {
        "categories": "அன்டாசிட் மற்றும் செரிமான நொதிகள் (Antacids)",
        "relevantIds": [
          "antacids",
          "famotidine"
        ],
        "disclaimer": "அன்டாசிட் மருந்துகள் தற்காலிக நிவாரணம் தரும். தொடர் அஜீரணத்திற்கு முறையான மருத்துவப் பரிசோதனை அவசியம்."
      },
      "prevention": [
        "நேரத்திற்கு அமைதியான சூழலில் உணவருந்துங்கள்",
        "உணவை நன்றாக மென்று சாப்பிடுங்கள்",
        "மது மற்றும் புகையிலையைத் தவிர்க்கவும்"
      ]
    }
  },
  {
    "id": "diarrhea",
    "category": "digestive",
    "keywords": {
      "en": [
        "diarrhea",
        "diarrhoea",
        "loose motion",
        "loose stools",
        "watery stools",
        "frequent motions"
      ],
      "ta": [
        "வயிற்றுப்போக்கு",
        "பேதி",
        "லூஸ் மோஷன்",
        "diarrhea",
        "loose motion",
        "vayitrupokku",
        "loose stools"
      ]
    },
    "en": {
      "name": "Diarrhea (Loose Stools)",
      "explanation": "Frequent passage of loose, watery stools (three or more times in 24 hours), usually caused by viral gastroenteritis, contaminated food or water, or bacterial toxins.",
      "symptoms": [
        "Frequent watery or unformed bowel movements",
        "Abdominal cramping, urgency, and bloating",
        "Mild nausea, thirst, and fatigue",
        "Mild low-grade fever in viral enteritis"
      ],
      "selfCare": [
        "Drink Oral Rehydration Salts (ORS) solution continuously: 1 glass after every loose stool",
        "Consume tender coconut water, diluted buttermilk with salt, and clear rice water",
        "Eat the BRAT diet: Bananas, Rice, Applesauce, and Toast",
        "Rest in bed and stay close to a bathroom"
      ],
      "secondaryAdvice": [
        "Mix ORS in the exact volume of clean water specified on the packet (do NOT add sugar or salt)",
        "Do NOT take anti-motility drugs (like Loperamide) if you have high fever or bloody stools",
        "Wash hands with antibacterial soap thoroughly after every toilet visit to stop transmission",
        "Keep track of the number of episodes and monitor urine output (at least once every 6 hours)",
        "Avoid milk, cheese, and cream; temporary secondary lactase deficiency is common after enteritis"
      ],
      "foodAdvice": [
        "Oral Rehydration Salts (ORS), rice congee with rock salt, boiled potatoes, oats",
        "Probiotics: fresh homemade curd/yogurt to replenish intestinal flora",
        "Avoid fruit juices with high fructose, sodas, oily curries, caffeine, and artificial sweeteners"
      ],
      "restAdvice": [
        "Strict physical rest to preserve fluid and electrolyte balance",
        "Avoid traveling or strenuous physical exertion during acute episodes"
      ],
      "whenToSeeDoctor": [
        "Diarrhea persists for more than 48 hours without improvement",
        "Unable to keep any oral fluids down due to concurrent vomiting",
        "High fever exceeding 102°F (38.9°C)"
      ],
      "emergencySigns": [
        "Signs of severe dehydration: sunken eyes, dry mouth, extreme dizziness, lack of urination >8h",
        "Stools contain visible blood, mucus, or are dark tarry black (dysentery)",
        "Severe, unbearable abdominal cramping or confusion"
      ],
      "medicines": {
        "categories": "Oral Rehydration Salts (ORS) and Zinc Supplements",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "ORS is the cornerstone of diarrhea therapy. Antibiotics are only needed for specific laboratory-proven bacterial infections."
      },
      "prevention": [
        "Drink boiled and cooled drinking water",
        "Wash hands thoroughly with soap before eating and after using the toilet",
        "Avoid eating exposed, stale, or roadside street food"
      ]
    },
    "ta": {
      "name": "வயிற்றுப்போக்கு (Diarrhea / Loose Motion)",
      "explanation": "ஒரு நாளில் மூன்று அல்லது அதற்கு மேற்பட்ட முறை நீர் போன்ற மலம் வெளியேறும் நிலை. இது பொதுவாக வைரஸ் தொற்று, அசுத்தமான உணவு அல்லது நீரினால் ஏற்படுகிறது.",
      "symptoms": [
        "அடிக்கடி நீர் போன்று மலம் கழித்தல்",
        "வயிற்றுப் பிடிப்பு மற்றும் அவசரமாக மலம் கழிக்கத் தோன்றுதல்",
        "தாகம், வாய் வறட்சி மற்றும் சோர்வு",
        "லேசான காய்ச்சல் மற்றும் குமட்டல்"
      ],
      "selfCare": [
        "ஒவ்வொரு முறை மலம் கழித்த பின்னரும் ஒரு டம்ளர் ஓ.ஆர்.எஸ் (ORS) கரைசலைக் குடிக்கவும்",
        "இளநீர், உப்பு கலந்த மோர் மற்றும் கஞ்சித் தண்ணீரை நிறைய அருந்துங்கள்",
        "வாழைப்பழம், இட்லி, ஆப்பிள், சாதம் போன்ற எளிய உணவுகளை உண்ணுங்கள்",
        "உடலுக்கு முழு ஓய்வு கொடுங்கள்"
      ],
      "secondaryAdvice": [
        "ஓ.ஆர்.எஸ் பாக்கெட்டில் உள்ள வழிமுறைப்படி சரியான அளவு சுத்தமான தண்ணீரில் கரைக்கவும்",
        "காய்ச்சல் அல்லது மலத்தில் இரத்தம் இருந்தால் பேதியை நிறுத்தும் மாத்திரைகளை சுயமாக எடுக்காதீர்கள்",
        "ஒவ்வொரு முறை கழிப்பறை சென்ற பின்னரும் கைகளை சோப்பு போட்டு நன்கு கழுவுங்கள்",
        "சிறுநீர் போகிறதா என்பதைக் கவனியுங்கள் (6 மணி நேரத்திற்கு ஒருமுறையாவது சிறுநீர் வெளியேற வேண்டும்)",
        "பால் மற்றும் பால் பொருட்களை சில நாட்களுக்குத் தவிர்க்கவும்"
      ],
      "foodAdvice": [
        "ஓ.ஆர்.எஸ் நீர், உப்பு கலந்த கஞ்சி, தயிர் சாதம், வாழைப்பழம்",
        "தயிரில் உள்ள நல்ல பாக்டீரியாக்கள் குடல் குணமடைய உதவும்",
        "அதிக இனிப்பு உள்ள குளிர்பானங்கள், எண்ணெயில் பொரித்த உணவுகள், காபியைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "முழு ஓய்வு எடுக்கவும்",
        "பயணங்கள் செய்வதைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "வயிற்றுப்போக்கு 2 நாட்களுக்கு மேல் நீடித்தால்",
        "தொடர் வாந்தியால் தண்ணீர் கூட குடிக்க முடியாமல் போனால்",
        "102°F-க்கு மேல் அதிக காய்ச்சல் இருந்தால்"
      ],
      "emergencySigns": [
        "தீவிர நீர்ச்சத்து குறைவு: கண்கள் குழிவிழுதல், வறண்ட நாக்கு, தீவிர தலைசுற்றல், 8 மணி நேரத்திற்கு மேல் சிறுநீர் வராமை",
        "மலத்தில் இரத்தம் அல்லது சீழ் வெளியேறுதல் (Dysentery)",
        "மயக்கம் மற்றும் சுயநினைவின்மை"
      ],
      "medicines": {
        "categories": "ஓ.ஆர்.எஸ் (ORS) மற்றும் ஜிங்க் மாத்திரைகள்",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "வயிற்றுப்போக்குக்கு ஓ.ஆர்.எஸ் நீர்ச்சத்து பராமரிப்பே மிக முக்கியமானது. ஆன்டிபயாடிக் மாத்திரைகளை மருத்துவர் பரிந்துரைத்தால் மட்டுமே எடுக்க வேண்டும்."
      },
      "prevention": [
        "காய்ச்சி வடிகட்டிய நீரைக் குடிக்கவும்",
        "சாப்பிடும் முன் கைகளை சோப்பு போட்டு கழுவுங்கள்",
        "ஈக்கள் மொய்த்த அல்லது கெட்டுப்போன உணவுகளை உண்ணாதீர்கள்"
      ]
    }
  },
  {
    "id": "constipation",
    "category": "digestive",
    "keywords": {
      "en": [
        "constipation",
        "hard stools",
        "straining at stool",
        "cannot pass stool",
        "infrequent bowel movements",
        "bowel blockage"
      ],
      "ta": [
        "மலச்சிக்கல்",
        "மலம் போகவில்லை",
        "கெட்டி மலம்",
        "constipation",
        "malachikkal",
        "malam pogala",
        "malasikkal"
      ]
    },
    "en": {
      "name": "Constipation",
      "explanation": "Infrequent bowel movements (fewer than 3 per week) or difficulty and straining during the passage of dry, hard stools, commonly due to inadequate fiber, low hydration, or lack of physical mobility.",
      "symptoms": [
        "Fewer than three bowel evacuations per week",
        "Lumpy, hard, dry, pellet-like stools",
        "Excessive straining, discomfort, or sensation of incomplete evacuation",
        "Abdominal bloating, heaviness, and mild cramping"
      ],
      "selfCare": [
        "Drink at least 2.5 to 3 liters of water throughout the day, starting with 2 glasses of warm water upon waking",
        "Increase dietary fiber gradually to 25–35 grams per day",
        "Take a brisk 20–30 minute walk daily to stimulate colonic peristalsis",
        "Place a small footstool (Squatty Potty) under your feet while sitting on the toilet to straighten the anorectal angle"
      ],
      "secondaryAdvice": [
        "Do not ignore or postpone the urge to pass stool; respond promptly when the reflex strikes",
        "Check your medications: iron supplements, calcium tablets, and opioid analgesics commonly cause constipation",
        "Avoid excessive reliance on stimulant laxatives (Senna) which can cause dependent 'lazy bowel'",
        "Use gentle osmotic laxatives or psyllium husk (Isabgol) with plenty of water if dietary changes fail",
        "Establish a regular unhurried morning toilet routine"
      ],
      "foodAdvice": [
        "High-fiber foods: prunes, figs, papaya, pears, flaxseeds, oats, lentils, green leafy vegetables",
        "Psyllium husk (Isabgol) 1–2 teaspoons stirred into a full glass of warm water before bedtime",
        "Avoid white flour (maida), fast food, cheese, unripe bananas, and processed chips"
      ],
      "restAdvice": [
        "Allow dedicated, unhurried time in the morning for natural bowel evacuation",
        "Incorporate daily physical walking and core movement routines"
      ],
      "whenToSeeDoctor": [
        "Constipation is a new onset lasting more than 2 weeks",
        "Severe, persistent abdominal pain and bloating",
        "Unexplained weight loss or fatigue"
      ],
      "emergencySigns": [
        "Inability to pass stool AND inability to pass gas (flatus) accompanied by vomiting (suspected bowel obstruction)",
        "Bright red blood in the stool or dripping into the toilet bowl",
        "Fever with severe, worsening abdominal distension"
      ],
      "medicines": {
        "categories": "Bulk-forming laxatives (Psyllium Husk) or Osmotic laxatives (Lactulose / PEG)",
        "relevantIds": [],
        "disclaimer": "Bulk-forming laxatives must always be consumed with adequate fluids to prevent esophageal or bowel blockage."
      },
      "prevention": [
        "Consume plenty of dietary fiber daily through vegetables and whole grains",
        "Maintain adequate daily water intake",
        "Exercise regularly to support intestinal motility"
      ]
    },
    "ta": {
      "name": "மலச்சிக்கல் (Constipation)",
      "explanation": "வாரத்திற்கு 3 முறைக்கும் குறைவாக அல்லது மலம் கழிப்பதில் அதிக சிரமமும், கெட்டியான மலமும் வெளியேறும் நிலை. நார்ச்சத்து குறைவு, நீர்ச்சத்து குறைவு மற்றும் உடற்பயிற்சியின்மையால் ஏற்படுகிறது.",
      "symptoms": [
        "வாரத்திற்கு 3 முறைக்கும் குறைவாக மலம் கழித்தல்",
        "கெட்டியான, உலர்ந்த, உருண்டை போன்ற மலம்",
        "மலம் கழிக்கும் போது அதிக சிரமமும் முக்குதலும்",
        "வயிறு உப்புசம் மற்றும் மலம் முழுமையாக வெளியேறாத உணர்வு"
      ],
      "selfCare": [
        "காலையில் எழுந்தவுடன் 2 டம்ளர் வெதுவெதுப்பான நீர் குடிப்பதுடன், நாள் முழுவதும் 3 லிட்டர் தண்ணீர் குடிக்கவும்",
        "நார்ச்சத்து நிறைந்த காய்கறிகள், கீரைகளை உணவில் அதிகரியுங்கள்",
        "தினமும் 20-30 நிமிடங்கள் விறுவிறுப்பான நடைப்பயிற்சி செய்யுங்கள்",
        "கழிப்பறையில் அமரும்போது கால்களுக்கு அடியில் ஒரு சிறிய ஸ்டூல் வைத்து அமர்வது மலம் எளிதாக வெளியேற உதவும்"
      ],
      "secondaryAdvice": [
        "மலம் கழிக்க வேண்டும் என்ற உணர்வு வரும்போது அடக்கி வைக்காதீர்கள்",
        "இரும்புச்சத்து மாத்திரைகள் அல்லது கால்சியம் மாத்திரைகள் சாப்பிடுபவரா என்று கவனியுங்கள்",
        "மலமிளக்கி மருந்துகளை அடிக்கடி தொடர்ந்து பயன்படுத்துவதைத் தவிர்க்கவும்",
        "இரவில் வெதுவெதுப்பான நீரில் இசப்கோல் (Psyllium husk) அல்லது கடுக்காய் பொடி கலந்து குடிக்கலாம்",
        "காலையில் நிதானமாக மலம் கழிக்க நேரம் ஒதுக்குங்கள்"
      ],
      "foodAdvice": [
        "பப்பாளி, அத்திப்பழம், கொய்யாப்பழம், பேரிக்காய், கீரைகள், ஓட்ஸ்",
        "நார்ச்சத்து நிறைந்த முழு தானியங்கள் மற்றும் உலர் திராட்சை",
        "மைதா உணவுகள், துரித உணவுகள், சீஸ் மற்றும் வறுத்த உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "காலையில் அவசரப்படாமல் நிதானமாக கழிப்பறைக்கு செல்லுங்கள்",
        "உடற்பயிற்சி செய்து உடலை சுறுசுறுப்பாக வையுங்கள்"
      ],
      "whenToSeeDoctor": [
        "மலச்சிக்கல் 2 வாரங்களுக்கு மேல் தொடர்ந்து நீடித்தால்",
        "கடுமையான வயிற்று வலி மற்றும் உப்புசம் இருந்தால்",
        "காரணமின்றி உடல் எடை குறைந்தால்"
      ],
      "emergencySigns": [
        "மலமும் போகாமல், வாயுவும் பிரியாமல் கடுமையான வாந்தி எடுத்தல் (குடல் அடைப்பு ஆபத்து)",
        "மலத்தில் இரத்தம் வெளியேறுதல்",
        "காய்ச்சலுடன் கூடிய கடுமையான வயிறு வீக்கம்"
      ],
      "medicines": {
        "categories": "இயற்கை நார்ச்சத்து மலமிளக்கிகள் (இசப்கோல்) அல்லது லாக்டூலோஸ்",
        "relevantIds": [],
        "disclaimer": "நார்ச்சத்து மருந்துகளை உட்கொள்ளும்போது நிறைய தண்ணீர் குடிக்க வேண்டும். நாட்பட்ட மலச்சிக்கலுக்கு மருத்துவ ஆலோசனை பெறவும்."
      },
      "prevention": [
        "தினமும் கீரை மற்றும் காய்கறிகளை உணவில் சேர்த்துக் கொள்ளுங்கள்",
        "தினமும் போதிய அளவு தண்ணீர் குடியுங்கள்",
        "தினசரி நடைப்பயிற்சி செய்யுங்கள்"
      ]
    }
  },
  {
    "id": "vomiting",
    "category": "digestive",
    "keywords": {
      "en": [
        "vomiting",
        "throwing up",
        "vomit",
        "emesis",
        "puking",
        "continuous vomiting"
      ],
      "ta": [
        "வாந்தி",
        "வாந்தி வருது",
        "வாந்தி எடுக்குறேன்",
        "vomiting",
        "vaanthi",
        "vaanthi varuthu",
        "vomit"
      ]
    },
    "en": {
      "name": "Vomiting",
      "explanation": "Forceful, involuntary oral expulsion of stomach contents, commonly resulting from foodborne pathogens, viral gastroenteritis, motion sickness, or inner ear disturbances.",
      "symptoms": [
        "Forceful regurgitation and emptying of gastric contents",
        "Preceding severe nausea, excessive salivation, and cold sweats",
        "Abdominal wall tenderness from muscular retching contractions",
        "Thirst, dry mouth, and fatigue"
      ],
      "selfCare": [
        "Do NOT eat or drink anything for 30–60 minutes immediately following an episode of vomiting to allow the stomach to rest",
        "Begin sipping Oral Rehydration Salts (ORS) or water in tiny amounts (1 teaspoon every 5 minutes)",
        "Suck on small ice chips or soothing ginger hard candies",
        "Sit upright or lie on your side (never flat on your back to prevent aspiration)"
      ],
      "secondaryAdvice": [
        "Gradually advance to clear fluids as tolerated: diluted apple juice, clear broth, electrolyte water",
        "Avoid gulping large volumes of fluid at once, which immediately triggers the gag reflex",
        "Inspect vomitus for color: yellow/green is bile; red or black grounds indicate internal bleeding",
        "Avoid strong food odors, cooking smells, and bright flickering screens",
        "Rinse mouth with water after vomiting to remove acidic digestive juices that erode dental enamel"
      ],
      "foodAdvice": [
        "Once vomiting has paused for over 6 hours, try the BRAT diet: Bananas, Rice congee, Applesauce, Toast",
        "Clear broths, plain soda crackers, ginger tea",
        "Strictly avoid dairy, greasy meats, citrus juices, alcohol, and spicy seasonings"
      ],
      "restAdvice": [
        "Complete physical rest in bed with head elevated at least 30 degrees",
        "Sleep on your side to eliminate choking risk if vomiting recurs while asleep"
      ],
      "whenToSeeDoctor": [
        "Vomiting lasts longer than 24 hours in adults (or >12 hours in children)",
        "Inability to retain any fluids for over 12 hours leading to severe dehydration",
        "Accompanied by a severe headache or stiff neck"
      ],
      "emergencySigns": [
        "Vomiting bright red blood or dark coffee-ground material",
        "Severe, sharp, sudden abdominal or chest pain",
        "Signs of severe dehydration: no urination for >8 hours, extreme confusion, or fainting",
        "Vomiting following a direct head injury"
      ],
      "medicines": {
        "categories": "Oral Rehydration Salts (ORS) and Anti-emetics (under clinical prescription)",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "ORS is critical to replace lost fluids and electrolytes. Anti-emetic medications should only be taken if prescribed by a doctor."
      },
      "prevention": [
        "Eat fresh, hygienically prepared food and avoid spoiled leftovers",
        "Wash hands before eating and preparing meals",
        "Avoid eating right before strenuous activity or motion"
      ]
    },
    "ta": {
      "name": "வாந்தி (Vomiting)",
      "explanation": "வயிற்றில் உள்ள உணவுகள் வாய் வழியாக வேகமாக வெளியேறும் நிலை. இது பொதுவாக உணவு நச்சு, வைரஸ் தொற்று, அஜீரணம் அல்லது பயணக் களைப்பால் ஏற்படுகிறது.",
      "symptoms": [
        "வயிற்றில் உள்ளவை வேகமாக வெளியேறுதல்",
        "வாந்திக்கு முன் அதிக உமிழ்நீர் சுரத்தல் மற்றும் குமட்டல்",
        "வயிறு இறுக்கம் மற்றும் சோர்வு",
        "வாய் வறட்சி மற்றும் தாகம்"
      ],
      "selfCare": [
        "வாந்தி எடுத்தவுடன் அடுத்த 30-60 நிமிடங்களுக்கு எதையும் குடிக்கவோ சாப்பிடவோ வேண்டாம் (வயிற்றுக்கு ஓய்வு தேவை)",
        "அதன்பின் ஒரு ஸ்பூன் வீதம் ஓ.ஆர்.எஸ் (ORS) அல்லது சுடுநீரை 5 நிமிடங்களுக்கு ஒருமுறை சிறிது சிறிதாக குடியுங்கள்",
        "ஐஸ் கட்டி அல்லது சிறிய துண்டு இஞ்சியை வாயில் வைத்து அடக்கலாம்",
        "நேராக நிமிர்ந்து அமரவும் அல்லது ஒருக்களித்து படுக்கவும் (மல்லாந்து படுக்க வேண்டாம்)"
      ],
      "secondaryAdvice": [
        "ஒரே நேரத்தில் அதிக தண்ணீர் குடிக்காதீர்கள் (இது மீண்டும் வாந்தியைத் தூண்டும்)",
        "வாந்தியின் நிறத்தைக் கவனியுங்கள் (பச்சை/மஞ்சள் நிறம் பித்தத்தைக் குறிக்கும்; சிவப்பு/கருப்பு நிறம் இரத்தப்போக்கைக் குறிக்கும்)",
        "சமையல் வாசனை மற்றும் கடுமையான வாசனைகளில் இருந்து விலகி இருங்கள்",
        "வாந்தி எடுத்த பின் வாயை சுத்தமான நீரால் கொப்பளிக்கவும் (பற்கள் அமிலத்தால் பாதிக்கப்படாமல் இருக்க)",
        "குழந்தைகளுக்கு வாந்தி வந்தால் உடனே மருத்துவரிடம் காட்டவும்"
      ],
      "foodAdvice": [
        "வாந்தி நின்று 6 மணி நேரத்திற்குப் பின் எளிய இட்லி, கஞ்சி, பிரெட் சாப்பிடலாம்",
        "இஞ்சி டீ, இளநீர், உப்பு கலந்த எலுமிச்சை சாறு",
        "பால், நெய், எண்ணெய் உணவுகள் மற்றும் காரமான உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தலையை உயர்த்தி வைத்து படுத்து ஓய்வெடுங்கள்",
        "தூங்கும்போது ஒருக்களித்து படுக்கவும் (வாந்தி மூச்சுக்குழாய்க்குள் செல்வதைத் தடுக்க)"
      ],
      "whenToSeeDoctor": [
        "வாந்தி 24 மணி நேரத்திற்கு மேல் நீடித்தால்",
        "12 மணி நேரத்திற்கும் மேலாக தண்ணீர் கூட குடிக்க முடியாவிட்டால்",
        "கடுமையான தலைவலி அல்லது கழுத்து வலியுடன் வாந்தி வந்தால்"
      ],
      "emergencySigns": [
        "வாந்தியில் இரத்தம் அல்லது காபி தூள் போன்ற படிவுகள் வெளியேறுதல்",
        "கடுமையான தாங்க முடியாத வயிற்று வலி",
        "8 மணி நேரத்திற்கு மேல் சிறுநீர் வராமல் அதீத மயக்கம் ஏற்படுதல்",
        "தலையில் அடிபட்ட பின் வாந்தி வருதல்"
      ],
      "medicines": {
        "categories": "ஓ.ஆர்.எஸ் (ORS) மற்றும் வாந்தி தடுப்பு மருந்துகள் (மருத்துவர் பரிந்துரை)",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "நீர்ச்சத்து இழப்பைத் தடுக்க ஓ.ஆர்.எஸ் நீர் மிகவும் அவசியம். வாந்தி மாத்திரைகளை மருத்துவர் ஆலோசனையின்றி சுயமாக எடுக்க வேண்டாம்."
      },
      "prevention": [
        "சுத்தமான மற்றும் புதிய உணவுகளை மட்டுமே உண்ணுங்கள்",
        "சாப்பிடும் முன் கைகளை சோப்பு போட்டு கழுவுங்கள்",
        "பயணத்தின் போது எளிதில் செரிக்கும் உணவுகளை உண்ணுங்கள்"
      ]
    }
  },
  {
    "id": "nausea",
    "category": "digestive",
    "keywords": {
      "en": [
        "nausea",
        "feeling nauseous",
        "queasy",
        "feel like throwing up",
        "sick to stomach",
        "urge to vomit"
      ],
      "ta": [
        "குமட்டல்",
        "வாந்தி வருவது போல இருக்கு",
        "nausea",
        "kumattal",
        "vaanthi vara maadhiri irukku"
      ]
    },
    "en": {
      "name": "Nausea",
      "explanation": "An unpleasant sensation of unease and discomfort in the upper stomach with an involuntary urge to vomit, commonly caused by viral enteritis, motion sickness, early pregnancy, or acid reflux.",
      "symptoms": [
        "Uneasy, queasy feeling in the stomach and throat",
        "Excessive saliva pooling in the mouth",
        "Lightheadedness, dizziness, and cold sweating",
        "Aversion to food odors and loss of appetite"
      ],
      "selfCare": [
        "Inhale the fresh scent of a cut lemon or pure peppermint oil",
        "Sip cool water or real ginger tea slowly through a straw",
        "Sit in front of a gentle fan with cool, fresh air circulating",
        "Nibble on plain, dry crackers, pretzels, or plain toast"
      ],
      "secondaryAdvice": [
        "Avoid lying flat; sit upright with your head supported to prevent gastric backflow",
        "Apply firm acupressure to the P6 point (three finger-widths below the wrist crease on the inner arm)",
        "Avoid looking at moving digital screens, reading in moving vehicles, or sudden head motions",
        "Step outdoors into fresh, cool air to ease sensory overload",
        "Wear loose, unrestrictive clothing around your chest and abdomen"
      ],
      "foodAdvice": [
        "Cold or room-temperature bland foods: dry crackers, pretzels, chilled watermelon, applesauce",
        "Ginger tea, peppermint tea, flat ginger ale, or ice water",
        "Avoid hot, steamy, strong-smelling foods, greasy frying, and heavy dairy"
      ],
      "restAdvice": [
        "Rest in a quiet, cool, semi-reclined posture (30–45 degrees)",
        "Practice slow, rhythmic diaphragmatic breathing to stabilize the autonomic nervous system"
      ],
      "whenToSeeDoctor": [
        "Nausea lasts longer than 48 hours without clear cause",
        "Accompanied by progressive weight loss or inability to eat",
        "Possible early pregnancy requiring prenatal guidance"
      ],
      "emergencySigns": [
        "Nausea accompanied by crushing chest pressure, pain radiating to arm or jaw, and cold sweats",
        "Severe, sudden headache and stiff neck",
        "Confusion, blurred vision, or fainting"
      ],
      "medicines": {
        "categories": "Anti-nausea ginger supplements or over-the-counter Antacids",
        "relevantIds": [
          "antacids",
          "ors"
        ],
        "disclaimer": "Ginger root and acupressure bands are safe first-line options for nausea. Consult a doctor if nausea is persistent."
      },
      "prevention": [
        "Eat smaller, more frequent meals rather than large feasts",
        "Avoid lying down immediately after meals",
        "Stay hydrated with small sips throughout the day"
      ]
    },
    "ta": {
      "name": "குமட்டல் (Nausea)",
      "explanation": "வயிற்றில் அசௌகரியமும் வாந்தி வரப்போவது போன்ற உணர்வும் ஏற்படுதல். இது அஜீரணம், பயண அசதி, கர்ப்ப காலம் அல்லது பித்த அதிகரிப்பால் பொதுவாக ஏற்படுகிறது.",
      "symptoms": [
        "தொண்டை மற்றும் வயிற்றில் அசௌகரியமான குமட்டல் உணர்வு",
        "வாயில் அதிக எச்சில் ஊறுதல்",
        "லேசான தலைசுற்றல் மற்றும் குளிர்ந்த வியர்வை",
        "உணவு வாசனையைக் கண்டால் அருவருப்பு ஏற்படுதல்"
      ],
      "selfCare": [
        "எலுமிச்சம் பழத்தை நுகர்ந்து பார்ப்பது குமட்டலை உடனடியாகக் குறைக்கும்",
        "இஞ்சி டீ அல்லது எலுமிச்சை சாறு சிறிது சிறிதாக குடிக்கவும்",
        "காற்றோட்டமான இடத்தில் அமர்ந்து குளிர்ந்த காற்றை சுவாசிக்கவும்",
        "உலர்ந்த பிரெட் அல்லது பிஸ்கட் சிறிதளவு மென்று சாப்பிடலாம்"
      ],
      "secondaryAdvice": [
        "சாப்பிட்ட உடனே படுக்க வேண்டாம்; நேராக நிமிர்ந்து அமர்ந்திருக்கவும்",
        "மணிக்கட்டின் உட்பகுதியில் அழுத்தம் கொடுப்பது (Acupressure P6 point) குமட்டலைக் குறைக்கும்",
        "பயணம் செய்யும் போது மொபைல் பார்ப்பதையோ அல்லது புத்தகம் வாசிப்பதையோ தவிர்க்கவும்",
        "அறையை காற்றோட்டமாக வையுங்கள்",
        "இறுக்கமான ஆடைகளைத் தவிர்த்து தளர்வான ஆடைகளை அணியுங்கள்"
      ],
      "foodAdvice": [
        "இஞ்சி டீ, புதினா நீர், ஆப்பிள், எலுமிச்சை ஜூஸ்",
        "எண்ணெய் இல்லாத எளிய உணவுகள் (இட்லி, பிரெட், பொரி)",
        "அதிக காரமான, நெய்/எண்ணெய் பலகாரங்கள் மற்றும் அசைவ உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "அமைதியான, குளிர்ச்சியான அறையில் சாய்ந்த நிலையில் ஓய்வெடுங்கள்",
        "மூச்சை மெதுவாக உள்ளிழுத்து மெதுவாக வெளிவிடுங்கள்"
      ],
      "whenToSeeDoctor": [
        "குமட்டல் 2 நாட்களுக்கு மேல் தொடர்ந்தால்",
        "உணவு உட்கொள்ள முடியாமல் உடல் எடை குறைந்தால்",
        "கர்ப்பமாக இருக்கும் சந்தேகம் இருந்தால்"
      ],
      "emergencySigns": [
        "குமட்டலுடன் நெஞ்சு வலி, மூச்சுத்திணறல் மற்றும் கை வலி (மாரடைப்பு அறிகுறி)",
        "கடுமையான தலைவலி மற்றும் பார்வை மங்குதல்",
        "மயக்கம் மற்றும் குழப்பம்"
      ],
      "medicines": {
        "categories": "இஞ்சி மாத்திரைகள் அல்லது அன்டாசிட்",
        "relevantIds": [
          "antacids",
          "ors"
        ],
        "disclaimer": "இயற்கையான இஞ்சி மற்றும் எலுமிச்சை குமட்டலுக்கு மிகவும் பாதுகாப்பானது. மருத்துவ ஆலோசனை பெறவும்."
      },
      "prevention": [
        "ஒரே நேரத்தில் அதிகமாக சாப்பிடாமல், சிறிது சிறிதாக சாப்பிடுங்கள்",
        "சாப்பிட்டவுடன் படுக்காதீர்கள்",
        "பயணத்தின் போது ஜன்னலோர இருக்கையில் அமருங்கள்"
      ]
    }
  },
  {
    "id": "food_poisoning",
    "category": "digestive",
    "keywords": {
      "en": [
        "food poisoning",
        "bad food",
        "spoiled food",
        "foodborne illness",
        "ate outside got sick"
      ],
      "ta": [
        "உணவு நச்சுத்தன்மை",
        "கெட்டுப்போன உணவு",
        "ஃபுட் பாய்சனிங்",
        "food poisoning",
        "unavu nacchu",
        "food poison"
      ]
    },
    "en": {
      "name": "Food Poisoning",
      "explanation": "An acute gastrointestinal illness resulting from the ingestion of food or water contaminated with pathogenic bacteria (Salmonella, E. coli), viruses, or bacterial enterotoxins.",
      "symptoms": [
        "Rapid onset of severe nausea, vomiting, and watery diarrhea within 2–24 hours of contaminated meal",
        "Intense abdominal cramps and hyperactive bowel sounds",
        "Low to moderate grade fever and chills",
        "Weakness, generalized muscle aches, and headache"
      ],
      "selfCare": [
        "Hydrate aggressively with Oral Rehydration Salts (ORS) solution to replenish lost water and electrolytes",
        "Sip tender coconut water, diluted salted buttermilk, or clear broths",
        "Rest in bed and allow your body to naturally clear toxins (do NOT suppress with anti-motility drugs)",
        "Withhold solid food for the first 6–8 hours until vomiting subsides"
      ],
      "secondaryAdvice": [
        "Do NOT take Loperamide or anti-diarrheal medicines; they trap bacterial toxins inside your gut",
        "Notify others who shared the same meal so they can monitor for symptoms",
        "Discard any remaining suspected food or contaminated leftovers immediately",
        "Disinfect bathroom surfaces and wash hands frequently to prevent household spread",
        "Gradually reintroduce bland foods (bananas, rice, toast) only when nausea settles"
      ],
      "foodAdvice": [
        "Oral Rehydration Salts (ORS) is paramount; drink 1 glass after each loose stool or vomit episode",
        "Rice congee with a pinch of rock salt, clear vegetable broth, diluted pomegranate juice",
        "Avoid all dairy, spicy seasonings, fried foods, raw vegetables, caffeine, and alcohol"
      ],
      "restAdvice": [
        "Strict bed rest for 24–48 hours until fever and gastrointestinal purging stabilize",
        "Avoid any strenuous work or physical activities"
      ],
      "whenToSeeDoctor": [
        "Symptoms persist beyond 48 hours without improvement",
        "Inability to keep liquids down for over 12 hours",
        "High fever over 102°F (38.9°C)"
      ],
      "emergencySigns": [
        "Bloody diarrhea (visible bright red blood or dark black stools)",
        "Neurological symptoms: double vision, difficulty swallowing, or muscle paralysis (suspected Botulism)",
        "Signs of severe shock or dehydration: no urination >8h, confusion, extreme dizziness, or fainting"
      ],
      "medicines": {
        "categories": "Oral Rehydration Salts (ORS) and Zinc Supplements",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "ORS is the vital treatment for food poisoning to prevent hypovolemic shock. Antibiotics are only prescribed for verified invasive bacterial pathogens."
      },
      "prevention": [
        "Keep raw meats separate from ready-to-eat foods during preparation",
        "Cook poultry and meats to safe internal temperatures",
        "Refrigerate perishable leftovers within 2 hours of cooking"
      ]
    },
    "ta": {
      "name": "உணவு நச்சுத்தன்மை (Food Poisoning)",
      "explanation": "கெட்டுப்போன, அசுத்தமான அல்லது பாக்டீரியா கிருமிகள் நிறைந்த உணவை உட்கொள்வதால் குடலில் ஏற்படும் திடீர் தீவிர தொற்று மற்றும் நச்சுத்தன்மை.",
      "symptoms": [
        "சாப்பிட்ட 2 முதல் 24 மணி நேரத்திற்குள் திடீரென ஏற்படும் வாந்தி மற்றும் வயிற்றுப்போக்கு",
        "கடுமையான வயிற்றுப் பிடிப்பு மற்றும் வலி",
        "லேசான காய்ச்சல் மற்றும் குளிர் நடுக்கம்",
        "அதிக சோர்வு மற்றும் தாகம்"
      ],
      "selfCare": [
        "ஓ.ஆர்.எஸ் (ORS) நீர் நிறைய அருந்தி நீர்ச்சத்து இழப்பை உடனே சரிசெய்யவும்",
        "இளநீர், உப்பு கலந்த மோர் அல்லது கஞ்சித் தண்ணீரை சிறிது சிறிதாக குடிக்கவும்",
        "உடலுக்கு முழு ஓய்வு கொடுங்கள் (பேதியை உடனே நிறுத்தும் மாத்திரைகளை சாப்பிடாதீர்கள்)",
        "வாந்தி நிற்கும் வரை திட உணவுகளைத் தவிர்க்கவும்"
      ],
      "secondaryAdvice": [
        "வயிற்றுப்போக்கை தடுக்கும் மாத்திரைகளை (Loperamide) எடுக்காதீர்கள் (நச்சுக்கள் உடலிலேயே தங்கிவிடும்)",
        "உங்களுடன் சாப்பிட்ட மற்றவர்களுக்கும் இந்த அறிகுறி உள்ளதா என்று விசாரியுங்கள்",
        "சந்தேகத்திற்குரிய கெட்டுப்போன உணவை உடனே அப்புறப்படுத்துங்கள்",
        "கழிப்பறையை கிருமிநாசினி கொண்டு சுத்தப்படுத்துங்கள் மற்றும் கைகளை சோப்பு போட்டு கழுவுங்கள்",
        "குமட்டல் நின்ற பின் எளிதில் செரிக்கும் உணவுகளை உண்ணுங்கள்"
      ],
      "foodAdvice": [
        "ஓ.ஆர்.எஸ் நீர், இளநீர், உப்பு கலந்த கஞ்சி, தயிர் சாதம்",
        "வாழைப்பழம், இட்லி",
        "பால், எண்ணெய் உணவுகள், காரம் மற்றும் அசைவ உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "24 முதல் 48 மணி நேரத்திற்கு முழு படுக்கை ஓய்வு",
        "கடின வேலைகள் செய்வதைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "வாந்தி, வயிற்றுப்போக்கு 2 நாட்களுக்கு மேல் நீடித்தால்",
        "12 மணி நேரத்திற்கும் மேலாக தண்ணீர் கூட குடிக்க முடியாவிட்டால்",
        "102°F-க்கு மேல் அதிக காய்ச்சல் இருந்தால்"
      ],
      "emergencySigns": [
        "மலத்தில் இரத்தம் வெளியேறுதல்",
        "பார்வை மங்குதல், விழுங்குவதில் சிரமம் அல்லது தசை பலவீனம் (Botulism நச்சு)",
        "8 மணி நேரத்திற்கு மேல் சிறுநீர் வராமை, அதீத மயக்கம்"
      ],
      "medicines": {
        "categories": "ஓ.ஆர்.எஸ் (ORS) மற்றும் ஜிங்க் மாத்திரைகள்",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "உணவு நச்சுக்கு நீர்ச்சத்து இழப்பை ஈடுசெய்யும் ஓ.ஆர்.எஸ் கரைசலே முதன்மையான சிகிச்சை. சுயமாக ஆன்டிபயாடிக் எடுக்க வேண்டாம்."
      },
      "prevention": [
        "சமைத்த உணவை 2 மணி நேரத்திற்குள் குளிரூட்டியில் வைக்கவும்",
        "சாப்பிடும் முன் கைகளை சோப்பு போட்டு கழுவுங்கள்",
        "தெருவோர மற்றும் பழைய உணவுகளைத் தவிர்க்கவும்"
      ]
    }
  },
  {
    "id": "dehydration",
    "category": "digestive",
    "keywords": {
      "en": [
        "dehydration",
        "dehydrated",
        "lack of water",
        "dry mouth",
        "extreme thirst",
        "dark urine"
      ],
      "ta": [
        "நீர்ச்சத்து குறைவு",
        "உடல் வறட்சி",
        "நீர்ச்சத்து இழப்பு",
        "dehydration",
        "neer sathu kuraivu",
        "thanni thaagam",
        "udal varatchi"
      ]
    },
    "en": {
      "name": "Dehydration",
      "explanation": "A harmful deficit in total body water volume that occurs when fluid loss (via sweating, vomiting, diarrhea, or fever) exceeds fluid intake, impairing cellular and organ function.",
      "symptoms": [
        "Intense, unquenchable thirst and dry, sticky mouth",
        "Dark amber or honey-colored urine, with low urine volume",
        "Lightheadedness, dizziness upon standing, and fatigue",
        "Dry skin with decreased turgor (pinched skin returns slowly)"
      ],
      "selfCare": [
        "Drink Oral Rehydration Salts (ORS) solution or an electrolyte beverage in frequent, measured sips",
        "Sip room-temperature water, tender coconut water, or diluted lemonade with a pinch of rock salt",
        "Move into an air-conditioned or comfortably shaded room immediately",
        "Lie down with feet elevated slightly to encourage blood return to the brain"
      ],
      "secondaryAdvice": [
        "Avoid chugging large amounts of plain water rapidly; sip electrolytes to prevent dilutional hyponatremia",
        "Avoid alcoholic beverages, energy drinks, and strong coffee, which promote further diuresis",
        "Monitor your urine color: aim for a pale, straw-yellow color as proof of rehydration",
        "Weigh yourself: acute weight loss during illness directly mirrors lost fluid volume",
        "Stay indoors during the hottest hours of the day (11 AM to 4 PM)"
      ],
      "foodAdvice": [
        "Water-rich fruits: watermelon, oranges, strawberries, cantaloupe, cucumber",
        "Oral Rehydration Salts (ORS), coconut water, salted buttermilk (chaas), clear broths",
        "Avoid dry salty chips, high-protein dry meats, and sugary candies"
      ],
      "restAdvice": [
        "Rest in a cool, ventilated environment until dizziness and dry mouth fully resolve",
        "Avoid strenuous workouts or outdoor sports until fully rehydrated"
      ],
      "whenToSeeDoctor": [
        "Unable to keep fluids down due to continuous vomiting or watery diarrhea",
        "Dizziness or weakness persists despite drinking fluids",
        "No urination for more than 8 hours in adults (or >4 hours in infants)"
      ],
      "emergencySigns": [
        "Severe confusion, lethargy, delirium, or loss of consciousness",
        "Rapid, weak pulse and low blood pressure (hypovolemic shock)",
        "Sunken eyes, shriveled dry skin, and complete absence of tears or sweating",
        "Cold, clammy hands and feet with bluish nail beds"
      ],
      "medicines": {
        "categories": "Oral Rehydration Salts (ORS) or Intravenous (IV) Fluids in clinical care",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "ORS is the gold standard for mild to moderate dehydration. Severe dehydration is a medical emergency requiring hospital IV fluids."
      },
      "prevention": [
        "Drink 2.5 to 3 liters of water daily, increasing intake during hot weather or exercise",
        "Drink fluids preemptively before feeling parched",
        "Carry a reusable water bottle when traveling outdoors"
      ]
    },
    "ta": {
      "name": "நீர்ச்சத்து குறைவு / உடல் வறட்சி (Dehydration)",
      "explanation": "உடலில் இருந்து வெளியேறும் நீரின் அளவு நாம் குடிக்கும் நீரை விட அதிகமாகும்போது உடலில் ஏற்படும் நீர் மற்றும் தாது உப்புக்களின் தீவிர குறைபாடு.",
      "symptoms": [
        "அதிக தாகம் மற்றும் வறண்ட வாய்/நாக்கு",
        "அடர் மஞ்சள் அல்லது தேநீர் நிறத்தில் குறைவான சிறுநீர் வெளியேறுதல்",
        "தலைசுற்றல், மயக்கம் மற்றும் தீவிர சோர்வு",
        "தோல் வறண்டு போதல்"
      ],
      "selfCare": [
        "உடனே ஓ.ஆர்.எஸ் (ORS) கரைசல் அல்லது எலக்ட்ரோலைட் பானங்களை சிறிது சிறிதாக அருந்துங்கள்",
        "சுத்தமான நீர், இளநீர், உப்பு கலந்த எலுமிச்சை சாறு குடிக்கவும்",
        "குளிர்ச்சியான நிழலான இடத்திற்குச் செல்லுங்கள்",
        "கால்களை சற்று உயர்த்தி வைத்து படுக்கவும் (மூளைக்கு இரத்த ஓட்டம் செல்ல உதவும்)"
      ],
      "secondaryAdvice": [
        "ஒரே நேரத்தில் அதிக அளவு வெறும் தண்ணீரை மட்டும் குடிக்காதீர்கள்; தாது உப்புக்கள் கலந்த ஓ.ஆர்.எஸ் நீரே சிறந்தது",
        "காபி, டீ, குளிர்பானங்கள் மற்றும் மது அருந்துவதைத் தவிர்க்கவும் (இவை நீர்ச்சத்தை மேலும் குறைக்கும்)",
        "சிறுநீரின் நிறத்தைக் கவனியுங்கள் (வெளிர் மஞ்சள் நிறம் வரும் வரை நீர்ச்சத்து தேவை)",
        "வெயில் அதிகம் உள்ள நேரங்களில் (காலை 11 முதல் மாலை 4 வரை) வெளியே செல்வதைத் தவிர்க்கவும்",
        "வெளியில் செல்லும்போது எப்போதும் தண்ணீர் பாட்டில் எடுத்துச் செல்லுங்கள்"
      ],
      "foodAdvice": [
        "நீர்ச்சத்து நிறைந்த தர்பூசணி, வெள்ளரிக்காய், ஆரஞ்சு, சாத்துக்குடி",
        "ஓ.ஆர்.எஸ் நீர், இளநீர், மோர், கஞ்சித் தண்ணீர்",
        "அதிக உப்பு உள்ள சிப்ஸ் மற்றும் பொரித்த உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "குளிர்ச்சியான அறையில் ஓய்வெடுங்கள்",
        "தலைசுற்றல் நீங்கும் வரை உடற்பயிற்சி செய்யாதீர்கள்"
      ],
      "whenToSeeDoctor": [
        "வாந்தி காரணமாக தண்ணீர் கூட குடிக்க முடியாமல் போனால்",
        "தண்ணீர் குடித்தும் தலைசுற்றல் அல்லது சோர்வு நீங்காவிட்டால்",
        "8 மணி நேரத்திற்கு மேலாக சிறுநீர் வராமல் இருந்தால்"
      ],
      "emergencySigns": [
        "குழப்பம், சுயநினைவின்மை அல்லது மயக்கம்",
        "பலவீனமான வேகமான நாடித்துடிப்பு மற்றும் குறைந்த இரத்த அழுத்தம் (Shock)",
        "கண்கள் குழிவிழுதல், கண்ணீர் வராமை மற்றும் தோல் முற்றிலும் சுருங்குதல்",
        "கை கால்கள் குளிர்ந்து போதல்"
      ],
      "medicines": {
        "categories": "ஓ.ஆர்.எஸ் (ORS) அல்லது நரம்பு வழி குளுக்கோஸ் (IV Fluids)",
        "relevantIds": [
          "ors"
        ],
        "disclaimer": "நீர்ச்சத்து குறைவுக்கு ஓ.ஆர்.எஸ் கரைசல் மிகச் சிறந்த மருந்து. தீவிர நீர்ச்சத்து குறைவுக்கு உடனடியாக மருத்துவமனையில் குளுக்கோஸ் ஏற்ற வேண்டும்."
      },
      "prevention": [
        "தினமும் 2.5 முதல் 3 லிட்டர் தண்ணீர் குடியுங்கள்",
        "தாகம் எடுக்கும் வரை காத்திருக்காமல் அவ்வப்போது தண்ணீர் குடியுங்கள்",
        "வெயிலில் வேலை செய்பவர்கள் கூடுதல் நீர்ச்சத்து எடுத்துக்கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "allergy",
    "category": "allergy_skin",
    "keywords": {
      "en": [
        "allergy",
        "allergic reaction",
        "allergic rhinitis",
        "allergies",
        "pollen allergy",
        "dust allergy"
      ],
      "ta": [
        "ஒவ்வாமை",
        "அலர்ஜி",
        "தூசி அலர்ஜி",
        "allergy",
        "ovvaamai",
        "allergy irukku"
      ]
    },
    "en": {
      "name": "Allergy / Allergic Rhinitis",
      "explanation": "An exaggerated immune reaction triggered by typically harmless environmental allergens (pollen, dust mites, pet dander, mold, foods), causing histamine release and mucosal inflammation.",
      "symptoms": [
        "Frequent sneezing fits, clear runny nose, and nasal itching",
        "Red, itchy, watery, irritated eyes (allergic conjunctivitis)",
        "Itchy palate, throat, and inner ears",
        "Dark circles under eyes ('allergic shiners') and nasal congestion"
      ],
      "selfCare": [
        "Rinse nasal passages with a warm saline nasal spray to flush out trapped allergens",
        "Take a non-drowsy second-generation antihistamine (e.g., Cetirizine or Loratadine)",
        "Apply cold compresses over the eyes to relieve allergic burning and itching",
        "Shower and change clothes immediately after returning indoors from pollen-heavy areas"
      ],
      "secondaryAdvice": [
        "Keep home and car windows closed during high pollen seasons and run recirculated air conditioning",
        "Use allergen-proof, zippered mattress and pillow covers to block dust mites",
        "Wash bed sheets weekly in hot water (>55°C) to eliminate microscopic allergens",
        "Use a vacuum cleaner equipped with a HEPA filter twice weekly",
        "Avoid rubbing your eyes; rubbing degranulates mast cells and intensifies histamine itching"
      ],
      "foodAdvice": [
        "Anti-inflammatory foods rich in quercetin: apples, onions, berries, capers, green tea",
        "Local raw honey (may support environmental desensitization over time)",
        "Avoid foods with artificial food colorings or sulfites if sensitive"
      ],
      "restAdvice": [
        "Sleep with head elevated in an air-purified, pet-free bedroom",
        "Ensure adequate nightly rest to prevent stress-induced allergic hyperreactivity"
      ],
      "whenToSeeDoctor": [
        "Allergic symptoms interfere significantly with daily work or sleep",
        "Over-the-counter antihistamines provide inadequate relief",
        "Persistent sinus pain or suspected secondary bacterial sinusitis"
      ],
      "emergencySigns": [
        "Swelling of the lips, tongue, face, or throat (angioedema)",
        "Wheezing, shortness of breath, or feeling of throat closing (Anaphylaxis)",
        "Sudden dizziness, rapid drop in blood pressure, or fainting",
        "Widespread full-body hives with nausea and vomiting"
      ],
      "medicines": {
        "categories": "Antihistamines (Cetirizine, Loratadine) and Saline Nasal Sprays",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "Second-generation antihistamines relieve itching, sneezing, and runny nose with minimal sedation. For severe reactions (anaphylaxis), an EpiPen is vital."
      },
      "prevention": [
        "Identify and minimize exposure to known environmental and food triggers",
        "Use a HEPA air purifier in the bedroom",
        "Wear a face mask when gardening or dusting"
      ]
    },
    "ta": {
      "name": "ஒவ்வாமை (Allergy / Allergic Rhinitis)",
      "explanation": "தூசி, பூக்களின் மகரந்தம், செல்லப்பிராணிகளின் முடி அல்லது சில உணவுகளுக்கு உடலின் நோய் எதிர்ப்பு மண்டலம் காட்டும் அதீத எதிர்வினை மற்றும் ஹிஸ்டமின் வெளிப்பாடு.",
      "symptoms": [
        "தொடர் தும்மல் மற்றும் மூக்கொழுகுதல்",
        "கண்களில் அரிப்பு, நீர் வடிதல் மற்றும் சிவந்து போதல்",
        "தொண்டை மற்றும் காதுகளில் அரிப்பு",
        "மூக்கடைப்பு"
      ],
      "selfCare": [
        "உப்பு நீர் ஸ்ப்ரே கொண்டு மூக்கை சுத்தம் செய்யுங்கள் (தூசி ஒவ்வாமையை நீக்க)",
        "செட்டிரிசின் (Cetirizine) போன்ற ஒவ்வாமை எதிர்ப்பு மாத்திரையை எடுக்கலாம்",
        "கண் அரிப்புக்கு குளிர்ந்த நீரில் நனைத்த துணியால் ஒத்தடம் கொடுக்கவும்",
        "வெளியில் சென்று வந்தவுடன் ஆடைகளை மாற்றி, முகம் கைகளை கழுவுங்கள்"
      ],
      "secondaryAdvice": [
        "தூசி மற்றும் மகரந்தம் அதிகம் உள்ள காலங்களில் ஜன்னல்களை மூடி வையுங்கள்",
        "படுக்கை விரிப்புகளை வாரந்தோறும் சுடுநீரில் துவைக்கவும்",
        "கண்களை கைகளால் தேய்க்காதீர்கள் (இது அரிப்பை மேலும் அதிகரிக்கும்)",
        "தூசி நிறைந்த அறைகளில் வேக்குவம் கிளீனரைப் பயன்படுத்துங்கள்",
        "செல்லப்பிராணிகளை படுக்கையறைக்குள் விடாதீர்கள்"
      ],
      "foodAdvice": [
        "ஆப்பிள், நெல்லிக்காய், கிரீன் டீ, வைட்டமின் சி நிறைந்த பழங்கள்",
        "சூடான மூலிகை தேநீர்",
        "பதப்படுத்தப்பட்ட வண்ண உணவுகள் மற்றும் பிரிசர்வேடிவ்களைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தூசி இல்லாத சுத்தமான அறையில் தூங்குங்கள்",
        "உடலுக்கு போதிய ஓய்வு கொடுங்கள்"
      ],
      "whenToSeeDoctor": [
        "ஒவ்வாமை அறிகுறிகள் தூக்கத்தையோ அல்லது தினசரி வேலையையோ பாதித்தால்",
        "வழக்கமான மாத்திரைகள் பலனளிக்காமல் போனால்",
        "கடுமையான சைனஸ் வலி ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "உதடுகள், நாக்கு, முகம் அல்லது தொண்டை திடீரென வீங்குதல் (Angioedema)",
        "மூச்சுத்திணறல் அல்லது தொண்டை அடைப்பது போன்ற உணர்வு (Anaphylaxis)",
        "திடீர் தலைசுற்றல் மற்றும் மயக்கம்",
        "உடல் முழுவதும் தடிப்புகள் தோன்றுதல்"
      ],
      "medicines": {
        "categories": "ஒவ்வாமை எதிர்ப்பு மருந்துகள் (செட்டிரிசின்)",
        "relevantIds": [
          "cetirizine"
        ],
        "disclaimer": "செட்டிரிசின் போன்ற மருந்துகள் ஒவ்வாமை அறிகுறிகளை விரைவாகக் கட்டுப்படுத்தும். தீவிர ஒவ்வாமைக்கு அவசர மருத்துவ சிகிச்சை கட்டாயம்."
      },
      "prevention": [
        "ஒவ்வாமையை ஏற்படுத்தும் பொருட்களைக் கண்டறிந்து தவிர்க்கவும்",
        "தூசி நிறைந்த இடங்களுக்கு செல்லும்போது முகக்கவசம் அணியுங்கள்",
        "வீட்டை சுத்தமாக வையுங்கள்"
      ]
    }
  },
  {
    "id": "skin_irritation",
    "category": "allergy_skin",
    "keywords": {
      "en": [
        "skin irritation",
        "contact dermatitis",
        "skin redness",
        "burning skin",
        "skin inflammation",
        "sensitive skin"
      ],
      "ta": [
        "தோல் எரிச்சல்",
        "தோல் சிவத்தல்",
        "தோல் அழற்சி",
        "skin irritation",
        "thol erichal",
        "thol sivathal"
      ]
    },
    "en": {
      "name": "Skin Irritation (Contact Dermatitis)",
      "explanation": "Localized inflammation, redness, and burning of the skin triggered by direct exposure to irritating substances (soaps, detergents, chemicals, solvents) or allergens (nickel, poison ivy, latex).",
      "symptoms": [
        "Red, inflamed, irritated patch of skin at the contact area",
        "Burning, stinging, or intense itching sensation",
        "Dry, cracking, or peeling skin",
        "Tiny fluid-filled blisters in severe contact reactions"
      ],
      "selfCare": [
        "Wash the affected skin immediately with mild, fragrance-free soap and lukewarm water to remove residue",
        "Apply cool, wet compresses to the inflamed area for 15–20 minutes several times daily",
        "Apply soothing Calamine lotion or pure Aloe Vera gel to calm burning sensations",
        "Apply a barrier cream containing zinc oxide or petrolatum to protect raw skin"
      ],
      "secondaryAdvice": [
        "Identify and completely eliminate the offending trigger (new cosmetics, nickel jewelry, laundry detergents)",
        "Wear protective nitrile or cotton-lined rubber gloves when handling household cleaning chemicals",
        "Keep fingernails trimmed short and filed smooth to prevent scratching-induced secondary bacterial infections",
        "Avoid scented lotions, alcohol-based aftershaves, and synthetic perfumes on irritated skin",
        "Wear loose, soft 100% cotton clothing that does not rub against the irritation"
      ],
      "foodAdvice": [
        "Hydrating water, green tea, omega-3 rich walnuts, and chia seeds to support epidermal repair",
        "Avoid inflammatory processed junk foods and spicy triggers that increase facial flushing"
      ],
      "restAdvice": [
        "Rest in a cool, climate-controlled room to prevent perspiration from aggravating the skin",
        "Sleep with loose cotton nightwear"
      ],
      "whenToSeeDoctor": [
        "Skin irritation does not improve within 7 days of removing the trigger",
        "Irritation covers a large area of the body or affects the face or genitals",
        "Severe discomfort causing inability to sleep"
      ],
      "emergencySigns": [
        "Signs of secondary bacterial infection: expanding redness, warmth, throbbing pain, or yellow pus crusts",
        "Red streaks spreading outward from the rash",
        "Accompanying high fever or chills"
      ],
      "medicines": {
        "categories": "Calamine Lotion, Antiseptic Creams, or mild Hydrocortisone Cream 1%",
        "relevantIds": [
          "calamine_lotion",
          "antiseptic_cream",
          "cetirizine"
        ],
        "disclaimer": "Topical Calamine and barrier ointments soothe irritated skin. If using topical hydrocortisone, do not apply to broken skin or use for >7 days without medical advice."
      },
      "prevention": [
        "Use hypoallergenic, fragrance-free soaps and laundry detergents",
        "Wear protective gloves when cleaning or handling chemicals",
        "Rinse skin thoroughly after swimming in chlorinated pools"
      ]
    },
    "ta": {
      "name": "தோல் எரிச்சல் (Skin Irritation / Contact Dermatitis)",
      "explanation": "சோப்பு, சலவைப்பவுடர், இரசாயனங்கள் அல்லது ஒவ்வாமை ஏற்படுத்தும் பொருட்கள் தோலில் படுவதால் ஏற்படும் சிவத்தல், எரிச்சல் மற்றும் அழற்சி.",
      "symptoms": [
        "தோலில் சிவந்த திட்டுக்கள் மற்றும் வீக்கம்",
        "எரிச்சல் மற்றும் தாங்க முடியாத அரிப்பு",
        "தோல் வறண்டு போதல் அல்லது உரிதல்",
        "லேசான நீர் கொப்புளங்கள் தோன்றுதல்"
      ],
      "selfCare": [
        "பாதிக்கப்பட்ட இடத்தை லேசான வாசனை இல்லாத சோப்பு மற்றும் குளிர்ந்த நீரால் உடனே கழுவுங்கள்",
        "குளிர்ந்த நீரில் நனைத்த துணியால் 15 நிமிடங்கள் ஒத்தடம் கொடுங்கள்",
        "கலமைன் லோஷன் (Calamine Lotion) அல்லது கற்றாழை ஜெல் தடவி எரிச்சலைத் தணிக்கவும்",
        "தோலைப் பாதுகாக்க வாசலின் அல்லது மாய்ஸ்சரைசர் தடவலாம்"
      ],
      "secondaryAdvice": [
        "எந்தப் பொருள் எரிச்சலை உண்டாக்கியது என்பதைக் கண்டறிந்து அதைத் தொடுவதைத் தவிருங்கள்",
        "சலவை செய்யும்போது அல்லது இரசாயனங்களைக் கையாளும்போது கையுறைகளை (Gloves) அணியுங்கள்",
        "நகங்களை வெட்டி சுத்தமாக வையுங்கள் (சொறிந்து காயம் ஏற்படுவதைத் தவிர்க்க)",
        "வாசனை திரவியங்கள் மற்றும் ஆல்கஹால் கலந்த கிரீம்களைப் பயன்படுத்துவதைத் தவிர்க்கவும்",
        "மென்மையான பருத்தி ஆடைகளை அணியுங்கள்"
      ],
      "foodAdvice": [
        "நிறைய தண்ணீர் குடியுங்கள்",
        "பழங்கள், காய்கறிகள் மற்றும் சத்தான உணவுகள்",
        "அதிக காரமான உணவுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "வியர்வை தோலில் பட்டு எரிச்சல் அதிகமாகாமல் இருக்க குளிர்ச்சியான இடத்தில் இருங்கள்",
        "மெல்லிய பருத்தி ஆடைகளை அணிந்து தூங்குங்கள்"
      ],
      "whenToSeeDoctor": [
        "தோல் எரிச்சல் 7 நாட்களுக்கு மேல் நீடித்தால்",
        "முகம் அல்லது உடலின் பெரும்பகுதியில் பரவினால்",
        "இரவில் அரிப்பால் தூங்க முடியாவிட்டால்"
      ],
      "emergencySigns": [
        "தோலில் சீழ் பிடித்தல் அல்லது தீவிர வலி (பாக்டீரியா தொற்று)",
        "தோலில் இருந்து சிவப்பு நிற கோடுகள் பரவுதல்",
        "அதிக காய்ச்சல் மற்றும் குளிர் நடுக்கம்"
      ],
      "medicines": {
        "categories": "கலமைன் லோஷன் (Calamine Lotion), கிருமிநாசினி களிம்பு (Antiseptic cream)",
        "relevantIds": [
          "calamine_lotion",
          "antiseptic_cream",
          "cetirizine"
        ],
        "disclaimer": "கலமைன் லோஷன் தோல் எரிச்சலுக்கு சிறந்த நிவாரணம் தரும். தொற்று ஏற்பட்டால் ஆன்டிபயாடிக் களிம்பு தேவைப்படலாம்."
      },
      "prevention": [
        "வாசனை இல்லாத சோப்பு மற்றும் சலவை பொருட்களைப் பயன்படுத்துங்கள்",
        "இரசாயனங்களைக் கையாளும்போது கையுறைகள் அணியுங்கள்",
        "புதிய ஆடைகளை அணிவதற்கு முன் துவைத்து அணியுங்கள்"
      ]
    }
  },
  {
    "id": "itching",
    "category": "allergy_skin",
    "keywords": {
      "en": [
        "itching",
        "itchy skin",
        "pruritus",
        "scratches",
        "itchiness all over",
        "skin itch"
      ],
      "ta": [
        "அரிப்பு",
        "தோல் அரிப்பு",
        "உடம்பு அரிக்குது",
        "itching",
        "arippu",
        "udambu arippu",
        "thol arippu"
      ]
    },
    "en": {
      "name": "Itching (Pruritus)",
      "explanation": "An uncomfortable sensation of the skin provoking the urge to scratch, triggered by dry skin, histamines, allergic contact, eczema, insect bites, or underlying systemic conditions.",
      "symptoms": [
        "Persistent sensation prompting scratching of the skin",
        "Excoriations, scratch marks, and localized redness",
        "Rough, dry, scaly patches on the skin",
        "Intensified itchiness at night or in warm environments"
      ],
      "selfCare": [
        "Apply a generous layer of fragrance-free emollient moisturizer or coconut oil immediately after bathing",
        "Take a cool or lukewarm colloidal oatmeal bath or apply cold damp compresses",
        "Apply Calamine lotion to soothe itch receptors",
        "Take a non-sedating oral antihistamine (Cetirizine) to block peripheral histamine release"
      ],
      "secondaryAdvice": [
        "Resist the urge to scratch; scratching damages the epidermal barrier and triggers the 'itch-scratch cycle'",
        "Trim your fingernails very short and wear smooth cotton mittens to bed if night scratching occurs",
        "Limit bath times to 5–10 minutes and avoid hot water, which strips natural cutaneous lipids",
        "Pat your skin dry gently with a towel rather than rubbing vigorously",
        "Avoid wool, fleece, or rough synthetic fabrics directly touching the skin"
      ],
      "foodAdvice": [
        "Hydrating fluids, flaxseed oil, avocado, walnuts rich in essential fatty acids",
        "Avoid known allergic foods (shellfish, nuts, eggs if sensitive), and avoid alcohol"
      ],
      "restAdvice": [
        "Keep bedroom temperature cool (18–20°C); heat strongly worsens pruritus",
        "Use 100% breathable cotton bed linens"
      ],
      "whenToSeeDoctor": [
        "Itching lasts longer than 2 weeks and does not improve with moisturizers",
        "Severe full-body itching without any visible skin rash (may indicate liver or kidney issues)",
        "Itching interferes significantly with sleep or normal activities"
      ],
      "emergencySigns": [
        "Itching accompanied by facial swelling, difficulty breathing, or wheezing",
        "Signs of secondary bacterial infection: warmth, red streaks, or yellow pus discharge",
        "Jaundice (yellow eyes or skin) accompanying generalized itching"
      ],
      "medicines": {
        "categories": "Antihistamines (Cetirizine) and Calamine Lotion",
        "relevantIds": [
          "cetirizine",
          "calamine_lotion"
        ],
        "disclaimer": "Antihistamines and Calamine provide effective symptomatic relief. Severe or systemic itching requires formal medical evaluation."
      },
      "prevention": [
        "Moisturize the skin daily, especially immediately following a bath",
        "Use mild, soap-free cleansers",
        "Run a room humidifier in dry indoor climates"
      ]
    },
    "ta": {
      "name": "தோல் அரிப்பு (Itching / Pruritus)",
      "explanation": "தோலை சொறியத் தூண்டும் ஒரு அசௌகரியமான உணர்வு. இது தோல் வறட்சி, ஒவ்வாமை, பூச்சிக்கடி, எக்ஸிமா அல்லது ஈரல்/சிறுநீரகக் கோளாறுகளால் ஏற்படலாம்.",
      "symptoms": [
        "தோலை தொடர்ந்து சொறியத் தூண்டும் உணர்வு",
        "தோலில் நகக்கீறல்கள் மற்றும் சிவந்து போதல்",
        "தோல் வறண்டு செதில் போல மாறுதல்",
        "இரவு நேரத்தில் அல்லது சூடான சூழலில் அரிப்பு அதிகரித்தல்"
      ],
      "selfCare": [
        "குளித்த உடனே தேங்காய் எண்ணெய் அல்லது வாசனை இல்லாத மாய்ஸ்சரைசர் தடவுங்கள்",
        "குளிர்ந்த நீரில் நனைத்த துணியால் ஒத்தடம் கொடுங்கள்",
        "கலமைன் லோஷன் (Calamine Lotion) தடவுவது அரிப்பைத் தணிக்கும்",
        "செட்டிரிசின் (Cetirizine) போன்ற மாத்திரையை மருத்துவர் ஆலோசனையுடன் எடுக்கலாம்"
      ],
      "secondaryAdvice": [
        "தோலை நகங்களால் சொறியாதீர்கள் (இது தோலைக் கிழித்து புண்ணாக்கும்)",
        "நகங்களை வெட்டி சுத்தமாக வையுங்கள்",
        "அதிக சூடான நீரில் குளிப்பதைத் தவிருங்கள் (இது தோலின் இயற்கையான ஈரப்பதத்தை நீக்கும்)",
        "குளித்த பின் துண்டால் தேய்க்காமல் மென்மையாக ஒற்றி எடுக்கவும்",
        "கம்பளி அல்லது கடினமான சிந்தெடிக் ஆடைகளைத் தவிர்க்கவும்"
      ],
      "foodAdvice": [
        "நிறைய தண்ணீர் குடியுங்கள்",
        "ஒமேகா-3 நிறைந்த பாதாம், வால்நட்ஸ்",
        "ஒவ்வாமை ஏற்படுத்தும் உணவுகள் மற்றும் மதுவைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "அறையை குளிர்ச்சியாக வையுங்கள் (சூடு அதிகமானால் அரிப்பு அதிகமாகும்)",
        "மெல்லிய பருத்தி படுக்கை விரிப்புகளைப் பயன்படுத்துங்கள்"
      ],
      "whenToSeeDoctor": [
        "அரிப்பு 2 வாரங்களுக்கு மேல் நீடித்தால்",
        "தோலில் எந்த தடிப்பும் இல்லாமல் உடல் முழுவதும் கடுமையான அரிப்பு இருந்தால் (கல்லீரல் பிரச்சனை அறிகுறி)",
        "இரவில் தூங்க முடியாத அளவுக்கு அரிப்பு இருந்தால்"
      ],
      "emergencySigns": [
        "அரிப்புடன் முகம் வீங்குதல் அல்லது மூச்சுத்திணறல் ஏற்படுதல்",
        "தோலில் சீழ் பிடித்தல் அல்லது சிவப்பு கோடுகள் பரவுதல்",
        "கண்கள் மஞ்சள் நிறமாதலுடன் கூடிய அரிப்பு"
      ],
      "medicines": {
        "categories": "ஒவ்வாமை எதிர்ப்பு மாத்திரைகள் (செட்டிரிசின்) மற்றும் கலமைன் லோஷன்",
        "relevantIds": [
          "cetirizine",
          "calamine_lotion"
        ],
        "disclaimer": "செட்டிரிசின் மற்றும் கலமைன் லோஷன் அரிப்புக்கு சிறந்த நிவாரணம் அளிக்கும். காரணம் தெரியாத தொடர் அரிப்புக்கு மருத்துவப் பரிசோதனை அவசியம்."
      },
      "prevention": [
        "தினமும் குளித்த பின் உடலுக்கு எண்ணெய் அல்லது மாய்ஸ்சரைசர் பூசுங்கள்",
        "காரத்தன்மை குறைந்த சோப்புகளைப் பயன்படுத்துங்கள்",
        "பருத்தி ஆடைகளை மட்டுமே அணியுங்கள்"
      ]
    }
  },
  {
    "id": "rash",
    "category": "allergy_skin",
    "keywords": {
      "en": [
        "rash",
        "skin rash",
        "hives",
        "urticaria",
        "red bumps",
        "erupation on skin"
      ],
      "ta": [
        "தோல் தடிப்பு",
        "தடிப்புகள்",
        "சிரங்கு",
        "rash",
        "thol thadippu",
        "thadippu",
        "urticaria"
      ]
    },
    "en": {
      "name": "Skin Rash / Hives (Urticaria)",
      "explanation": "A noticeable change in the texture or color of the skin, characterized by red, raised, itchy wheals (hives) or maculopapular eruptions resulting from viral infections, medications, insect bites, or allergic responses.",
      "symptoms": [
        "Raised, red or flesh-colored welts (wheals) with defined borders",
        "Intense itching, stinging, or burning sensation",
        "Lesions that appear, change shape, and fade over hours",
        "Blanching (turns white briefly when pressed with a finger)"
      ],
      "selfCare": [
        "Take a non-drowsy antihistamine (e.g., Cetirizine) to reduce swelling and relieve itching",
        "Apply cool wet compresses or Calamine lotion to calm the inflamed skin",
        "Take a cool bath with a handful of baking soda or colloidal oatmeal",
        "Wear loose, soft, breathable cotton clothing"
      ],
      "secondaryAdvice": [
        "Review any newly started medications, antibiotics, or foods introduced in the past 48 hours",
        "Avoid hot showers, saunas, and intense sun exposure, which cause vascular dilation and flare hives",
        "Do not rub or aggressively scratch the rash; this stimulates further histamine release",
        "Perform the 'glass test': press a clear drinking glass against the rash; if it does NOT fade (non-blanching), seek emergency care",
        "Keep a photo log of the rash evolution to show your healthcare provider"
      ],
      "foodAdvice": [
        "Light, fresh, home-cooked bland meals: rice, steamed vegetables, clear broths",
        "Stay well hydrated with fresh water and electrolyte drinks",
        "Avoid high-histamine foods: aged cheese, processed meats, fermented foods, shellfish, and alcohol"
      ],
      "restAdvice": [
        "Rest in a cool, quiet room without friction from heavy bedsheets",
        "Engage in calm relaxation exercises to lower stress hormones that aggravate urticaria"
      ],
      "whenToSeeDoctor": [
        "Hives or rash last longer than 48 hours without improvement",
        "The rash is painful, blistering, or oozing fluid",
        "Rash appears immediately after starting a new prescription medication"
      ],
      "emergencySigns": [
        "Rash accompanied by swelling of the lips, tongue, face, or throat",
        "Difficulty breathing, wheezing, or difficulty swallowing",
        "Non-blanching petechial or purpuric purple spots with high fever (meningococcal warning)",
        "Dizziness, confusion, or collapse"
      ],
      "medicines": {
        "categories": "Antihistamines (Cetirizine, Loratadine) and Calamine Lotion",
        "relevantIds": [
          "cetirizine",
          "calamine_lotion"
        ],
        "disclaimer": "Cetirizine blocks histamine receptors and flattens hives. Seek emergency care immediately if lip or facial swelling occurs."
      },
      "prevention": [
        "Identify and avoid known allergic triggers and reactive medications",
        "Wear loose, breathable cotton garments",
        "Avoid sudden extreme temperature changes"
      ]
    },
    "ta": {
      "name": "தோல் தடிப்பு / தடிப்புகள் (Skin Rash / Hives)",
      "explanation": "தோலின் நிறம் மற்றும் அமைப்பில் ஏற்படும் மாற்றம். தோலில் சிவந்த தடிப்புகள், வீக்கம் மற்றும் அரிப்பை உண்டாக்கும் நிலை. இது மருந்து ஒவ்வாமை, பூச்சிக்கடி அல்லது வைரஸால் ஏற்படலாம்.",
      "symptoms": [
        "தோலில் சிவந்து தடித்துக் காணப்படும் வட்ட வடிவ திட்டுகள் (Hives)",
        "தீவிர அரிப்பு மற்றும் எரிச்சல்",
        "விரலால் அழுத்தும்போது வெளிறிப் போய் பின் சிவத்தல்",
        "உடலின் பல பகுதிகளில் மாறி மாறி தோன்றுதல்"
      ],
      "selfCare": [
        "செட்டிரிசின் (Cetirizine) போன்ற ஒவ்வாமை எதிர்ப்பு மாத்திரையை உடனே எடுத்துக் கொள்ளுங்கள்",
        "குளிர்ந்த நீரில் நனைத்த துணியால் ஒத்தடம் கொடுங்கள்",
        "கலமைன் லோஷன் (Calamine Lotion) தடவுவது அரிப்பைத் தணிக்கும்",
        "தளர்வான பருத்தி ஆடைகளை அணியுங்கள்"
      ],
      "secondaryAdvice": [
        "கடந்த 48 மணி நேரத்தில் புதிதாக சாப்பிட்ட மருந்து அல்லது உணவுகள் உள்ளதா என்று கவனியுங்கள்",
        "சுடுநீர் குளியல் மற்றும் வெயிலில் செல்வதைத் தவிர்க்கவும் (இது தடிப்பை அதிகப்படுத்தும்)",
        "நகங்களால் சொறிய வேண்டாம்",
        "கண்ணாடி டம்ளரால் தடிப்பை அழுத்திப் பாருங்கள் (சிவப்பு நிறம் மறையாவிட்டால் உடனே அவசர மருத்துவரிடம் செல்லவும்)",
        "தடிப்புகளை புகைப்படம் எடுத்து மருத்துவரிடம் காட்டுங்கள்"
      ],
      "foodAdvice": [
        "எளிதில் செரிக்கும் வீட்டில் சமைத்த சூடான இட்லி, கஞ்சி",
        "நிறைய தண்ணீர் குடியுங்கள்",
        "பதப்படுத்தப்பட்ட உணவுகள், கருவாடு, நண்டு, இறால் மற்றும் கடலை வகைகளை சில நாட்களுக்குத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "குளிர்ச்சியான அறையில் ஓய்வெடுங்கள்",
        "உடலில் அழுத்தம் தரும் ஆடைகளைத் தவிர்க்கவும்"
      ],
      "whenToSeeDoctor": [
        "தடிப்புகள் 48 மணி நேரத்திற்கு மேல் நீடித்தால்",
        "தோலில் கொப்புளங்கள் தோன்றி சீழ் வடிந்தால்",
        "புதிய மாத்திரை சாப்பிட்ட பின் தடிப்புகள் தோன்றினால்"
      ],
      "emergencySigns": [
        "தடிப்புடன் உதடு, நாக்கு அல்லது முகம் வீங்குதல்",
        "மூச்சுத்திணறல் அல்லது எச்சில் விழுங்க முடியாமை",
        "காய்ச்சலுடன் தோலில் அடர் ஊதா நிறப் புள்ளிகள் தோன்றுதல்",
        "திடீர் மயக்கம்"
      ],
      "medicines": {
        "categories": "ஒவ்வாமை எதிர்ப்பு மாத்திரைகள் (செட்டிரிசின்) மற்றும் கலமைன் லோஷன்",
        "relevantIds": [
          "cetirizine",
          "calamine_lotion"
        ],
        "disclaimer": "செட்டிரிசின் தடிப்புகளைக் கட்டுப்படுத்தும். முகம் அல்லது உதடு வீங்கினால் உடனே அவசர மருத்துவ சிகிச்சை பெற வேண்டும்."
      },
      "prevention": [
        "ஒவ்வாமை ஏற்படுத்தும் மருந்துகள் மற்றும் உணவுகளைத் தவிர்க்கவும்",
        "பருத்தி ஆடைகளை அணியுங்கள்",
        "சூடான குளியலைத் தவிருங்கள்"
      ]
    }
  },
  {
    "id": "fungal_infection",
    "category": "allergy_skin",
    "keywords": {
      "en": [
        "fungal infection",
        "ringworm",
        "athlete's foot",
        "jock itch",
        "tinea",
        "skin fungus",
        "fungal rash"
      ],
      "ta": [
        "பூஞ்சை தொற்று",
        "படை",
        "தேமல்",
        "வட்டப்படை",
        "fungal infection",
        "padai",
        "themal",
        "fungus"
      ]
    },
    "en": {
      "name": "Fungal Infection Awareness (Ringworm / Tinea)",
      "explanation": "Superficial cutaneous infection caused by dermatophyte fungi, thriving in warm, humid skin folds and keratinized tissues (feet, groin, scalp, nails).",
      "symptoms": [
        "Circular, ring-shaped red rash with raised, scaly borders and clearer central skin (ringworm)",
        "Intense itching, burning, and stinging in skin folds, groin, or between toes",
        "Cracking, peeling, and macerated white skin between toes (athlete's foot)",
        "Discolored, brittle, or thickened nails (onychomycosis)"
      ],
      "selfCare": [
        "Wash the affected area with mild soap and dry completely with a clean towel (pat, do not rub)",
        "Apply an over-the-counter topical antifungal cream (e.g., Clotrimazole 1%) twice daily",
        "Keep the affected skin folds clean, dry, and exposed to fresh air as much as possible",
        "Wear breathable, loose 100% cotton clothing and change underwear and socks daily"
      ],
      "secondaryAdvice": [
        "Continue applying antifungal cream for at least 1–2 weeks AFTER the rash visibly clears to eradicate fungal spores",
        "Never apply topical steroid creams (Hydrocortisone/Betamethasone) to fungal infections (steroids worsen fungal growth)",
        "Use a dedicated towel for the infected area and never share towels, clothing, or footwear",
        "Wash infected clothes and towels in hot water and dry thoroughly under direct sunlight",
        "Wear shower flip-flops in communal gyms, locker rooms, and swimming pool showers"
      ],
      "foodAdvice": [
        "Healthy immune-supporting foods: garlic (natural antifungal allicin), probiotics, green vegetables",
        "Stay hydrated with clean water",
        "Minimize refined sugars and yeasty breads, which may foster fungal overgrowth"
      ],
      "restAdvice": [
        "Ensure personal hygiene after exercise; shower and change into dry clothing immediately",
        "Keep footwear dry and alternate between two pairs of shoes daily"
      ],
      "whenToSeeDoctor": [
        "Fungal infection does not improve after 2 weeks of consistent topical antifungal use",
        "Infection spreads widely across the body or involves the scalp (tinea capitis)",
        "You have diabetes or an impaired immune system"
      ],
      "emergencySigns": [
        "Signs of secondary bacterial infection: severe swelling, warmth, expanding red streaks, or yellow pus",
        "High fever and chills accompanying skin ulceration"
      ],
      "medicines": {
        "categories": "Topical Antifungal Creams (Clotrimazole, Terbinafine, Miconazole)",
        "relevantIds": [
          "clotrimazole_cream",
          "antiseptic_cream"
        ],
        "disclaimer": "Apply antifungal cream 1 inch beyond the outer border of the rash. Never use steroid creams on fungal lesions."
      },
      "prevention": [
        "Dry skin folds thoroughly after bathing",
        "Wear clean, dry cotton socks and underwear daily",
        "Never share personal grooming items, towels, or shoes"
      ]
    },
    "ta": {
      "name": "பூஞ்சை தொற்று விழிப்புணர்வு (Fungal Infection / படை)",
      "explanation": "ஈரப்பதம் மற்றும் வியர்வை தேங்கும் இடங்களில் டெர்மட்டோஃபைட் (Dermatophyte) பூஞ்சைகளால் ஏற்படும் தோல் தொற்று. இது வட்டப்படை (Ringworm) அல்லது தேமல் வடிவில் காணப்படும்.",
      "symptoms": [
        "வட்ட வடிவமான, விளிம்புகளில் தடித்த செதில்களுடன் கூடிய சிவப்பு நிற படைகள்",
        "தோல் மடிப்புகள், தொடை இடுக்குகள் அல்லது கால் விரல் இடுக்குகளில் தீவிர அரிப்பு",
        "கால் விரல்களுக்கு இடையே தோல் உரிதல் மற்றும் வெடிப்பு (Athlete's foot)",
        "நகங்கள் நிறம் மாறுதல் மற்றும் தடிமனாதல்"
      ],
      "selfCare": [
        "பாதிக்கப்பட்ட இடத்தை சோப்பு போட்டுக் கழுவி, ஈரமில்லாமல் முற்றிலும் துடைத்து உலர வைக்கவும்",
        "குளோட்ரிமசோல் (Clotrimazole) போன்ற பூஞ்சை எதிர்ப்பு களிம்பை ஒரு நாளைக்கு இருமுறை தடவவும்",
        "தோல் மடிப்புகளை எப்போதும் உலர்வாகவும், காற்றோட்டமாகவும் வையுங்கள்",
        "தினமும் துவைத்த சுத்தமான பருத்தி உள்ளாடைகள் மற்றும் சாக்ஸ்களை அணியுங்கள்"
      ],
      "secondaryAdvice": [
        "படை மறைந்த பிறகும் குறைந்தது 1-2 வாரங்களுக்கு களிம்பைத் தொடர்ந்து தடவவும் (பூஞ்சை மீண்டும் வராமல் தடுக்க)",
        "ஸ்டீராய்டு (Steroid) கலந்த கிரீம்களை பூஞ்சை தொற்றுக்கு ஒருபோதும் பூசாதீர்கள் (இது தொற்றை தீவிரமாக்கும்)",
        "பாதிக்கப்பட்ட இடத்திற்கு தனி துண்டைப் பயன்படுத்துங்கள்; துண்டுகளை பிறருடன் பகிராதீர்கள்",
        "துணிகளை சுடுநீரில் துவைத்து, வெயிலில் நன்கு காய வைக்கவும்",
        "பொது நீச்சல் குளங்கள் மற்றும் ஜிம்களில் வெறும் கால்களுடன் நடக்காதீர்கள்"
      ],
      "foodAdvice": [
        "பூண்டு (இயற்கையான பூஞ்சை எதிர்ப்பு), தயிர், மோர், கீரைகள்",
        "நிறைய தண்ணீர் குடியுங்கள்",
        "அதிக சர்க்கரை உள்ள உணவுகளைக் குறையுங்கள்"
      ],
      "restAdvice": [
        "வியர்த்த உடனே குளித்துவிட்டு உலர்ந்த ஆடைகளை அணியுங்கள்",
        "காலணிகளை வெயிலில் உலர்த்தி மாற்றி மாற்றி அணியுங்கள்"
      ],
      "whenToSeeDoctor": [
        "2 வாரங்கள் களிம்பு தடவியும் படை குணமாகாவிட்டால்",
        "உடல் முழுவதும் பரவினால் அல்லது தலையில் வந்தால்",
        "சர்க்கரை நோய் உள்ளவர்களுக்கு பூஞ்சை தொற்று ஏற்பட்டால்"
      ],
      "emergencySigns": [
        "பாக்டீரியா தொற்று ஏற்பட்டு வீக்கம், சீழ் வடிதல் அல்லது கடுமையான வலி",
        "காய்ச்சல் மற்றும் குளிர் நடுக்கம்"
      ],
      "medicines": {
        "categories": "பூஞ்சை எதிர்ப்பு களிம்புகள் (Clotrimazole, Terbinafine)",
        "relevantIds": [
          "clotrimazole_cream",
          "antiseptic_cream"
        ],
        "disclaimer": "குளோட்ரிமசோல் களிம்பை படையின் விளிம்பைத் தாண்டியும் ஒரு அங்குலம் பரப்பித் தடவ வேண்டும். ஸ்டீராய்டு கிரீம்களைத் தவிர்க்கவும்."
      },
      "prevention": [
        "குளித்த பின் உடல் மடிப்புகளை நன்கு துடைத்து உலர வையுங்கள்",
        "தினமும் சுத்தமான உள்ளாடைகளை அணியுங்கள்",
        "பிறரின் ஆடைகள், காலணிகளைப் பயன்படுத்தாதீர்கள்"
      ]
    }
  },
  {
    "id": "diabetes_awareness",
    "category": "chronic_conditions",
    "keywords": {
      "en": [
        "diabetes",
        "high sugar",
        "blood sugar",
        "diabetes awareness",
        "hyperglycemia",
        "diabetic symptoms",
        "sugar disease"
      ],
      "ta": [
        "சர்க்கரை நோய்",
        "நீரிழிவு நோய்",
        "சர்க்கரை",
        "diabetes",
        "sugar disease",
        "sakkarai noi",
        "ratha sakkarai"
      ]
    },
    "en": {
      "name": "Diabetes Awareness (Type 2 / Hyperglycemia)",
      "explanation": "A chronic metabolic disorder characterized by elevated blood glucose levels resulting from inadequate insulin secretion, insulin resistance, or both.",
      "symptoms": [
        "Frequent urination (polyuria), particularly disrupting sleep at night",
        "Excessive, unquenchable thirst (polydipsia) and dry mouth",
        "Increased hunger (polyphagia) despite eating regularly",
        "Unexplained weight loss, chronic fatigue, and blurred vision",
        "Slow-healing cuts, recurrent skin infections, or tingling in feet"
      ],
      "selfCare": [
        "Drink plenty of water to help kidneys excrete excess glucose via urine",
        "Engage in at least 30 minutes of moderate physical activity (brisk walking) daily",
        "Inspect your feet daily for small blisters, cracks, or cuts",
        "Take prescribed anti-diabetic medications or insulin at exact scheduled meal intervals"
      ],
      "secondaryAdvice": [
        "Monitor your Fasting Blood Glucose, Post-Prandial Blood Glucose, and HbA1c (every 3 months; target <7.0%)",
        "Wear comfortable, well-fitted footwear to prevent silent diabetic foot ulcers",
        "Carry fast-acting carbohydrates (glucose tablets or candy) at all times to treat unexpected hypoglycemia (shakiness, sweating)",
        "Schedule annual dilated eye examinations (diabetic retinopathy) and kidney function tests (microalbuminuria)",
        "Avoid smoking; smoking dramatically accelerates cardiovascular and peripheral vascular complications"
      ],
      "foodAdvice": [
        "Low Glycemic Index (GI) complex carbohydrates: whole oats, brown rice, millets, lentils, legumes",
        "Abundant non-starchy vegetables: spinach, fenugreek, bitter gourd (karela), broccoli, cucumber",
        "Strictly avoid refined white sugar, sweetened beverages, fruit juices, honey, pastries, and white bread"
      ],
      "restAdvice": [
        "Maintain consistent 7–8 hours of nightly sleep; sleep deprivation impairs insulin sensitivity",
        "Incorporate stress-reduction practices (yoga, meditation) to lower cortisol-induced glucose spikes"
      ],
      "whenToSeeDoctor": [
        "Frequent symptoms of high blood sugar (excessive thirst, urination) requiring diagnostic testing",
        "Blood glucose readings consistently above recommended targets",
        "Any non-healing cut, blister, or ulcer on the foot"
      ],
      "emergencySigns": [
        "Extreme hypoglycemia (blood sugar <70 mg/dL): confusion, tremors, seizure, or unconsciousness",
        "Diabetic Ketoacidosis (DKA) / HHS: fruity-smelling breath, rapid deep breathing, vomiting, and severe dehydration",
        "Sudden chest pain or unilateral weakness"
      ],
      "medicines": {
        "categories": "Prescription Oral Hypoglycemic Agents (e.g., Metformin) or Insulin",
        "relevantIds": [],
        "disclaimer": "Diabetes management strictly requires physician evaluation, blood test confirmation (HbA1c), and individualized prescription medication."
      },
      "prevention": [
        "Maintain a healthy body weight with a balanced low-glycemic diet",
        "Exercise moderately for at least 150 minutes per week",
        "Undergo annual preventive health screenings"
      ]
    },
    "ta": {
      "name": "நீரிழிவு விழிப்புணர்வு (Diabetes Awareness)",
      "explanation": "உடலில் இன்சுலின் சுரப்புக் குறைவு அல்லது இன்சுலின் சரியாக வேலை செய்யாததால் இரத்தத்தில் சர்க்கரையின் அளவு தொடர்ந்து அதிகமாக இருக்கும் நாட்பட்ட வளர்சிதை மாற்ற நோய்.",
      "symptoms": [
        "அடிக்கடி சிறுநீர் கழித்தல் (குறிப்பாக இரவில்)",
        "தீராத தாகம் மற்றும் வாய் வறட்சி",
        "அதிக பசி எடுத்தல்",
        "விவரிக்க முடியாத எடை இழப்பு, தீராத சோர்வு மற்றும் பார்வை மங்குதல்",
        "காயங்கள் ஆற தாமதமாதல் மற்றும் கால்களில் மதமதப்பு (மின்னல் போன்ற உணர்வு)"
      ],
      "selfCare": [
        "நிறைய தண்ணீர் குடியுங்கள் (சிறுநீர் மூலம் அதிகப்படியான சர்க்கரை வெளியேற உதவும்)",
        "தினமும் குறைந்தது 30 நிமிடங்கள் விறுவிறுப்பான நடைப்பயிற்சி செய்யுங்கள்",
        "தினமும் கால்களை பரிசோதியுங்கள் (புண்கள், வெடிப்புகள் உள்ளதா என்று பார்க்க)",
        "மருத்துவர் பரிந்துரைத்த சர்க்கரை மாத்திரைகளை சரியான நேரத்தில் தவறாமல் உட்கொள்ளுங்கள்"
      ],
      "secondaryAdvice": [
        "இரத்த சர்க்கரை அளவு மற்றும் HbA1c (3 மாத சராசரி சர்க்கரை அளவு <7%) பரிசோதனையை வழக்கமாகச் செய்யுங்கள்",
        "கால்களில் புண் ஏற்படாமல் இருக்க வசதியான காலணிகளை எப்போதும் அணியுங்கள்",
        "திடீரென சர்க்கரை குறையும் போது (Hypoglycemia - நடுக்கம், வியர்வை) சாப்பிட சாக்லேட் அல்லது குளுக்கோஸ் தயாராக வையுங்கள்",
        "ஆண்டுக்கு ஒருமுறை கண் பரிசோதனை மற்றும் சிறுநீரக பரிசோதனை செய்யுங்கள்",
        "புகைபிடிப்பதைத் தவிர்க்கவும் (இரத்தக் குழாய் அடைப்பு ஆபத்து அதிகம்)"
      ],
      "foodAdvice": [
        "சிறு தானியங்கள் (திணை, வரகு, சாமை), கைக்குத்தல் அரிசி, ஓட்ஸ், பாசிப்பயறு",
        "பாகற்காய், வெந்தயம், கீரைகள், வெள்ளரிக்காய்",
        "வெள்ளை சர்க்கரை, இனிப்புகள், மைதா, குளிர்பானங்கள் மற்றும் பழச்சாறுகளைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "தினமும் 7-8 மணி நேரம் நிம்மதியான தூக்கம் அவசியம்",
        "மன அழுத்தத்தைக் குறைக்க தியானம் அல்லது யோகா செய்யுங்கள்"
      ],
      "whenToSeeDoctor": [
        "அதிக தாகம் மற்றும் அடிக்கடி சிறுநீர் கழிக்கும் அறிகுறிகள் தோன்றினால்",
        "மருந்து சாப்பிட்டும் சர்க்கரை அளவு குறையாமல் இருந்தால்",
        "காலில் ஏதேனும் காயம் அல்லது புண் ஆறாமல் இருந்தால்"
      ],
      "emergencySigns": [
        "சர்க்கரை அளவு மிகக் குறைந்து நடுக்கம், குழப்பம் அல்லது மயக்கம் ஏற்படுதல்",
        "மூச்சில் பழ வாசனை, தொடர் வாந்தி, அதிக மூச்சு வாங்குதல் (DKA அவசர நிலை)",
        "நெஞ்சு வலி அல்லது ஒரு பக்க பக்கவாதம்"
      ],
      "medicines": {
        "categories": "மருத்துவர் பரிந்துரைக்கும் நீரிழிவு மாத்திரைகள் (மெட்ஃபார்மின்) அல்லது இன்சுலின்",
        "relevantIds": [],
        "disclaimer": "சர்க்கரை நோய்க்கு மருத்துவ பரிசோதனையும், மருத்துவர் பரிந்துரைக்கும் குறிப்பிட்ட மருந்துகளும் உணவுக்கட்டுப்பாடும் கட்டாயம் தேவை."
      },
      "prevention": [
        "உடல் எடையை சீராக வையுங்கள்",
        "வாரத்திற்கு 150 நிமிடங்கள் உடற்பயிற்சி செய்யுங்கள்",
        "ஆண்டுதோறும் முழு உடல் பரிசோதனை செய்து கொள்ளுங்கள்"
      ]
    }
  },
  {
    "id": "hypertension_awareness",
    "category": "chronic_conditions",
    "keywords": {
      "en": [
        "hypertension",
        "high blood pressure",
        "high bp",
        "blood pressure awareness",
        "bp spike"
      ],
      "ta": [
        "இரத்த அழுத்தம்",
        "உயர் இரத்த அழுத்தம்",
        "ஹை பிபி",
        "hypertension",
        "high bp",
        "ratha azhutham",
        "bp adhigam"
      ]
    },
    "en": {
      "name": "High Blood Pressure Awareness (Hypertension)",
      "explanation": "A chronic cardiovascular condition where the long-term force of blood against artery walls is persistently elevated (≥130/80 mmHg), placing strain on the heart, kidneys, and brain.",
      "symptoms": [
        "Frequently asymptomatic ('silent killer') in early stages",
        "Occipital morning headaches or throbbing in the head during spikes",
        "Dizziness, lightheadedness, or unsteadiness",
        "Shortness of breath, mild chest tightness, or heart palpitations",
        "Nosebleeds (epistaxis) or visual changes during severe spikes"
      ],
      "selfCare": [
        "Adopt the DASH diet: rich in fruits, vegetables, and low-fat dairy while restricting sodium to <2,000 mg/day",
        "Engage in 30 minutes of aerobic exercise (walking, swimming) 5 days a week",
        "Eliminate added table salt and avoid high-sodium pickles, papads, and canned foods",
        "Practice deep, slow diaphragmatic breathing (6 breaths per minute) to calm sympathetic tone"
      ],
      "secondaryAdvice": [
        "Check your blood pressure at home with a validated digital upper-arm cuff at consistent daily times",
        "Record your BP readings in a logbook: record systolic, diastolic, and pulse rate",
        "Never stop or alter prescription anti-hypertensive medications without consulting your physician",
        "Limit alcohol consumption and avoid nicotine/smoking which cause immediate arterial stiffening",
        "Manage stress through regular relaxation, as chronic stress elevates baseline blood pressure"
      ],
      "foodAdvice": [
        "Potassium-rich foods that blunt sodium effects: bananas, spinach, sweet potatoes, coconut water, beans",
        "Garlic, hibiscus tea, unsalted almonds, and oats",
        "Strictly avoid high-sodium packaged chips, processed meats, instant noodles, pickles, and soy sauce"
      ],
      "restAdvice": [
        "Maintain 7–8 hours of peaceful sleep; chronic insomnia significantly raises vascular tone",
        "Take calming breaks during high-stress working hours"
      ],
      "whenToSeeDoctor": [
        "Blood pressure consistently measures ≥130/80 mmHg across multiple days",
        "Experiencing recurring morning headaches or unexplained dizziness",
        "Reviewing and adjusting ongoing anti-hypertensive prescriptions"
      ],
      "emergencySigns": [
        "Hypertensive Crisis: BP exceeding 180/120 mmHg",
        "Chest pain, shortness of breath, or back pain during high BP spike",
        "Numbness, weakness, speech difficulty, or vision loss (stroke emergency)",
        "Severe, explosive headache with confusion"
      ],
      "medicines": {
        "categories": "Anti-hypertensive medications (ACE Inhibitors, ARBs, CCBs, Beta Blockers) by prescription",
        "relevantIds": [],
        "disclaimer": "Blood pressure medications require formal physician diagnosis, cardiovascular evaluation, and lifelong therapeutic adherence."
      },
      "prevention": [
        "Reduce dietary salt intake and avoid processed foods",
        "Maintain a healthy body weight and exercise regularly",
        "Monitor blood pressure routinely even if feeling completely well"
      ]
    },
    "ta": {
      "name": "உயர் இரத்த அழுத்தம் (Hypertension / High BP)",
      "explanation": "இரத்தக் குழாய்களின் சுவர்களில் இரத்தம் செலுத்தும் அழுத்தம் தொடர்ந்து இயல்பான அளவை விட (130/80 mmHg) அதிகமாக இருக்கும் நாட்பட்ட இதய நாள நோய்.",
      "symptoms": [
        "ஆரம்பத்தில் எந்த அறிகுறிகளும் இல்லாமல் அமைதியாக இருக்கும் ('Silent Killer')",
        "காலையில் எழும்போது தலையின் பின்பகுதியில் வலி",
        "தலைசுற்றல் அல்லது லேசான மயக்கம்",
        "நெஞ்சு படபடப்பு அல்லது மூச்சு வாங்குதல்",
        "தீவிர அழுத்தத்தின் போது மூக்கில் இரத்தம் வருதல் அல்லது பார்வை மங்குதல்"
      ],
      "selfCare": [
        "உணவில் உப்பைக் குறையுங்கள் (ஒரு நாளைக்கு ஒரு டீஸ்பூனுக்கு குறைவாக மட்டுமே உப்பு சேர்க்கவும்)",
        "தினமும் 30 நிமிடங்கள் நடைப்பயிற்சி அல்லது நீச்சல் பயிற்சி செய்யுங்கள்",
        "ஊறுகாய், கருவாடு, அப்பளம் மற்றும் பாக்கெட் உணவுகளை முற்றிலும் தவிர்க்கவும்",
        "மெதுவாக ஆழமாக மூச்சை உள்ளிழுத்து வெளிவிடும் மூச்சுப்பயிற்சி செய்யுங்கள்"
      ],
      "secondaryAdvice": [
        "டிஜிட்டல் பிபி மெஷின் மூலம் வீட்டில் இரத்த அழுத்தத்தை சீரான இடைவெளியில் பரிசோதித்துக் குறித்துக் கொள்ளுங்கள்",
        "மருத்துவர் பரிந்துரைத்த இரத்த அழுத்த மாத்திரைகளை ஒருபோதும் சுயமாக நிறுத்தாதீர்கள்",
        "மது அருந்துதல் மற்றும் புகைபிடிப்பதைத் தவிர்க்கவும் (இவை இரத்த நாளங்களை சுருக்கும்)",
        "மன அழுத்தத்தைக் குறைக்க தினமும் தியானம் செய்யுங்கள்",
        "ஆண்டுதோறும் இதயம் மற்றும் சிறுநீரக பரிசோதனை செய்யுங்கள்"
      ],
      "foodAdvice": [
        "பொட்டாசியம் நிறைந்த வாழைப்பழம், கீரைகள், சர்க்கரைவள்ளிக்கிழங்கு, இளநீர்",
        "பூண்டு, வெந்தயம், ஓட்ஸ், உப்பு இல்லாத நட்ஸ்",
        "சிப்ஸ், பதப்படுத்தப்பட்ட இறைச்சி, துரித உணவுகள் மற்றும் சோடா பானங்களைத் தவிர்க்கவும்"
      ],
      "restAdvice": [
        "இரவில் 7-8 மணி நேரம் அமைதியான தூக்கம் அவசியம்",
        "அதிக மன அழுத்தமான வேலைகளுக்கு இடையே ஓய்வு எடுங்கள்"
      ],
      "whenToSeeDoctor": [
        "இரத்த அழுத்தம் தொடர்ந்து 130/80 mmHg-க்கு மேல் இருந்தால்",
        "அடிக்கடி தலைசுற்றல் அல்லது தலைவலி ஏற்பட்டால்",
        "வழக்கமான பரிசோதனை மற்றும் மருந்தளவை மாற்றியமைக்க"
      ],
      "emergencySigns": [
        "இரத்த அழுத்தம் 180/120 mmHg-ஐத் தாண்டுதல் (Hypertensive Crisis)",
        "கடுமையான நெஞ்சு வலி, மூச்சுத்திணறல் அல்லது முதுகு வலி",
        "முகம் ஒருபக்கம் கோணிக்கொள்ளுதல், கை கால் பலவீனம், பேச்சு குழறுதல் (பக்கவாதம்)",
        "தாங்க முடியாத கடுமையான தலைவலி"
      ],
      "medicines": {
        "categories": "மருத்துவர் பரிந்துரைக்கும் இரத்த அழுத்த மாத்திரைகள்",
        "relevantIds": [],
        "disclaimer": "இரத்த அழுத்தத்திற்கு மருத்துவர் பரிந்துரைத்த மருந்துகளைத் தவறாமல் தினமும் உட்கொள்வது அவசியம். சுயமாக மாத்திரையை நிறுத்தக்கூடாது."
      },
      "prevention": [
        "உணவில் உப்பைக் குறையுங்கள்",
        "உடல் எடையைச் சீராக வையுங்கள் மற்றும் உடற்பயிற்சி செய்யுங்கள்",
        "அறிகுறிகள் இல்லாவிட்டாலும் இரத்த அழுத்தத்தை அவ்வப்போது பரிசோதியுங்கள்"
      ]
    }
  },
  {
    "id": "anemia_awareness",
    "category": "chronic_conditions",
    "keywords": {
      "en": [
        "anemia",
        "anaemia",
        "low hemoglobin",
        "iron deficiency",
        "pale skin",
        "tired and weak"
      ],
      "ta": [
        "இரத்த சோகை",
        "ஹீமோகுளோபின் குறைவு",
        "அனீமியா",
        "anemia",
        "ratha sogai",
        "low hemoglobin",
        "sogai"
      ]
    },
    "en": {
      "name": "Anemia Awareness (Iron Deficiency)",
      "explanation": "A condition in which the blood lacks adequate healthy red blood cells or hemoglobin, leading to reduced oxygen-carrying capacity to vital bodily tissues.",
      "symptoms": [
        "Persistent, unexplained fatigue and generalized weakness",
        "Pale or yellowish skin, conjunctiva (inside eyelids), and pale nailbeds",
        "Shortness of breath and rapid heart rate during mild exertion",
        "Cold hands and feet, dizziness, and brittle spoon-shaped nails (koilonychia)"
      ],
      "selfCare": [
        "Consume iron-rich foods combined with vitamin C (which enhances iron absorption)",
        "Cook meals in traditional cast-iron cookware to increase dietary iron content",
        "Avoid drinking tea, coffee, or milk with iron-rich meals (tannins and calcium block iron absorption)",
        "Take prescribed iron supplements on an empty stomach or with orange juice as directed"
      ],
      "secondaryAdvice": [
        "Get a Complete Blood Count (CBC) and Serum Ferritin blood test to confirm iron deficiency",
        "Identify and address the root cause: heavy menstrual bleeding, occult gastrointestinal bleeding, or poor dietary intake",
        "Expect dark or blackish stools while taking oral iron supplements (this is normal and harmless)",
        "Space calcium supplements and antacids at least 2 hours apart from iron supplements",
        "De-worming treatment (e.g. Albendazole) is recommended in endemic areas to treat parasitic intestinal blood loss"
      ],
      "foodAdvice": [
        "Heme iron: lean red meat, poultry, fish; Non-heme iron: spinach, moringa leaves, lentils, chickpeas, beetroot",
        "Iron-rich snacks: dates, black raisins, jaggery, sesame chikki, dried figs",
        "Vitamin C boosters: amla (Indian gooseberry), lemon, oranges, bell peppers"
      ],
      "restAdvice": [
        "Pace daily activities and avoid sudden overexertion until hemoglobin levels normalize",
        "Ensure 8 hours of restorative nightly sleep"
      ],
      "whenToSeeDoctor": [
        "Persistent fatigue and weakness interfering with daily activities",
        "Known heavy menstrual periods or persistent pale appearance",
        "Regular monitoring of hemoglobin and ferritin levels during iron therapy"
      ],
      "emergencySigns": [
        "Severe shortness of breath at rest or rapid, irregular heartbeat (palpitations)",
        "Chest pain or feeling faint upon standing",
        "Passing black tarry stools or vomiting blood (active internal hemorrhage)"
      ],
      "medicines": {
        "categories": "Iron Supplements (Ferrous Ascorbate / Ferrous Sulfate) and Vitamin C",
        "relevantIds": [
          "iron_supplements",
          "vitamin_c"
        ],
        "disclaimer": "Iron supplements should be taken based on laboratory-confirmed ferritin levels. Excessive unmonitored iron intake can cause iron overload."
      },
      "prevention": [
        "Eat a balanced diet rich in iron and vitamin C",
        "Avoid drinking tea or coffee immediately with meals",
        "Treat underlying menstrual or gastrointestinal bleeding promptly"
      ]
    },
    "ta": {
      "name": "இரத்த சோகை (Anemia / Iron Deficiency)",
      "explanation": "இரத்தத்தில் போதுமான அளவு சிவப்பு அணுக்கள் அல்லது ஹீமோகுளோபின் இல்லாத நிலை. இதனால் உடலின் திசுக்களுக்கு ஆக்ஸிஜன் கொண்டு செல்லும் திறன் குறைகிறது.",
      "symptoms": [
        "தொடர் உடல் சோர்வு மற்றும் பலவீனம்",
        "வெளிறிய தோல், வெளிறிய கண்கள் மற்றும் நகங்கள்",
        "சிறிது தூரம் நடந்தாலும் மூச்சு வாங்குதல் மற்றும் படபடப்பு",
        "குளிர்ந்த கை கால்கள், தலைசுற்றல் மற்றும் நகங்கள் உடைதல்"
      ],
      "selfCare": [
        "இரும்புச்சத்து நிறைந்த உணவுகளுடன் வைட்டமின் சி உணவுகளைச் சேர்த்து உண்ணுங்கள் (உறிஞ்சுதலை அதிகரிக்கும்)",
        "இரும்பு பாத்திரங்களில் சமைப்பது உணவில் இரும்புச்சத்தை அதிகரிக்கும்",
        "சாப்பிடும் போது அல்லது சாப்பிட்ட உடனே டீ, காபி குடிப்பதைத் தவிர்க்கவும் (இவை இரும்புச்சத்தை உறிஞ்ச விடாது)",
        "மருத்துவர் பரிந்துரைத்த இரும்புச்சத்து மாத்திரைகளை தவறாமல் உட்கொள்ளுங்கள்"
      ],
      "secondaryAdvice": [
        "முழு இரத்தப் பரிசோதனை (CBC) மற்றும் ஃபெரிட்டின் (Ferritin) பரிசோதனை செய்து ஹீமோகுளோபின் அளவை உறுதி செய்யுங்கள்",
        "இரத்த சோகைக்கான காரணத்தைக் கண்டறியுங்கள் (அதிக மாதவிடாய் இரத்தப்போக்கு, பைல்ஸ் அல்லது உணவுக் குறைபாடு)",
        "இரும்புச்சத்து மாத்திரைகள் சாப்பிடும் போது மலம் கருப்பு நிறமாக வெளியேறுவது இயல்பானது",
        "கால்சியம் மாத்திரை மற்றும் அன்டாசிட் மாத்திரைகளை இரும்புச்சத்து மாத்திரையுடன் சேர்த்து எடுக்காமல் 2 மணிநேர இடைவெளி விடுங்கள்",
        "குடற்புழு நீக்க மாத்திரைகளை (De-worming) மருத்துவர் ஆலோசனையுடன் எடுத்துக் கொள்ளுங்கள்"
      ],
      "foodAdvice": [
        "முருங்கைக்கீரை, பீட்ரூட், பேரீச்சம்பழம், உலர் திராட்சை, அத்திப்பழம், வெல்லம்",
        "சுண்டல், பாசிப்பயறு, முட்டை, ஆட்டு ஈரல்",
        "நெல்லிக்காய், எலுமிச்சை சாறு, மாதுளை"
      ],
      "restAdvice": [
        "அளவுக்கு அதிகமான கடின உழைப்பைத் தவிர்த்து அவ்வப்போது ஓய்வெடுங்கள்",
        "இரவில் 8 மணி நேரம் நன்றாகத் தூங்குங்கள்"
      ],
      "whenToSeeDoctor": [
        "தொடர் சோர்வு மற்றும் மூச்சு வாங்குதல் நீடித்தால்",
        "மாதவிடாயில் அதிக இரத்தப்போக்கு இருந்தால்",
        "மருந்து சாப்பிட்டும் ஹீமோகுளோபின் அளவு கூடாவிட்டால்"
      ],
      "emergencySigns": [
        "ஓய்வாக இருக்கும் போதே தீவிர மூச்சுத்திணறல் அல்லது நெஞ்சு படபடப்பு",
        "நெஞ்சு வலி அல்லது மயங்கி விழுதல்",
        "கருப்பு நிறத்தில் மலம் வெளியேறுதல் (உள் இரத்தப்போக்கு)"
      ],
      "medicines": {
        "categories": "இரும்புச்சத்து மாத்திரைகள் (Iron Supplements) மற்றும் வைட்டமின் சி",
        "relevantIds": [
          "iron_supplements",
          "vitamin_c"
        ],
        "disclaimer": "இரத்தப் பரிசோதனை செய்த பிறகே இரும்புச்சத்து மாத்திரைகளை உட்கொள்ள வேண்டும். மருத்துவர் பரிந்துரைத்த காலத்திற்கு மட்டுமே எடுக்க வேண்டும்."
      },
      "prevention": [
        "தினசரி உணவில் கீரை, பருப்பு மற்றும் பழங்களைச் சேர்த்துக் கொள்ளுங்கள்",
        "சாப்பிட்டவுடன் டீ/காபி குடிப்பதைத் தவிருங்கள்",
        "ஆண்டுதோறும் ஹீமோகுளோபின் அளவை பரிசோதித்துக் கொள்ளுங்கள்"
      ]
    }
  }
];

// --------------------------------------------------------------------------
// PROMPT SUGGESTION PILLS
// --------------------------------------------------------------------------
const BILINGUAL_PROMPT_PILLS = {
  en: [
    { label: "I have fever", query: "I have fever" },
    { label: "What to do for headache?", query: "What should I do for a headache?" },
    { label: "Symptoms of diabetes?", query: "What are the symptoms of diabetes?" },
    { label: "Cough & chest congestion", query: "I have cough and chest congestion" },
    { label: "Acidity & heartburn relief", query: "What can I do for acidity?" },
    { label: "What is paracetamol used for?", query: "What is paracetamol used for?" },
    { label: "What is ORS?", query: "What is ORS?" }
  ],
  ta: [
    { label: "எனக்கு காய்ச்சல் உள்ளது", query: "எனக்கு காய்ச்சல் உள்ளது" },
    { label: "தலைவலிக்கு என்ன செய்ய?", query: "தலைவலிக்கு என்ன செய்ய வேண்டும்?" },
    { label: "சர்க்கரை நோய் அறிகுறிகள்?", query: "சர்க்கரை நோயின் அறிகுறிகள் என்ன?" },
    { label: "இருமல் & நெஞ்சு சளி", query: "எனக்கு இருமல் மற்றும் நெஞ்சு சளி உள்ளது" },
    { label: "அசிடிட்டி & நெஞ்செரிச்சல்", query: "அசிடிட்டி குறைய என்ன செய்ய வேண்டும்?" },
    { label: "பாரசிட்டமால் பயன்பாடு?", query: "பாரசிட்டமால் எதற்கு பயன்படுகிறது?" },
    { label: "ஓ.ஆர்.எஸ் என்றால் என்ன?", query: "ஓஆர்எஸ் என்றால் என்ன?" }
  ]
};

// --------------------------------------------------------------------------
// GENERAL HEALTH INTENTS
// --------------------------------------------------------------------------
const BILINGUAL_GENERAL = [
  {
    id: "reduce_fever",
    patterns: {
      en: ["reduce fever", "lower fever", "bring down fever", "how to reduce fever", "fever treatment"],
      ta: ["காய்ச்சலை குறைக்க", "காய்ச்சல் குறைய", "reduce fever", "kaichal kuraiya"]
    },
    en: `### How to Reduce Fever
1. **Hydration**: Drink water, electrolyte solution (ORS), and warm broths frequently.
2. **Rest**: Avoid physical exertion; bed rest allows immune defense mechanisms to operate efficiently.
3. **Lukewarm Sponge Bath**: Apply lukewarm water to forehead, neck, and underarms. Never use ice water.
4. **Breathable Clothing**: Wear lightweight cotton clothes; avoid heavy thermal blankets.
5. **Antipyretics**: Paracetamol may be used as directed on product packaging. Avoid exceeding 4,000 mg/day in adults.`,
    ta: `### காய்ச்சலை குறைப்பது எப்படி?
1. **நிறைய தண்ணீர் குடியுங்கள்**: சுத்தமான நீர், இளநீர், கஞ்சி அல்லது ஓ.ஆர்.எஸ் நீர் அருந்தவும்.
2. **முழு ஓய்வு**: உடல் தொற்றுநோயை எதிர்த்துப் போராட போதுமான ஓய்வு மிகவும் அவசியம்.
3. **வெதுவெதுப்பான ஒத்தடம்**: நெற்றி, கழுத்து பகுதிகளில் வெதுவெதுப்பான நீரில் நனைத்த துணியால் ஒத்தடம் கொடுக்கலாம்.
4. **மெல்லிய ஆடைகள்**: பருத்தி ஆடைகளை அணியுங்கள்; கனமான போர்வைகளைத் தவிர்க்கவும்.
5. **மருந்து வழிகாட்டல்**: மருத்துவர் ஆலோசனையுடன் பாரசிட்டமால் உட்கொள்ளலாம்.`
  },
  {
    id: "headache_relief",
    patterns: {
      en: ["headache relief", "what to do for headache", "cure headache", "treat headache", "relieve headache"],
      ta: ["தலைவலிக்கு என்ன செய்ய", "தலைவலி குணமாக", "தலைவலி போக்க", "thala vali enna seiyanum", "headache what to do"]
    },
    en: `### What to Do for a Headache
1. **Rest in a Dim, Silent Room**: Eliminate loud sounds and turn off bright screens.
2. **Immediate Hydration**: Drink a tall glass of room-temperature water. Mild dehydration is a primary headache trigger.
3. **Cold or Warm Compress**: Place a cool cloth across the forehead or a warm compress on the back of the neck.
4. **Gentle Massage**: Lightly massage temples, jaw, and neck muscles to release tension.
5. **Limit Eye Strain**: Follow the 20-20-20 rule when working on digital screens.`,
    ta: `### தலைவலிக்கு என்ன செய்ய வேண்டும்?
1. **அமைதியான அறையில் ஓய்வு**: வெளிச்சம் மற்றும் மொபைல்/டிவி திரைகளை தவிர்த்து கண்களுக்கு ஓய்வு கொடுங்கள்.
2. **உடனே தண்ணீர் குடியுங்கள்**: உடலில் நீர்ச்சத்து குறைவதே தலைவலிக்கான முக்கிய காரணம். ஒரு டம்ளர் தண்ணீர் குடியுங்கள்.
3. **ஒத்தடம் கொடுங்கள்**: நெற்றியில் குளிர்ந்த துணியையோ அல்லது கழுத்தில் வெதுவெதுப்பான ஒத்தடத்தையோ வைக்கவும்.
4. **லேசான மசாஜ்**: நெற்றி மற்றும் கழுத்து தசைகளை மென்மையாக மசாஜ் செய்வது அழுத்தத்தை குறைக்கும்.
5. **கண்களுக்கு ஓய்வு**: திரைகளைத் தொடர்ந்து பார்ப்பதைத் தவிர்க்கவும்.`
  }
];

// --------------------------------------------------------------------------
// LANGUAGE & TANGLISH DETECTION UTILITIES
// --------------------------------------------------------------------------
function isTamilScript(text) {
  return /[\u0B80-\u0BFF]/.test(text);
}

function isTanglish(text) {
  const tanglishRegex = /\b(enakku|irukku|vali|kaichal|kaachal|suram|thala|thalai|nenju|vayiru|vaitru|moochu|mayakkam|valippu|rathapokku|udambu|sali|irumal|thondai|vaanthi|romba|adheega|marunthu|maathirai|sapda|sapadu|thanni|eppadi|enna|panrathu|seiyanum|kasta|mudiyala|paduthu|nenjerichal|arippu|sakkarai|noi|azhutham|ratha|sogai|thadippu|padai|themal|moottu|muthugu|iduppu|thasai|sulukku|pidippu|ajeeranam|serimaanam|malachikkal|kumattal|neer|jaladosham)\b/i;
  return tanglishRegex.test(text);
}

function resolveLanguage(text, preferredLang = 'en') {
  if (isTamilScript(text) || isTanglish(text)) {
    return 'ta';
  }
  return preferredLang === 'ta' ? 'ta' : 'en';
}

function normalizeClinicalText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[?!.,;:"'()\[\]{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// --------------------------------------------------------------------------
// FORMAT MEDICAL RESPONSE (DEFAULT: 3-5 SHORT BULLET POINTS)
// --------------------------------------------------------------------------
function formatMedicalResponse(cond, lang = 'en') {
  const c = cond[lang] || cond.en;
  const isTa = lang === 'ta';

  const bullets = [];

  // 1 & 2: 2 immediate self-care actions (1 sentence each)
  if (Array.isArray(c.selfCare) && c.selfCare.length > 0) {
    bullets.push(`• ${c.selfCare[0]}`);
    if (c.selfCare.length > 1) {
      bullets.push(`• ${c.selfCare[1]}`);
    }
  }

  // 3: 1 doctor consultation advice / warning
  if (Array.isArray(c.whenToSeeDoctor) && c.whenToSeeDoctor.length > 0) {
    const docText = c.whenToSeeDoctor[0];
    bullets.push(`• ${isTa ? 'மருத்துவர் ஆலோசனை: ' : 'Doctor advice: '}${docText}`);
  }

  // 4: 1 emergency warning sign (if present)
  if (Array.isArray(c.emergencySigns) && c.emergencySigns.length > 0) {
    const emText = c.emergencySigns[0];
    bullets.push(`• 🚨 ${isTa ? 'அவசர எச்சரிக்கை: ' : 'Emergency alert: '}${emText}`);
  }

  const primaryMedId = (c.medicines && c.medicines.relevantIds && c.medicines.relevantIds[0]) ? c.medicines.relevantIds[0] : null;

  const header = `**${c.name}**`;
  const text = `${header}\n\n${bullets.join('\n')}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`;

  return {
    text: text,
    lang: lang,
    isEmergency: cond.id === 'breathing_difficulty',
    medicineId: primaryMedId,
    conditionId: cond.id,
    hasMoreDetails: true
  };
}

// --------------------------------------------------------------------------
// COMPREHENSIVE CLINICAL DETAILS (9 STRUCTURED SECTIONS FOR [MORE DETAILS])
// --------------------------------------------------------------------------
function formatComprehensiveClinicalDetails(cond, lang = 'en') {
  const c = cond[lang] || cond.en;
  const isTa = lang === 'ta';

  const symptomsList = (c.symptoms || []).map(s => `• ${s}`).join('\n');
  const selfCareList = (c.selfCare || []).map(s => `• ${s}`).join('\n');
  const secondaryList = (c.secondaryAdvice || []).map(s => `• ${s}`).join('\n');
  const foodList = (c.foodAdvice || []).map(s => `• ${s}`).join('\n');
  const restList = (c.restAdvice || []).map(s => `• ${s}`).join('\n');
  const doctorList = (c.whenToSeeDoctor || []).map(s => `• ${s}`).join('\n');
  const emergencyList = (c.emergencySigns || []).map(s => `• ${s}`).join('\n');
  const preventionList = (c.prevention || []).map(s => `• ${s}`).join('\n');

  const medInfo = c.medicines || {};
  const medCategoryText = medInfo.categories || (isTa ? 'பொதுவான மருந்துகள்' : 'Commonly considered medicines');
  const medDisclaimerText = medInfo.disclaimer || (isTa ? 'மருந்துத் தகவல்கள் கல்வி நோக்கத்திற்கு மட்டுமே.' : 'Educational medicine information only.');

  let text = '';
  if (isTa) {
    text = `### 🏥 ${c.name} (முழு மருத்துவ விவரங்கள்)
${c.explanation}

**1. பொதுவான அறிகுறிகள் (Common Symptoms)**:
${symptomsList}

**2. நீங்கள் இப்போது செய்யக்கூடியவை / சுய பாதுகாப்பு (Self-Care)**:
${selfCareList}

**3. இரண்டாம் நிலை மருத்துவ ஆலோசனை (Secondary Advice)**:
${secondaryList}

**4. உணவு மற்றும் நீரேற்ற வழிகாட்டல் (Food & Hydration)**:
${foodList}

**5. ஓய்வு மற்றும் வாழ்க்கை முறை (Rest & Lifestyle)**:
${restList}

**6. மருத்துவரை எப்போது அணுக வேண்டும் (When to Consult a Doctor)**:
${doctorList}

**7. அவசர எச்சரிக்கை அறிகுறிகள் (Emergency Warning Signs)**:
⚠️ ${emergencyList}

**8. பொதுவான மருந்துத் தகவல்கள் (Educational Medicine Info)**:
• ${medCategoryText}
*${medDisclaimerText}*

**9. தடுப்பு முறைகள் மற்றும் பின்தொடர்தல் (Prevention & Follow-up)**:
${preventionList}`;
  } else {
    text = `### 🏥 ${c.name} (Comprehensive Clinical Guide)
${c.explanation}

**1. Common Symptoms**:
${symptomsList}

**2. What You Can Do Now (Immediate Self-Care)**:
${selfCareList}

**3. Secondary Advice (Crucial Clinical Precautions)**:
${secondaryList}

**4. Food & Hydration Advice**:
${foodList}

**5. Rest & Lifestyle Recommendations**:
${restList}

**6. When to Consult a Doctor**:
${doctorList}

**7. Emergency Warning Signs (Seek Urgent Medical Care)**:
⚠️ ${emergencyList}

**8. Medicine Information (Educational Only)**:
• ${medCategoryText}
*${medDisclaimerText}*

**9. Prevention & Follow-up**:
${preventionList}`;
  }

  const primaryMedId = (c.medicines && c.medicines.relevantIds && c.medicines.relevantIds[0]) ? c.medicines.relevantIds[0] : null;

  return {
    text: `${text}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`,
    lang: lang,
    isEmergency: cond.id === 'breathing_difficulty',
    medicineId: primaryMedId,
    conditionId: cond.id
  };
}

function getComprehensiveClinicalDetails(condId, lang = 'en') {
  const cond = CLINICAL_CONDITIONS.find(c => c.id === condId);
  if (!cond) return null;
  return formatComprehensiveClinicalDetails(cond, lang);
}

function formatClinicalResponse(cond, lang = 'en') {
  return formatMedicalResponse(cond, lang);
}

// --------------------------------------------------------------------------
// UNIFIED BILINGUAL QUERY ENGINE
// --------------------------------------------------------------------------
function matchBilingualMedicalQuery(rawQuery, preferredLang = 'en') {
  const q = normalizeClinicalText(rawQuery);
  const lang = resolveLanguage(rawQuery, preferredLang);

  // 1. HIGH-PRIORITY EMERGENCY DETECTION (First & Immediate)
  const emergencyKeywords = [
    ...BILINGUAL_EMERGENCY.keywords.en,
    ...BILINGUAL_EMERGENCY.keywords.ta
  ];
  const isEmergency = emergencyKeywords.some(kw => q.includes(normalizeClinicalText(kw)));
  if (isEmergency) {
    return {
      text: `${BILINGUAL_EMERGENCY.response[lang]}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`,
      lang: lang,
      isEmergency: true
    };
  }

  // 2. SPECIFIC MEDICINE LOOKUP IN CATALOG (Concise 3-4 Short Bullets)
  if (typeof MEDICAL_MEDICINES_CATALOG !== 'undefined' && Array.isArray(MEDICAL_MEDICINES_CATALOG)) {
    for (const med of MEDICAL_MEDICINES_CATALOG) {
      const aliases = [
        med.id,
        med.name.en,
        med.name.ta,
        med.genericName,
        ...(med.brandExamples || [])
      ].map(s => normalizeClinicalText(s));

      const matched = aliases.some(alias => {
        if (!alias) return false;
        return q.includes(alias) || new RegExp(`\\b${alias}\\b`, 'i').test(q);
      });

      if (matched) {
        const isTa = lang === 'ta';
        const name = isTa ? med.name.ta : med.name.en;
        const purpose = isTa ? med.purpose.ta : med.purpose.en;
        const firstUse = (isTa ? med.uses.ta : med.uses.en)[0] || '';
        const firstPrecaution = (isTa ? med.precautions.ta : med.precautions.en)[0] || '';
        const rxNotice = med.prescriptionRequired
          ? (isTa ? 'பரிந்துரைக்கப்பட்ட மருந்து — மருத்துவர் வழிகாட்டலின் கீழ் உட்கொள்ளவும்.' : 'Prescription medicine — use under professional medical guidance.')
          : (isTa ? 'OTC மருந்து — பேக்கேஜிங் வழிகாட்டுதல்களைப் பின்பற்றவும்.' : 'OTC medicine — follow packaging label instructions.');

        const response = isTa
          ? `**${name} (${med.genericName})**
• **பயன்பாடு**: ${purpose}
• **நோக்கம்**: ${firstUse}
• **பாதுகாப்பு**: ${firstPrecaution}
• **வழிகாட்டல்**: ${rxNotice}`
          : `**${name} (${med.genericName})**
• **Purpose**: ${purpose}
• **Primary Use**: ${firstUse}
• **Safety Rule**: ${firstPrecaution}
• **Guidance**: ${rxNotice}`;

        return {
          text: `${response}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`,
          lang: lang,
          isEmergency: false,
          medicineId: med.id
        };
      }
    }
  }

  // 3. COMPREHENSIVE CLINICAL CONDITIONS MATCHER (All 38 Conditions with Secondary Advice)
  for (const cond of CLINICAL_CONDITIONS) {
    const keywords = [
      ...(cond.keywords.en || []),
      ...(cond.keywords.ta || [])
    ];

    const matched = keywords.some(kw => {
      const normKw = normalizeClinicalText(kw);
      if (!normKw) return false;
      if (q.includes(normKw)) return true;
      try {
        return new RegExp(`\\b${normKw}\\b`, 'i').test(q);
      } catch (e) {
        return false;
      }
    });

    if (matched) {
      return formatClinicalResponse(cond, lang);
    }
  }

  // 4. GENERAL HEALTH QUESTIONS (Wellness & lifestyle advice)
  for (const item of BILINGUAL_GENERAL) {
    const patterns = [...(item.patterns.en || []), ...(item.patterns.ta || [])];
    for (const pattern of patterns) {
      if (q.includes(normalizeClinicalText(pattern))) {
        return {
          text: `${item[lang]}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`,
          lang: lang,
          isEmergency: false
        };
      }
    }
  }

  // 5. UNKNOWN QUERY FALLBACK
  return {
    text: `${BILINGUAL_UNKNOWN[lang]}\n\n*${BILINGUAL_DISCLAIMER[lang]}*`,
    lang: lang,
    isEmergency: false
  };
}

// --------------------------------------------------------------------------
// LEGACY COMPATIBILITY EXPORTS
// --------------------------------------------------------------------------
const BILINGUAL_CONDITIONS = {};
CLINICAL_CONDITIONS.forEach(c => {
  BILINGUAL_CONDITIONS[c.id] = {
    keywords: c.keywords,
    en: c.en.explanation,
    ta: c.ta.explanation
  };
});

const BILINGUAL_SYMPTOMS = {};
CLINICAL_CONDITIONS.forEach(c => {
  BILINGUAL_SYMPTOMS[c.id] = {
    id: c.id,
    keywords: c.keywords,
    en: {
      name: c.en.name,
      summary: c.en.explanation,
      response: c.en.explanation,
      causes: c.en.symptoms,
      selfCare: c.en.selfCare,
      warning: (c.en.emergencySigns && c.en.emergencySigns[0]) || "Seek medical care if symptoms persist."
    },
    ta: {
      name: c.ta.name,
      summary: c.ta.explanation,
      response: c.ta.explanation,
      causes: c.ta.symptoms,
      selfCare: c.ta.selfCare,
      warning: (c.ta.emergencySigns && c.ta.emergencySigns[0]) || "அறிகுறிகள் நீடித்தால் மருத்துவரை அணுகவும்."
    }
  };
});

const EMERGENCY_INTENT = {
  keywords: BILINGUAL_EMERGENCY.keywords.en,
  response: BILINGUAL_EMERGENCY.response.en
};

const SYMPTOMS_DATABASE = {};
for (const key in BILINGUAL_SYMPTOMS) {
  const sym = BILINGUAL_SYMPTOMS[key];
  SYMPTOMS_DATABASE[key] = {
    name: sym.en.name,
    keywords: sym.keywords.en,
    description: sym.en.summary,
    possibleCauses: sym.en.causes,
    selfCare: sym.en.selfCare,
    warningSigns: [sym.en.warning],
    whenToSeeDoctor: sym.en.warning
  };
}

const CONDITIONS_DATABASE = {};
for (const key in BILINGUAL_CONDITIONS) {
  const cond = BILINGUAL_CONDITIONS[key];
  CONDITIONS_DATABASE[key] = {
    name: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    keywords: cond.keywords.en,
    definition: cond.en,
    symptoms: ["Variable based on severity"],
    selfCare: "Rest and hydration as appropriate.",
    whenToConsult: "If symptoms persist or worsen."
  };
}

const UNKNOWN_QUESTION_RESPONSE = BILINGUAL_UNKNOWN.en;
const MEDICAL_DISCLAIMER_TEXT = BILINGUAL_DISCLAIMER.en;

// Node environment exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CLINICAL_CONDITIONS,
    BILINGUAL_CONDITIONS,
    BILINGUAL_SYMPTOMS,
    BILINGUAL_EMERGENCY,
    BILINGUAL_DISCLAIMER,
    BILINGUAL_UNKNOWN,
    BILINGUAL_PROMPT_PILLS,
    BILINGUAL_GENERAL,
    matchBilingualMedicalQuery,
    formatClinicalResponse,
    formatMedicalResponse,
    formatComprehensiveClinicalDetails,
    getComprehensiveClinicalDetails,
    resolveLanguage,
    normalizeClinicalText,
    isTanglish,
    isTamilScript
  };
}
