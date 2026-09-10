import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Sprout, 
  Droplets, 
  CloudRain, 
  FileText, 
  Cloud, 
  Users, 
  Menu, 
  X,
  Phone,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { key: 'home', href: '/', icon: Home },
  { key: 'cropAdvisor', href: '/crops', icon: Sprout },
  { key: 'irrigationGuide', href: '/irrigation', icon: Droplets },
  { key: 'waterConservation', href: '/conservation', icon: CloudRain },
  { key: 'governmentSchemes', href: '/schemes', icon: FileText },
  { key: 'equipment', href: '/equipment', icon: Wrench },
  { key: 'weather', href: '/weather', icon: Cloud },
  { key: 'successStories', href: '/stories', icon: Users },
];

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20 text-xl">
                🌾
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-bold leading-tight">{t('appName')}</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
                      isActive 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center gap-2">
              <LanguageSelector />
              
              <Link 
                to="/contact" 
                className="hidden md:flex items-center gap-1.5 rounded-full bg-primary-foreground/20 px-3 py-1.5 text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{t('contactUs')}</span>
              </Link>
              
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-primary-foreground hover:bg-primary-foreground/20 h-9 w-9"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-primary-foreground/20 bg-primary/95 backdrop-blur">
            <div className="container mx-auto px-4 py-3 space-y-0.5">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-colors',
                      isActive 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {t(item.key)}
                  </Link>
                );
              })}
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <Phone className="h-5 w-5" />
                {t('contactUs')}
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌾</span>
                <h3 className="font-bold text-base">{t('appName')}</h3>
              </div>
              <p className="text-sm text-background/80">
                {t('madeWithLove')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">{t('quickLinks')}</h4>
              <ul className="space-y-1.5 text-sm text-background/80">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.key}>
                    <Link to={item.href} className="hover:text-background transition-colors">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">{t('resources')}</h4>
              <ul className="space-y-1.5 text-sm text-background/80">
                {navigation.slice(4).map((item) => (
                  <li key={item.key}>
                    <Link to={item.href} className="hover:text-background transition-colors">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">{t('emergencyHelplines')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-background/70" />
                  <div>
                    <p className="text-background/70">Kisan Call Center</p>
                    <a href="tel:1800-180-1551" className="font-medium hover:underline">1800-180-1551</a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-background/70" />
                  <div>
                    <p className="text-background/70">Karnataka Agriculture</p>
                    <a href="tel:1800-425-1515" className="font-medium hover:underline">1800-425-1515</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-6 pt-6 text-center text-sm text-background/60">
            <p>© {new Date().getFullYear()} {t('appName')}. {t('madeWithLove')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
