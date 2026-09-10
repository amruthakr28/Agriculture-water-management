export interface Crop {
  id: string;
  name: string;
  nameKannada: string;
  category: 'millets' | 'pulses' | 'oilseeds' | 'horticulture';
  waterRequirement: 'very-low' | 'low' | 'medium';
  waterSavings: string;
  growingSeason: string;
  duration: string;
  expectedYield: string;
  marketPrice: string;
  benefits: string[];
  image: string;
}

export const crops: Crop[] = [
  // Millets
  {
    id: 'ragi',
    name: 'Finger Millet (Ragi)',
    nameKannada: 'ರಾಗಿ',
    category: 'millets',
    waterRequirement: 'very-low',
    waterSavings: '60-70%',
    growingSeason: 'June - September',
    duration: '3-4 months',
    expectedYield: '15-20 quintals/acre',
    marketPrice: '₹3,200 - ₹3,800/quintal',
    benefits: ['Drought resistant', 'High nutritional value', 'Low input cost', 'Good market demand'],
    image: '🌾'
  },
  {
    id: 'jowar',
    name: 'Sorghum (Jowar)',
    nameKannada: 'ಜೋಳ',
    category: 'millets',
    waterRequirement: 'very-low',
    waterSavings: '65-75%',
    growingSeason: 'June - October',
    duration: '3.5-4 months',
    expectedYield: '12-18 quintals/acre',
    marketPrice: '₹2,800 - ₹3,500/quintal',
    benefits: ['Extremely drought tolerant', 'Dual purpose (grain + fodder)', 'Improves soil health'],
    image: '🌾'
  },
  {
    id: 'bajra',
    name: 'Pearl Millet (Bajra)',
    nameKannada: 'ಸಜ್ಜೆ',
    category: 'millets',
    waterRequirement: 'very-low',
    waterSavings: '70-80%',
    growingSeason: 'June - September',
    duration: '2.5-3 months',
    expectedYield: '10-15 quintals/acre',
    marketPrice: '₹2,500 - ₹3,200/quintal',
    benefits: ['Survives extreme drought', 'Fast growing', 'High iron content', 'Sandy soil friendly'],
    image: '🌾'
  },
  // Pulses
  {
    id: 'green-gram',
    name: 'Green Gram (Moong)',
    nameKannada: 'ಹೆಸರು ಕಾಳು',
    category: 'pulses',
    waterRequirement: 'low',
    waterSavings: '50-60%',
    growingSeason: 'June - August',
    duration: '2-2.5 months',
    expectedYield: '5-8 quintals/acre',
    marketPrice: '₹7,000 - ₹8,500/quintal',
    benefits: ['Short duration crop', 'Fixes nitrogen in soil', 'High protein content', 'Good intercrop'],
    image: '🫘'
  },
  {
    id: 'black-gram',
    name: 'Black Gram (Urad)',
    nameKannada: 'ಉದ್ದಿನ ಬೇಳೆ',
    category: 'pulses',
    waterRequirement: 'low',
    waterSavings: '50-60%',
    growingSeason: 'August - November',
    duration: '3-3.5 months',
    expectedYield: '4-7 quintals/acre',
    marketPrice: '₹6,500 - ₹8,000/quintal',
    benefits: ['Drought tolerant', 'Improves soil fertility', 'High market demand', 'Low maintenance'],
    image: '🫘'
  },
  {
    id: 'toor-dal',
    name: 'Pigeon Pea (Toor)',
    nameKannada: 'ತೊಗರಿ ಬೇಳೆ',
    category: 'pulses',
    waterRequirement: 'low',
    waterSavings: '55-65%',
    growingSeason: 'June - July',
    duration: '5-6 months',
    expectedYield: '6-10 quintals/acre',
    marketPrice: '₹6,000 - ₹7,500/quintal',
    benefits: ['Deep root system', 'Perennial possibility', 'Good for intercropping', 'Firewood from stems'],
    image: '🫘'
  },
  // Oilseeds
  {
    id: 'groundnut',
    name: 'Groundnut (Peanut)',
    nameKannada: 'ಕಡಲೆಕಾಯಿ',
    category: 'oilseeds',
    waterRequirement: 'medium',
    waterSavings: '40-50%',
    growingSeason: 'June - July',
    duration: '4-5 months',
    expectedYield: '10-15 quintals/acre',
    marketPrice: '₹5,500 - ₹6,500/quintal',
    benefits: ['Oil + fodder value', 'Enriches soil nitrogen', 'Good crop rotation option', 'Multiple product uses'],
    image: '🥜'
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    nameKannada: 'ಸೂರ್ಯಕಾಂತಿ',
    category: 'oilseeds',
    waterRequirement: 'medium',
    waterSavings: '35-45%',
    growingSeason: 'January - February / June - July',
    duration: '3-3.5 months',
    expectedYield: '6-10 quintals/acre',
    marketPrice: '₹5,000 - ₹6,000/quintal',
    benefits: ['Short duration', 'Good oil content', 'Attracts pollinators', 'Can be grown twice a year'],
    image: '🌻'
  },
  // Horticulture
  {
    id: 'tomato',
    name: 'Tomato',
    nameKannada: 'ಟೊಮೆಟೊ',
    category: 'horticulture',
    waterRequirement: 'medium',
    waterSavings: '40-50%',
    growingSeason: 'Year-round (with irrigation)',
    duration: '3-4 months',
    expectedYield: '80-120 quintals/acre',
    marketPrice: '₹800 - ₹2,500/quintal',
    benefits: ['High yield potential', 'Multiple harvests', 'Good with drip irrigation', 'Processing demand'],
    image: '🍅'
  },
  {
    id: 'chilli',
    name: 'Green Chilli',
    nameKannada: 'ಹಸಿ ಮೆಣಸಿನಕಾಯಿ',
    category: 'horticulture',
    waterRequirement: 'medium',
    waterSavings: '45-55%',
    growingSeason: 'June - July / September - October',
    duration: '5-6 months',
    expectedYield: '40-80 quintals/acre',
    marketPrice: '₹2,000 - ₹4,500/quintal',
    benefits: ['High value crop', 'Long harvesting period', 'Export potential', 'Dried chilli option'],
    image: '🌶️'
  },
  {
    id: 'coconut',
    name: 'Coconut',
    nameKannada: 'ತೆಂಗಿನಕಾಯಿ',
    category: 'horticulture',
    waterRequirement: 'medium',
    waterSavings: '30-40%',
    growingSeason: 'Perennial (plant June-September)',
    duration: '5-7 years to full bearing',
    expectedYield: '80-150 nuts/tree/year',
    marketPrice: '₹15 - ₹25/nut',
    benefits: ['Perennial income', 'Multiple products', 'Intercropping possible', 'Less labor intensive'],
    image: '🥥'
  },
  {
    id: 'vegetables',
    name: 'Mixed Vegetables',
    nameKannada: 'ತರಕಾರಿಗಳು',
    category: 'horticulture',
    waterRequirement: 'medium',
    waterSavings: '40-50%',
    growingSeason: 'Year-round',
    duration: '2-4 months',
    expectedYield: '60-100 quintals/acre',
    marketPrice: 'Variable (₹1,000 - ₹3,000/quintal)',
    benefits: ['Quick returns', 'Local market demand', 'Diverse income', 'Kitchen garden potential'],
    image: '🥬'
  }
];

export const categories = [
  { id: 'millets', name: 'Millets', nameKannada: 'ಸಿರಿಧಾನ್ಯಗಳು', icon: '🌾', color: 'bg-amber-100 text-amber-800', waterSavings: '60-80%' },
  { id: 'pulses', name: 'Pulses', nameKannada: 'ಬೇಳೆಕಾಳುಗಳು', icon: '🫘', color: 'bg-green-100 text-green-800', waterSavings: '50-65%' },
  { id: 'oilseeds', name: 'Oilseeds', nameKannada: 'ಎಣ್ಣೆಕಾಳುಗಳು', icon: '🥜', color: 'bg-yellow-100 text-yellow-800', waterSavings: '35-50%' },
  { id: 'horticulture', name: 'Horticulture', nameKannada: 'ತೋಟಗಾರಿಕೆ', icon: '🍅', color: 'bg-red-100 text-red-800', waterSavings: '30-55%' }
];
