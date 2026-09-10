import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { irrigationMethods, conservationTechniques, IrrigationMethod } from '@/data/irrigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplets, IndianRupee, CheckCircle, AlertCircle, Wrench, Sprout } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import dripIrrigationImage from '@/assets/irrigation/drip-irrigation.jpg';
import sprinklerImage from '@/assets/irrigation/sprinkler.jpg';

export default function IrrigationGuide() {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<IrrigationMethod | null>(null);

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dripIrrigationImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('irrigationGuide')}
            </h1>
            <p className="text-primary-foreground/80">
              {t('learnModernIrrigation')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl font-bold text-blue-600">60%</p>
              <p className="text-sm text-muted-foreground">{t('maxWaterSavings')}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-3xl font-bold text-green-600">90%</p>
              <p className="text-sm text-muted-foreground">{t('subsidyForSmallFarmers')}</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <p className="text-3xl font-bold text-amber-600">70%</p>
              <p className="text-sm text-muted-foreground">{t('laborReduction')}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-3xl font-bold text-purple-600">40%</p>
              <p className="text-sm text-muted-foreground">{t('yieldIncrease')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Irrigation Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('irrigationSystemsExplained')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {irrigationMethods.map((method, index) => (
              <Card 
                key={method.id} 
                className="cursor-pointer transition-all hover:shadow-card hover:-translate-y-1 overflow-hidden"
                onClick={() => setSelectedMethod(method)}
              >
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${index % 2 === 0 ? dripIrrigationImage : sprinklerImage})` }}
                />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{method.image}</span>
                      <div>
                        <h3 className="font-semibold text-foreground">{method.name}</h3>
                        <p className="text-sm text-muted-foreground">{method.nameKannada}</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      💧 {method.waterSavings}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Cost: {method.costEstimate.perAcre}/acre</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Droplets className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Subsidy: {method.costEstimate.subsidy}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Techniques */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('conservationTechniques')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {conservationTechniques.map((technique) => (
              <div key={technique.id} className="bg-card rounded-xl p-5 shadow-soft">
                <span className="text-3xl mb-3 block">{technique.icon}</span>
                <h3 className="font-semibold text-foreground mb-2">{technique.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{technique.description}</p>
                <Badge variant="secondary">{technique.waterSaved} saved</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Detail Dialog */}
      <Dialog open={!!selectedMethod} onOpenChange={() => setSelectedMethod(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMethod && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{selectedMethod.image}</span>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMethod.name}</DialogTitle>
                    <p className="text-muted-foreground">{selectedMethod.nameKannada}</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">
                      💧 Saves {selectedMethod.waterSavings} water
                    </Badge>
                  </div>
                </div>
              </DialogHeader>
              
              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="crops">Crops</TabsTrigger>
                  <TabsTrigger value="cost">Cost</TabsTrigger>
                  <TabsTrigger value="maintenance">Care</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How It Works</h4>
                    <p className="text-muted-foreground">{selectedMethod.howItWorks}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {selectedMethod.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-green-600">✓</span>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {selectedMethod.disadvantages.map((dis, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-amber-600">•</span>
                            {dis}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="crops" className="mt-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sprout className="h-4 w-4 text-primary" />
                    Suitable Crops
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMethod.suitableCrops.map((crop, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="cost" className="space-y-4 mt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-xl p-4 text-center">
                      <p className="text-sm text-muted-foreground">Cost per Acre</p>
                      <p className="text-lg font-bold text-foreground">{selectedMethod.costEstimate.perAcre}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <p className="text-sm text-muted-foreground">Subsidy</p>
                      <p className="text-lg font-bold text-green-600">{selectedMethod.costEstimate.subsidy}</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <p className="text-sm text-muted-foreground">Your Cost</p>
                      <p className="text-lg font-bold text-primary">{selectedMethod.costEstimate.netCost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    * Costs are approximate and may vary based on field conditions and vendor
                  </p>
                </TabsContent>
                
                <TabsContent value="maintenance" className="mt-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    Maintenance Tips
                  </h4>
                  <ul className="space-y-2">
                    {selectedMethod.maintenanceTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
                          {i + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
