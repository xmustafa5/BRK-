import React, { useContext } from 'react'
import LanguageContext from '../../LanguageContext';
import Contact from './Contact';
import StillOnContact from './StillOnContact';

export default function ContactUs() {
  const { language, toggleLanguage, ar, en, light, rtl } =
  useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Contact ar={ar}/>
      <StillOnContact ar={ar}/>
    </div>
  )
}
