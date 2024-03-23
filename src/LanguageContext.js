import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage , ar:language === 'ar',en:language === 'en' , light: language === 'en' ? 'light' : 'lightAr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
