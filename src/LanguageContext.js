import React, { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");
  const toggleLanguage = () => {
    const pageLang = document.documentElement.lang
    document.documentElement.lang = pageLang === "ar" ? "en" : "ar"
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        ar: language === "ar",
        en: language === "en",
        rtl: language === "ar" && "rtl" ,
        light: language === "en" ? "light" : "lightAr",
        medium: language === "en" ? "Medium" : "mediumAr",
        bold: language === "en" ? "Extrabold" : "boldAr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
