import React, { useContext } from 'react'
import Landing from './Landing'
import Products from '../../components/Home/Products'
import LanguageContext from '../../LanguageContext';

const ProductsPage = () => {
  const {  ar,  rtl } =
  useContext(LanguageContext);
  return (
    <div className={rtl}>
    <Landing ar={ar} />
        <Products/>
    </div>
  )
}

export default ProductsPage