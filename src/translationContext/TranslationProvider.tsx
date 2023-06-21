import React, { useState } from 'react';
import TranslationContext from './TranslationContext';
import translations from './translations';
import { Language } from '../types/Language';
import { TranslationContextType } from '../types/TranslationContextType';
import { TranslationData } from '../types/TranslationData';

type Props = {
  children: React.ReactNode;
}

const TranslationProvider: React.FC<Props> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('lang');
    return savedLang as Language || 'en';
  });

  const changeLanguage = (language: Language) => {
    localStorage.setItem('lang', language);
    setCurrentLanguage(language);
  };


  const getTranslation = (key: keyof TranslationData[Language]) => {
    return translations[currentLanguage][key] || '';
  };

  const contextValue: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    getTranslation,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;

