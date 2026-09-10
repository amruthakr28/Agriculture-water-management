import { useCallback, useRef, useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface VoiceAlertOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

// Language to voice mapping
const languageVoiceMap: Record<Language, string> = {
  en: 'en-IN',
  kn: 'kn-IN',
  te: 'te-IN',
  hi: 'hi-IN',
  ta: 'ta-IN'
};

export function useVoiceAlert(options: VoiceAlertOptions = {}) {
  const { language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageVoiceMap[language] || 'en-IN';
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [language, options.rate, options.pitch, options.volume]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking };
}
