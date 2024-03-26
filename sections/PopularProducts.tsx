import React from 'react'
import ProductCards from '@/components/ProductCards'
const PopularProducts = () => {
  return (
    <div className='Popularproducts '>
      <h1 className='maintext'>Our <span className='hero-text-orange'>Popular </span>Products</h1>
      <p className='subtext'>Experience top-notch quality and style with our sought after 
        selections discover a world of comfort, design and value</p>
      <ProductCards/>
    </div>
  )
}

export default PopularProducts