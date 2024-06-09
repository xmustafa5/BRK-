import React, { useContext } from 'react'
import LanguageContext from '../../LanguageContext';
import Contact from './Contact';
import StillOnContact from './StillOnContact';
import Congrat from '../Globals/Congrat'
import Distributions from '../Globals/Distributors'

export default function ContactUs() {
  const {ar, rtl } =
  useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Contact ar={ar}/>
      <StillOnContact ar={ar}/>
      <Congrat ar={ar} className='mt-[200px]'/>
      <Distributions ar={ar}/>
    </div>
  )
}
