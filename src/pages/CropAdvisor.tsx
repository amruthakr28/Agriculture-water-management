import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { CropCard } from '@/components/CropCard';
import { crops, categories, Crop } from '@/data/crops';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Droplets, Calendar, TrendingUp, IndianRupee, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import cropsFieldImage from '@/assets/crops-field.jpg';

export default function CropAdvisor() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  const filteredCrops = selectedCategory 
    ? crops.filter(crop => crop.category === selectedCategory)
    : crops;

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cropsFieldImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('smartCropAdvisor')}
            </h1>
            <p className="text-primary-foreground/80">
              {t('discoverWaterEfficient')}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Banner */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-muted/50 rounded-2xl">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-foreground mb-1">{t('compareTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('compareSubtitle')}</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Sugarcane</p>
                <p className="text-2xl font-bold text-destructive">2000mm</p>
                <p className="text-xs text-muted-foreground">{t('waterPerYear')}</p>
              </div>
              <div className="text-3xl">→</div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Ragi</p>
                <p className="text-2xl font-bold text-primary">600mm</p>
                <p className="text-xs text-muted-foreground">{t('waterPerYear')}</p>
              </div>
              <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                70% {t('saved')}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              {t('allCrops')}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                <span className="mr-2">{category.icon}</span>
                {t(category.id)}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.waterSavings}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrops.map((crop) => (
              <CropCard 
                key={crop.id} 
                crop={crop} 
                onClick={() => setSelectedCrop(crop)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Crop Detail Dialog */}
      <Dialog open={!!selectedCrop} onOpenChange={() => setSelectedCrop(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCrop && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{selectedCrop.image}</span>
                  <div>
                    <DialogTitle className="text-2xl">{selectedCrop.name}</DialogTitle>
                    <p className="text-muted-foreground">{selectedCrop.nameKannada}</p>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('waterSavings')}</p>
                    <p className="text-xl font-bold text-blue-600">{selectedCrop.waterSavings}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('duration')}</p>
                    <p className="text-xl font-bold text-green-600">{selectedCrop.duration}</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 text-center">
                    <TrendingUp className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('expectedYield')}</p>
                    <p className="text-lg font-bold text-amber-600">{selectedCrop.expectedYield}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <IndianRupee className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('marketPrice')}</p>
                    <p className="text-lg font-bold text-purple-600">{selectedCrop.marketPrice}</p>
                  </div>
                </div>

                {/* Growing Season */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('growingSeason')}</h4>
                  <p className="text-muted-foreground">{selectedCrop.growingSeason}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">{t('keyBenefits')}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCrop.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Ready to switch to {selectedCrop.name}?
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    {t('getCultivationGuide')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
