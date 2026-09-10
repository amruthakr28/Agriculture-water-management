import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { StoryCard } from '@/components/StoryCard';
import { stories } from '@/data/stories';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, TrendingUp, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import successFarmersImage from '@/assets/success-farmers.jpg';
import farmerSuccessImage from '@/assets/farmer-success.jpg';

export default function SuccessStories() {
  const { t } = useLanguage();
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const stats = [
    { icon: Droplets, value: '55%', labelKey: 'averageWaterSaved', color: 'text-blue-600' },
    { icon: TrendingUp, value: '71%', labelKey: 'averageIncomeIncrease', color: 'text-green-600' },
    { icon: Users, value: '100+', labelKey: 'familiesBenefited', color: 'text-purple-600' },
    { icon: Award, value: '5', labelKey: 'successStories', color: 'text-amber-600' },
  ];

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${successFarmersImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('successStories')}
            </h1>
            <p className="text-primary-foreground/80">
              Real stories from farmers who transformed their farms through sustainable 
              water management and alternative crop strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <Card key={stat.labelKey}>
                <CardContent className="p-5 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote with Image */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img 
              src={farmerSuccessImage} 
              alt="Successful farmer" 
              className="w-full md:w-48 h-32 object-cover rounded-xl"
            />
            <blockquote className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium text-foreground italic">
                "ನೀರು ಕಡಿಮೆಯಾದರೂ, ನಮ್ಮ ಆಶಯಗಳು ಕಡಿಮೆಯಾಗಬಾರದು"
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                "Even if water reduces, our hopes should never diminish"
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Mandya Farmers' Collective
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('farmerTransformationStories')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {stories.map((story) => (
              <StoryCard 
                key={story.id} 
                story={story}
                expanded={expandedStory === story.id}
                onToggle={() => setExpandedStory(
                  expandedStory === story.id ? null : story.id
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('shareYourStory')}
            </h2>
            <p className="text-muted-foreground mb-6">
              Are you a farmer who has successfully adopted water-saving practices? 
              We'd love to hear your story and inspire others in the community.
            </p>
            <div className="bg-card rounded-2xl p-6 text-left">
              <h3 className="font-semibold text-foreground mb-4">To share your story:</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">1</span>
                  Visit your local Raitha Samparka Kendra
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">2</span>
                  Speak with the agricultural officer about your transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">3</span>
                  Provide photos and details of your journey
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">4</span>
                  Your story could be featured to inspire thousands!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
