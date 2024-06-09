import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../../LanguageContext';

const PaginationButtons = () => {
  const { ar } = useContext(LanguageContext);

  return (
    <nav >
    <ul class="flex justify-center mt-8 mb-24   ">
      <li>
        <Link
          class="mx-16 flex h-9 w-9 items-center justify-center  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          to="#"
          aria-label="Previous"
        >
          {ar?   <span class="material-icons text-sm">keyboard_arrow_right</span> :<span class="material-icons text-sm">keyboard_arrow_left</span> }
          
        </Link>
      </li>
      <li>
        <Link
          class="mx-1 flex h-9 w-9 items-center justify-center  bg-[#FAFAFA] p-0 text-sm text-blue-gray-500 shadow-md transition duration-150 ease-in-out"
          to="#"
        >
          1
        </Link>
      </li>
      <li>
        <Link
          class="mx-1 flex h-9 w-9 items-center justify-center  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          to="#"
        >
          2
        </Link>
      </li>
      <li>
        <Link
          class="mx-1 flex h-9 w-9 items-center justify-center  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          to="#"
        >
          3
        </Link>
      </li>
      <li>
        <Link
          class="mx-16 flex h-9 w-9 items-center justify-center  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          to="#"
          aria-label="Next"
        >
          {ar?   <span class="material-icons text-sm">keyboard_arrow_left</span> :<span class="material-icons text-sm">keyboard_arrow_right</span>}
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default PaginationButtons