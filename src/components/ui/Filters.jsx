import React, { useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import LanguageContext from '../../LanguageContext';

const Filters = () => {
  const { ar, rtl } = useContext(LanguageContext);

    const brands = ['Georg Fischer' ,'Georg Fischer' , 'Georg Fischer' , 'Georg Fischer' , 'Georg Fischer ' , 'Georg Fischer' ]
    const materils =['PVC-U ' , 'PVC-U ', 'PVC-U ' ,'PVC-U ' ,'PVC-U ' , 'PVC-U ' , 'PVC-U ']
  return (
    <div className='border-2 border-gray-300  w-fill p-3 m-3	max-h-[1000px]	 h-fit '>
      <div className='flex flex-col pb-4 '>
        <h1 className='text-md font-bold'> {ar? 'البحث عن المنتج' : 'Product Search'} </h1>
        <div className="pt-2 relative text-gray-600 object-contain w-fit border-b-2 pb-4">
          <input className="border-2 border-gray-300 bg-white h-10 px-2 pr-16 rounded-sx text-sm focus:outline-none"
            type="search" name="search" placeholder="Search for product, RS or MFr No "/>
          <div className="absolute right-0 top-0 mt-5 mr-4 ">
          <CiSearch />
          </div>
        </div>
      </div>
      <div className='flex flex-col py-4 border-b-2' >
        <h1  className='text-md font-bold pb-2'>{ar? 'العلامة التجارية  ' : 'Brand '}</h1>
        <div>
            {brands.map(( brand, index) => (
                <div  key={index} >
                    <input type='checkbox' className='mx-2' />
                  <span className=''>{brand}</span>
                </div>
              )
            )}
        </div>
      </div>
      <div className='flex flex-col py-4 border-b-2' >
        <h1  className='text-md font-bold pb-2'> {ar? 'الطول  ' : 'Length '}</h1>
        <div class="relative mb-6">
    <input id="labels-range-input" type="range" min="100" max="1500" />
    <span class="text-sm text-[#1C1F35]  absolute start-0 -bottom-3">0.5</span>
    <span class="text-sm text-[#1C1F35] absolute end-0 -bottom-3">20</span>
</div>

      </div>
      <div className='flex flex-col py-4 border-b-2' >
        <h1  className='text-md font-bold pb-2'> {ar? 'السمك' : 'Thickness '}</h1>
        <div class="relative mb-6">
    <input id="labels-range-input" type="range" min="100" max="1500" />
    <span class="text-sm text-[#1C1F35]  absolute start-0 -bottom-3">0.5</span>
    <span class="text-sm text-[#1C1F35] absolute end-0 -bottom-3">20</span>
</div>
        
      </div>
      <div className='flex flex-col py-4 border-b-2 pb-2' >
        <h1  className='text-md font-bold'> {ar? ' القطر الخارجي ' : 'Outer Diameter '}</h1>
     
<div class="relative mb-6">
    <input id="labels-range-input" type="range" min="100" max="1500" />
    <span class="text-sm text-[#1C1F35]  absolute start-0 -bottom-3">0.5</span>
    <span class="text-sm text-[#1C1F35] absolute end-0 -bottom-3">20</span>
</div>

        
      </div>
      <div className='flex flex-col py-4' >
        <h1  className='text-md font-bold pb-2'> {ar? ' المادة ' : 'Material '}</h1>
        <div>
            {materils.map(( material, index) => (
                <div  key={index} >
                    <input type='checkbox' className='mx-2' />
                  <span className=''>{material}</span>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Filters;
