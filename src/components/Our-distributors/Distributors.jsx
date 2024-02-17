import React from 'react'
import Paragraph from '../ui/Paragraph'
import MainHugeTitle from '../ui/MainHugeTitle'
import MainTile from '../ui/MainTile'

export default function Distributors() {
  return (
    <div className="home relative !h-[70vh]">
      <div className="flex ml-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <MainTile title="Industrial Investment" />
          <MainHugeTitle title='Our Distributors' />
        </div>
      </div>
    </div>
  )
}
