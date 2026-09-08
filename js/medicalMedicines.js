/**
 * MediGuid - Comprehensive Medical Medicines Catalog (28+ Formulations)
 * Structured bilingual clinical repository featuring realistic photography,
 * safe indications, mechanism of action, precautions, and bilingual labels.
 */

const MEDICAL_MEDICINES_CATALOG = [
  {
    "id": "paracetamol",
    "name": {
      "en": "Paracetamol",
      "ta": "பாரசிட்டமால்"
    },
    "genericName": "Acetaminophen / Paracetamol",
    "brandExamples": [
      "Dolo 650",
      "Calpol",
      "Crocin",
      "Tylenol"
    ],
    "category": {
      "id": "fever_pain",
      "en": "Fever & Pain",
      "ta": "காய்ச்சல் & வலி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Fever reduction and mild to moderate pain relief.",
      "ta": "காய்ச்சலைக் குறைக்கவும், தலைவலி மற்றும் லேசான வலியைப் போக்கவும் பயன்படுகிறது."
    },
    "description": {
      "en": "A widely utilized antipyretic and analgesic medicine suitable for lowering elevated body temperature and managing pain from headaches or muscle soreness.",
      "ta": "உடல் சூட்டைக் குறைக்கவும், தலைவலி மற்றும் தசை வலியை விரைவாகக் குணப்படுத்தவும் பயன்படுத்தப்படும் முதன்மையான மருத்துவ நிவாரணி."
    },
    "uses": {
      "en": [
        "Fever reduction in viral/bacterial illness",
        "Tension and mild headaches",
        "Musculoskeletal body aches",
        "Toothache and dental discomfort"
      ],
      "ta": [
        "காய்ச்சல் மற்றும் உடல் சூடு தணிப்பு",
        "தலைவலி மற்றும் ஒற்றைத் தலைவலி",
        "உடல் சோர்வு மற்றும் தசை வலி",
        "பல் வலி மற்றும் தசைப்பிடிப்பு"
      ]
    },
    "howItWorks": {
      "en": "Acts on the central nervous system to inhibit prostaglandin synthesis and regulate the hypothalamic thermoregulatory center.",
      "ta": "மூளையில் வலி சிக்னல்களைத் தடுத்து, உடலின் வெப்பநிலைக் கட்டுப்பாட்டு மையத்தைச் சமநிலைப்படுத்துகிறது."
    },
    "precautions": {
      "en": [
        "Do not exceed 4,000 mg in 24 hours for adults",
        "Avoid taking multiple paracetamol-containing combination products",
        "Do not consume with heavy alcohol"
      ],
      "ta": [
        "பெரியவர்கள் ஒரு நாளில் 4,000 மி.கிக்கு மேல் உட்கொள்ளக்கூடாது",
        "ஒரே நேரத்தில் பல பாரசிட்டமால் மருந்துகளைச் சேர்க்க வேண்டாம்",
        "மது அருந்துவதைத் தவிர்க்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Generally safe and well-tolerated",
        "Rare allergic rash or itching",
        "Liver toxicity only in severe overdose"
      ],
      "ta": [
        "பரிந்துரைக்கப்பட்ட அளவில் பாதுகாப்பானது",
        "அரிதாக தோல் அரிப்பு",
        "அதிக அளவு உட்கொண்டால் கல்லீரல் பாதிப்பு"
      ]
    },
    "whoShouldConsult": {
      "en": "Individuals with chronic liver disease, severe kidney impairment, or alcohol dependency.",
      "ta": "கல்லீரல் அல்லது தீவிர சிறுநீரக நோய் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 25°C in a cool, dry place away from direct sunlight and moisture.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில், நேரடி வெயில் படாதவாறு வைக்கவும்."
    },
    "conditions": [
      "fever",
      "headache",
      "body pain",
      "toothache",
      "mild pain",
      "kaichal",
      "thala vali",
      "udal vali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_FeverPain%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_FeverPain)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EFever%20%26%20Pain%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EParacetamol%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "ibuprofen",
    "name": {
      "en": "Ibuprofen",
      "ta": "இப்யூபுரூஃபன்"
    },
    "genericName": "Ibuprofen",
    "brandExamples": [
      "Advil",
      "Motrin",
      "Brufen",
      "Combiflam"
    ],
    "category": {
      "id": "fever_pain",
      "en": "Fever & Pain",
      "ta": "காய்ச்சல் & வலி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Anti-inflammatory pain relief for aches, joints, and swelling.",
      "ta": "வீக்கம், மூட்டு வலி மற்றும் தீவிர தசை வலியைத் தணிக்கும் அழற்சி எதிர்ப்பு மருந்து."
    },
    "description": {
      "en": "A Non-Steroidal Anti-Inflammatory Drug (NSAID) that relieves inflammation, joint pain, menstrual cramps, dental pain, and associated fever.",
      "ta": "வலி மற்றும் வீக்கத்தை உண்டாக்கும் வேதிப்பொருட்களைக் கட்டுப்படுத்தும் வலி நிவாரண மருந்து (NSAID)."
    },
    "uses": {
      "en": [
        "Joint pain and inflammatory arthritis",
        "Sprains, strains, and sports injuries",
        "Dental aches and tooth extractions",
        "Menstrual cramp discomfort"
      ],
      "ta": [
        "மூட்டு வலி மற்றும் தசை பிடிப்பு",
        "பல் வலி மற்றும் பல் சிகிச்சை பின் வலி",
        "மாதவிடாய் வலி",
        "சுளுக்கு மற்றும் தசை வீக்கம்"
      ]
    },
    "howItWorks": {
      "en": "Inhibits COX-1 and COX-2 enzymes, decreasing the production of inflammatory prostaglandins.",
      "ta": "உடலில் வலி மற்றும் வீக்கத்தை உருவாக்கும் ப்ரோஸ்டாக்லாண்டின் உற்பத்தியைத் தடுக்கிறது."
    },
    "precautions": {
      "en": [
        "Always take with or immediately after meals or milk",
        "Avoid if you have active stomach ulcers or acid reflux",
        "Not recommended in third trimester of pregnancy"
      ],
      "ta": [
        "எப்போதும் உணவு உண்ட பின்னரே உட்கொள்ள வேண்டும்",
        "வயிற்றுப் புண் (அல்சர்) உள்ளவர்கள் தவிர்க்கவும்",
        "கர்ப்பிணிகள் மருத்துவ ஆலோசனை பெற வேண்டும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild stomach upset or heartburn",
        "Nausea or mild indigestion",
        "Dizziness in rare cases"
      ],
      "ta": [
        "வயிற்று அசௌகரியம் அல்லது நெஞ்செரிச்சல்",
        "லேசான குமட்டல்",
        "செரிமானமின்மை"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with stomach ulcers, cardiovascular disease, hypertension, or kidney impairment.",
      "ta": "வயிற்றுப்புண், உயர் இரத்த அழுத்தம், அல்லது சிறுநீரகக் கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store at room temperature (15°C - 30°C) in a moisture-free area.",
      "ta": "அறை வெப்பநிலையில், ஈரப்பதமில்லாத இடத்தில் சேமிக்கவும்."
    },
    "conditions": [
      "pain",
      "inflammation",
      "joint pain",
      "swelling",
      "period pain",
      "sprain",
      "muutu vali",
      "veekkam"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_FeverPain%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_FeverPain)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EFever%20%26%20Pain%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EIbuprofen%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "aspirin",
    "name": {
      "en": "Aspirin",
      "ta": "ஆஸ்பிரின்"
    },
    "genericName": "Acetylsalicylic Acid (ASA)",
    "brandExamples": [
      "Disprin",
      "Bayer Aspirin",
      "Ecosprin"
    ],
    "category": {
      "id": "fever_pain",
      "en": "Fever & Pain",
      "ta": "காய்ச்சல் & வலி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Relief of acute pain and cardiovascular antiplatelet protection.",
      "ta": "தீவிர தலைவலி நிவாரணம் மற்றும் இரத்தக் கட்டிகளைத் தடுக்கும் கார்டியோ பாதுகாப்பு மருந்து."
    },
    "description": {
      "en": "An established salicylate medication used for mild-to-moderate pain and inflammation, as well as prescribed low-dose antiplatelet prophylaxis for cardiovascular health.",
      "ta": "தலைவலி மற்றும் வீக்கத்தைக் குறைக்கவும், மருத்துவர் பரிந்துரைப்படி இரத்தக் கட்டிகளைத் தடுக்கவும் பயன்படும் மருந்து."
    },
    "uses": {
      "en": [
        "Acute vascular headaches and toothaches",
        "Low-dose physician-guided cardiovascular care",
        "Rheumatic pain under medical direction"
      ],
      "ta": [
        "கடும் தலைவலி நிவாரணம்",
        "மருத்துவர் ஆலோசனைப்படி இதய பாதுகாப்பு",
        "தசை மற்றும் மூட்டு வலிகள்"
      ]
    },
    "howItWorks": {
      "en": "Irreversibly inhibits COX enzyme and thromboxane A2, suppressing platelet aggregation and pain pathways.",
      "ta": "இரத்த அணுக்கள் ஒன்றுகூடி உறைவதைத் தடுத்து, வலி உணர்வுகளைக் குறைக்கிறது."
    },
    "precautions": {
      "en": [
        "Never administer to children or adolescents under 16 (risk of Reye's syndrome)",
        "Take with food and plenty of water",
        "Avoid if you have bleeding disorders"
      ],
      "ta": [
        "16 வயதுக்குட்பட்ட குழந்தைகளுக்கு ஒருபோதும் கொடுக்கக்கூடாது",
        "உணவுக்குப் பின் மட்டுமே சாப்பிடவும்",
        "இரத்தக்கசிவு கோளாறு உள்ளவர்கள் தவிர்க்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Gastric irritation or heartburn",
        "Increased tendency to bleed or bruise easily",
        "Tinnitus with excessive doses"
      ],
      "ta": [
        "வயிற்று எரிச்சல்",
        "எளிதில் இரத்தக்கசிவு ஏற்படுதல்",
        "செரிமானக் கோளாறு"
      ]
    },
    "whoShouldConsult": {
      "en": "Anyone taking blood thinners (anticoagulants), asthmatics, and those with peptic ulcers.",
      "ta": "இரத்தத்தை நீர்க்கச் செய்யும் மருந்து உண்பவர்கள் மற்றும் ஆஸ்துமா உள்ளவர்கள்."
    },
    "storage": {
      "en": "Keep in a tightly closed container away from heat and moisture.",
      "ta": "வெப்பம் மற்றும் ஈரப்பதம் புகாதவாறு இறுக்கமாக மூடி வைக்கவும்."
    },
    "conditions": [
      "headache",
      "pain",
      "heart care",
      "antiplatelet",
      "thala vali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_FeverPain%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_FeverPain)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EFever%20%26%20Pain%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EAspirin%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "mefenamic_acid",
    "name": {
      "en": "Mefenamic Acid",
      "ta": "மெஃபெனாமிக் அமிலம்"
    },
    "genericName": "Mefenamic Acid",
    "brandExamples": [
      "Meftal",
      "Meftal-Spas",
      "Ponstan"
    ],
    "category": {
      "id": "fever_pain",
      "en": "Fever & Pain",
      "ta": "காய்ச்சல் & வலி"
    },
    "prescriptionRequired": true,
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop&q=80",
    "iconType": "blister",
    "purpose": {
      "en": "Relief of menstrual cramps, spasmodic colic, and dental pain.",
      "ta": "மாதவிடாய் வயிற்று வலி மற்றும் தசைப்பிடிப்பு நிவாரணம்."
    },
    "description": {
      "en": "An NSAID specifically indicated for short-term relief of primary dysmenorrhea (period cramps) and spasmodic muscular pelvic pain.",
      "ta": "மாதவிடாயின் போது ஏற்படும் கடுமையான அடிவயிற்று வலி மற்றும் தசைப்பிடிப்பைக் கட்டுப்படுத்தும் மருத்துவர் பரிந்துரை மருந்து."
    },
    "uses": {
      "en": [
        "Primary dysmenorrhea (severe period cramps)",
        "Acute spasmodic muscular cramps",
        "Post-operative and dental pain relief"
      ],
      "ta": [
        "மாதவிடாய் அடிவயிற்று வலி",
        "வயிற்றுத் தசைப்பிடிப்பு மற்றும் பிடிப்பு வலி",
        "பல் அறுவைசிகிச்சைக்குப் பிந்தைய வலி"
      ]
    },
    "howItWorks": {
      "en": "Inhibits prostaglandin synthesis and blocks existing prostaglandins from binding to receptor sites.",
      "ta": "வயிற்றுத் தசைகளைச் சுருங்கச் செய்யும் ப்ரோஸ்டாக்லாண்டின் உற்பத்தியைத் தடுத்து தசைகளைத் தளர்த்துகிறது."
    },
    "precautions": {
      "en": [
        "Prescription medication: take strictly under medical supervision",
        "Do not take for more than 7 consecutive days",
        "Take with food"
      ],
      "ta": [
        "மருத்துவர் பரிந்துரைப்படி மட்டுமே உட்கொள்ளவும்",
        "தொடர்ந்து 7 நாட்களுக்கு மேல் எடுக்கக்கூடாது",
        "உணவுக்குப் பின் உட்கொள்ளவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild stomach cramp or diarrhea",
        "Nausea or drowsiness",
        "Dizziness"
      ],
      "ta": [
        "வயிற்றுப்போக்கு அல்லது குமட்டல்",
        "மயக்கம் அல்லது சோர்வு"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with inflammatory bowel disease, kidney diseases, or peptic ulceration.",
      "ta": "குடல் புண் அல்லது சிறுநீரகக் கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 25°C. Protect from direct heat and light.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில், உலர்ந்த இடத்தில் வைக்கவும்."
    },
    "conditions": [
      "period pain",
      "cramps",
      "stomach cramp",
      "spasm",
      "dysmenorrhea",
      "vayiru vali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_FeverPain%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_FeverPain)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2055)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%225%22%20y%3D%2210%22%20width%3D%22100%22%20height%3D%2270%22%20rx%3D%2210%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EFever%20%26%20Pain%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EMefenamic%20Acid%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "cetirizine",
    "name": {
      "en": "Cetirizine",
      "ta": "செட்டிரிசின்"
    },
    "genericName": "Cetirizine Hydrochloride",
    "brandExamples": [
      "Zyrtec",
      "Cetzine",
      "Alerid",
      "Zyncet"
    ],
    "category": {
      "id": "cold_allergy",
      "en": "Cold & Allergy",
      "ta": "சளி & அலர்ஜி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Allergy relief for sneezing, runny nose, watery eyes, and hives.",
      "ta": "தும்மல், மூக்கு ஒழுகுதல், கண் எரிச்சல் மற்றும் தோல் அலர்ஜியைப் போக்கும் மருந்து."
    },
    "description": {
      "en": "A second-generation antihistamine that selectively blocks peripheral H1 histamine receptors, effectively reducing allergy reactions with lower sedation than first-generation alternatives.",
      "ta": "ஒவ்வாமையால் உண்டாகும் தும்மல், மூக்கில் நீர் வடிதல், கண்கள் சிவத்தல் மற்றும் தோல் தடிப்பு ஆகியவற்றைக் கட்டுப்படுத்தும் ஆன்டி-ஹிஸ்டமைன் மருந்து."
    },
    "uses": {
      "en": [
        "Allergic rhinitis and seasonal pollen allergies",
        "Perennial runny nose and sneezing fits",
        "Urticaria (itchy skin hives and rashes)",
        "Allergic conjunctivitis (itchy, watery eyes)"
      ],
      "ta": [
        "தும்மல் மற்றும் மூக்கு ஒழுகுதல்",
        "தூசி மற்றும் மகரந்த ஒவ்வாமை",
        "தோல் அரிப்பு, தடிப்புகள் (Hives)",
        "கண் அரிப்பு மற்றும் நீர் வடிதல்"
      ]
    },
    "howItWorks": {
      "en": "Blocks histamine from binding to H1 receptors on capillary and sensory nerve cells.",
      "ta": "ஒவ்வாமையை உண்டாக்கும் ஹிஸ்டமைன் வேதிப்பொருளின் செயல்பாட்டைத் தடுத்து நிறுத்துகிறது."
    },
    "precautions": {
      "en": [
        "May cause mild drowsiness in some individuals",
        "Avoid driving or operating machinery if sleepy",
        "Avoid combining with sedatives or alcohol"
      ],
      "ta": [
        "சிலருக்கு லேசான தூக்கத்தை வரவழைக்கலாம்",
        "வாகனம் ஓட்டும் போது எச்சரிக்கையுடன் இருக்கவும்",
        "மது அருந்துவதைத் தவிர்க்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild drowsiness or fatigue",
        "Dry mouth or throat",
        "Occasional headache"
      ],
      "ta": [
        "லேசான தூக்கக் கலக்கம்",
        "வாய் அல்லது தொண்டை வறட்சி",
        "லேசான தலைவலி"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with severe kidney disease, urinary retention, or elderly patients prone to falls.",
      "ta": "சிறுநீரகக் கோளாறு உள்ளவர்கள் அல்லது மூத்த குடிமக்கள்."
    },
    "storage": {
      "en": "Store at 20°C - 25°C. Keep blister strip sealed until immediate use.",
      "ta": "20°C - 25°C வெப்பநிலையில் வைக்கவும். பயன்படுத்தும் வரை மாத்திரைப் பட்டையை பிரிக்க வேண்டாம்."
    },
    "conditions": [
      "cold",
      "allergy",
      "sneezing",
      "runny nose",
      "hives",
      "itching",
      "sali",
      "thummal",
      "arippu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_ColdAllergy%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_ColdAllergy)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECold%20%26%20Allergy%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ECetirizine%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "loratadine",
    "name": {
      "en": "Loratadine",
      "ta": "லொராடடின்"
    },
    "genericName": "Loratadine",
    "brandExamples": [
      "Claritin",
      "Alaspan",
      "Lorfast"
    ],
    "category": {
      "id": "cold_allergy",
      "en": "Cold & Allergy",
      "ta": "சளி & அலர்ஜி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Non-drowsy daytime allergy relief for dust, pollen, and pet dander.",
      "ta": "தூக்கக் கலக்கம் இல்லாத பகல் நேர ஒவ்வாமை மற்றும் தும்மல் நிவாரணி."
    },
    "description": {
      "en": "A long-acting, non-sedating tricyclic antihistamine that provides 24-hour protection against seasonal and environmental allergy triggers.",
      "ta": "பகல் வேளையில் வேலை அல்லது படிப்பைப் பாதிக்காமல், தூக்கம் வராமல் 24 மணி நேர ஒவ்வாமை நிவாரணம் அளிக்கும் மாத்திரை."
    },
    "uses": {
      "en": [
        "Daytime relief for pollen and dust mite allergies",
        "Allergic itchiness and skin rashes",
        "Watery eyes and nasal itching"
      ],
      "ta": [
        "தூக்கமில்லாத பகல் நேர சளி & தும்மல் நிவாரணம்",
        "தோல் அரிப்பு மற்றும் ஒவ்வாமை",
        "மூக்கு மற்றும் தொண்டை நமைச்சல்"
      ]
    },
    "howItWorks": {
      "en": "Selectively antagonizes peripheral H1 histamine receptors with virtually zero blood-brain barrier penetration.",
      "ta": "மூளைக்குச் செல்லாமல் உடலின் புற நரம்புகளில் மட்டும் ஹிஸ்டமைனைத் தடுத்து தூக்கத்தைத் தவிர்க்கிறது."
    },
    "precautions": {
      "en": [
        "Take once daily as indicated on label",
        "Consult physician if managing severe liver cirrhosis",
        "Avoid taking with other antihistamines"
      ],
      "ta": [
        "ஒரு நாளைக்கு ஒரு மாத்திரை மட்டுமே",
        "தீவிர கல்லீரல் பாதிப்பு உள்ளவர்கள் மருத்துவரை அணுகவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Rare dry mouth",
        "Mild headache",
        "Fatigue (very low incidence)"
      ],
      "ta": [
        "அரிதாக வாய் வறட்சி",
        "லேசான தலைவலி"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with hepatic impairment or rare hereditary galactose intolerance.",
      "ta": "கல்லீரல் பாதிப்பு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store between 20°C and 25°C away from excessive humidity.",
      "ta": "குளிர்ந்த, உலர்ந்த அறையில் வைக்கவும்."
    },
    "conditions": [
      "allergy",
      "non drowsy",
      "dust allergy",
      "pollen",
      "sneezing",
      "thummal",
      "sali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_ColdAllergy%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_ColdAllergy)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECold%20%26%20Allergy%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ELoratadine%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "fexofenadine",
    "name": {
      "en": "Fexofenadine",
      "ta": "ஃபெக்சோஃபெனடைன்"
    },
    "genericName": "Fexofenadine Hydrochloride",
    "brandExamples": [
      "Allegra",
      "Fexova",
      "Histafree"
    ],
    "category": {
      "id": "cold_allergy",
      "en": "Cold & Allergy",
      "ta": "சளி & அலர்ஜி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Fast, non-sedating relief for severe seasonal allergies and chronic hives.",
      "ta": "தீவிர தும்மல், தூசி ஒவ்வாமை மற்றும் நாள்பட்ட தோல் தடிப்புகளுக்கான விரைவு நிவாரணி."
    },
    "description": {
      "en": "An advanced active metabolite antihistamine offering proven non-drowsy efficacy for hay fever and chronic idiopathic urticaria.",
      "ta": "தூக்கக் கலக்கம் சிறிதும் ஏற்படுத்தாத நவீன ஆன்டி-ஹிஸ்டமைன் மாத்திரை; தீவிர ஒவ்வாமைக்கு விரைவான பலன் தருகிறது."
    },
    "uses": {
      "en": [
        "Seasonal allergic rhinitis (hay fever)",
        "Chronic idiopathic urticaria (longstanding skin hives)",
        "Persistent nasal congestion caused by allergies"
      ],
      "ta": [
        "கடும் தும்மல் மற்றும் சளி ஒவ்வாமை",
        "நாள்பட்ட தோல் அரிப்பு மற்றும் படை",
        "மூக்கடைப்பு மற்றும் கண் அரிப்பு"
      ]
    },
    "howItWorks": {
      "en": "Directly antagonizes peripheral H1 receptors with zero central nervous system sedation.",
      "ta": "நரம்பு மண்டலத்தில் பாதிப்பின்றி ஒவ்வாமை சமிக்ஞைகளை நேரடியாகச் செயலிழக்கச் செய்கிறது."
    },
    "precautions": {
      "en": [
        "Take with water only; avoid fruit juices (grapefruit, orange, apple) 2 hours before and after as they reduce absorption",
        "Do not take antacids within 2 hours"
      ],
      "ta": [
        "தண்ணீருடன் மட்டுமே முழுங்கவும்; ஆரஞ்சு அல்லது ஆப்பிள் பழச்சாறுகளுடன் உட்கொண்டால் மருந்து வேலை செய்யாது",
        "அசிடிட்டி மருந்துகளுடன் ஒன்றாக எடுக்க வேண்டாம்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild headache",
        "Nausea or upset stomach",
        "Occasional backache"
      ],
      "ta": [
        "லேசான தலைவலி",
        "வயிற்று அசௌகரியம்"
      ]
    },
    "whoShouldConsult": {
      "en": "Elderly patients or individuals with decreased renal function.",
      "ta": "சிறுநீரகக் கோளாறு உள்ளவர்கள் மற்றும் முதியவர்கள்."
    },
    "storage": {
      "en": "Store at 20°C - 25°C. Protect from moisture and excessive sunlight.",
      "ta": "ஈரப்பதம் படாதவாறு பாதுகாப்பாக வைக்கவும்."
    },
    "conditions": [
      "allergy",
      "hay fever",
      "urticaria",
      "hives",
      "skin rash",
      "arippu",
      "sali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_ColdAllergy%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_ColdAllergy)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECold%20%26%20Allergy%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EFexofenadine%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "levocetirizine",
    "name": {
      "en": "Levocetirizine",
      "ta": "லெவோசெட்டிரிசின்"
    },
    "genericName": "Levocetirizine Dihydrochloride",
    "brandExamples": [
      "Xyzal",
      "1-AL",
      "Levocet",
      "Teczine"
    ],
    "category": {
      "id": "cold_allergy",
      "en": "Cold & Allergy",
      "ta": "சளி & அலர்ஜி"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Potent bedtime or evening allergy control for persistent symptoms.",
      "ta": "தீவிர சளி, மூக்கடைப்பு மற்றும் இரவு நேர ஒவ்வாமைக்கான வீரியமிக்க மாத்திரை."
    },
    "description": {
      "en": "The active R-enantiomer of cetirizine, requiring half the dosage to achieve equal or superior antihistaminic receptor occupancy.",
      "ta": "செட்டிரிசினின் தூய வடிவம்; குறைந்த அளவில் உட்கொண்டாலே கடுமையான தும்மல் மற்றும் ஒவ்வாமையை உடனடியாகக் கட்டுப்படுத்துகிறது."
    },
    "uses": {
      "en": [
        "Persistent allergic rhinitis",
        "Nocturnal sneezing and nasal drip",
        "Eczema flare-ups and intense skin itching"
      ],
      "ta": [
        "நாள்பட்ட சளி மற்றும் தும்மல்",
        "இரவு நேர மூக்கடைப்பு",
        "தீவிர தோல் அரிப்பு மற்றும் எக்ஸிமா"
      ]
    },
    "howItWorks": {
      "en": "High affinity binding to H1 receptors suppresses inflammatory cytokine release.",
      "ta": "ஒவ்வாமை செல்களைக் குறிவைத்து தும்மல் மற்றும் திரவ உற்பத்தியை விரைவாக நிறுத்துகிறது."
    },
    "precautions": {
      "en": [
        "Best taken in the evening or before sleep",
        "Avoid alcohol consumption",
        "Check with pharmacist regarding concurrent medications"
      ],
      "ta": [
        "இரவு தூங்குவதற்கு முன் உட்கொள்வது சிறந்தது",
        "மது அருந்துவதைத் தவிர்க்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Drowsiness or sleepiness",
        "Dryness in mouth",
        "Sore throat or fatigue"
      ],
      "ta": [
        "தூக்கக் கலக்கம்",
        "தொண்டை வறட்சி",
        "சோர்வு"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients on hemodialysis or end-stage kidney disease should not use this medication.",
      "ta": "டயாலிசிஸ் அல்லது சிறுநீரக கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 30°C in original packaging away from light.",
      "ta": "30°C-க்கு குறைவான வெப்பநிலையில் அசல் அட்டையில் வைக்கவும்."
    },
    "conditions": [
      "cold",
      "allergy",
      "night allergy",
      "itching",
      "rhinitis",
      "sali",
      "mookkadaippu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_ColdAllergy%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_ColdAllergy)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECold%20%26%20Allergy%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ELevocetirizine%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "dextromethorphan",
    "name": {
      "en": "Dextromethorphan",
      "ta": "டெக்ஸ்ட்ரோமெத்தோர்பன்"
    },
    "genericName": "Dextromethorphan Hydrobromide (DXM)",
    "brandExamples": [
      "Benadryl DR",
      "Robitussin Dry Cough",
      "Ascoril D Plus"
    ],
    "category": {
      "id": "cough",
      "en": "Cough",
      "ta": "இருமல்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80",
    "iconType": "bottle",
    "purpose": {
      "en": "Calms irritating dry, tickly, non-productive coughs.",
      "ta": "சளியற்ற வரட்டு இருமல் மற்றும் தொண்டை நமைச்சலை அடக்கும் இருமல் மருந்து."
    },
    "description": {
      "en": "An oral antitussive that acts centrally on the cough center of the brain to suppress the repetitive reflex triggering dry coughs.",
      "ta": "மூளையில் உள்ள இருமல் கட்டுப்பாட்டு மையத்தில் செயல்பட்டு, தொண்டையை உறுத்தும் வரட்டு இருமலைக் கட்டுப்படுத்தும் சிரப்/மாத்திரை."
    },
    "uses": {
      "en": [
        "Relief of dry, hacking cough without phlegm",
        "Throat irritation triggering involuntary coughing spasms",
        "Nighttime dry cough disturbing sleep"
      ],
      "ta": [
        "சளி இல்லாத வரட்டு இருமல் நிவாரணம்",
        "தொண்டை கிச்சுகிச்சு மற்றும் நமைச்சல்",
        "இரவு தூக்கத்தைக் கெடுக்கும் விடாத இருமல்"
      ]
    },
    "howItWorks": {
      "en": "Suppresses medullary cough center sensitivity without suppressing ciliary activity in the airway.",
      "ta": "மூளையின் இருமல் மையத்தின் தூண்டுதலைக் குறைத்து இருமல் வருவதைத் தடுக்கிறது."
    },
    "precautions": {
      "en": [
        "Do not use for wet coughs with heavy mucus/phlegm (coughing is needed to clear airways)",
        "Do not combine with MAO inhibitors (antidepressants)",
        "Follow measuring cup carefully"
      ],
      "ta": [
        "சளி உள்ள இருமலுக்கு இதைப் பயன்படுத்தக்கூடாது (சளி வெளியேற வேண்டும்)",
        "அளவைக் குறிக்கும் மூடியை மட்டுமே பயன்படுத்தவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild dizziness",
        "Drowsiness",
        "Mild stomach discomfort"
      ],
      "ta": [
        "லேசான தலைசுற்றல்",
        "தூக்கக் கலக்கம்",
        "வயிற்று உப்புசம்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with chronic bronchitis, emphysema, asthma, or those taking psychiatric medications.",
      "ta": "ஆஸ்துமா, மூச்சுக்குழாய் அழற்சி உள்ளவர்கள் அல்லது மன அழுத்த மருந்து உண்பவர்கள்."
    },
    "storage": {
      "en": "Store tightly capped at room temperature. Do not freeze.",
      "ta": "அறை வெப்பநிலையில் இறுக்கமாக மூடி வைக்கவும். உறைய வைக்க வேண்டாம்."
    },
    "conditions": [
      "cough",
      "dry cough",
      "tickly cough",
      "throat tickle",
      "irumal",
      "varattu irumal"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Cough%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Cough)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(150%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2235%22%20y%3D%2210%22%20width%3D%2230%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2225%22%20y%3D%2222%22%20width%3D%2250%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2215%22%20y%3D%2232%22%20width%3D%2270%22%20height%3D%2270%22%20rx%3D%2214%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2226%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%224%22%20fill%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2236%22%20y1%3D%2265%22%20x2%3D%2264%22%20y2%3D%2265%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2253%22%20x2%3D%2250%22%20y2%3D%2277%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECough%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EDextromethorphan%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "guaifenesin",
    "name": {
      "en": "Guaifenesin",
      "ta": "குவாய்பெனெசின்"
    },
    "genericName": "Guaifenesin",
    "brandExamples": [
      "Mucinex",
      "Ascoril Expectorant",
      "Benadryl Chest Congestion"
    ],
    "category": {
      "id": "cough",
      "en": "Cough",
      "ta": "இருமல்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80",
    "iconType": "bottle",
    "purpose": {
      "en": "Thins thick mucus and clears chest congestion in productive coughs.",
      "ta": "நெஞ்சுச் சளியை நீர்த்துப்போகச் செய்து, சளியை எளிதாக வெளியேற்ற உதவும் எக்ஸ்பெக்டரண்ட்."
    },
    "description": {
      "en": "An expectorant that increases respiratory tract fluid volumes, reducing mucus viscosity so coughing can productively expel phlegm from airways.",
      "ta": "நெஞ்சில் கட்டியுள்ள கெட்டியான சளியை இளக்கி, இருமும் போது எளிதில் வெளியேற்ற உதவும் மருத்துவ சிரப்."
    },
    "uses": {
      "en": [
        "Wet, chesty cough with thick bronchial phlegm",
        "Chest congestion associated with common colds",
        "Bronchial mucus clearance"
      ],
      "ta": [
        "நெஞ்சுச் சளி மற்றும் கப இருமல்",
        "தொண்டை மற்றும் நுரையீரலில் கட்டியுள்ள கெட்டிச் சளி வெளியேற்றம்",
        "சளியால் ஏற்படும் மூச்சுத்திணறல்"
      ]
    },
    "howItWorks": {
      "en": "Stimulates gastric vagal receptors, reflexively increasing airway secretions and lowering sputum viscosity.",
      "ta": "சுவாசப் பாதையில் உள்ள திரவ உற்பத்தியை அதிகரித்து, கெட்டியான கபத்தை இளக்கி வெளியேற்றுகிறது."
    },
    "precautions": {
      "en": [
        "Drink plenty of plain water throughout the day (hydration significantly amplifies efficacy)",
        "Do not exceed recommended frequency",
        "Consult doctor if cough lasts more than 7 days"
      ],
      "ta": [
        "மருந்து உட்கொள்ளும் போது நிறைய தண்ணீர் குடிக்க வேண்டும்",
        "இருமல் 7 நாட்களுக்கு மேல் நீடித்தால் மருத்துவரை அணுகவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Nausea or vomiting if taken on empty stomach",
        "Headache",
        "Dizziness"
      ],
      "ta": [
        "வெறும் வயிற்றில் குடித்தால் குமட்டல்",
        "லேசான தலைவலி"
      ]
    },
    "whoShouldConsult": {
      "en": "Persons with chronic cough from smoking, asthma, or cough accompanied by excessive phlegm with blood.",
      "ta": "ஆஸ்துமா உள்ளவர்கள் அல்லது சளியில் இரத்தம் வருபவர்கள்."
    },
    "storage": {
      "en": "Store at 20°C - 25°C away from high humidity.",
      "ta": "ஈரப்பதம் இல்லாத குளிர்ந்த இடத்தில் வைக்கவும்."
    },
    "conditions": [
      "cough",
      "wet cough",
      "phlegm",
      "chest congestion",
      "mucus",
      "irumal",
      "nenju sali"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Cough%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Cough)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(150%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2235%22%20y%3D%2210%22%20width%3D%2230%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2225%22%20y%3D%2222%22%20width%3D%2250%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2215%22%20y%3D%2232%22%20width%3D%2270%22%20height%3D%2270%22%20rx%3D%2214%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2226%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%224%22%20fill%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2236%22%20y1%3D%2265%22%20x2%3D%2264%22%20y2%3D%2265%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2253%22%20x2%3D%2250%22%20y2%3D%2277%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECough%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EGuaifenesin%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "ambroxol",
    "name": {
      "en": "Ambroxol",
      "ta": "ஆம்பிராக்சால்"
    },
    "genericName": "Ambroxol Hydrochloride",
    "brandExamples": [
      "Mucolite",
      "Ambrodil",
      "Flavamed"
    ],
    "category": {
      "id": "cough",
      "en": "Cough",
      "ta": "இருமல்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80",
    "iconType": "bottle",
    "purpose": {
      "en": "Breakdowns stubborn respiratory secretions and eases breathing.",
      "ta": "கெட்டியான கபத்தை உடைத்து சுவாசப்பாதையைச் சீராக்கும் மியூகோலிடிக் மருந்து."
    },
    "description": {
      "en": "A clinically effective mucolytic agent that stimulates pulmonary surfactant synthesis and activates ciliary motility to clear viscous bronchial phlegm.",
      "ta": "சுவாசப்பாதையில் உள்ள கடினமான சளியைத் துண்டாக்கி, நுரையீரலின் இயக்கத்தை எளிதாக்கும் மருந்து."
    },
    "uses": {
      "en": [
        "Acute and chronic broncho-pulmonary diseases",
        "Viscous bronchial secretions in chest infections",
        "Tracheobronchitis congestion relief"
      ],
      "ta": [
        "தீவிர மூச்சுக்குழாய் அழற்சி மற்றும் கபம்",
        "சுவாசக் குழாயில் படிந்துள்ள கெட்டிச் சளி",
        "இருமல் மற்றும் கபக்கட்டு"
      ]
    },
    "howItWorks": {
      "en": "Breaks acid mucopolysaccharide fibers in sputum and enhances pulmonary surfactant secretion.",
      "ta": "கபத்தில் உள்ள கடினமான இழைகளை உடைத்து எளிதாக இருமி வெளியேற்ற வைக்கிறது."
    },
    "precautions": {
      "en": [
        "Take with meals and plenty of water",
        "Use with caution in patients with history of gastric ulcers",
        "Report severe rash immediately"
      ],
      "ta": [
        "உணவுக்குப் பின் குடிக்கவும்",
        "வயிற்றுப்புண் உள்ளவர்கள் எச்சரிக்கையுடன் பயன்படுத்தவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild gastrointestinal symptoms",
        "Altered taste perception",
        "Nausea"
      ],
      "ta": [
        "சுவை மாற்றம்",
        "லேசான குமட்டல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with severe renal impairment or active peptic ulcer disease.",
      "ta": "சிறுநீரகக் கோளாறு அல்லது அல்சர் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store protected from light and below 30°C.",
      "ta": "30°C-க்கு குறைவான வெப்பநிலையில் வெளிச்சம் படாமல் வைக்கவும்."
    },
    "conditions": [
      "cough",
      "mucolytic",
      "bronchitis",
      "chest congestion",
      "phlegm",
      "irumal",
      "kaba kattu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Cough%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Cough)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(150%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2235%22%20y%3D%2210%22%20width%3D%2230%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2225%22%20y%3D%2222%22%20width%3D%2250%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2215%22%20y%3D%2232%22%20width%3D%2270%22%20height%3D%2270%22%20rx%3D%2214%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2226%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%224%22%20fill%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2236%22%20y1%3D%2265%22%20x2%3D%2264%22%20y2%3D%2265%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2253%22%20x2%3D%2250%22%20y2%3D%2277%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ECough%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EAmbroxol%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "antacid",
    "name": {
      "en": "Antacid Liquid / Gel",
      "ta": "ஆன்டாசிட் திரவம் / ஜெல்"
    },
    "genericName": "Aluminum & Magnesium Hydroxide + Simethicone",
    "brandExamples": [
      "Gelusil",
      "Digene",
      "Mylanta",
      "Maalox"
    ],
    "category": {
      "id": "acidity",
      "en": "Acidity",
      "ta": "அமிலத்தன்மை"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    "iconType": "bottle",
    "purpose": {
      "en": "Immediate soothing relief from heartburn, indigestion, and trapped gas.",
      "ta": "நெஞ்செரிச்சல், அசிடிட்டி மற்றும் வயிற்று உப்புசத்தை நொடிகளில் தணிக்கும் மருந்து."
    },
    "description": {
      "en": "A dual-action fast-acting oral suspension that neutralizes excessive gastric hydrochloric acid and breaks up gas bubbles for rapid comfort.",
      "ta": "வயிற்றில் சுரக்கும் அதிகப்படியான அமிலத்தைச் சமநிலைப்படுத்தி, நெஞ்செரிச்சல் மற்றும் வாயுத் தொல்லையை உடனடியாகக் குணப்படுத்தும் ஜெல்/மாத்திரை."
    },
    "uses": {
      "en": [
        "Immediate relief from acute heartburn and sour burps",
        "Acid reflux and burning chest sensation",
        "Stomach bloating, flatulence, and post-meal fullness"
      ],
      "ta": [
        "உடனடி நெஞ்செரிச்சல் மற்றும் புளித்த ஏப்பம் தணிப்பு",
        "அசிடிட்டி மற்றும் தொண்டையில் அமில எதிர்ப்பு",
        "வயிற்று உப்புசம் மற்றும் வாயுத் தொல்லை"
      ]
    },
    "howItWorks": {
      "en": "Chemically neutralizes stomach HCl, forming inert salts, while simethicone collapses gastrointestinal gas foam.",
      "ta": "வயிற்று அமிலத்தை வேதியியல் ரீதியாக நடுநிலையாக்கி, வாயு குமிழ்களை உடைத்து வெளியேற்றுகிறது."
    },
    "precautions": {
      "en": [
        "Shake bottle thoroughly before every dose",
        "Separate administration of other prescription medications by at least 2 hours",
        "Do not rely on antacids continuously for more than 2 weeks without seeing a doctor"
      ],
      "ta": [
        "பயன்படுத்துவதற்கு முன் பாட்டிலை நன்றாகக் குலுக்கவும்",
        "மற்ற மருந்துகளோடு சேர்த்து எடுக்காமல் 2 மணி நேரம் இடைவெளி விடவும்",
        "2 வாரங்களுக்கு மேல் தொடர்ந்தால் மருத்துவரை அணுகவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Chalky taste in mouth",
        "Constipation (from aluminum) or loose stools (from magnesium)",
        "Mild belching"
      ],
      "ta": [
        "சுண்ணக்கட்டி போன்ற சுவை",
        "லேசான மலச்சிக்கல் அல்லது தளர்வான மலம்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with severe chronic kidney failure (aluminum accumulation risk) or electrolyte imbalances.",
      "ta": "சிறுநீரகக் கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Keep bottle tightly closed at room temperature. Avoid freezing.",
      "ta": "இறுக்கமாக மூடி வைக்கவும். உறைய வைக்க வேண்டாம்."
    },
    "conditions": [
      "acidity",
      "heartburn",
      "gas",
      "bloating",
      "indigestion",
      "sour burp",
      "nenjerichal",
      "gas problem"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Acidity%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Acidity)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(150%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2235%22%20y%3D%2210%22%20width%3D%2230%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2225%22%20y%3D%2222%22%20width%3D%2250%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2215%22%20y%3D%2232%22%20width%3D%2270%22%20height%3D%2270%22%20rx%3D%2214%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2226%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%224%22%20fill%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2236%22%20y1%3D%2265%22%20x2%3D%2264%22%20y2%3D%2265%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2253%22%20x2%3D%2250%22%20y2%3D%2277%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EAcidity%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EAntacid%20Liquid%20%2F%20Gel%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "omeprazole",
    "name": {
      "en": "Omeprazole",
      "ta": "ஒமிபிரசோல்"
    },
    "genericName": "Omeprazole",
    "brandExamples": [
      "Prilosec",
      "Omez",
      "Omee",
      "Losec"
    ],
    "category": {
      "id": "acidity",
      "en": "Acidity",
      "ta": "அமிலத்தன்மை"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80",
    "iconType": "capsule",
    "purpose": {
      "en": "Long-lasting 24-hour protection against GERD and acid reflux.",
      "ta": "அசிடிட்டி மற்றும் நெஞ்செரிச்சலை 24 மணி நேரம் தடுக்கும் புரோட்டான் பம்ப் தடுப்பான்."
    },
    "description": {
      "en": "A proton-pump inhibitor (PPI) that significantly decreases basal and stimulated gastric acid production, facilitating ulcer healing and reflux control.",
      "ta": "வயிற்றில் அமிலம் சுரக்கும் அமில பம்புகளை முடக்குவதன் மூலம் 24 மணி நேரமும் அசிடிட்டி வராமல் தடுக்கும் ஆற்றல்மிக்க மருந்து."
    },
    "uses": {
      "en": [
        "Gastroesophageal Reflux Disease (GERD)",
        "Healing of gastric and duodenal peptic ulcers",
        "Prevention of NSAID-associated stomach erosion"
      ],
      "ta": [
        "நெஞ்செரிச்சல் மற்றும் அமில பின்வாங்கல் (GERD)",
        "வயிற்றுப்புண் (அல்சர்) குணமடைதல்",
        "வலி மாத்திரைகளால் வரும் குடல் அரிப்பைத் தடுத்தல்"
      ]
    },
    "howItWorks": {
      "en": "Irreversibly inhibits the H+/K+ ATPase pump situated on the secretory surface of gastric parietal cells.",
      "ta": "வயிற்றுச் சுவரில் உள்ள அமிலம் சுரக்கும் புரோட்டான் பம்புகளின் செயல்பாட்டை நிறுத்துகிறது."
    },
    "precautions": {
      "en": [
        "Take once daily in the morning 30–60 minutes before breakfast",
        "Swallow capsule whole with water; do NOT crush or chew pellets",
        "Prolonged unmonitored use may reduce B12 and calcium absorption"
      ],
      "ta": [
        "காலையில் வெறும் வயிற்றில், காலை உணவுக்கு 30 நிமிடத்திற்கு முன் உட்கொள்ள வேண்டும்",
        "மாத்திரையைக் கடிக்காமல் முழுதாக விழுங்கவும்",
        "நீண்ட காலம் தொடர்ந்து எடுப்பதைத் தவிர்க்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild headache",
        "Diarrhea, abdominal pain, or flatulence",
        "Nausea"
      ],
      "ta": [
        "லேசான தலைவலி",
        "வயிற்று வலி அல்லது மலம் இளகுதல்",
        "குமட்டல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with unintended weight loss, recurrent vomiting with blood, or difficulty swallowing.",
      "ta": "எடை குறைவு, இரத்தம் கலந்த வாந்தி அல்லது விழுங்குவதில் சிரமம் உள்ளவர்கள் உடனே மருத்துவரை அணுகவும்."
    },
    "storage": {
      "en": "Store below 25°C protected from moisture and heat.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில் ஈரப்பதம் படாமல் வைக்கவும்."
    },
    "conditions": [
      "acidity",
      "gerd",
      "ulcer",
      "heartburn",
      "acid reflux",
      "nenjerichal",
      "ulcer",
      "vayiru erichal"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Acidity%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Acidity)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2055)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%225%22%20y%3D%2210%22%20width%3D%22100%22%20height%3D%2270%22%20rx%3D%2210%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EAcidity%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EOmeprazole%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "pantoprazole",
    "name": {
      "en": "Pantoprazole",
      "ta": "பான்டோபிரசோல்"
    },
    "genericName": "Pantoprazole Sodium",
    "brandExamples": [
      "Pantocid",
      "Pan-40",
      "Protonix",
      "Pantodac"
    ],
    "category": {
      "id": "acidity",
      "en": "Acidity",
      "ta": "அமிலத்தன்மை"
    },
    "prescriptionRequired": true,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Clinical treatment for erosive esophagitis and severe acid hypersecretion.",
      "ta": "கடுமையான அமில சுரப்பு மற்றும் குடல் புண்களுக்கான மருத்துவர் பரிந்துரை மருந்து."
    },
    "description": {
      "en": "A delayed-release proton-pump inhibitor engineered for high chemical stability, providing durable suppression of gastric acid with low drug-drug interaction profile.",
      "ta": "வயிற்றுப் புண்களை ஆற்றவும், அதிகப்படியான அமில உற்பத்தியைத் தடுத்து நெஞ்செரிச்சலைக் குணப்படுத்தவும் மருத்துவரால் பரிந்துரைக்கப்படும் மாத்திரை."
    },
    "uses": {
      "en": [
        "Erosive esophagitis treatment and maintenance",
        "Severe peptic and duodenal ulcer healing",
        "Zollinger-Ellison syndrome management"
      ],
      "ta": [
        "கடும் நெஞ்செரிச்சல் மற்றும் உணவுக் குழாய் புண்",
        "வயிற்றுப் புண் (Peptic Ulcer) குணப்படுத்துதல்",
        "மருத்துவர் கண்காணிப்பில் தீவிர அமில சிகிச்சை"
      ]
    },
    "howItWorks": {
      "en": "Binds covalently to the gastric H+/K+ ATPase system, preventing the final step in acid secretion.",
      "ta": "அமில உற்பத்தியின் இறுதிப் படியைத் தடுத்து, வயிற்றுச் சுவரில் அமிலத்தின் தாக்கத்தைக் குறைக்கிறது."
    },
    "precautions": {
      "en": [
        "Prescription medication: strictly adhere to doctor's dosage duration",
        "Take on an empty stomach 30 minutes before first meal",
        "Do not split or crush enteric-coated tablets"
      ],
      "ta": [
        "மருத்துவரின் பரிந்துரைப்படி மட்டுமே உட்கொள்ளவும்",
        "காலை உணவுக்கு 30 நிமிடம் முன் வெறும் வயிற்றில் சாப்பிடவும்",
        "மாத்திரையை உடைக்காமல் முழுதாக விழுங்கவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Headache",
        "Mild diarrhea or nausea",
        "Abdominal discomfort"
      ],
      "ta": [
        "தலைவலி",
        "லேசான வயிற்றுப்போக்கு",
        "குமட்டல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Individuals with chronic liver dysfunction, low magnesium levels, or osteoporosis.",
      "ta": "கல்லீரல் பாதிப்பு அல்லது எலும்பு தேய்மானம் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store at 20°C - 25°C in dry blister packaging.",
      "ta": "குளிர்ந்த, உலர்ந்த இடத்தில் சேமிக்கவும்."
    },
    "conditions": [
      "acidity",
      "pan 40",
      "ulcer",
      "acid reflux",
      "severe acidity",
      "nenjerichal",
      "ulcer"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Acidity%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Acidity)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EAcidity%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EPantoprazole%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "famotidine",
    "name": {
      "en": "Famotidine",
      "ta": "ஃபெமோடிடின்"
    },
    "genericName": "Famotidine",
    "brandExamples": [
      "Pepcid",
      "Famocid",
      "Topcid"
    ],
    "category": {
      "id": "acidity",
      "en": "Acidity",
      "ta": "அமிலத்தன்மை"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Relief and prevention of meal-induced heartburn and acid indigestion.",
      "ta": "காரமான உணவு உண்பதால் ஏற்படும் நெஞ்செரிச்சல் மற்றும் அசிடிட்டி தடுப்பு."
    },
    "description": {
      "en": "A competitive histamine H2-receptor antagonist that reduces meal-stimulated and nocturnal gastric acid secretion quickly.",
      "ta": "வயிற்றில் அமில உற்பத்தியைத் தூண்டும் H2 ரிசப்டார்களைத் தடுத்து விரைவான நிவாரணம் அளிக்கும் மாத்திரை."
    },
    "uses": {
      "en": [
        "Prevention of heartburn triggered by spicy, fatty foods",
        "Nocturnal acid secretion control",
        "Mild to moderate gastroesophageal reflux"
      ],
      "ta": [
        "காரமான உணவுகளால் ஏற்படும் நெஞ்செரிச்சல் தடுப்பு",
        "இரவு நேர அமில சுரப்பு கட்டுப்பாடு",
        "லேசான அசிடிட்டி நிவாரணம்"
      ]
    },
    "howItWorks": {
      "en": "Blocks histamine binding at parietal cell H2 receptors, decreasing acid volume and concentration.",
      "ta": "வயிற்றுச் செல்களை அமிலத்தைச் சுரக்கத் தூண்டும் சிக்னலைத் தடுத்து நிறுத்துகிறது."
    },
    "precautions": {
      "en": [
        "Take 15–60 minutes before meals likely to trigger symptoms",
        "Can be taken with or without food",
        "Dose adjustment required in renal failure"
      ],
      "ta": [
        "நெஞ்செரிச்சல் ஏற்படுத்தும் உணவை உண்பதற்கு 15-60 நிமிடங்களுக்கு முன் உட்கொள்ளவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Headache",
        "Dizziness",
        "Constipation or mild diarrhea"
      ],
      "ta": [
        "தலைவலி",
        "தலைசுற்றல்",
        "மலச்சிக்கல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Persons with kidney insufficiency or heart rhythm concerns.",
      "ta": "சிறுநீரகக் கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 25°C away from excessive moisture.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில் வைக்கவும்."
    },
    "conditions": [
      "acidity",
      "heartburn",
      "indigestion",
      "h2 blocker",
      "nenjerichal",
      "serimanam"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Acidity%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Acidity)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EAcidity%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EFamotidine%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "ors",
    "name": {
      "en": "Oral Rehydration Salts (ORS)",
      "ta": "ஓரல் ரீஹைட்ரேஷன் சால்ட்ஸ் (ORS)"
    },
    "genericName": "WHO-Formula Oral Rehydration Salts",
    "brandExamples": [
      "Electral",
      "WHO ORS",
      "Pedialyte",
      "Hydralyte"
    ],
    "category": {
      "id": "dehydration",
      "en": "Dehydration",
      "ta": "நீரிழப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    "iconType": "sachet",
    "purpose": {
      "en": "Restores vital body fluids and electrolytes lost during diarrhea and vomiting.",
      "ta": "வயிற்றுப்போக்கு, வாந்தி மற்றும் வெயிலால் உடலிலிருந்து வெளியேறிய நீர் மற்றும் தாதுக்களை மீட்டெடுக்கும் உயிர் காக்கும் கரைசல்."
    },
    "description": {
      "en": "The World Health Organization recommended low-osmolarity oral rehydration formula combining optimal sodium, glucose, potassium, and citrate to accelerate intestinal water absorption.",
      "ta": "உலக சுகாதார அமைப்பால் (WHO) அங்கீகரிக்கப்பட்ட உகந்த உப்பு, குளுக்கோஸ் மற்றும் தாதுக்கள் கலந்த, நீரிழப்பைத் தடுக்கும் முதன்மையான கரைசல்."
    },
    "uses": {
      "en": [
        "Rehydration therapy in acute diarrhea and gastroenteritis",
        "Fluid replenishment after vomiting and viral fever",
        "Heat exhaustion, intense sweating, and dehydration prevention"
      ],
      "ta": [
        "வயிற்றுப்போக்கு மற்றும் வாந்தியால் ஏற்படும் நீரிழப்பை சரிசெய்தல்",
        "காய்ச்சலின் போது ஏற்படும் சோர்வு நீங்குதல்",
        "கடும் வெயிலால் ஏற்படும் நீர் இழப்பு மற்றும் மயக்கம் தவிர்த்தல்"
      ]
    },
    "howItWorks": {
      "en": "Leverages the sodium-glucose cotransporter (SGLT-1) mechanism in the intestinal brush border to actively pull water into the bloodstream.",
      "ta": "குடலில் குளுக்கோஸ் மற்றும் சோடியம் இணைந்து செயல்பட்டு, உடலுக்குத் தேவையான நீரை உடனடியாக இரத்தத்தில் உறிஞ்ச வைக்கிறது."
    },
    "precautions": {
      "en": [
        "Dissolve the entire sachet strictly in the exact volume of clean drinking water specified on packet (e.g. 1 liter)",
        "Do NOT boil the prepared solution or add extra sugar/salt",
        "Discard any unused reconstituted solution after 24 hours"
      ],
      "ta": [
        "பாக்கெட்டில் குறிப்பிட்டுள்ள சரியான அளவு சுத்தமான தண்ணீரில் மட்டுமே கலக்க வேண்டும் (எ.கா. 1 லிட்டர்)",
        "கலக்கிய கரைசலைக் கொதிக்க வைக்கவோ, கூடுதல் சர்க்கரை சேர்க்கவோ கூடாது",
        "தயாரித்த 24 மணி நேரத்திற்குப் பின் மீதமுள்ள கரைசலைப் பயன்படுத்தக்கூடாது"
      ]
    },
    "sideEffects": {
      "en": [
        "Extremely safe and physiological",
        "Nausea or vomiting if consumed too rapidly",
        "Hypernatremia only if improperly concentrated with too little water"
      ],
      "ta": [
        "முற்றிலும் பாதுகாப்பானது",
        "அதிவேகமாக மடமடவென்று குடித்தால் லேசான வாந்தி வரலாம்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with complete kidney shutdown, intractable vomiting unable to retain fluids, or severe shock (require IV fluids).",
      "ta": "சிறுநீரகச் செயலிழப்பு உள்ளவர்கள் அல்லது திரவங்களை உள்ளே நிறுத்த முடியாத தீவிர வாந்தி உள்ளவர்கள்."
    },
    "storage": {
      "en": "Keep sealed powder sachets in a dry, cool location. Keep prepared solution covered in clean vessel.",
      "ta": "பாக்கெட்டுகளை உலர்ந்த இடத்தில் வைக்கவும். தயாரித்த கரைசலை சுத்தமாக மூடி வைக்கவும்."
    },
    "conditions": [
      "diarrhea",
      "dehydration",
      "vomiting",
      "weakness",
      "electrolytes",
      "loose motion",
      "vayitrupokku",
      "neerilappu",
      "sorvu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Dehydration%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Dehydration)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(155%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2270%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2220%22%20y1%3D%2220%22%20x2%3D%2270%22%20y2%3D%2220%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%223%203%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2245%22%20cy%3D%2255%22%20r%3D%2216%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.15%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M45%2046%20C45%2046%2036%2057%2036%2062%20C36%2067%2040%2070%2045%2070%20C50%2070%2054%2067%2054%2062%20C54%2057%2045%2046%2045%2046%20Z%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EDehydration%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EOral%20Rehydration%20Salts%20(ORS)%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "zinc_supplement",
    "name": {
      "en": "Zinc Supplements",
      "ta": "துத்தநாகம் (Zinc)"
    },
    "genericName": "Zinc Gluconate / Zinc Sulfate",
    "brandExamples": [
      "Zinconia",
      "Zincovit",
      "Becozinc"
    ],
    "category": {
      "id": "dehydration",
      "en": "Dehydration",
      "ta": "நீரிழப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1550572017-ed200f545dec?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Reduces duration and severity of diarrhea and supports intestinal mucosal immunity.",
      "ta": "வயிற்றுப்போக்கின் கால அளவைக் குறைத்து, குடல் சுவரைப் பலப்படுத்தும் முக்கிய தாதுச்சத்து."
    },
    "description": {
      "en": "An essential trace micronutrient proven by clinical trials to repair intestinal mucosal barrier integrity and boost mucosal immune resistance during gastrointestinal infections.",
      "ta": "வயிற்றுப்போக்கின் போது குடலின் உள்பகுதியைப் பாதுகாத்து, மீண்டும் தொற்று வராமல் நோய் எதிர்ப்பு சக்தியைத் தரும் தாது மருந்து."
    },
    "uses": {
      "en": [
        "Adjunct clinical therapy for acute diarrhea alongside ORS",
        "Shortens diarrheal duration and lowers subsequent recurrence",
        "Strengthens cellular immune response"
      ],
      "ta": [
        "வயிற்றுப்போக்கின் போது ORS உடன் சேர்த்து உட்கொள்ளும் மருந்து",
        "குடல் புண்களை ஆற்றி இயல்பு நிலைக்குக் கொண்டுவருதல்",
        "நோய் எதிர்ப்பு ஆற்றலை அதிகரித்தல்"
      ]
    },
    "howItWorks": {
      "en": "Improves water and electrolyte absorption, accelerates regeneration of gut epithelium, and inhibits cAMP-mediated chloride secretion.",
      "ta": "குடலில் நீர் உறிஞ்சுதலை மேம்படுத்தி, பாதிக்கப்பட்ட குடல் செல்களை விரைவாகப் புதுப்பிக்கிறது."
    },
    "precautions": {
      "en": [
        "Take with or after food to prevent metallic taste or mild nausea",
        "Do not exceed recommended nutritional daily dosage",
        "Separate from iron or antibiotic intake by 2 hours"
      ],
      "ta": [
        "உணவுக்குப் பின் உட்கொள்ளவும்",
        "அளவுக்கு அதிகமாக உட்கொள்ளக்கூடாது"
      ]
    },
    "sideEffects": {
      "en": [
        "Temporary metallic taste in mouth",
        "Mild stomach upset or nausea if taken on empty stomach"
      ],
      "ta": [
        "வாயில் லேசான உலோகச் சுவை",
        "குமட்டல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with copper deficiency or known trace mineral metabolic disorders.",
      "ta": "தாதுச்சத்து வளர்சிதை மாற்றக் கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 25°C in a dry environment away from heat.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில் உலர்ந்த இடத்தில் சேமிக்கவும்."
    },
    "conditions": [
      "diarrhea",
      "zinc",
      "dehydration",
      "immunity",
      "gut health",
      "vayitrupokku"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Dehydration%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Dehydration)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EDehydration%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EZinc%20Supplements%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "loperamide",
    "name": {
      "en": "Loperamide",
      "ta": "லோபராமைடு"
    },
    "genericName": "Loperamide Hydrochloride",
    "brandExamples": [
      "Imodium",
      "Lopamide",
      "Eldoper"
    ],
    "category": {
      "id": "dehydration",
      "en": "Dehydration",
      "ta": "நீரிழப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Slows hyperactive bowel movement in sudden non-infectious diarrhea.",
      "ta": "கட்டுக்கடங்காத வயிற்றுப்போக்கின் போது குடலின் இயக்கத்தைக் கட்டுப்படுத்தும் மருந்து."
    },
    "description": {
      "en": "A synthetic opioid-receptor agonist designed solely to act locally on intestinal circular muscles, slowing gut peristalsis without crossing the blood-brain barrier.",
      "ta": "குடல் இயக்கத்தை மட்டுப்படுத்தி, குடலில் நீர் உறிஞ்சப்பட அதிக நேரம் வழங்கி, மலத்தை திடமாக்கும் அவசரக்கால மருந்து."
    },
    "uses": {
      "en": [
        "Acute traveler's non-invasive diarrhea symptom control",
        "Reduction of stool frequency in chronic irritable bowel diarrhea",
        "Emergency stabilization of watery stools"
      ],
      "ta": [
        "பயணங்களின் போது ஏற்படும் திடீர் வயிற்றுப்போக்கு கட்டுப்பாடு",
        "அடிக்கடி மலம் கழிக்கும் உணர்வைத் தடுத்தல்",
        "நீரிழப்பைக் குறைக்க குடல் இயக்கத்தை மட்டுப்படுத்துதல்"
      ]
    },
    "howItWorks": {
      "en": "Binds to opiate receptors in gut wall, decreasing longitudinal and circular smooth muscle tone to slow intestinal transit.",
      "ta": "குடல் தசைகளின் அதிவேக அசைவுகளைத் தளர்த்தி, கழிவு வெளியேறும் வேகத்தைக் குறைக்கிறது."
    },
    "precautions": {
      "en": [
        "DO NOT USE if you have high fever, bloody dysentery, or bacterial enteritis (trapping pathogens in gut can be dangerous)",
        "Do not use for more than 48 hours without doctor advice",
        "Stay well-hydrated with ORS"
      ],
      "ta": [
        "காய்ச்சல் அல்லது மலத்தில் இரத்தம் கலந்திருந்தால் ஒருபோதும் பயன்படுத்தக்கூடாது",
        "மருத்துவர் ஆலோசனையின்றி 48 மணி நேரத்திற்கு மேல் எடுக்கக்கூடாது",
        "கட்டாயம் ORS குடிக்க வேண்டும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Constipation",
        "Abdominal cramps",
        "Drowsiness or dizziness"
      ],
      "ta": [
        "மலச்சிக்கல்",
        "வயிற்றுப் பிடிப்பு",
        "தலைசுற்றல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Children under 12, patients with ulcerative colitis flare-up, or suspected Clostridium difficile infection.",
      "ta": "குழந்தைகள் மற்றும் குடல் அழற்சி நோய் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store at room temperature (15°C - 30°C) away from moisture.",
      "ta": "அறை வெப்பநிலையில் சேமிக்கவும்."
    },
    "conditions": [
      "diarrhea",
      "loose motion",
      "travelers diarrhea",
      "watery stools",
      "vayitrupokku"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Dehydration%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Dehydration)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EDehydration%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ELoperamide%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "domperidone",
    "name": {
      "en": "Domperidone",
      "ta": "டொம்பெரிடோன்"
    },
    "genericName": "Domperidone",
    "brandExamples": [
      "Motilium",
      "Domstal",
      "Vomisave"
    ],
    "category": {
      "id": "digestive",
      "en": "Digestive",
      "ta": "செரிமானம்"
    },
    "prescriptionRequired": true,
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Relief of nausea, vomiting, feeling of fullness, and gastric reflux.",
      "ta": "குமட்டல், வாந்தி உணர்வு மற்றும் அஜீரணத்தை குணப்படுத்தும் புரோகினெடிக் மருந்து."
    },
    "description": {
      "en": "A peripheral dopamine D2-receptor antagonist that facilitates gastric emptying and enhances upper gastrointestinal motility to prevent nausea.",
      "ta": "வயிற்றை விரைவாகக் காலி செய்து, வாந்தி மற்றும் குமட்டலைத் தடுக்கும் மருத்துவர் பரிந்துரைக்கும் செரிமான மருந்து."
    },
    "uses": {
      "en": [
        "Relief of acute nausea and vomiting symptoms",
        "Epigastric sense of fullness and bloating",
        "Gastric emptying facilitation in diabetic gastroparesis"
      ],
      "ta": [
        "வாந்தி மற்றும் குமட்டல் கட்டுப்பாடு",
        "உணவு செரிக்காமல் நெஞ்சில் நிற்பது போன்ற உணர்வு",
        "வயிற்று உப்புசம் மற்றும் செரிமானக் கோளாறு"
      ]
    },
    "howItWorks": {
      "en": "Antagonizes peripheral dopamine receptors, increasing lower esophageal sphincter tone and gastroduodenal coordination.",
      "ta": "வயிற்றின் கீழ்ப் பகுதி தசைகளைத் தூண்டி உணவை எளிதில் கீழே இறங்கச் செய்து வாந்தியைத் தடுக்கிறது."
    },
    "precautions": {
      "en": [
        "Prescription medication: take strictly as directed by medical practitioner",
        "Take 15–30 minutes before meals",
        "Use lowest effective dose for shortest possible duration"
      ],
      "ta": [
        "மருத்துவர் பரிந்துரைப்படி மட்டுமே உட்கொள்ளவும்",
        "உணவு உண்பதற்கு 15-30 நிமிடங்களுக்கு முன் உட்கொள்ளவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Dry mouth",
        "Mild headache",
        "Rare abdominal cramps"
      ],
      "ta": [
        "வாய் வறட்சி",
        "லேசான தலைவலி",
        "வயிற்றுப் பிடிப்பு"
      ]
    },
    "whoShouldConsult": {
      "en": "Persons with cardiac conduction disorders (prolonged QT interval), severe hepatic impairment, or mechanical bowel obstruction.",
      "ta": "இதயத் துடிப்பு கோளாறு அல்லது கல்லீரல் பாதிப்பு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store at 15°C - 25°C in a dry place shielded from light.",
      "ta": "15°C - 25°C வெப்பநிலையில் வெளிச்சம் படாமல் வைக்கவும்."
    },
    "conditions": [
      "nausea",
      "vomiting",
      "bloating",
      "indigestion",
      "fullness",
      "kumattal",
      "vaanthi",
      "serimanam"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Digestive%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Digestive)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EDigestive%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EDomperidone%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "ondansetron",
    "name": {
      "en": "Ondansetron",
      "ta": "ஆன்டான்செட்ரான்"
    },
    "genericName": "Ondansetron Hydrochloride",
    "brandExamples": [
      "Zofran",
      "Emeset",
      "Vomikind",
      "Ondem"
    ],
    "category": {
      "id": "digestive",
      "en": "Digestive",
      "ta": "செரிமானம்"
    },
    "prescriptionRequired": true,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Powerful clinical prevention and control of severe vomiting and retching.",
      "ta": "தீவிர வாந்தி மற்றும் குமட்டலை உடனடியாக நிறுத்தும் ஆற்றல்மிக்க மருத்துவர் மருந்து."
    },
    "description": {
      "en": "A highly selective 5-HT3 serotonin receptor antagonist widely utilized in hospital and clinical settings to block vomiting signals from the gut and brainstem.",
      "ta": "குடலில் இருந்தும் மூளையில் இருந்தும் வாந்தி எடுக்கும் சமிக்ஞைகளைத் தடுத்து, கடுமையான வாந்தியை உடனடியாகக் கட்டுப்படுத்தும் மருந்து."
    },
    "uses": {
      "en": [
        "Severe viral gastroenteritis vomiting episodes",
        "Post-operative nausea and vomiting control",
        "Chemotherapy / radiation therapy nausea prevention"
      ],
      "ta": [
        "கடுமையான வாந்தி மற்றும் குமட்டல் கட்டுப்பாடு",
        "அறுவை சிகிச்சைக்குப் பின் வரும் வாந்தி தடுத்தல்",
        "உணவு நச்சுத்தன்மையால் ஏற்படும் தொடர் வாந்தி"
      ]
    },
    "howItWorks": {
      "en": "Selectively blocks 5-HT3 receptors on vagal afferents in the gastrointestinal tract and centrally in the chemoreceptor trigger zone.",
      "ta": "செரோடோனின் தூண்டுதலால் வாந்தி மையத்திற்குச் செல்லும் நரம்பு சமிக்ஞைகளைத் தடுத்து நிறுத்துகிறது."
    },
    "precautions": {
      "en": [
        "Prescription medication: take only under doctor's guidance",
        "Orally disintegrating tablets should be dissolved on tongue without chewing",
        "Do not exceed prescribed frequency"
      ],
      "ta": [
        "மருத்துவர் ஆலோசனையின்றி உட்கொள்ளக்கூடாது",
        "நாக்கில் வைத்தால் கரையும் மாத்திரையை மெல்லாமல் கரைய விடவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Constipation",
        "Headache",
        "Warm sensation or flushing"
      ],
      "ta": [
        "மலச்சிக்கல்",
        "தலைவலி",
        "லேசான மயக்கம்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients taking apomorphine, or those with congenital long QT syndrome or severe hypokalemia.",
      "ta": "இதயத் துடிப்பு கோளாறு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store between 20°C and 25°C away from direct sunlight.",
      "ta": "குளிர்ந்த, உலர்ந்த இடத்தில் சேமிக்கவும்."
    },
    "conditions": [
      "vomiting",
      "nausea",
      "severe vomiting",
      "emeset",
      "vaanthi",
      "kumattal"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Digestive%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Digestive)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EDigestive%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EOndansetron%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "vitamin_c",
    "name": {
      "en": "Vitamin C",
      "ta": "வைட்டமின் சி (Vitamin C)"
    },
    "genericName": "Ascorbic Acid",
    "brandExamples": [
      "Limcee",
      "Celin",
      "Redoxon",
      "Ester-C"
    ],
    "category": {
      "id": "vitamins",
      "en": "Vitamins",
      "ta": "வைட்டமின்கள்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1550572017-ed200f545dec?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Immune defense, antioxidant protection, and collagen formation for tissue repair.",
      "ta": "நோய் எதிர்ப்புச் சக்தி, தோல் பாதுகாப்பு மற்றும் திசுக்களைப் புதுப்பிக்கும் முக்கிய வைட்டமின்."
    },
    "description": {
      "en": "A fundamental water-soluble vitamin and potent biological antioxidant vital for white blood cell function, non-heme iron absorption, and wound healing.",
      "ta": "உடலின் நோய் எதிர்ப்பு செல்களைப் பலப்படுத்தவும், காயங்களை விரைவாக ஆற்றவும், இரத்த சோகையைத் தடுக்க இரும்புச்சத்தை உறிஞ்சவும் உதவும் அத்தியாவசிய ஊட்டச்சத்து."
    },
    "uses": {
      "en": [
        "Immune system support during viral recovery",
        "Collagen synthesis for skin, gum, and joint health",
        "Enhanced dietary iron absorption",
        "Cellular defense against oxidative stress"
      ],
      "ta": [
        "நோய் எதிர்ப்பு மண்டலத்தை வலுப்படுத்துதல்",
        "ஈறுகள் மற்றும் தோலின் ஆரோக்கியம்",
        "உணவில் உள்ள இரும்புச்சத்தை உடல் உறிஞ்ச உதவுதல்",
        "காயங்கள் விரைவாகக் குணமாகுதல்"
      ]
    },
    "howItWorks": {
      "en": "Serves as an essential electron donor in enzymatic reactions, neutralizing free radicals and maintaining immune cell redox status.",
      "ta": "ஆன்டி-ஆக்ஸிடன்ட்டாகச் செயல்பட்டு செல்களைப் பாதுகாத்து, நோய் எதிர்ப்பு வெள்ளை இரத்த அணுக்களைத் தூண்டுகிறது."
    },
    "precautions": {
      "en": [
        "Chewable tablets should be chewed thoroughly before swallowing",
        "Do not exceed upper limit of 2,000 mg/day for adults",
        "Excessive doses may cause osmotic diarrhea"
      ],
      "ta": [
        "மெல்லும் மாத்திரைகளை நன்றாக மென்று விழுங்கவும்",
        "ஒரு நாளில் அளவுக்கு அதிகமாக உட்கொள்ள வேண்டாம்"
      ]
    },
    "sideEffects": {
      "en": [
        "Extremely well-tolerated",
        "Mild stomach cramp or loose stools only in very high excess"
      ],
      "ta": [
        "மிகவும் பாதுகாப்பானது",
        "அதிக அளவு எடுத்தால் மட்டுமே லேசான வயிற்றுப்போக்கு"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with history of calcium oxalate kidney stones or hemochromatosis (iron overload).",
      "ta": "சிறுநீரகக் கற்கள் உள்ளவர்கள் மருத்துவ ஆலோசனையுடன் எடுக்கவும்."
    },
    "storage": {
      "en": "Store tightly sealed in original container below 25°C away from heat and light.",
      "ta": "இறுக்கமாக மூடி 25°C-க்கு குறைவான வெப்பநிலையில் வைக்கவும்."
    },
    "conditions": [
      "vitamin c",
      "immunity",
      "cold recovery",
      "antioxidant",
      "skin",
      "noi ethirppu",
      "sathu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Vitamins%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Vitamins)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EVitamins%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EVitamin%20C%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "vitamin_d3",
    "name": {
      "en": "Vitamin D3",
      "ta": "வைட்டமின் டி3 (Vitamin D3)"
    },
    "genericName": "Cholecalciferol",
    "brandExamples": [
      "Calcirol",
      "Uprise-D3",
      "D-Rise",
      "Nature Made D3"
    ],
    "category": {
      "id": "vitamins",
      "en": "Vitamins",
      "ta": "வைட்டமின்கள்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    "iconType": "capsule",
    "purpose": {
      "en": "Supports strong bone density, calcium absorption, and neuromuscular immunity.",
      "ta": "எலும்புகளைப் பலப்படுத்தவும், கால்சியத்தை உறிஞ்சவும் உதவும் சூரிய ஒளி வைட்டமின்."
    },
    "description": {
      "en": "The biologically preferred form of Vitamin D synthesized in skin during sun exposure, crucial for regulating intestinal calcium-phosphate homeostasis and skeletal strength.",
      "ta": "உணவில் உள்ள கால்சியத்தை உடல் உறிஞ்சி எலும்புகளுக்குக் கொண்டு செல்லவும், தசை வலிமையை அதிகரிக்கவும் உதவும் முதன்மையான வைட்டமின்."
    },
    "uses": {
      "en": [
        "Prevention and treatment of Vitamin D deficiency and osteopenia",
        "Optimizing intestinal calcium and phosphorus uptake",
        "Support for muscular strength and innate immunity"
      ],
      "ta": [
        "எலும்பு பலவீனம் மற்றும் தேய்மானத்தைத் தடுத்தல்",
        "உடலில் கால்சியத்தைச் சீராக உறிஞ்சுதல்",
        "தசை வலிமை மற்றும் நோய் எதிர்ப்பு ஆற்றல்"
      ]
    },
    "howItWorks": {
      "en": "Converted in liver and kidneys to calcitriol, which activates nuclear VDR receptors to upregulate calcium transport proteins.",
      "ta": "கல்லீரல் மற்றும் சிறுநீரகத்தில் செயலாக்கம் பெற்று, குடலில் கால்சியத்தைக் கடத்தும் புரதங்களைத் தூண்டுகிறது."
    },
    "precautions": {
      "en": [
        "Best taken with a fat-containing meal for optimal absorption",
        "High-dose weekly capsules (e.g. 60,000 IU) must be taken strictly as scheduled, not daily",
        "Monitor serum levels periodically"
      ],
      "ta": [
        "கொழுப்பு உள்ள உணவுடன் உட்கொண்டால் நன்கு உறிஞ்சப்படும்",
        "60,000 IU போன்ற வாராந்திர மாத்திரைகளை மருத்துவர் சொன்ன அட்டவணைப்படி மட்டுமே எடுக்க வேண்டும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Safe at recommended doses",
        "Hypercalcemia (nausea, weakness, frequent urination) only in chronic toxicity"
      ],
      "ta": [
        "பரிந்துரைக்கப்பட்ட அளவில் பாதுகாப்பானது"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with hypercalcemia, hypervitaminosis D, or severe sarcoidosis.",
      "ta": "இரத்தத்தில் கால்சியம் அளவு அதிகம் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Keep capsules in cool, dry space protected from light and moisture.",
      "ta": "குளிர்ந்த, உலர்ந்த இடத்தில் வெளிச்சம் படாமல் வைக்கவும்."
    },
    "conditions": [
      "vitamin d",
      "bone health",
      "calcium",
      "fatigue",
      "weakness",
      "elumbu",
      "sathu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Vitamins%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Vitamins)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2055)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%225%22%20y%3D%2210%22%20width%3D%22100%22%20height%3D%2270%22%20rx%3D%2210%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2230%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2260%22%20r%3D%229%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.8%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EVitamins%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EVitamin%20D3%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "iron_folic_acid",
    "name": {
      "en": "Iron & Folic Acid",
      "ta": "இரும்புச்சத்து & ஃபோலிக் அமிலம்"
    },
    "genericName": "Ferrous Ascorbate + Folic Acid",
    "brandExamples": [
      "Orofer-XT",
      "Autrin",
      "Livogen",
      "Fefol"
    ],
    "category": {
      "id": "vitamins",
      "en": "Vitamins",
      "ta": "வைட்டமின்கள்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Builds hemoglobin, treats iron-deficiency anemia, and combats chronic fatigue.",
      "ta": "இரத்தத்தில் ஹீமோகுளோபின் அளவை உயர்த்தி, இரத்த சோகை மற்றும் அசதியை நீக்கும் மருந்து."
    },
    "description": {
      "en": "A therapeutic hematinic combining elemental iron in an easily absorbable ascorbate form with folic acid to fuel red blood cell synthesis.",
      "ta": "சிவப்பு இரத்த அணுக்களின் உற்பத்தியை அதிகரித்து, உடலின் அனைத்து உறுப்புகளுக்கும் ஆக்சிஜன் சீராகச் செல்ல உதவும் இரும்புச்சத்து மாத்திரை."
    },
    "uses": {
      "en": [
        "Treatment and prevention of iron-deficiency anemia",
        "Nutritional support in pregnancy, lactation, and heavy menstruation",
        "Relief from chronic lethargy and low stamina"
      ],
      "ta": [
        "இரத்த சோகை (Anemia) சிகிச்சை",
        "கர்ப்ப காலம் மற்றும் பெண்களுக்கு ஏற்படும் இரத்த இழப்பை ஈடுசெய்தல்",
        "நாள்பட்ட சோர்வு, மூச்சிரைப்பு மற்றும் அசதி நீங்குதல்"
      ]
    },
    "howItWorks": {
      "en": "Provides essential core building blocks for heme synthesis in developing erythroblasts.",
      "ta": "சிவப்பு இரத்த அணுக்களில் உள்ள ஹீமோகுளோபின் உருவாகத் தேவையான இரும்பு மற்றும் ஃபோலேட்டை வழங்குகிறது."
    },
    "precautions": {
      "en": [
        "Best taken 1 hour before meals, or with food if stomach upset occurs",
        "Do NOT take concurrently with tea, coffee, milk, or antacids (they inhibit absorption)",
        "Stools may harmlessly turn dark green or black"
      ],
      "ta": [
        "டீ, காபி, அல்லது பாலுடன் சேர்த்து உட்கொள்ளக்கூடாது (இரும்புச்சத்து உறிஞ்சப்படாது)",
        "மலம் கருப்பாக வெளியேறலாம்; இது முற்றிலும் இயல்பானது"
      ]
    },
    "sideEffects": {
      "en": [
        "Dark or black-colored stools (harmless)",
        "Mild constipation or stomach cramping",
        "Occasional nausea"
      ],
      "ta": [
        "மலம் கருமை நிறமாகுதல்",
        "மலச்சிக்கல் அல்லது லேசான குமட்டல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Individuals with hemochromatosis, hemosiderosis, or non-iron deficiency anemias (e.g. thalassemia).",
      "ta": "தலசீமியா அல்லது அதிக இரும்புச்சத்து உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store protected from moisture and direct light below 25°C.",
      "ta": "ஈரப்பதம் மற்றும் வெளிச்சம் படாமல் 25°C-க்கு கீழ் வைக்கவும்."
    },
    "conditions": [
      "iron",
      "anemia",
      "hemoglobin",
      "fatigue",
      "weakness",
      "rathinam",
      "sorvu",
      "asathi"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Vitamins%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Vitamins)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EVitamins%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EIron%20%26%20Folic%20Acid%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "calcium_vitamin_d",
    "name": {
      "en": "Calcium with Vitamin D",
      "ta": "கால்சியம் & வைட்டமின் டி"
    },
    "genericName": "Calcium Carbonate / Citrate + Vitamin D3",
    "brandExamples": [
      "Shelcal",
      "Cipcal",
      "Caltrate",
      "Gemcal"
    ],
    "category": {
      "id": "vitamins",
      "en": "Vitamins",
      "ta": "வைட்டமின்கள்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Maintains strong skeletal architecture, teeth, and prevents bone thinning.",
      "ta": "எலும்புகள், பற்களைப் பலப்படுத்தவும், எலும்பு முறிவு மற்றும் தேய்மானத்தைத் தடுக்கவும் உதவும் மருந்து."
    },
    "description": {
      "en": "A foundational bone-health supplement providing bioavailable elemental calcium paired with Vitamin D3 to maximize intestinal absorption.",
      "ta": "எலும்புகளின் அடர்த்தியைப் பராமரிக்கவும், வயதான காலத்தில் ஏற்படும் மூட்டு மற்றும் எலும்புத் தேய்மானத்தைத் தடுக்கவும் தேவையான கால்சியம் சத்து."
    },
    "uses": {
      "en": [
        "Management of osteoporosis and bone fragility",
        "Fulfills heightened calcium requirements in pregnancy and aging",
        "Prevention of hypocalcemia and muscle tetany"
      ],
      "ta": [
        "எலும்புத் தேய்மானம் (Osteoporosis) தடுத்தல்",
        "மூட்டு மற்றும் பல் உறுதி",
        "வயதான காலத்தில் எலும்பு முறிவு அபாயத்தைக் குறைத்தல்"
      ]
    },
    "howItWorks": {
      "en": "Replenishes intracellular and extracellular calcium pools required for hydroxyapatite mineral lattice formation in bone matrix.",
      "ta": "எலும்பு மேட்ரிக்ஸில் படிந்து எலும்புகளுக்குக் கடினத்தன்மையையும் உறுதியையும் அளிக்கிறது."
    },
    "precautions": {
      "en": [
        "Calcium carbonate should be taken with meals for proper acid digestion",
        "Drink adequate water daily to support renal excretion",
        "Separate from thyroid medications (levothyroxine) by 4 hours"
      ],
      "ta": [
        "உணவு உண்ணும் போது அல்லது உண்ட பின் சாப்பிடவும்",
        "தைராய்டு மாத்திரை உண்பவர்கள் 4 மணி நேர இடைவெளி விட வேண்டும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Constipation",
        "Mild bloating or gas",
        "Dry mouth"
      ],
      "ta": [
        "மலச்சிக்கல்",
        "லேசான வாயுத் தொல்லை"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with hypercalcemia, severe kidney stones (nephrolithiasis), or renal failure.",
      "ta": "சிறுநீரகக் கற்கள் உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store below 25°C in a dry place. Keep bottle tightly closed.",
      "ta": "25°C-க்கு குறைவான வெப்பநிலையில் மூடி வைக்கவும்."
    },
    "conditions": [
      "calcium",
      "bone",
      "joints",
      "teeth",
      "osteoporosis",
      "elumbu",
      "muuttu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Vitamins%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Vitamins)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EVitamins%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ECalcium%20with%20Vitamin%20D%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "vitamin_b12",
    "name": {
      "en": "Vitamin B12",
      "ta": "வைட்டமின் பி12 (Vitamin B12)"
    },
    "genericName": "Methylcobalamin / Cyanocobalamin",
    "brandExamples": [
      "Neurobion",
      "Mecovon",
      "Nurokind",
      "Methycobal"
    ],
    "category": {
      "id": "vitamins",
      "en": "Vitamins",
      "ta": "வைட்டமின்கள்"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1550572017-ed200f545dec?w=600&auto=format&fit=crop&q=80",
    "iconType": "pill",
    "purpose": {
      "en": "Nerve regeneration, brain cognition, and peripheral neuropathy relief.",
      "ta": "நரம்பு மண்டலப் பாதுகாப்பு, கை கால் மரத்துப்போதல் மற்றும் சோர்வு நிவாரணி."
    },
    "description": {
      "en": "The neuro-active coenzyme form of Vitamin B12 critical for myelin sheath maintenance, nerve cell repair, and red blood cell maturation.",
      "ta": "நரம்புகளைச் சுற்றியுள்ள பாதுகாப்பு உறையைப் பராமரிக்கவும், கை கால் மறத்துப் போதல், கூச்சம் மற்றும் நரம்பு வலிகளைப் போக்கவும் உதவும் மருந்து."
    },
    "uses": {
      "en": [
        "Relief from peripheral neuropathy, tingling, and numbness in feet and hands",
        "Supports memory, cognitive clarity, and energy synthesis",
        "Correction of megaloblastic anemia"
      ],
      "ta": [
        "கை, கால்களில் மரத்துப்போதல் மற்றும் எரிச்சல் நீங்குதல்",
        "நரம்புத் தளர்ச்சி மற்றும் நரம்பு மண்டலப் பலவீனம்",
        "மூளை சுறுசுறுப்பு மற்றும் நினைவாற்றல் மேம்பாடு"
      ]
    },
    "howItWorks": {
      "en": "Acts as an essential cofactor for methionine synthase, driving myelin protein synthesis and homocysteine remethylation.",
      "ta": "நரம்பு இழைகளைப் பாதுகாக்கும் மயலின் உறையை உருவாக்கி நரம்பு சமிக்ஞைகளைச் சீராக்குகிறது."
    },
    "precautions": {
      "en": [
        "Take with a glass of water after food",
        "Particularly recommended for strict vegetarians and vegans at risk of dietary deficiency",
        "Safe for long-term daily supplementation"
      ],
      "ta": [
        "உணவுக்குப் பின் தண்ணீருடன் உட்கொள்ளவும்",
        "சைவ உணவு உண்பவர்களுக்கு மிகவும் அத்தியாவசியமானது"
      ]
    },
    "sideEffects": {
      "en": [
        "Extremely safe; excess is naturally eliminated in urine",
        "Rare mild skin flushing or transient diarrhea"
      ],
      "ta": [
        "முற்றிலும் பாதுகாப்பானது; கூடுதல் அளவு சிறுநீரில் வெளியேறும்"
      ]
    },
    "whoShouldConsult": {
      "en": "Individuals with hereditary optic nerve atrophy (Leber's disease).",
      "ta": "கண் நரம்பு பாதிப்பு உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store protected from direct sunlight and moisture below 25°C.",
      "ta": "வெளிச்சம் படாதவாறு 25°C-க்கு கீழ் சேமிக்கவும்."
    },
    "conditions": [
      "vitamin b12",
      "nerve pain",
      "numbness",
      "tingling",
      "fatigue",
      "narambu",
      "kai kaal marathuppovadhu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_Vitamins%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_Vitamins)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(145%2C%2060)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%2280%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2028%20L50%2028%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate(-25%2040%2028)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.2%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2285%22%20cy%3D%2245%22%20r%3D%2212%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3EVitamins%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EVitamin%20B12%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "povidone_iodine",
    "name": {
      "en": "Povidone Iodine Ointment",
      "ta": "போவிடோன் அயோடின் களிம்பு"
    },
    "genericName": "Povidone Iodine 5% / 10%",
    "brandExamples": [
      "Betadine",
      "Cipladine",
      "Wokadine"
    ],
    "category": {
      "id": "skin_care",
      "en": "Skin Care",
      "ta": "தோல் பராமரிப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1608248597359-0a672f7c6be7?w=600&auto=format&fit=crop&q=80",
    "iconType": "tube",
    "purpose": {
      "en": "Broad-spectrum antiseptic protection to prevent infection in cuts, scrapes, and burns.",
      "ta": "வெட்டுக்காயங்கள், சிராய்ப்புகள் மற்றும் தீக்காயங்களில் கிருமித் தொற்று ஏற்படாமல் தடுக்கும் களிம்பு."
    },
    "description": {
      "en": "A trusted topical broad-spectrum microbicide that slowly releases elemental iodine to destroy bacteria, fungi, viruses, and bacterial spores on damaged skin.",
      "ta": "தோலில் ஏற்படும் காயங்கள், வெட்டுகள் மற்றும் சிராய்ப்புகளில் பாக்டீரியா மற்றும் பூஞ்சை தொற்றுக்கள் ஏற்படாமல் பாதுகாக்கும் மிகச் சிறந்த ஆன்டிசெப்டிக் மருந்து."
    },
    "uses": {
      "en": [
        "First-aid antiseptic treatment for minor cuts, scrapes, and grazes",
        "Infection prophylaxis for superficial burns and blisters",
        "Post-procedural wound dressing care"
      ],
      "ta": [
        "சிறு வெட்டுக்காயங்கள் மற்றும் சிராய்ப்புகளுக்கு முதலுதவி",
        "லேசான தீக்காயங்களில் சீழ் பிடிக்காமல் தடுத்தல்",
        "அறுவைசிகிச்சைக் காயங்களைப் பராமரித்தல்"
      ]
    },
    "howItWorks": {
      "en": "Iodine penetrates pathogen cell walls, oxidizing key structural proteins, nucleotides, and fatty acids to cause microbial death.",
      "ta": "கிருமிகளின் செல் சுவருக்குள் ஊடுருவி, அவற்றின் புரதங்களை அழித்து நுண்ணுயிரிகளை உடனடியாகக் கொல்கிறது."
    },
    "precautions": {
      "en": [
        "For external topical use on skin only; do NOT ingest or apply inside eyes",
        "Clean and gently dry the wound area prior to application",
        "Cover with sterile gauze if necessary"
      ],
      "ta": [
        "தோலின் மீது மட்டுமே பூச வேண்டும்; கண்களிலோ வாயிலோ படக்கூடாது",
        "காயத்தைச் சுத்தமாகத் துடைத்த பின் தடவவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Temporary brown staining of skin (washes out with water)",
        "Mild transient burning or stinging sensation on open skin"
      ],
      "ta": [
        "தோலில் தற்காலிக பழுப்பு நிறக் கறை (தண்ணீரில் அகலும்)",
        "லேசான எரிச்சல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with thyroid disorders (hypo/hyperthyroidism) or iodine allergies.",
      "ta": "தைராய்டு கோளாறு அல்லது அயோடின் ஒவ்வாமை உள்ளவர்கள்."
    },
    "storage": {
      "en": "Keep tube tightly capped below 25°C. Do not freeze.",
      "ta": "மூடியை இறுக்கமாக மூடி 25°C-க்கு கீழ் வைக்கவும்."
    },
    "conditions": [
      "cut",
      "wound",
      "scrape",
      "burn",
      "antiseptic",
      "first aid",
      "kaayam",
      "theekayam"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_SkinCare%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_SkinCare)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(140%2C%2050)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M10%2070%20L85%2022%20L102%2036%20L28%2085%20Z%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2294%22%20y%3D%2220%22%20width%3D%2216%22%20height%3D%2224%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%20transform%3D%22rotate(32%20102%2032)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2238%22%20y1%3D%2260%22%20x2%3D%2270%22%20y2%3D%2238%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ESkin%20Care%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EPovidone%20Iodine%20Ointment%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "calamine_lotion",
    "name": {
      "en": "Calamine Lotion",
      "ta": "கேலமைன் லோஷன்"
    },
    "genericName": "Calamine + Zinc Oxide",
    "brandExamples": [
      "Caladryl",
      "Lacto Calamine",
      "Calamine BP"
    ],
    "category": {
      "id": "skin_care",
      "en": "Skin Care",
      "ta": "தோல் பராமரிப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    "iconType": "bottle",
    "purpose": {
      "en": "Cooling, soothing relief for itchy skin rashes, insect bites, and sunburn.",
      "ta": "தோல் அரிப்பு, பூச்சிக் கடி, வேர்க்குரு மற்றும் வெயில் எரிச்சலைத் தணிக்கும் குளிர்ச்சி தரும் லோஷன்."
    },
    "description": {
      "en": "A gentle topical soothing suspension containing zinc oxide and ferric oxide that cools, calms pruritus, and creates a protective drying shield over weeping skin.",
      "ta": "தோலில் ஏற்படும் அரிப்பு, கொசுக்கடி மற்றும் வேர்க்குருவுக்கு இதமளித்து, தோலைக் குளிர்ச்சியாக வைத்து அரிப்பைப் போக்கும் லோஷன்."
    },
    "uses": {
      "en": [
        "Relief of intense itching from mosquito and insect bites",
        "Soothing chickenpox blisters and heat rash (prickly heat)",
        "Calming sunburn erythema and poison ivy dermatitis"
      ],
      "ta": [
        "கொசு மற்றும் பூச்சிக் கடியால் உண்டாகும் வீக்கம் மற்றும் அரிப்பு",
        "வேர்க்குரு, அம்மைத் தடிப்புகள் மற்றும் அரிப்பு",
        "வெயில் எரிச்சல் மற்றும் தோல் ஒவ்வாமை"
      ]
    },
    "howItWorks": {
      "en": "Evaporates on skin to exert a physical cooling effect, while zinc oxide exerts mild astringent, antiseptic, and protective properties.",
      "ta": "தோலில் பூசியதும் ஆவியாகி குளிர்ச்சியூட்டி, துத்தநாகத்தின் மூலம் நமைச்சலையும் வீக்கத்தையும் குறைக்கிறது."
    },
    "precautions": {
      "en": [
        "Shake bottle vigorously before pouring onto cotton pad",
        "External use only; avoid mucous membranes and eyes",
        "Allow to dry naturally on the skin surface"
      ],
      "ta": [
        "பயன்படுத்துவதற்கு முன் பாட்டிலை நன்றாகக் குலுக்கவும்",
        "தோலில் தடவி காற்றில் உலர விடவும்",
        "கண்களில் படாமல் பார்த்துக் கொள்ளவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Remarkably safe and non-toxic",
        "Mild skin dryness with repeated application"
      ],
      "ta": [
        "முற்றிலும் பாதுகாப்பானது",
        "தொடர்ந்து பூசினால் லேசான தோல் வறட்சி"
      ]
    },
    "whoShouldConsult": {
      "en": "Persons with known hypersensitivity to calamine or zinc preparations.",
      "ta": "தோல் அலர்ஜி உள்ளவர்கள்."
    },
    "storage": {
      "en": "Store tightly sealed at room temperature in a dry location.",
      "ta": "அறை வெப்பநிலையில் இறுக்கமாக மூடி வைக்கவும்."
    },
    "conditions": [
      "skin rash",
      "itching",
      "insect bite",
      "sunburn",
      "prickly heat",
      "arippu",
      "verkkuru",
      "poochi kadi"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_SkinCare%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_SkinCare)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(150%2C%2045)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2235%22%20y%3D%2210%22%20width%3D%2230%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2225%22%20y%3D%2222%22%20width%3D%2250%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%2320B2AA%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2215%22%20y%3D%2232%22%20width%3D%2270%22%20height%3D%2270%22%20rx%3D%2214%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2226%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%224%22%20fill%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2236%22%20y1%3D%2265%22%20x2%3D%2264%22%20y2%3D%2265%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2253%22%20x2%3D%2250%22%20y2%3D%2277%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ESkin%20Care%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3ECalamine%20Lotion%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "clotrimazole_cream",
    "name": {
      "en": "Clotrimazole Cream",
      "ta": "குளோட்ரிமாசோல் கிரீம்"
    },
    "genericName": "Clotrimazole 1%",
    "brandExamples": [
      "Candid",
      "Canesten",
      "Lotrimin",
      "Surfaz"
    ],
    "category": {
      "id": "skin_care",
      "en": "Skin Care",
      "ta": "தோல் பராமரிப்பு"
    },
    "prescriptionRequired": false,
    "image": "https://images.unsplash.com/photo-1608248597359-0a672f7c6be7?w=600&auto=format&fit=crop&q=80",
    "iconType": "tube",
    "purpose": {
      "en": "Targeted eradication of fungal skin infections like ringworm and athlete's foot.",
      "ta": "படை, தேமல், கால் இடுக்கு அரிப்பு மற்றும் பூஞ்சைத் தொற்றை அழிக்கும் பூஞ்சை எதிர்ப்பு கிரீம்."
    },
    "description": {
      "en": "A broad-spectrum imidazole antifungal agent that inhibits fungal ergosterol biosynthesis, clearing common dermatophyte and yeast infections on skin folds.",
      "ta": "தோலில் படரும் வட்டப் படை, கால் விரல் இடுக்குகளில் ஏற்படும் அரிப்பு மற்றும் பூஞ்சைத் தொற்றுகளை வேரிலிருந்து அழிக்கும் கிரீம்."
    },
    "uses": {
      "en": [
        "Tinea corporis (ringworm of the body)",
        "Tinea cruris (jock itch in groin and inner thighs)",
        "Tinea pedis (athlete's foot between toes)",
        "Cutaneous candidiasis (sweat-rash fungal infection)"
      ],
      "ta": [
        "படர்தாமரை (Ringworm / வட்டப் படை)",
        "கால் விரல் இடுக்கு மற்றும் தொடை இடுக்கு அரிப்பு (Jock Itch)",
        "வியர்வையால் ஏற்படும் பூஞ்சை நமைச்சல் மற்றும் தேமல்"
      ]
    },
    "howItWorks": {
      "en": "Inhibits cytochrome P450 14α-demethylase, disrupting fungal cell membrane permeability and viability.",
      "ta": "பூஞ்சை செல்களின் பாதுகாப்புச் சுவரை உடைத்து, பூஞ்சைகளை முழுமையாக அழிக்கிறது."
    },
    "precautions": {
      "en": [
        "Wash and thoroughly dry the affected area before applying a thin layer twice daily",
        "Continue treatment for 1–2 weeks AFTER visible symptoms clear to prevent relapse",
        "Do not scratch infected areas"
      ],
      "ta": [
        "பாதிக்கப்பட்ட இடத்தை சுத்தமாகக் கழுவி நன்கு துடைத்த பின் மெல்லிய அடுக்காகப் பூசவும்",
        "அரிப்பு நின்ற பிறகும் பூஞ்சை மீண்டும் வராமல் இருக்க 1-2 வாரங்கள் தொடர்ந்து பூசவும்"
      ]
    },
    "sideEffects": {
      "en": [
        "Mild skin redness, burning, or stinging at application site",
        "Rare localized contact irritation"
      ],
      "ta": [
        "பூசிய இடத்தில் லேசான எரிச்சல் அல்லது சிவத்தல்"
      ]
    },
    "whoShouldConsult": {
      "en": "Patients with widespread infection, nail bed involvement, or secondary bacterial infection with pus.",
      "ta": "காயத்தில் சீழ் பிடித்திருந்தால் அல்லது உடல் முழுவதும் பரவியிருந்தால் மருத்துவரை அணுகவும்."
    },
    "storage": {
      "en": "Store below 25°C. Keep tube capped after each application.",
      "ta": "25°C-க்கு கீழ் சேமிக்கவும். பயன்படுத்திய பின் மூடியை மூடவும்."
    },
    "conditions": [
      "fungal",
      "ringworm",
      "jock itch",
      "athletes foot",
      "rash",
      "padai",
      "themal",
      "arippu"
    ],
    "fallbackSvg": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20240%22%20width%3D%22400%22%20height%3D%22240%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg_SkinCare%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23EAF7F4%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23D2EFE8%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22240%22%20fill%3D%22url(%23bg_SkinCare)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%2240%22%20r%3D%2270%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22%2320B2AA%22%20opacity%3D%220.06%22%2F%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%3Cg%20transform%3D%22translate(140%2C%2050)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M10%2070%20L85%2022%20L102%2036%20L28%2085%20Z%22%20fill%3D%22%23FFFFFF%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Crect%20x%3D%2294%22%20y%3D%2220%22%20width%3D%2216%22%20height%3D%2224%22%20rx%3D%223%22%20fill%3D%22%23168F8A%22%20transform%3D%22rotate(32%20102%2032)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2238%22%20y1%3D%2260%22%20x2%3D%2270%22%20y2%3D%2238%22%20stroke%3D%22%2320B2AA%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%22120%22%20y%3D%22162%22%20width%3D%22160%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22178%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23168F8A%22%3ESkin%20Care%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%22200%22%20y%3D%22208%22%20text-anchor%3D%22middle%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20'Segoe%20UI'%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%20fill%3D%22%23102A43%22%3EClotrimazole%20Cream%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
  "id": "amoxicillin",
  "name": {
    "en": "Amoxicillin",
    "ta": "அமாக்சிசிலின்"
  },
  "genericName": "Amoxicillin Trihydrate",
  "brandExamples": [
    "Mox 500",
    "Novamox",
    "Amoxil",
    "Augmentin"
  ],
  "category": {
    "id": "antibiotics",
    "en": "Antibiotics",
    "ta": "நுண்ணுயிர் எதிர்ப்பிகள்"
  },
  "prescriptionRequired": true,
  "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80",
  "iconType": "pill",
  "purpose": {
    "en": "Broad-spectrum penicillin-class antibiotic for treating bacterial infections.",
    "ta": "பாக்டீரியா தொற்றுகளுக்கு சிகிச்சையளிக்கப் பயன்படும் நுண்ணுயிர் எதிர்ப்பு மருந்து."
  },
  "description": {
    "en": "A prescription penicillin-type antibiotic that fights bacterial infections in the ear, nose, throat, chest, urinary tract, and skin.",
    "ta": "காது, தொண்டை, மார்பு மற்றும் சிறுநீர் பாதை பாக்டீரியா தொற்றுகளுக்கு சிகிச்சையளிக்க மருத்துவரால் பரிந்துரைக்கப்படும் மருந்து."
  },
  "uses": {
    "en": [
      "Streptococcal pharyngitis & tonsillitis",
      "Lower respiratory tract bacterial infections",
      "Acute bacterial otitis media",
      "Urinary tract bacterial infections"
    ],
    "ta": [
      "தொண்டை அழற்சி மற்றும் டான்சில் தொற்று",
      "நுரையீரல் பாக்டீரியா தொற்று",
      "நடுக்காது தொற்று",
      "சிறுநீர்ப்பாதை தொற்று"
    ]
  },
  "howItWorks": {
    "en": "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins, causing lysis and destruction of bacteria.",
    "ta": "பாக்டீரியாக்களின் செல் சுவர் உருவாக்கத்தைத் தடுத்து அவற்றை அழிக்கிறது."
  },
  "precautions": {
    "en": [
      "Do not use if allergic to penicillin or beta-lactams",
      "Complete the full course even if feeling better",
      "Take with food to minimize gastric upset"
    ],
    "ta": [
      "பென்சிலின் ஒவ்வாமை உள்ளவர்கள் உட்கொள்ளக்கூடாது",
      "மருத்துவர் கூறிய முழு நாட்களும் மருந்தை முடிக்க வேண்டும்",
      "உணவுக்குப் பின் உட்கொள்ளவும்"
    ]
  },
  "sideEffects": {
    "en": [
      "Mild diarrhea or loose stools",
      "Nausea or stomach discomfort",
      "Skin rash (seek immediate medical attention if allergic)"
    ],
    "ta": [
      "லேசான வயிற்றுப்போக்கு",
      "குமட்டல்",
      "தோல் அரிப்பு"
    ]
  },
  "whoShouldConsult": {
    "en": "Patients with penicillin allergy, asthma, kidney dysfunction, or mononucleosis.",
    "ta": "பென்சிலின் ஒவ்வாமை, ஆஸ்துமா அல்லது சிறுநீரக பாதிப்பு உள்ளவர்கள்."
  },
  "storage": {
    "en": "Store below 25°C in a dry place. Keep out of reach of children.",
    "ta": "25°C-க்கு குறைவான வெப்பநிலையில் உலர்ந்த இடத்தில் வைக்கவும்."
  },
  "conditions": [
    "bacterial infection",
    "ear infection",
    "throat infection",
    "strep throat",
    "chest infection",
    "bronchitis",
    "amoxicillin",
    "mox",
    "augmentin"
  ]
},
  {
  "id": "azithromycin",
  "name": {
    "en": "Azithromycin",
    "ta": "அசித்ரோமைசின்"
  },
  "genericName": "Azithromycin",
  "brandExamples": [
    "Azee 500",
    "Azithral",
    "Zithromax"
  ],
  "category": {
    "id": "antibiotics",
    "en": "Antibiotics",
    "ta": "நுண்ணுயிர் எதிர்ப்பிகள்"
  },
  "prescriptionRequired": true,
  "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
  "iconType": "pill",
  "purpose": {
    "en": "Macrolide antibiotic for respiratory, skin, and ear bacterial infections.",
    "ta": "சுவாசப் பாதை மற்றும் தோல் பாக்டீரியா தொற்றுகளுக்கான மேக்ரோலைடு நுண்ணுயிர் எதிர்ப்பி மருந்து."
  },
  "description": {
    "en": "Convenient once-daily antibiotic regimen that inhibits bacterial protein synthesis.",
    "ta": "பாக்டீரியா புரத உற்பத்தியைத் தடுத்து தொற்றைக் கட்டுப்படுத்தும் ஒரு நாள் ஒரு முறை உட்கொள்ளும் நுண்ணுயிர் எதிர்ப்பு மருந்து."
  },
  "uses": {
    "en": [
      "Acute bacterial sinusitis & bronchitis",
      "Community-acquired pneumonia",
      "Pharyngitis/tonsillitis in penicillin-allergic patients",
      "Skin and soft tissue infections"
    ],
    "ta": [
      "சைனஸ் மற்றும் மூச்சுக்குழாய் அழற்சி",
      "நிமோனியா",
      "தொண்டை தொற்று",
      "தோல் தொற்று"
    ]
  },
  "howItWorks": {
    "en": "Binds reversibly to the 50S ribosomal subunit of susceptible bacteria, inhibiting transpeptidation and protein synthesis.",
    "ta": "பாக்டீரியாவின் 50S ரைபோசோமில் இணைந்து புரதச் சேர்க்கையைத் தடுக்கிறது."
  },
  "precautions": {
    "en": [
      "Take at least 1 hour before or 2 hours after meals",
      "Do not take antacids containing aluminum or magnesium at the same time",
      "Notify doctor if you have cardiac arrhythmias or QT prolongation"
    ],
    "ta": [
      "உணவுக்கு 1 மணி நேரத்திற்கு முன் அல்லது 2 மணி நேரம் கழித்து எடுக்கவும்",
      "அலுமினியம் கலந்த அமில நீக்கிகளுடன் சேர்த்து எடுக்க வேண்டாம்",
      "இதயத் துடிப்பு கோளாறு உள்ளவர்கள் மருத்துவரிடம் தெரிவிக்கவும்"
    ]
  },
  "sideEffects": {
    "en": [
      "Nausea, abdominal cramping",
      "Diarrhea",
      "Headache"
    ],
    "ta": [
      "குமட்டல், வயிற்றுப் பிடிப்பு",
      "வயிற்றுப்போக்கு",
      "தலைவலி"
    ]
  },
  "whoShouldConsult": {
    "en": "Individuals with severe liver disease, prolonged QT interval, or myasthenia gravis.",
    "ta": "கல்லீரல் பாதிப்பு அல்லது இதயத் துடிப்பு கோளாறு உள்ளவர்கள்."
  },
  "storage": {
    "en": "Store at room temperature below 30°C in moisture-proof container.",
    "ta": "30°C-க்கு குறைவான வெப்பநிலையில் உலர்ந்த இடத்தில் வைக்கவும்."
  },
  "conditions": [
    "bacterial infection",
    "pneumonia",
    "sinusitis",
    "chest infection",
    "azee",
    "azithral",
    "zithromax"
  ]
},
  {
  "id": "metformin",
  "name": {
    "en": "Metformin",
    "ta": "மெட்பார்மின்"
  },
  "genericName": "Metformin Hydrochloride",
  "brandExamples": [
    "Glycomet",
    "Glucophage",
    "Obimet"
  ],
  "category": {
    "id": "chronic_care",
    "en": "Chronic Care",
    "ta": "நீடித்த பராமரிப்பு"
  },
  "prescriptionRequired": true,
  "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80",
  "iconType": "pill",
  "purpose": {
    "en": "First-line oral antihyperglycemic medication for Type 2 Diabetes management.",
    "ta": "டைப் 2 நீரிழிவு நோயைக் கட்டுப்படுத்துவதற்கான முதன்மை வாய்வழி மருந்து."
  },
  "description": {
    "en": "Improves glycemic control by decreasing hepatic glucose production and enhancing peripheral insulin sensitivity.",
    "ta": "கல்லீரல் குளுக்கோஸ் உற்பத்தியைக் குறைத்து, இன்சுலின் உணர்திறனை மேம்படுத்தி இரத்த சர்க்கரை அளவைச் சமநிலைப்படுத்துகிறது."
  },
  "uses": {
    "en": [
      "Type 2 Diabetes Mellitus glycemic control",
      "Gestational diabetes (under specialist guidance)",
      "Polycystic ovary syndrome (PCOS) insulin resistance"
    ],
    "ta": [
      "டைப் 2 சர்க்கரை நோய் கட்டுப்பாடு",
      "கர்ப்பகால சர்க்கரை நோய்",
      "பிசிஓஎஸ் இன்சுலின் எதிர்ப்பு"
    ]
  },
  "howItWorks": {
    "en": "Activates AMP-activated protein kinase (AMPK), reducing hepatic gluconeogenesis and increasing muscle glucose uptake.",
    "ta": "AMPK என்சைமைத் தூண்டி கல்லீரல் சர்க்கரை உற்பத்தியைத் தடுக்கிறது."
  },
  "precautions": {
    "en": [
      "Take strictly with or after meals to reduce GI side effects",
      "Avoid binge drinking alcohol while on metformin",
      "Discontinue temporarily before contrast radiologic procedures"
    ],
    "ta": [
      "செரிமானக் கோளாறுகளைத் தவிர்க்க உணவோடு சேர்த்து உட்கொள்ளவும்",
      "மது அருந்துவதைத் தவிர்க்கவும்",
      "எக்ஸ்ரே கான்ட்ராஸ்ட் பரிசோதனைகளுக்கு முன் மருத்துவரிடம் தெரிவிக்கவும்"
    ]
  },
  "sideEffects": {
    "en": [
      "Metallic taste in mouth",
      "Mild stomach bloating or loose stools initially",
      "Rare risk of lactic acidosis in renal failure"
    ],
    "ta": [
      "வாயில் உலோகம் போன்ற சுவை",
      "வயிற்று உப்புசம்",
      "சிறுநீரகக் கோளாறில் அரிதான அமிலத்தன்மை"
    ]
  },
  "whoShouldConsult": {
    "en": "Patients with severe chronic kidney disease (eGFR < 30), severe heart failure, or acute metabolic acidosis.",
    "ta": "சிறுநீரகக் கோளாறு அல்லது இதய செயலிழப்பு உள்ளவர்கள்."
  },
  "storage": {
    "en": "Store at 20°C to 25°C away from heat and moisture.",
    "ta": "25°C-க்கு குறைவான வெப்பநிலையில் வைக்கவும்."
  },
  "conditions": [
    "diabetes",
    "high blood sugar",
    "type 2 diabetes",
    "glycomet",
    "sakkarai noi",
    "pcos"
  ]
},
  {
  "id": "atorvastatin",
  "name": {
    "en": "Atorvastatin",
    "ta": "அடோர்வாஸ்டாடின்"
  },
  "genericName": "Atorvastatin Calcium",
  "brandExamples": [
    "Lipitor",
    "Atorva",
    "Storvas"
  ],
  "category": {
    "id": "chronic_care",
    "en": "Chronic Care",
    "ta": "நீடித்த பராமரிப்பு"
  },
  "prescriptionRequired": true,
  "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=80",
  "iconType": "pill",
  "purpose": {
    "en": "HMG-CoA reductase inhibitor for lowering LDL cholesterol and cardiovascular risk.",
    "ta": "கெட்ட கொழுப்பைக் (LDL) குறைத்து இதய ஆரோக்கியத்தைப் பாதுகாக்கும் மருந்து."
  },
  "description": {
    "en": "Statin medication that dramatically lowers blood cholesterol levels and prevents atherosclerotic plaque formation.",
    "ta": "இரத்தத்தில் கொழுப்பைக் குறைத்து இதயத் தமனி அடைப்பைத் தடுக்கும் ஸ்டேட்டின் வகை மருந்து."
  },
  "uses": {
    "en": [
      "Hypercholesterolemia (high LDL cholesterol)",
      "Prevention of myocardial infarction and stroke in high-risk patients",
      "Mixed dyslipidemia management"
    ],
    "ta": [
      "அதிக கொழுப்பு அளவு கட்டுப்பாடு",
      "மாரடைப்பு மற்றும் பக்கவாதம் தடுப்பு",
      "இரத்தக் கொழுப்பு சமநிலை"
    ]
  },
  "howItWorks": {
    "en": "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol biosynthesis.",
    "ta": "கல்லீரலில் கொழுப்பு உற்பத்தியைத் தூண்டும் HMG-CoA நொதியைத் தடுக்கிறது."
  },
  "precautions": {
    "en": [
      "Usually taken in the evening with or without food",
      "Avoid large amounts of grapefruit juice",
      "Report unexplained muscle pain, tenderness, or weakness immediately"
    ],
    "ta": [
      "வழக்கமாக மாலை அல்லது இரவில் உட்கொள்ள வேண்டும்",
      "கிரேப்ஃப்ரூட் சாறு அருந்துவதைத் தவிர்க்கவும்",
      "காரணமில்லாத தசை வலியை உடனடியாக மருத்துவரிடம் தெரிவிக்கவும்"
    ]
  },
  "sideEffects": {
    "en": [
      "Mild headache",
      "Mild joint or muscle discomfort",
      "Slight elevation in liver transaminases"
    ],
    "ta": [
      "லேசான தலைவலி",
      "தசை வலி",
      "கல்லீரல் நொதிகளில் மாற்றம்"
    ]
  },
  "whoShouldConsult": {
    "en": "Pregnant and nursing mothers (strictly contraindicated), active liver disease patients.",
    "ta": "கர்ப்பிணிகள் மற்றும் தீவிர கல்லீரல் நோய் உள்ளவர்கள் உட்கொள்ளக்கூடாது."
  },
  "storage": {
    "en": "Store at 20°C to 25°C in original blister pack.",
    "ta": "25°C-க்கு குறைவான வெப்பநிலையில் வைக்கவும்."
  },
  "conditions": [
    "cholesterol",
    "high cholesterol",
    "heart health",
    "lipitor",
    "atorva",
    "ratha azhutham"
  ]
},
  {
  "id": "ciprofloxacin",
  "name": {
    "en": "Ciprofloxacin",
    "ta": "சிப்ரோஃப்ளோக்சாசின்"
  },
  "genericName": "Ciprofloxacin Hydrochloride",
  "brandExamples": [
    "Ciplox 500",
    "Cipro",
    "Cifran"
  ],
  "category": {
    "id": "antibiotics",
    "en": "Antibiotics",
    "ta": "நுண்ணுயிர் எதிர்ப்பிகள்"
  },
  "prescriptionRequired": true,
  "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop&q=80",
  "iconType": "pill",
  "purpose": {
    "en": "Fluoroquinolone antibiotic for urinary tract, gastrointestinal, and systemic bacterial infections.",
    "ta": "சிறுநீர்ப்பாதை மற்றும் குடல் பாக்டீரியா தொற்றுகளுக்கான நுண்ணுயிர் எதிர்ப்பு மருந்து."
  },
  "description": {
    "en": "A powerful fluoroquinolone antibiotic targeting Gram-negative and selective Gram-positive bacteria.",
    "ta": "தீவிர பாக்டீரியா தொற்றுகளை அழிக்க மருத்துவரால் பரிந்துரைக்கப்படும் ஆற்றல்வாய்ந்த மருந்து."
  },
  "uses": {
    "en": [
      "Complicated urinary tract infections (UTIs)",
      "Bacterial infectious diarrhea & gastroenteritis",
      "Bone and joint bacterial infections",
      "Typhoid fever (enteric fever)"
    ],
    "ta": [
      "சிறுநீர்ப்பாதை நோய்த்தொற்று",
      "பாக்டீரியா வயிற்றுப்போக்கு",
      "எலும்பு மூட்டு தொற்று",
      "டைபாய்டு காய்ச்சல்"
    ]
  },
  "howItWorks": {
    "en": "Inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing bacterial DNA replication and repair.",
    "ta": "பாக்டீரியாவின் டிஎன்ஏ உற்பத்தியைத் தடுத்து அதன் பெருக்கத்தை அழிக்கிறது."
  },
  "precautions": {
    "en": [
      "Avoid calcium-fortified dairy products within 2 hours of ingestion",
      "Drink plenty of water to prevent crystalluria",
      "Rest tendon areas if pain occurs (risk of tendinitis)"
    ],
    "ta": [
      "பால் மற்றும் கால்சியம் உணவுகளுடன் ஒரே நேரத்தில் எடுக்க வேண்டாம்",
      "நிறைய தண்ணீர் குடிக்கவும்",
      "தசைநார் வலி ஏற்பட்டால் மருத்துவரை அணுகவும்"
    ]
  },
  "sideEffects": {
    "en": [
      "Nausea, abdominal discomfort",
      "Dizziness or headache",
      "Photosensitivity (sun sensitivity)"
    ],
    "ta": [
      "குமட்டல்",
      "தலைச்சுற்றல்",
      "சூரிய ஒளி ஒவ்வாமை"
    ]
  },
  "whoShouldConsult": {
    "en": "Patients with myasthenia gravis, history of tendon disorders, or severe renal impairment.",
    "ta": "தசை பலவீனம் அல்லது தசைநார் பாதிப்பு உள்ளவர்கள்."
  },
  "storage": {
    "en": "Store below 30°C away from direct sunlight.",
    "ta": "30°C-க்கு குறைவான வெப்பநிலையில் பாதுகாக்கவும்."
  },
  "conditions": [
    "uti",
    "urinary infection",
    "bacterial diarrhea",
    "typhoid",
    "ciplox",
    "cipro"
  ]
}
];

// Category Filter Definitions
const MEDICINE_CATALOG_CATEGORIES = [
  {
  "id": "chronic_care",
  "name": {
    "en": "Chronic Care",
    "ta": "நீடித்த பராமரிப்பு"
  },
  "icon": "heart"
},

  {
  "id": "antibiotics",
  "name": {
    "en": "Antibiotics",
    "ta": "நுண்ணுயிர் எதிர்ப்பிகள்"
  },
  "icon": "shield"
},

  { id: "all", en: "All Medicines", ta: "அனைத்து மருந்துகள்", count: MEDICAL_MEDICINES_CATALOG.length },
  { id: "fever_pain", en: "Fever & Pain", ta: "காய்ச்சல் & வலி" },
  { id: "cold_allergy", en: "Cold & Allergy", ta: "சளி & அலர்ஜி" },
  { id: "cough", en: "Cough", ta: "இருமல்" },
  { id: "acidity", en: "Acidity", ta: "அமிலத்தன்மை" },
  { id: "digestive", en: "Digestive", ta: "செரிமானம்" },
  { id: "dehydration", en: "Dehydration", ta: "நீரிழப்பு" },
  { id: "vitamins", en: "Vitamins", ta: "வைட்டமின்கள்" },
  { id: "skin_care", en: "Skin Care", ta: "தோல் பராமரிப்பு" }
];

// Lookup medicine by ID
function getMedicineById(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();
  return MEDICAL_MEDICINES_CATALOG.find(m => m.id.toLowerCase() === cleanId) || null;
}

// Search and filter medicines catalog
function searchMedicinesCatalog(query = '', categoryId = 'all', lang = 'en') {
  const q = String(query).toLowerCase().trim();
  
  // Tanglish & Common Keyword mappings
  const keywordSynonyms = {
    'kaichal': 'fever',
    'suram': 'fever',
    'thala vali': 'headache',
    'thalavali': 'headache',
    'sali': 'cold',
    'irumal': 'cough',
    'varattu irumal': 'dry cough',
    'nenju sali': 'chest congestion',
    'nenjerichal': 'acidity',
    'gas problem': 'acidity',
    'ulcer': 'ulcer',
    'vayitrupokku': 'diarrhea',
    'loose motion': 'diarrhea',
    'neerilappu': 'dehydration',
    'kumattal': 'nausea',
    'vaanthi': 'vomiting',
    'arippu': 'itching',
    'padai': 'fungal',
    'elumbu': 'bone',
    'narambu': 'nerve'
  };

  let mappedQuery = q;
  for (const [tgKey, engVal] of Object.entries(keywordSynonyms)) {
    if (q.includes(tgKey)) {
      mappedQuery += ' ' + engVal;
    }
  }

  return MEDICAL_MEDICINES_CATALOG.filter(med => {
    // 1. Category Filter
    if (categoryId && categoryId !== 'all') {
      if (med.category.id !== categoryId) return false;
    }

    // If query is empty, return all matching category
    if (!q) return true;

    // 2. Search Text matching
    const searchTargets = [
      med.id,
      med.genericName,
      med.name.en,
      med.name.ta,
      med.category.en,
      med.category.ta,
      med.purpose.en,
      med.purpose.ta,
      med.description.en,
      med.description.ta,
      ...(med.brandExamples || []),
      ...(med.conditions || []),
      ...(med.uses.en || []),
      ...(med.uses.ta || [])
    ].map(item => String(item).toLowerCase());

    // Check direct query or mapped words
    const queryTokens = mappedQuery.split(/\s+/).filter(Boolean);
    return queryTokens.some(token => 
      searchTargets.some(target => target.includes(token))
    );
  });
}

// Browser & Node environment export support
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MEDICAL_MEDICINES_CATALOG,
    MEDICINE_CATALOG_CATEGORIES,
    getMedicineById,
    searchMedicinesCatalog
  };
}
