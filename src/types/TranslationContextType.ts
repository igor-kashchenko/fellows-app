import { Language } from './Language';
import { TranslationData } from './TranslationData';

export type TranslationContextType = {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  getTranslation: (key: keyof TranslationData[Language]) => string;
};
