import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Droplets, 
  Sprout, 
  CloudRain, 
  FileText, 
  TrendingUp, 
  Users,
  ArrowRight,
  Lightbulb,
  Phone,
  Wrench,
  Play
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import cropsFieldImage from '@/assets/crops-field.jpg';

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sprout,
      titleKey: 'smartCropAdvisor',
      descKey: 'smartCropDesc',
      href: '/crops',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Droplets,
      titleKey: 'irrigationGuideTitle',
      descKey: 'irrigationDesc',
      href: '/irrigation',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: CloudRain,
      titleKey: 'waterConservationTitle',
      descKey: 'waterConservationDesc',
      href: '/conservation',
      color: 'bg-cyan-100 text-cyan-700',
    },
    {
      icon: FileText,
      titleKey: 'governmentSchemesTitle',
      descKey: 'governmentSchemesDesc',
      href: '/schemes',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: Wrench,
      titleKey: 'equipmentGuide',
      descKey: 'equipmentGuideDesc',
      href: '/equipment',
      color: 'bg-orange-100 text-orange-700',
    },
  ];

  const tipKeys = ['tip1', 'tip2', 'tip3', 'tip4'];
  const tipIcons = ['💧', '🌾', '🌧️', '📱'];

  const tutorialVideos = [
    { titleKey: 'tutorialCropRotation', descKey: 'tutorialCropRotationDesc', url: 'https://www.youtube.com/watch?v=7U5kA4EhvOo', duration: '12:45' },
    { titleKey: 'tutorialOrganicFarming', descKey: 'tutorialOrganicFarmingDesc', url: 'https://www.youtube.com/watch?v=6rPPUmStKQ4', duration: '18:30' },
    { titleKey: 'tutorialDripIrrigation', descKey: 'tutorialDripIrrigationDesc', url: 'https://www.youtube.com/watch?v=vJwPqMBBQjE', duration: '15:20' },
    { titleKey: 'tutorialPestManagement', descKey: 'tutorialPestManagementDesc', url: 'https://www.youtube.com/watch?v=1K_NeXm8Y-s', duration: '14:10' },
  ];

  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cropsFieldImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {t('appName')}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/crops">
                <Button size="lg" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 font-semibold px-8">
                  <Sprout className="mr-2 h-5 w-5" />
                  {t('exploreCrops')}
                </Button>
              </Link>
              <Link to="/schemes">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                  <FileText className="mr-2 h-5 w-5" />
                  {t('viewSchemes')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title={t('waterSavings')}
              value="60-70%"
              subtitle={t('withRightCrops')}
              icon={Droplets}
              iconBg="bg-blue-100"
            />
            <StatCard
              title={t('alternativeCrops')}
              value="12+"
              subtitle={t('droughtResistant')}
              icon={Sprout}
              iconBg="bg-green-100"
            />
            <StatCard
              title={t('subsidyAvailable')}
              value="90%"
              subtitle={t('onMicroIrrigation')}
              icon={TrendingUp}
              iconBg="bg-purple-100"
            />
            <StatCard
              title={t('successStories')}
              value="5+"
              subtitle={t('fromFarmers')}
              icon={Users}
              iconBg="bg-amber-100"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('everythingYouNeed')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('comprehensiveResources')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Link key={feature.titleKey} to={feature.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-card hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl p-3 ${feature.color}`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">{t(feature.descKey)}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Videos Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('tutorialVideos')}</h2>
          </div>
          <p className="text-center text-muted-foreground mb-8">{t('tutorialVideosDesc')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tutorialVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-shadow group">
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video flex items-center justify-center">
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary hover:scale-110 transition-all"
                  >
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </a>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{t(video.titleKey)}</h3>
                  <p className="text-xs text-muted-foreground">{t(video.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Lightbulb className="h-6 w-6 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">{t('waterSavingTips')}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tipKeys.map((tipKey, index) => (
              <div key={index} className="bg-card rounded-xl p-5 shadow-soft">
                <span className="text-3xl mb-3 block">{tipIcons[index]}</span>
                <p className="text-sm text-foreground">{t(tipKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-accent rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {t('needHelp')}
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              {t('expertGuidance')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-background text-secondary hover:bg-background/90">
                <Phone className="mr-2 h-5 w-5" />
                {t('contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}