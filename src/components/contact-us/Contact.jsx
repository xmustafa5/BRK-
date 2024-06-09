import React from 'react'
import MainLabel from '../ui/MainLabel'
import MainHugeTitle from '../ui/MainHugeTitle'

export default function Contact({ar}) {
  return (
    <div className="home relative !h-[70vh]">
      <div className="flex mx-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <MainLabel title={ar? 'الاستثمار الصناعي'  :"Industrial Investment"} />
          <MainHugeTitle title={ar? 'تواصل معنا' :"Our Distributors"} />
        </div>
      </div>
    </div>
  )
}
