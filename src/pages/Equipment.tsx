import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Sprout, Droplets, Leaf, Tractor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoCategory {
  id: string;
  nameKey: string;
  descKey: string;
  icon: React.ReactNode;
  videos: { titleKey: string; descKey: string; url: string; duration: string }[];
}

const videoCategories: VideoCategory[] = [
  {
    id: 'crops',
    nameKey: 'farmingCrops',
    descKey: 'farmingCropsDesc',
    icon: <Sprout className="h-5 w-5" />,
    videos: [
      { titleKey: 'videoCropRotation', descKey: 'videoCropRotationDesc', url: 'https://www.youtube.com/watch?v=l2-UrE8qyrs', duration: '12:30' },
      { titleKey: 'videoOrganicFarming', descKey: 'videoOrganicFarmingDesc', url: 'https://www.youtube.com/watch?v=_63xa8bEUzM', duration: '18:45' },
      { titleKey: 'videoPaddyCultivation', descKey: 'videoPaddyCultivationDesc', url: 'https://www.youtube.com/watch?v=-eBrAm64fpg', duration: '22:10' },
      { titleKey: 'videoVegetableFarming', descKey: 'videoVegetableFarmingDesc', url: 'https://www.youtube.com/watch?v=JXEtmKRnMZk', duration: '15:20' },
      { titleKey: 'videoSoilPreparation', descKey: 'videoSoilPreparationDesc', url: 'https://www.youtube.com/watch?v=NJ-6SJnXxuc', duration: '10:15' }
    ]
  },
  {
    id: 'water',
    nameKey: 'waterManagement',
    descKey: 'waterManagementDesc',
    icon: <Droplets className="h-5 w-5" />,
    videos: [
      { titleKey: 'videoDripIrrigation', descKey: 'videoDripIrrigationDesc', url: 'https://www.youtube.com/watch?v=4-PW4NrLNRk', duration: '16:40' },
      { titleKey: 'videoRainwaterHarvest', descKey: 'videoRainwaterHarvestDesc', url: 'https://www.youtube.com/watch?v=F7pyGgBmzDY', duration: '14:25' },
      { titleKey: 'videoMicroIrrigation', descKey: 'videoMicroIrrigationDesc', url: 'https://www.youtube.com/watch?v=4-PW4NrLNRk', duration: '20:00' },
      { titleKey: 'videoWaterSaving', descKey: 'videoWaterSavingDesc', url: 'https://www.youtube.com/watch?v=F7pyGgBmzDY', duration: '11:30' },
      { titleKey: 'videoFarmPonds', descKey: 'videoFarmPondsDesc', url: 'https://www.youtube.com/watch?v=9qcq48bRPz4', duration: '13:50' }
    ]
  },
  {
    id: 'alternative',
    nameKey: 'alternativeCrops',
    descKey: 'alternativeCropsDesc',
    icon: <Leaf className="h-5 w-5" />,
    videos: [
      { titleKey: 'videoMillets', descKey: 'videoMilletsDesc', url: 'https://www.youtube.com/watch?v=23WR8tXF8xE', duration: '17:20' },
      { titleKey: 'videoPulses', descKey: 'videoPulsesDesc', url: 'https://www.youtube.com/watch?v=iUHBxHw5-nw', duration: '14:10' },
      { titleKey: 'videoOilseeds', descKey: 'videoOilseedsDesc', url: 'https://www.youtube.com/watch?v=U4odgvVCblc', duration: '15:45' },
      { titleKey: 'videoHorticulture', descKey: 'videoHorticultureDesc', url: 'https://www.youtube.com/watch?v=l2-UrE8qyrs', duration: '19:30' },
      { titleKey: 'videoMedicinalPlants', descKey: 'videoMedicinalPlantsDesc', url: 'https://www.youtube.com/watch?v=41YWrhEcQRg', duration: '12:00' }
    ]
  },
  {
    id: 'cultivation',
    nameKey: 'cultivationTechniques',
    descKey: 'cultivationTechniquesDesc',
    icon: <Tractor className="h-5 w-5" />,
    videos: [
      { titleKey: 'videoModernFarming', descKey: 'videoModernFarmingDesc', url: 'https://www.youtube.com/watch?v=_63xa8bEUzM', duration: '21:15' },
      { titleKey: 'videoIntegratedFarming', descKey: 'videoIntegratedFarmingDesc', url: 'https://www.youtube.com/watch?v=-eBrAm64fpg', duration: '18:00' },
      { titleKey: 'videoPestManagement', descKey: 'videoPestManagementDesc', url: 'https://www.youtube.com/watch?v=JXEtmKRnMZk', duration: '16:25' },
      { titleKey: 'videoFertilizerUse', descKey: 'videoFertilizerUseDesc', url: 'https://www.youtube.com/watch?v=NJ-6SJnXxuc', duration: '13:40' },
      { titleKey: 'videoHarvestTechniques', descKey: 'videoHarvestTechniquesDesc', url: 'https://www.youtube.com/watch?v=41YWrhEcQRg', duration: '14:55' }
    ]
  }
];

export default function Equipment() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('crops');

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <Play className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {t('farmingVideos')}
              </h1>
            </div>
            <p className="text-primary-foreground/80">
              {t('farmingVideosDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Categories Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
              {videoCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{t(category.nameKey)}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {videoCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    {category.icon}
                    {t(category.nameKey)}
                  </h2>
                  <p className="text-muted-foreground">{t(category.descKey)}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.videos.map((video, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer"
                        onClick={() => window.open(video.url, '_blank')}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                        <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{t(video.titleKey)}</h3>
                        <p className="text-sm text-muted-foreground">{t(video.descKey)}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Learning */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">{t('featuredLearning')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium mb-1">{t('beginnerGuides')}</h3>
                <p className="text-sm text-muted-foreground">{t('beginnerGuidesDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium mb-1">{t('advancedTechniques')}</h3>
                <p className="text-sm text-muted-foreground">{t('advancedTechniquesDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium mb-1">{t('seasonalTips')}</h3>
                <p className="text-sm text-muted-foreground">{t('seasonalTipsDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <Tractor className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-1">{t('expertInterviews')}</h3>
                <p className="text-sm text-muted-foreground">{t('expertInterviewsDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
