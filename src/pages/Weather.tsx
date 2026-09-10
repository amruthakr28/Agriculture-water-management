import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Loader2,
  Volume2,
  VolumeX,
  MapPin
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWeather } from '@/hooks/useWeather';
import { useVoiceAlert } from '@/hooks/useVoiceAlert';
import { toast } from 'sonner';

export default function Weather() {
  const { t, language } = useLanguage();
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [locationLoading, setLocationLoading] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  
  const { speak, stop, isSpeaking } = useVoiceAlert();

  // Get user's current location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
          
          // Reverse geocode to get location name
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            const city = data.address?.city || data.address?.town || data.address?.village || data.address?.county || '';
            const state = data.address?.state || '';
            setLocationName(`${city}${city && state ? ', ' : ''}${state}`);
          } catch (error) {
            setLocationName('Current Location');
          }
          setLocationLoading(false);
        },
        (error) => {
          console.error('Geolocation error:', error);
          // Default to Mandya, Karnataka
          setUserLocation({ lat: 12.5218, lon: 76.8951 });
          setLocationName('Mandya, Karnataka');
          setLocationLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setUserLocation({ lat: 12.5218, lon: 76.8951 });
      setLocationName('Mandya, Karnataka');
      setLocationLoading(false);
    }
  }, []);

  const { weather, forecast, loading, error } = useWeather(
    userLocation?.lat || 12.5218, 
    userLocation?.lon || 76.8951
  );

  // Calculate alerts
  const totalRainfall = forecast.slice(0, 3).reduce((sum, day) => sum + day.rainfall, 0);
  const hasRainAlert = totalRainfall > 10;
  const humidity = weather?.humidity || 0;
  const hasDrynessAlert = humidity < 40 && totalRainfall === 0;

  // Voice alert messages
  const getRainAlertMessage = () => {
    const messages: Record<string, string> = {
      en: `Rain Alert! Expected rainfall of ${totalRainfall} millimeters in the next 3 days. Please ensure proper drainage and protect your crops from waterlogging.`,
      kn: `ಮಳೆ ಎಚ್ಚರಿಕೆ! ಮುಂದಿನ 3 ದಿನಗಳಲ್ಲಿ ${totalRainfall} ಮಿಲಿಮೀಟರ್ ಮಳೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ. ಸರಿಯಾದ ಒಳಚರಂಡಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.`,
      te: `వర్షం హెచ్చరిక! రాబోయే 3 రోజుల్లో ${totalRainfall} మిల్లీమీటర్ల వర్షపాతం అంచనా. సరైన డ్రైనేజీ నిర్ధారించండి.`,
      hi: `बारिश की चेतावनी! अगले 3 दिनों में ${totalRainfall} मिलीमीटर बारिश की उम्मीद। उचित जल निकासी सुनिश्चित करें।`,
      ta: `மழை எச்சரிக்கை! அடுத்த 3 நாட்களில் ${totalRainfall} மில்லிமீட்டர் மழை எதிர்பார்க்கப்படுகிறது. சரியான வடிகால் உறுதி செய்யவும்.`
    };
    return messages[language] || messages.en;
  };

  const getDrynessAlertMessage = () => {
    const messages: Record<string, string> = {
      en: `Dryness Alert! Humidity is very low at ${humidity} percent with no rain expected. Please increase irrigation frequency and consider mulching to retain soil moisture.`,
      kn: `ಶುಷ್ಕತೆ ಎಚ್ಚರಿಕೆ! ತೇವಾಂಶ ${humidity} ಪ್ರತಿಶತದಲ್ಲಿ ಕಡಿಮೆಯಾಗಿದೆ. ನೀರಾವರಿ ಹೆಚ್ಚಿಸಿ ಮತ್ತು ಮಲ್ಚಿಂಗ್ ಮಾಡಿ.`,
      te: `పొడి హెచ్చరిక! తేమ ${humidity} శాతంలో చాలా తక్కువగా ఉంది. నీటిపారుదల పెంచండి మరియు మల్చింగ్ చేయండి.`,
      hi: `सूखे की चेतावनी! नमी ${humidity} प्रतिशत पर बहुत कम है। सिंचाई बढ़ाएं और मल्चिंग करें।`,
      ta: `வறட்சி எச்சரிக்கை! ஈரப்பதம் ${humidity} சதவீதத்தில் மிகவும் குறைவாக உள்ளது. நீர்ப்பாசனத்தை அதிகரிக்கவும்.`
    };
    return messages[language] || messages.en;
  };

  // Speak alerts when voice is enabled
  useEffect(() => {
    if (voiceEnabled && !loading && !error && weather) {
      let message = '';
      if (hasRainAlert) {
        message = getRainAlertMessage();
      } else if (hasDrynessAlert) {
        message = getDrynessAlertMessage();
      }
      if (message) {
        speak(message);
      }
    }
  }, [voiceEnabled, loading, hasRainAlert, hasDrynessAlert]);

  const toggleVoice = () => {
    if (isSpeaking) {
      stop();
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
      // Speak the current alert
      if (hasRainAlert) {
        speak(getRainAlertMessage());
      } else if (hasDrynessAlert) {
        speak(getDrynessAlertMessage());
      } else {
        const noAlertMsg: Record<string, string> = {
          en: 'Weather is normal. No alerts at this time.',
          kn: 'ಹವಾಮಾನ ಸಾಮಾನ್ಯವಾಗಿದೆ. ಯಾವುದೇ ಎಚ್ಚರಿಕೆಗಳಿಲ್ಲ.',
          te: 'వాతావరణం సాధారణంగా ఉంది. హెచ్చరికలు లేవు.',
          hi: 'मौसम सामान्य है। कोई चेतावनी नहीं।',
          ta: 'வானிலை இயல்பானது. எச்சரிக்கைகள் இல்லை.'
        };
        speak(noAlertMsg[language] || noAlertMsg.en);
      }
    }
  };

  const seasonalInfo = {
    currentSeason: 'Kharif (Monsoon)',
    monsoonStatus: 'Active',
    expectedRainfall: '750-850mm',
    normalRainfall: '780mm',
    deficitSurplus: '+5%',
    sowingWindow: 'June 15 - July 31',
    harvestWindow: 'October - November'
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                {t('weatherAlerts')}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>{locationLoading ? t('detectingLocation') : locationName}</span>
              </div>
            </div>
            <Button 
              onClick={toggleVoice}
              variant={isSpeaking ? "secondary" : "outline"}
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="mr-2 h-4 w-4" />
                  {t('stopVoice')}
                </>
              ) : (
                <>
                  <Volume2 className="mr-2 h-4 w-4" />
                  {t('voiceAlert')}
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Weather Alerts Banner */}
      {!loading && !error && (hasRainAlert || hasDrynessAlert) && (
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {hasRainAlert && (
                <Button 
                  onClick={() => speak(getRainAlertMessage())}
                  className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6 py-3 h-auto animate-pulse shadow-lg shadow-red-500/50"
                >
                  <CloudRain className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-bold">{t('rainAlert')}</div>
                    <div className="text-xs opacity-90">{t('tapToListen')}</div>
                  </div>
                  <Volume2 className="h-5 w-5 ml-2" />
                </Button>
              )}
              {hasDrynessAlert && (
                <Button 
                  onClick={() => speak(getDrynessAlertMessage())}
                  className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6 py-3 h-auto animate-pulse shadow-lg shadow-red-500/50"
                >
                  <AlertTriangle className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-bold">{t('drynessAlert')}</div>
                    <div className="text-xs opacity-90">{t('tapToListen')}</div>
                  </div>
                  <Volume2 className="h-5 w-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Current Weather */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          {loading || locationLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">{t('loadingWeather')}</span>
            </div>
          ) : error ? (
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <p className="text-muted-foreground">{error}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {/* Main Weather Card */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{locationName}</h2>
                      <p className="text-sm text-muted-foreground">
                        {new Date().toLocaleDateString(language === 'en' ? 'en-IN' : `${language}-IN`, { weekday: 'long', day: 'numeric', month: 'long' })}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {t('updated')}: {weather?.lastUpdated}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl">{weather?.icon}</span>
                      <div>
                        <p className="text-4xl font-bold text-foreground">{weather?.temperature}°C</p>
                        <p className="text-base text-muted-foreground">{weather?.condition}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-muted/50 rounded-xl">
                        <Droplets className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">{t('humidity')}</p>
                        <p className="font-semibold text-foreground">{weather?.humidity}%</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-xl">
                        <Wind className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">{t('wind')}</p>
                        <p className="font-semibold text-foreground">{weather?.windSpeed} km/h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Irrigation Advice */}
              <Card className={`${
                hasRainAlert 
                  ? 'border-blue-300 bg-blue-50' 
                  : hasDrynessAlert
                    ? 'border-amber-300 bg-amber-50'
                    : 'border-green-300 bg-green-50'
              }`}>
                <CardHeader className="pb-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 text-sm">
                    {hasRainAlert ? (
                      <CloudRain className="h-5 w-5 text-blue-600" />
                    ) : hasDrynessAlert ? (
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {t('irrigationAdvice')}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground mb-2">
                    {hasRainAlert ? t('rainExpected') : hasDrynessAlert ? t('dryConditions') : t('normalConditions')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {hasRainAlert 
                      ? t('skipIrrigation')
                      : hasDrynessAlert 
                        ? t('increaseIrrigation')
                        : t('continueNormal')
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* 7-Day Forecast */}
      {!loading && !error && forecast.length > 0 && (
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold text-foreground mb-4 text-center">{t('forecast')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 max-w-6xl mx-auto">
              {forecast.map((day, index) => (
                <Card key={day.date} className={index === 0 ? 'ring-2 ring-primary' : ''}>
                  <CardContent className="p-3 text-center">
                    <p className="font-medium text-foreground text-sm">{day.day}</p>
                    <span className="text-3xl my-1 block">{day.icon}</span>
                    <p className="text-base font-bold text-foreground">{day.high}°</p>
                    <p className="text-sm text-muted-foreground">{day.low}°</p>
                    {day.rainfall > 0 && (
                      <Badge className="mt-1 bg-blue-100 text-blue-800 text-xs">
                        💧 {day.rainfall}mm
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seasonal Information */}
      <section className="py-6 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold text-foreground mb-4 text-center">
            {t('seasonalInfo')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{t('currentSeason')}</p>
                <p className="font-semibold text-foreground text-sm">{seasonalInfo.currentSeason}</p>
                <Badge className="mt-1 bg-green-100 text-green-800 text-xs">
                  {seasonalInfo.monsoonStatus}
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <CloudRain className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{t('expectedRainfall')}</p>
                <p className="font-semibold text-foreground text-sm">{seasonalInfo.expectedRainfall}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Thermometer className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{t('sowingWindow')}</p>
                <p className="font-semibold text-foreground text-sm">{seasonalInfo.sowingWindow}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{t('harvestWindow')}</p>
                <p className="font-semibold text-foreground text-sm">{seasonalInfo.harvestWindow}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
