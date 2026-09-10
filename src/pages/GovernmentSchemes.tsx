import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { SchemeCard } from '@/components/SchemeCard';
import { schemes, schemeTypes } from '@/data/schemes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, FileText, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import governmentSchemesImage from '@/assets/schemes/government-schemes.jpg';

export default function GovernmentSchemes() {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  const filteredSchemes = selectedType 
    ? schemes.filter(scheme => scheme.type === selectedType)
    : schemes;

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governmentSchemesImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('governmentSchemes')}
            </h1>
            <p className="text-primary-foreground/80">
              {t('governmentSchemesDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-6 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <a href="tel:1800-180-1551" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span><strong>Kisan Call Center:</strong> 1800-180-1551</span>
            </a>
            <a href="tel:1800-425-1515" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span><strong>Karnataka Agriculture:</strong> 1800-425-1515</span>
            </a>
          </div>
        </div>
      </section>

      {/* Where to Apply */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-4 text-center">{t('whereToApply')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-4 text-center">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Raitha Samparka Kendra</h3>
                <p className="text-sm text-muted-foreground">Visit your taluk's farmer service center</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Grama One Center</h3>
                <p className="text-sm text-muted-foreground">Apply at village-level service points</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Online Portals</h3>
                <p className="text-sm text-muted-foreground">Apply through official government websites</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scheme Type Filter */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              onClick={() => setSelectedType(null)}
              className="rounded-full"
            >
              {t('allSchemes')}
            </Button>
            {schemeTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className="rounded-full"
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredSchemes.map((scheme) => (
              <SchemeCard 
                key={scheme.id} 
                scheme={scheme}
                expanded={expandedScheme === scheme.id}
                onToggle={() => setExpandedScheme(
                  expandedScheme === scheme.id ? null : scheme.id
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('needHelpApplying')}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('agricultureOfficersAvailable')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1800-180-1551">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('callKisanHelpline')}
                </Button>
              </a>
              <a href="https://raitamitra.karnataka.gov.in" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <FileText className="mr-2 h-5 w-5" />
                  {t('visitPortal')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
