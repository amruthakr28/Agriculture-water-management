import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Cloud, Repeat, Layers, Sun, TreeDeciduous } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import farmPondImage from '@/assets/conservation/farm-pond.jpg';
import rainwaterImage from '@/assets/conservation/rainwater-harvesting.jpg';

const techniques = [
  {
    icon: Cloud,
    titleKey: 'Farm Pond Construction',
    titleKannada: 'ಕೃಷಿ ಕೆರೆ ನಿರ್ಮಾಣ',
    description: 'Construct a farm pond to store rainwater for use during dry seasons. A 15x15x3m pond can irrigate 2-3 acres for 6 months.',
    waterSaved: '30-40%',
    subsidy: '80% under Krishi Bhagya',
    steps: [
      'Select lowest point in the field',
      'Excavate 15x15x3 meter pit',
      'Line with 500 micron plastic sheet',
      'Build embankments with excavated soil',
      'Install inlet and outlet structures',
      'Plant trees on bunds for stability'
    ],
    benefits: ['Rainwater harvesting', 'Groundwater recharge', 'Fish farming potential', 'Emergency reserve']
  },
  {
    icon: Droplets,
    titleKey: 'Rainwater Harvesting',
    titleKannada: 'ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ',
    description: 'Collect and store rainwater from rooftops and field runoff. Every mm of rain on 1 acre = 4,000 liters of water.',
    waterSaved: '25-35%',
    subsidy: 'Various state schemes',
    steps: [
      'Install gutters on farm buildings',
      'Create collection channels in fields',
      'Build percolation pits near bore wells',
      'Construct check dams in streams',
      'Use contour bunds to slow runoff',
      'Maintain structures before monsoon'
    ],
    benefits: ['Free water source', 'Reduces soil erosion', 'Improves groundwater', 'Low maintenance']
  },
  {
    icon: Repeat,
    titleKey: 'Crop Rotation System',
    titleKannada: 'ಬೆಳೆ ಪರಿವರ್ತನೆ',
    description: 'Alternate water-intensive crops with drought-resistant ones. Follow sugarcane with pulses or millets to restore soil and save water.',
    waterSaved: '20-30%',
    subsidy: 'MSP support for alternative crops',
    steps: [
      'Map current water usage per crop',
      'Plan 3-year rotation cycle',
      'Alternate deep-rooted and shallow crops',
      'Include legumes for nitrogen fixing',
      'Match crops to seasonal water availability',
      'Adjust based on market prices'
    ],
    benefits: ['Balanced water usage', 'Improved soil health', 'Pest cycle break', 'Diversified income']
  },
  {
    icon: Layers,
    titleKey: 'Mulching Techniques',
    titleKannada: 'ಮಲ್ಚಿಂಗ್ ತಂತ್ರ',
    description: 'Cover soil with organic matter or plastic sheets to reduce evaporation by up to 30%. Excellent for vegetable and fruit crops.',
    waterSaved: '25-30%',
    subsidy: 'Included in horticulture schemes',
    steps: [
      'Clear weeds from crop rows',
      'Apply 4-6 inch layer of organic mulch',
      'Or use plastic mulch sheets',
      'Leave space around plant stems',
      'Replenish organic mulch as it decomposes',
      'Combine with drip irrigation for best results'
    ],
    benefits: ['Reduces evaporation', 'Controls weeds', 'Regulates soil temperature', 'Adds organic matter']
  },
  {
    icon: Sun,
    titleKey: 'Deficit Irrigation',
    titleKannada: 'ಕೊರತೆ ನೀರಾವರಿ',
    description: 'Strategic under-watering during drought-tolerant growth stages. Save 20-40% water without significant yield loss.',
    waterSaved: '20-40%',
    subsidy: 'Technical training available',
    steps: [
      'Identify crop growth stages',
      'Note critical water-need periods',
      'Reduce water during vegetative stage',
      'Full irrigation during flowering/fruiting',
      'Monitor plant stress indicators',
      'Adjust based on weather conditions'
    ],
    benefits: ['Significant water savings', 'Minimal yield impact', 'No infrastructure cost', 'Improves water productivity']
  },
  {
    icon: TreeDeciduous,
    titleKey: 'Agroforestry Integration',
    titleKannada: 'ಕೃಷಿ ಅರಣ್ಯ',
    description: 'Plant trees on field boundaries to create microclimate, reduce evaporation, and provide additional income from timber/fruits.',
    waterSaved: '15-25%',
    subsidy: 'Supported under PMKSY',
    steps: [
      'Select suitable tree species',
      'Plant on field boundaries and bunds',
      'Maintain 3-4m spacing from crops',
      'Prune to reduce crop shading',
      'Integrate fruit trees for income',
      'Use fallen leaves as mulch'
    ],
    benefits: ['Windbreak effect', 'Reduced evaporation', 'Additional income', 'Carbon sequestration']
  }
];

const monthlyCalendar = [
  { month: 'January', activity: 'Prepare farm ponds, repair bunds', season: 'dry' },
  { month: 'February', activity: 'Install/repair irrigation systems', season: 'dry' },
  { month: 'March', activity: 'Mulch summer crops heavily', season: 'dry' },
  { month: 'April', activity: 'Use stored pond water, deficit irrigation', season: 'dry' },
  { month: 'May', activity: 'Pre-monsoon pond maintenance', season: 'dry' },
  { month: 'June', activity: 'Monsoon planting, rainwater collection starts', season: 'monsoon' },
  { month: 'July', activity: 'Check channels, maximize water capture', season: 'monsoon' },
  { month: 'August', activity: 'Overflow management, groundwater recharge', season: 'monsoon' },
  { month: 'September', activity: 'Continue harvesting, prepare storage', season: 'monsoon' },
  { month: 'October', activity: 'Post-monsoon crop planning', season: 'post' },
  { month: 'November', activity: 'Rabi crop irrigation planning', season: 'post' },
  { month: 'December', activity: 'Efficient irrigation, water budgeting', season: 'post' }
];

export default function WaterConservation() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmPondImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('waterConservation')}
            </h1>
            <p className="text-primary-foreground/80">
              {t('practicalMethods')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Message with Image */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img 
              src={rainwaterImage} 
              alt="Rainwater harvesting" 
              className="w-full md:w-48 h-32 object-cover rounded-xl"
            />
            <div className="text-center md:text-left">
              <p className="text-xl font-semibold text-foreground mb-2">
                "ಒಂದು ಎಕರೆ ಭೂಮಿಯಲ್ಲಿ 1 ಮಿಮೀ ಮಳೆ = 4,000 ಲೀಟರ್ ನೀರು"
              </p>
              <p className="text-muted-foreground">
                Every mm of rain on 1 acre = 4,000 liters of free water. Don't let it run off!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('conservationMethods')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {techniques.map((technique) => (
              <Card key={technique.titleKey} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-xl p-3">
                        <technique.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{technique.titleKey}</h3>
                        <p className="text-sm text-muted-foreground">{technique.titleKannada}</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      💧 {technique.waterSaved}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{technique.description}</p>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-800">
                      💰 Subsidy: {technique.subsidy}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">{t('implementationSteps')}</h4>
                    <ol className="space-y-1">
                      {technique.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {technique.benefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        ✓ {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('yearRoundCalendar')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {monthlyCalendar.map((item) => (
                <div 
                  key={item.month} 
                  className={`rounded-xl p-4 ${
                    item.season === 'monsoon' 
                      ? 'bg-blue-100 border-blue-200' 
                      : item.season === 'dry' 
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-green-50 border-green-200'
                  } border`}
                >
                  <p className="font-semibold text-foreground">{item.month}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.activity}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-50 border border-amber-200" />
                <span className="text-sm text-muted-foreground">{t('drySeason')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200" />
                <span className="text-sm text-muted-foreground">{t('monsoon')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-50 border border-green-200" />
                <span className="text-sm text-muted-foreground">{t('postMonsoon')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
