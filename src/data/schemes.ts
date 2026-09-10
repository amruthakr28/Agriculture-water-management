export interface Scheme {
  id: string;
  name: string;
  nameKannada: string;
  type: 'irrigation' | 'subsidy' | 'insurance' | 'loan';
  description: string;
  benefits: string[];
  eligibility: string[];
  subsidy: string;
  howToApply: string[];
  documents: string[];
  helpline: string;
  website: string;
}

export const schemes: Scheme[] = [
  {
    id: 'pmksy',
    name: 'PM Krishi Sinchayee Yojana (PMKSY)',
    nameKannada: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಕೃಷಿ ಸಿಂಚಯೀ ಯೋಜನೆ',
    type: 'irrigation',
    description: 'Central government scheme to improve irrigation coverage and water use efficiency through micro-irrigation systems.',
    benefits: [
      'Up to 55% subsidy on drip irrigation',
      'Up to 45% subsidy on sprinkler systems',
      'Additional 10% for SC/ST farmers',
      'Technical support and training'
    ],
    eligibility: [
      'All farmers with agricultural land',
      'Land ownership documents required',
      'Aadhaar linked bank account',
      'No previous subsidy for same equipment'
    ],
    subsidy: '45-55% of total cost',
    howToApply: [
      'Visit nearest Raitha Samparka Kendra',
      'Apply online at pmksy.gov.in',
      'Submit required documents',
      'Get technical inspection done',
      'Receive subsidy after installation'
    ],
    documents: ['Land records (RTC)', 'Aadhaar card', 'Bank passbook', 'Passport photo', 'Caste certificate (if applicable)'],
    helpline: '1800-180-1551',
    website: 'https://pmksy.gov.in'
  },
  {
    id: 'pmfby',
    name: 'PM Fasal Bima Yojana (PMFBY)',
    nameKannada: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬೀಮಾ ಯೋಜನೆ',
    type: 'insurance',
    description: 'Comprehensive crop insurance scheme covering all food crops, oilseeds, and annual commercial/horticultural crops.',
    benefits: [
      'Coverage against natural calamities',
      'Low premium (1.5-5% of sum insured)',
      'Quick claim settlement',
      'Coverage for pre and post-harvest losses'
    ],
    eligibility: [
      'All farmers (loanee and non-loanee)',
      'Tenant farmers with land documents',
      'Share croppers with agreement',
      'Crop sowing should be notified'
    ],
    subsidy: 'Premium capped at 1.5% for Rabi, 2% for Kharif, 5% for horticulture',
    howToApply: [
      'Apply through bank (if loanee farmer)',
      'Apply at Common Service Centre',
      'Online at pmfby.gov.in',
      'Deadline: 7 days after crop sowing'
    ],
    documents: ['Land records', 'Aadhaar', 'Bank account', 'Sowing certificate', 'Previous crop details'],
    helpline: '1800-180-1111',
    website: 'https://pmfby.gov.in'
  },
  {
    id: 'kisan-credit',
    name: 'Kisan Credit Card (KCC)',
    nameKannada: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್',
    type: 'loan',
    description: 'Credit facility for farmers to meet their agricultural and cultivation needs at low interest rates.',
    benefits: [
      'Credit limit up to ₹3 lakhs',
      'Interest rate: 7% (4% with subsidy)',
      'Flexible repayment',
      'Insurance coverage included',
      'ATM-enabled card'
    ],
    eligibility: [
      'Owner cultivators',
      'Tenant farmers',
      'Oral lessees',
      'Self-help groups',
      'Joint liability groups'
    ],
    subsidy: '3% interest subvention on timely repayment',
    howToApply: [
      'Visit nearest bank branch',
      'Submit application with documents',
      'Bank verification of land',
      'Credit limit sanctioned',
      'Card issued within 15 days'
    ],
    documents: ['Land documents', 'ID proof', 'Address proof', 'Passport photos', 'Crop proposal'],
    helpline: '1800-180-1551',
    website: 'https://www.pmkisan.gov.in'
  },
  {
    id: 'karnataka-micro',
    name: 'Karnataka Micro Irrigation Scheme',
    nameKannada: 'ಕರ್ನಾಟಕ ಸೂಕ್ಷ್ಮ ನೀರಾವರಿ ಯೋಜನೆ',
    type: 'irrigation',
    description: 'State scheme providing additional subsidy on top of central scheme for micro-irrigation adoption.',
    benefits: [
      'Additional 35% state subsidy',
      'Total subsidy up to 90% for small farmers',
      'Free technical assistance',
      'Quality certified equipment'
    ],
    eligibility: [
      'Small and marginal farmers priority',
      'Land holding up to 5 acres',
      'Karnataka domicile',
      'Water source availability'
    ],
    subsidy: 'Up to 90% combined (Central + State)',
    howToApply: [
      'Apply at Grama One / Raitha Samparka Kendra',
      'Online at fruits.karnataka.gov.in',
      'Select vendor from approved list',
      'Complete installation',
      'Submit completion report'
    ],
    documents: ['RTC', 'Aadhaar', 'Bank details', 'Caste certificate', 'Water source proof'],
    helpline: '1800-425-1515',
    website: 'https://fruits.karnataka.gov.in'
  },
  {
    id: 'krishi-bhagya',
    name: 'Krishi Bhagya Scheme',
    nameKannada: 'ಕೃಷಿ ಭಾಗ್ಯ ಯೋಜನೆ',
    type: 'subsidy',
    description: 'Karnataka state scheme for farm pond construction and polyhouse development for rainwater harvesting.',
    benefits: [
      'Farm pond construction subsidy',
      'Plastic lining provided free',
      'Pump set subsidy',
      'Polyhouse construction support'
    ],
    eligibility: [
      'Rainfed area farmers',
      'Land holding 1-10 acres',
      'No existing irrigation source',
      'Selected drought-prone taluks'
    ],
    subsidy: '80% for pond, 50% for pump set',
    howToApply: [
      'Apply at Raitha Samparka Kendra',
      'Technical survey of land',
      'Approval from department',
      'Work execution',
      'Subsidy release on completion'
    ],
    documents: ['Land records', 'Aadhaar', 'Bank passbook', 'Rainfall data', 'Survey map'],
    helpline: '1800-425-1515',
    website: 'https://raitamitra.karnataka.gov.in'
  },
  {
    id: 'soil-health',
    name: 'Soil Health Card Scheme',
    nameKannada: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್',
    type: 'subsidy',
    description: 'Free soil testing and nutrient recommendations to reduce fertilizer costs and improve yield.',
    benefits: [
      'Free soil testing',
      'Crop-wise fertilizer recommendations',
      'Reduces input costs by 15-20%',
      'Improves crop yield',
      'Digital soil health card'
    ],
    eligibility: [
      'All farmers',
      'No land size restriction',
      'Once in 3 years per plot'
    ],
    subsidy: '100% free',
    howToApply: [
      'Contact local agriculture office',
      'Collect soil sample as guided',
      'Submit at testing center',
      'Receive card in 15-30 days'
    ],
    documents: ['Land survey number', 'Mobile number', 'Aadhaar (optional)'],
    helpline: '1800-180-1551',
    website: 'https://soilhealth.dac.gov.in'
  }
];

export const schemeTypes = [
  { id: 'irrigation', name: 'Irrigation', icon: '💧', color: 'bg-blue-100 text-blue-800' },
  { id: 'subsidy', name: 'Subsidy', icon: '💰', color: 'bg-green-100 text-green-800' },
  { id: 'insurance', name: 'Insurance', icon: '🛡️', color: 'bg-purple-100 text-purple-800' },
  { id: 'loan', name: 'Loan', icon: '🏦', color: 'bg-amber-100 text-amber-800' }
];
