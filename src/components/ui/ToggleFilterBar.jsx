import React from 'react'
import { menu } from '../../assets/svg/Product'

const ToggleFilterBar = ({togglePopUp}) => {
  return (
    <div className='border border-black w-full m-3 py-3 text-center flex justify-center items-center '  >
        <h1 className='text-md mx-3'>Filter options</h1>
        <div onClick={togglePopUp}>
        {menu}

        </div>
    </div>
  )
}

export default ToggleFilterBar