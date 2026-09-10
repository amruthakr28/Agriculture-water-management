export interface SuccessStory {
  id: string;
  farmerName: string;
  village: string;
  taluk: string;
  image: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  waterSaved: string;
  incomeIncrease: string;
  cropChanged: {
    from: string;
    to: string;
  };
  quote: string;
  year: number;
}

export const stories: SuccessStory[] = [
  {
    id: 'ramesh-kumar',
    farmerName: 'Ramesh Kumar',
    village: 'Bellur',
    taluk: 'Mandya',
    image: '👨‍🌾',
    title: 'From Water Crisis to Prosperity with Ragi',
    summary: 'Shifted from sugarcane to ragi and saved 60% water while increasing income.',
    challenge: 'Ramesh had 5 acres of sugarcane that required constant irrigation. With Cauvery water becoming unreliable, his crops failed twice in 3 years, leading to ₹2 lakh debt.',
    solution: 'With guidance from the Agriculture Department, he converted 3 acres to ragi cultivation with drip irrigation and kept 2 acres for vegetables. He also constructed a farm pond under Krishi Bhagya scheme.',
    results: [
      'Water usage reduced by 60%',
      'Farm pond stores rainwater for 6 months',
      'Year-round income from vegetables',
      'Cleared debt in 2 years'
    ],
    waterSaved: '60%',
    incomeIncrease: '45%',
    cropChanged: { from: 'Sugarcane', to: 'Ragi + Vegetables' },
    quote: 'I was skeptical about leaving sugarcane, but now I realize millets are the future. My farm is now drought-proof.',
    year: 2023
  },
  {
    id: 'lakshmi-devi',
    farmerName: 'Lakshmi Devi',
    village: 'Kirugavalu',
    taluk: 'Malavalli',
    image: '👩‍🌾',
    title: 'Women Farmer Leads Organic Revolution',
    summary: 'Started organic pulse cultivation and now trains other women farmers.',
    challenge: 'As a widow with 2 acres of land, Lakshmi struggled with high input costs for paddy farming. Water scarcity made it impossible to grow traditional crops.',
    solution: 'She switched to organic green gram and black gram cultivation, using natural fertilizers and pest management. Joined a women\'s self-help group for collective marketing.',
    results: [
      'Input costs reduced by 50%',
      'Premium price for organic produce',
      'Now trains 50+ women farmers',
      'Started seed bank in village'
    ],
    waterSaved: '55%',
    incomeIncrease: '70%',
    cropChanged: { from: 'Paddy', to: 'Organic Pulses' },
    quote: 'When I stopped fighting against nature and started working with it, everything changed. Water-wise farming saved my family.',
    year: 2022
  },
  {
    id: 'manjunath-gowda',
    farmerName: 'Manjunath Gowda',
    village: 'Srirangapatna',
    taluk: 'Srirangapatna',
    image: '👨‍🌾',
    title: 'Smart Irrigation Transforms 10-Acre Farm',
    summary: 'Installed sensor-based drip irrigation and became a model farmer for the district.',
    challenge: 'Managing irrigation for 10 acres was time-consuming and wasteful. Traditional flood irrigation consumed excess water and labor.',
    solution: 'Invested in sensor-based drip irrigation with 55% subsidy from PMKSY. Installed soil moisture sensors that automatically control water flow. Diversified to grow tomatoes and chillies.',
    results: [
      'Water usage cut by 65%',
      'Labor reduced by 70%',
      'Yield increased by 40%',
      'Farm visits by 200+ farmers yearly'
    ],
    waterSaved: '65%',
    incomeIncrease: '85%',
    cropChanged: { from: 'Flood-irrigated Paddy', to: 'Drip-irrigated Horticulture' },
    quote: 'Technology is not against tradition. Smart irrigation helps me farm like my grandfather dreamed of - efficiently and sustainably.',
    year: 2023
  },
  {
    id: 'community-bellur',
    farmerName: 'Bellur Farmers Collective',
    village: 'Bellur Cross',
    taluk: 'Nagamangala',
    image: '👥',
    title: 'Village-Wide Water Sharing Success',
    summary: '45 farmers created a community water sharing system with shared farm ponds.',
    challenge: 'Individual farmers couldn\'t afford farm ponds. Groundwater was depleting rapidly. Conflicts arose over water sharing.',
    solution: 'Formed a farmers\' collective and pooled resources to build 5 shared farm ponds. Created a water-sharing schedule and appointed a water committee for fair distribution.',
    results: [
      '45 families benefited',
      '5 community ponds built',
      'Groundwater level improved',
      'Zero water conflicts since 2021',
      'Collective bargaining power'
    ],
    waterSaved: '50%',
    incomeIncrease: '35%',
    cropChanged: { from: 'Individual struggling', to: 'Community prosperity' },
    quote: 'Alone we were helpless. Together we harvested not just crops, but hope and unity.',
    year: 2021
  },
  {
    id: 'young-farmer-innovation',
    farmerName: 'Kiran Raj',
    village: 'K.R. Pet',
    taluk: 'K.R. Pet',
    image: '👨‍💼',
    title: 'Engineering Graduate Returns to Smart Farming',
    summary: 'Left IT job to start technology-driven sustainable farming.',
    challenge: 'Family farm was struggling with traditional methods. Parents wanted to sell the land due to continuous losses.',
    solution: 'Kiran returned home and implemented IoT-based irrigation, weather monitoring, and started cultivating high-value millets. Created direct marketing through WhatsApp and local organic stores.',
    results: [
      'Farm turnaround in 18 months',
      'Direct sales at 30% premium',
      'Employs 5 local youth',
      'Started agri-tech consulting'
    ],
    waterSaved: '70%',
    incomeIncrease: '120%',
    cropChanged: { from: 'Loss-making Sugarcane', to: 'Profitable Value-added Millets' },
    quote: 'Agriculture is not a backup career. It\'s an opportunity to innovate and create impact. Our land has more potential than any software.',
    year: 2023
  }
];
