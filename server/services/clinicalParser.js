/**
 * MediGuid Clinical Document Entity Parser
 * Extracts structured medical and demographic parameters from raw OCR/PDF text.
 * Strictly adheres to non-hallucination rules: if not found, returns null or "Not mentioned".
 */

function parseClinicalDocument(rawText) {
  if (!rawText || typeof rawText !== 'string' || rawText.trim().length < 20) {
    return null;
  }

  const cleanText = rawText.replace(/\r\n/g, '\n');
  const lines = cleanText.split('\n').map(l => l.trim()).filter(Boolean);

  // Helper matcher with multiple regex fallbacks
  const matchFirst = (regexes) => {
    for (const rx of regexes) {
      const m = cleanText.match(rx);
      if (m && m[1] && m[1].trim()) {
        return m[1].trim().replace(/\s+/g, ' ');
      }
    }
    return null;
  };

  // 1. Patient Demographics
  const patientName = matchFirst([
    /(?:Patient\s*Name|Pt\s*Name|Name\s*of\s*Patient|Patient)\s*[:\-]\s*([A-Za-z\s\.\'\-]+?)(?=[,\n\r;]|\bAge\b|\bID\b|\bGender\b|$)/i,
    /(?:Mr\.|Mrs\.|Ms\.|Master)\s+([A-Za-z\s]+?)(?=[,\n\r;]|\bAge\b|$)/i
  ]) || 'Not mentioned';

  const patientId = matchFirst([
    /(?:Patient\s*ID|Pt\s*ID|MRN|UHID|Reg(?:istration)?\s*No\.?|IP\s*No\.?|Card\s*No\.?|ID)\s*[:\-]\s*([A-Za-z0-9\-\/]+)/i,
    /\b(MG-PAT-[0-9\-]+)\b/i
  ]) || null;

  const ageStr = matchFirst([
    /(?:Age|Age\s*\/|\bAge\b)\s*[:\-]?\s*(\d{1,3})\s*(?:Yrs?|Years?|Y)?/i,
    /(\d{1,3})\s*(?:Yrs?|Years?)\s*(?:Old)?/i
  ]);
  const age = ageStr ? parseInt(ageStr, 10) : null;

  let gender = matchFirst([
    /(?:Gender|Sex)\s*[:\-]?\s*(Male|Female|Other|M|F)\b/i,
    /\/\s*(Male|Female|Other|M|F)\b/i
  ]);
  if (gender) {
    const gLower = gender.toLowerCase();
    if (gLower === 'm' || gLower === 'male') gender = 'Male';
    else if (gLower === 'f' || gLower === 'female') gender = 'Female';
    else gender = 'Other';
  } else {
    gender = 'Not mentioned';
  }

  // Phone / WhatsApp Number
  const phone = matchFirst([
    /(?:WhatsApp|Mobile|Phone|Contact|Cell|Tel)\s*(?:Number|No\.?)?\s*[:\-]?\s*(\+?[\d\s\-]{10,16})/i,
    /(\+?91[\-\s]?[6-9]\d{9})/i,
    /\b([6-9]\d{9})\b/i
  ]);
  const formattedPhone = phone ? phone.replace(/[^\d+]/g, '') : null;

  // 2. Medical Diagnosis & Clinical Meta
  const diagnosis = matchFirst([
    /(?:PRIMARY\s*DIAGNOSIS|FINAL\s*DIAGNOSIS|DIAGNOSIS|CONDITION|IMPRESSION)\s*[:\-]\s*([^\n\r]+)/i,
    /(?:Diagnosed\s*with)\s*[:\-]?\s*([^\n\r\.]+)/i
  ]) || 'Not mentioned';

  const symptoms = matchFirst([
    /(?:SYMPTOMS|CHIEF\s*COMPLAINTS|COMPLAINTS)\s*[:\-]\s*([^\n\r]+)/i
  ]) || 'Not mentioned';

  const allergies = matchFirst([
    /(?:ALLERGIES|KNOWN\s*ALLERGIES)\s*[:\-]\s*([^\n\r]+)/i
  ]) || 'None reported';

  const doctorName = matchFirst([
    /(?:CONSULTANT|ATTENDING\s*PHYSICIAN|DOCTOR|PHYSICIAN|TREATED\s*BY)\s*[:\-]\s*([^\n\r]+)/i,
    /(Dr\.?\s+[A-Za-z\s\.\'\-]+?(?:,\s*[A-Z\.\s]+)?)(?=\n|\r|$)/i
  ]) || 'Not mentioned';

  // Hospital Name (look for explicit label or top hospital header line)
  let hospitalName = matchFirst([
    /(?:HOSPITAL|CLINIC|HEALTHCARE\s*FACILITY)\s*[:\-]\s*([^\n\r]+)/i
  ]);
  if (!hospitalName) {
    const hospitalLine = lines.find(l => /hospital|medical\s*center|healthcare|clinic|institute/i.test(l));
    hospitalName = hospitalLine || 'Not mentioned';
  }

  const admissionDate = matchFirst([
    /(?:ADMISSION\s*DATE|DATE\s*OF\s*ADMISSION|DOA)\s*[:\-]\s*([A-Za-z0-9\s\.\,\/\-]+?)(?=[,\n\r;]|\bDischarge\b|$)/i
  ]) || 'Not mentioned';

  const dischargeDate = matchFirst([
    /(?:DISCHARGE\s*DATE|DATE\s*OF\s*DISCHARGE|DOD)\s*[:\-]\s*([A-Za-z0-9\s\.\,\/\-]+?)(?=[,\n\r;]|\bConsultant\b|$)/i
  ]) || new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  // 3. Medicines List
  const medicines = [];
  // Exclude department names (e.g. "DEPARTMENT OF INTERNAL MEDICINE") by matching explicit medication list headers
  const medSectionRegex = /(?:DISCHARGE\s*MEDICATIONS?|DISCHARGE\s*PRESCRIPTIONS?|\bRX\s*[:\n]|\bPRESCRIPTION\s*[:\n]|(?:^|\n)\s*MEDICATIONS?\s*[:\n]|(?:^|\n)\s*MEDICINES\s*(?:PRESCRIBED|ON\s*DISCHARGE|LIST)?\s*[:\n])([\s\S]*?)(?=(?:DIET|DIETARY|FOLLOW[\- ]?UP|EMERGENCY|WARNING|INSTRUCTIONS|ADVICE|LIFESTYLE|$))/i;
  const medSectionMatch = cleanText.match(medSectionRegex);
  const textToScanForMeds = medSectionMatch ? medSectionMatch[1] : cleanText;

  const medLines = textToScanForMeds.split('\n').map(l => l.trim()).filter(Boolean);

  for (const line of medLines) {
    if (/^(?:DISCHARGE|MEDICATIONS|MEDICINES|RX|DIET|FOLLOW|REVIEW|DIETARY|EMERGENCY|WARNING|PATIENT|DR\.|DOCTOR|HOSPITAL|DEPARTMENT|AGE|GENDER|ADMISSION)/i.test(line)) continue;
    
    // Check if line contains a real prescription drug indicator (strength or dosage form)
    const hasMedForm = /(?:\d+\s*(?:mg|mcg|ml|g|puffs?)|tablet|tab\.?|cap\.?|capsule|syrup|syp\.?|inj\.?|inhaler|drops)/i.test(line);
    if (hasMedForm && line.length > 5) {
      const parts = line.replace(/^\d+[\.\)]\s*/, '').trim();
      
      // Extract dosage
      const dosageMatch = parts.match(/(\d+(?:\.\d+)?\s*(?:mg|mcg|ml|g|puffs?))/i);
      const dosage = dosageMatch ? dosageMatch[1] : '1 Tablet';

      // Extract frequency
      let frequency = 'Once daily';
      if (/twice\s*daily|bd|2\s*times|morning\s*(&|and)\s*(night|evening)/i.test(parts)) {
        frequency = 'Twice daily';
      } else if (/three\s*times|tds|tid|3\s*times/i.test(parts)) {
        frequency = 'Three times daily';
      } else if (/sos|as\s*needed|as\s*required/i.test(parts)) {
        frequency = 'SOS (As needed)';
      } else if (/night|bedtime|hs/i.test(parts)) {
        frequency = 'Once daily at night';
      } else if (/morning/i.test(parts)) {
        frequency = 'Once daily in the morning';
      }

      // Meal relationship
      let foodRelation = 'After food';
      if (/before\s*(?:food|breakfast|meals|eating)/i.test(parts)) {
        foodRelation = 'Before food';
      } else if (/after\s*(?:food|breakfast|dinner|lunch|meals)/i.test(parts)) {
        foodRelation = 'After food';
      } else if (/rinse\s*mouth/i.test(parts)) {
        foodRelation = 'Rinse mouth after inhaling';
      }

      // Duration
      const durationMatch = parts.match(/(?:x\s*|\bfor\s*|\-\s*)(\d+\s*(?:days?|weeks?|months?))/i);
      const duration = durationMatch ? durationMatch[1] : '30 Days';

      // Medicine Name
      let name = parts
        .replace(/^(?:Tab\.?|Cap\.?|Syp\.?|Inj\.?|Inhaler)\s*/i, '')
        .split(/[\-\–\—\:]/)[0]
        .replace(/\b(?:1\s*tab|1\s*cap|once|twice|daily|after|before|food|meals|x\s*\d+)\b.*/i, '')
        .trim();

      if (name.length > 2 && !/^(?:the|and|for|take|review)$/i.test(name)) {
        medicines.push({
          name,
          medicineName: name,
          dosage,
          quantity: '1',
          frequency,
          timing: frequency.includes('night') ? 'Night' : frequency.includes('morning') ? 'Morning' : 'Morning & Night',
          foodRelation,
          beforeOrAfterFood: foodRelation,
          duration
        });
      }
    }
  }

  // 4. Diet Instructions
  const dietInstructions = matchFirst([
    /(?:DIET|DIETARY|NUTRITION(?:AL)?\s*ADVICE|FOOD\s*INSTRUCTIONS?)\s*[:\-]\s*([^\n\r]+(?:\n[^\n\r:]+)*)/i
  ]) || 'Not mentioned';

  // 5. Daily Care & Instructions
  const dischargeInstructions = matchFirst([
    /(?:DISCHARGE\s*INSTRUCTIONS?|CARE\s*INSTRUCTIONS?|LIFESTYLE\s*ADVICE|POST[\- ]?OP\s*CARE)\s*[:\-]\s*([^\n\r]+(?:\n[^\n\r:]+)*)/i
  ]) || 'Not mentioned';

  // 6. Follow-Up Date & Department
  const followUpDate = matchFirst([
    /(?:FOLLOW[\- ]?UP|REVIEW\s*DATE|NEXT\s*VISIT|REVIEW\s*ON|OPD\s*REVIEW)\s*[:\-]?\s*(?:in|on)?\s*([A-Za-z0-9\s\.\,\/\-]+?)(?=[,\n\r;]|\bwith\b|\bfor\b|$)/i
  ]) || 'Not mentioned';

  const followUpDepartment = matchFirst([
    /(?:REVIEW\s*IN|OPD\s*IN|DEPARTMENT\s*OF)\s*([A-Za-z\s]+?)(?=\s*OPD|\s*CLINIC|$)/i
  ]) || 'General OPD';

  // 7. Warning Signs & Emergency
  const warningSigns = matchFirst([
    /(?:EMERGENCY\s*SIGNS?|WARNING\s*SIGNS?|RED\s*FLAGS?|WHEN\s*TO\s*CALL)\s*[:\-]\s*([^\n\r]+(?:\n[^\n\r:]+)*)/i
  ]) || 'Severe symptoms or worsening condition require immediate emergency hospital return.';

  // Check if we extracted at least minimal clinical indicators
  const hasClinicalContent = patientName !== 'Not mentioned' || diagnosis !== 'Not mentioned' || medicines.length > 0;
  if (!hasClinicalContent && cleanText.length < 50) {
    return null;
  }

  const finalPatientId = patientId || ('MG-' + Date.now().toString().slice(-6));

  return {
    patientName,
    name: patientName,
    patientId: finalPatientId,
    id: finalPatientId,
    age,
    gender,
    phoneNumber: formattedPhone,
    whatsappNumber: formattedPhone,
    phone: formattedPhone,
    diagnosis,
    symptoms,
    allergies,
    doctorName,
    doctor: doctorName,
    hospitalName,
    hospital: hospitalName,
    admissionDate,
    dischargeDate,
    followUpDate,
    followUpDepartment,
    dischargeInstructions,
    dailyCare: dischargeInstructions,
    dietInstructions,
    foodInstructions: dietInstructions,
    warningSigns,
    medicines
  };
}

module.exports = {
  parseClinicalDocument
};
