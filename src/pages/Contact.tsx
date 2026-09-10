import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building2,
  Upload,
  User,
  X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef } from 'react';
import { toast } from 'sonner';

const helplines = [
  {
    nameKey: 'kisanCallCenter',
    number: '1800-180-1551',
    descKey: 'kisanCallCenterDesc',
    timing: '24/7',
    icon: Phone
  },
  {
    nameKey: 'karnatakaAgriculture',
    number: '1800-425-1515',
    descKey: 'karnatakaAgricultureDesc',
    timing: '6 AM - 10 PM',
    icon: Building2
  },
  {
    nameKey: 'cropInsurance',
    number: '1800-200-7710',
    descKey: 'cropInsuranceDesc',
    timing: '9 AM - 6 PM',
    icon: Phone
  },
  {
    nameKey: 'soilHealthCard',
    number: '1800-180-1111',
    descKey: 'soilHealthCardDesc',
    timing: '9 AM - 5 PM',
    icon: Phone
  }
];

const offices = [
  {
    nameKey: 'districtAgriOffice',
    addressKey: 'districtAgriOfficeAddress',
    phone: '08232-222XXX'
  },
  {
    nameKey: 'talukAgriOffice',
    addressKey: 'talukAgriOfficeAddress',
    phone: '08232-233XXX'
  }
];

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    phone: '',
    village: '',
    message: ''
  });
  const [problemImage, setProblemImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(t('imageTooLarge'));
        return;
      }
      setProblemImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProblemImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('messageSent'));
    setFormData({ username: '', name: '', phone: '', village: '', message: '' });
    setProblemImage(null);
    setImagePreview(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {t('contactUs')}
              </h1>
            </div>
            <p className="text-primary-foreground/80">
              {t('contactUsDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Toll-Free Helplines */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">{t('tollFreeHelplines')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {helplines.map((helpline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <helpline.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{t(helpline.nameKey)}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{t(helpline.descKey)}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{helpline.timing}</span>
                      </div>
                      <a href={`tel:${helpline.number}`}>
                        <Button className="w-full">
                          <Phone className="mr-2 h-4 w-4" />
                          {helpline.number}
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Offices */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">{t('localOffices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{t(office.nameKey)}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{t(office.addressKey)}</p>
                      <a href={`tel:${office.phone}`} className="text-sm text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                {t('sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1 block">
                      <User className="h-4 w-4 inline mr-1" />
                      {t('username')}
                    </Label>
                    <Input 
                      placeholder={t('enterUsername')}
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1 block">{t('yourName')}</Label>
                    <Input 
                      placeholder={t('enterName')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1 block">
                      <Phone className="h-4 w-4 inline mr-1" />
                      {t('mobileNumber')}
                    </Label>
                    <Input 
                      placeholder={t('enterMobile')}
                      type="tel"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1 block">{t('village')}</Label>
                    <Input 
                      placeholder={t('enterVillage')}
                      value={formData.village}
                      onChange={(e) => setFormData({...formData, village: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-1 block">{t('yourMessage')}</Label>
                  <Textarea 
                    placeholder={t('enterMessage')}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                {/* Image Upload */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    <Upload className="h-4 w-4 inline mr-1" />
                    {t('uploadProblemImage')}
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="problem-image"
                    />
                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img 
                          src={imagePreview} 
                          alt="Problem preview" 
                          className="max-h-40 rounded-lg mx-auto"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/80"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label 
                        htmlFor="problem-image" 
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{t('clickToUpload')}</span>
                        <span className="text-xs text-muted-foreground">{t('maxFileSize')}</span>
                      </label>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email & Social */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">{t('otherWaysToReach')}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@krishi.gov.in">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  support@krishi.gov.in
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
