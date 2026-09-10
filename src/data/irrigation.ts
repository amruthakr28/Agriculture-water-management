export interface IrrigationMethod {
  id: string;
  name: string;
  nameKannada: string;
  type: 'micro' | 'traditional' | 'smart';
  waterSavings: string;
  description: string;
  howItWorks: string;
  suitableCrops: string[];
  advantages: string[];
  disadvantages: string[];
  costEstimate: {
    perAcre: string;
    subsidy: string;
    netCost: string;
  };
  maintenanceTips: string[];
  image: string;
}

export const irrigationMethods: IrrigationMethod[] = [
  {
    id: 'drip',
    name: 'Drip Irrigation',
    nameKannada: 'ಹನಿ ನೀರಾವರಿ',
    type: 'micro',
    waterSavings: '50-60%',
    description: 'Water is delivered directly to the root zone of plants through a network of pipes, valves, and emitters.',
    howItWorks: 'Water flows through main lines, sub-mains, and lateral lines with emitters that release water drop by drop near plant roots. Pressure compensating emitters ensure uniform distribution.',
    suitableCrops: ['Vegetables', 'Fruit orchards', 'Sugarcane', 'Cotton', 'Coconut', 'Grapes', 'Banana'],
    advantages: [
      'Highest water efficiency (90-95%)',
      'Reduces weed growth',
      'Fertilizer can be applied through system',
      'Works on undulating terrain',
      'Reduces labor costs',
      'Prevents soil erosion'
    ],
    disadvantages: [
      'Higher initial investment',
      'Requires regular maintenance',
      'Clogging issues with poor water quality',
      'Not suitable for closely spaced crops'
    ],
    costEstimate: {
      perAcre: '₹45,000 - ₹60,000',
      subsidy: '55% under PMKSY',
      netCost: '₹20,000 - ₹27,000'
    },
    maintenanceTips: [
      'Flush lines weekly',
      'Clean filters every 15 days',
      'Check for leaks monthly',
      'Replace damaged emitters promptly',
      'Winterize system if not in use'
    ],
    image: '💧'
  },
  {
    id: 'sprinkler',
    name: 'Sprinkler Irrigation',
    nameKannada: 'ತುಂತುರು ನೀರಾವರಿ',
    type: 'micro',
    waterSavings: '30-40%',
    description: 'Water is sprayed into the air and falls on crops like rainfall through sprinkler heads.',
    howItWorks: 'Water is pumped through pipes and released through rotating sprinkler heads that spray water in circular patterns. Coverage depends on sprinkler spacing and water pressure.',
    suitableCrops: ['Pulses', 'Groundnut', 'Vegetables', 'Wheat', 'Fodder crops', 'Lawns'],
    advantages: [
      'Covers large areas quickly',
      'Good for light soils',
      'Cooling effect on crops',
      'Easy to install and move',
      'Suitable for undulating land'
    ],
    disadvantages: [
      'Wind affects distribution',
      'Higher evaporation losses',
      'Can promote fungal diseases',
      'Not ideal for tall crops'
    ],
    costEstimate: {
      perAcre: '₹25,000 - ₹35,000',
      subsidy: '45% under PMKSY',
      netCost: '₹14,000 - ₹19,000'
    },
    maintenanceTips: [
      'Check sprinkler heads for damage',
      'Clean nozzles regularly',
      'Maintain proper pressure',
      'Store properly when not in use',
      'Lubricate moving parts'
    ],
    image: '🌧️'
  },
  {
    id: 'sensor-based',
    name: 'Sensor-Based Smart Irrigation',
    nameKannada: 'ಸೆನ್ಸರ್ ಆಧಾರಿತ ನೀರಾವರಿ',
    type: 'smart',
    waterSavings: '60-70%',
    description: 'IoT sensors monitor soil moisture and automatically control irrigation based on actual plant needs.',
    howItWorks: 'Soil moisture sensors placed in the field send data to a controller. When moisture falls below threshold, irrigation automatically starts. Stops when optimal level is reached. Can be monitored via mobile app.',
    suitableCrops: ['All crops with drip/sprinkler', 'Precision farming', 'Greenhouses', 'High-value crops'],
    advantages: [
      'Zero water wastage',
      'Remote monitoring and control',
      'Data-driven decisions',
      'Saves time and labor',
      'Optimal crop growth',
      'Weather integration possible'
    ],
    disadvantages: [
      'Highest initial cost',
      'Requires electricity/solar',
      'Technical knowledge needed',
      'Sensor calibration required'
    ],
    costEstimate: {
      perAcre: '₹15,000 - ₹25,000 (additional to drip)',
      subsidy: 'Limited schemes available',
      netCost: '₹10,000 - ₹20,000'
    },
    maintenanceTips: [
      'Calibrate sensors seasonally',
      'Keep solar panels clean',
      'Update software regularly',
      'Backup data periodically',
      'Check battery health'
    ],
    image: '📡'
  },
  {
    id: 'raingun',
    name: 'Rain Gun System',
    nameKannada: 'ರೈನ್ ಗನ್ ಸಿಸ್ಟಮ್',
    type: 'micro',
    waterSavings: '25-35%',
    description: 'High-pressure sprinkler that throws water up to 40 meters, covering large areas with single unit.',
    howItWorks: 'A single high-impact sprinkler mounted on tripod covers 0.5-1 acre. Water is thrown in a large arc pattern. Can be moved between positions.',
    suitableCrops: ['Sugarcane', 'Fodder', 'Pulses', 'Oilseeds', 'Orchards'],
    advantages: [
      'Low initial cost',
      'Easy to operate',
      'Portable and flexible',
      'Good for large fields',
      'Minimal infrastructure'
    ],
    disadvantages: [
      'High operating pressure needed',
      'Wind sensitive',
      'Higher evaporation',
      'Labor for repositioning'
    ],
    costEstimate: {
      perAcre: '₹15,000 - ₹20,000',
      subsidy: '45% under state schemes',
      netCost: '₹8,000 - ₹11,000'
    },
    maintenanceTips: [
      'Check seals and gaskets',
      'Clean nozzle after use',
      'Store in dry place',
      'Lubricate swivel mechanism'
    ],
    image: '🔫'
  },
  {
    id: 'farm-pond',
    name: 'Farm Pond + Lift Irrigation',
    nameKannada: 'ಕೃಷಿ ಕೆರೆ + ಲಿಫ್ಟ್ ನೀರಾವರಿ',
    type: 'traditional',
    waterSavings: '20-30%',
    description: 'Rainwater harvesting structure that stores water during monsoon for use in dry season.',
    howItWorks: 'Excavated pond lined with plastic sheet collects rainwater and runoff. Stored water is pumped to fields as needed. Combines storage with efficient distribution.',
    suitableCrops: ['All crops', 'Protective irrigation', 'Livestock water', 'Fish farming option'],
    advantages: [
      'Rainwater harvesting',
      'Recharges groundwater',
      'Multi-purpose use',
      'Climate resilient',
      'High government subsidy'
    ],
    disadvantages: [
      'Land required for pond',
      'Evaporation losses',
      'Mosquito breeding if neglected',
      'Maintenance needed'
    ],
    costEstimate: {
      perAcre: '₹2.5 - 4 lakhs (for 15x15x3m pond)',
      subsidy: '80% under Krishi Bhagya',
      netCost: '₹50,000 - ₹80,000'
    },
    maintenanceTips: [
      'De-silt before monsoon',
      'Repair plastic lining',
      'Maintain embankments',
      'Prevent cattle damage',
      'Grow trees on bunds'
    ],
    image: '🏊'
  }
];

export const conservationTechniques = [
  {
    id: 'mulching',
    name: 'Mulching',
    description: 'Cover soil with organic or plastic material to reduce evaporation by 25-30%',
    waterSaved: '25-30%',
    icon: '🍂'
  },
  {
    id: 'crop-rotation',
    name: 'Crop Rotation',
    description: 'Alternate water-intensive crops with drought-resistant ones seasonally',
    waterSaved: '20-25%',
    icon: '🔄'
  },
  {
    id: 'contour-farming',
    name: 'Contour Farming',
    description: 'Plant along contour lines to reduce runoff and improve water infiltration',
    waterSaved: '15-20%',
    icon: '🏔️'
  },
  {
    id: 'deficit-irrigation',
    name: 'Deficit Irrigation',
    description: 'Strategic under-irrigation during drought-tolerant growth stages',
    waterSaved: '20-40%',
    icon: '📉'
  }
];
