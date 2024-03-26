import React from 'react'
import Image from 'next/image'

const productArray = [
  {url:"/images/shoe4.svg",rating:4.5,title:"Nike Air Jorden-01",currency:200.20},
  {url:"/images/shoe5.svg",rating:4.5,title:"Nike Air Jorden-10",currency:210.20},
  {url:"/images/shoe6.svg",rating:4.5,title:"Nike Air Jorden-100",currency:220.20},
  {url:"/images/shoe7.svg",rating:4.5,title:"Nike Air Jorden-001",currency:230.20}
]

const ProductCards = () => {
  return (
    <div className='productCards'>
        {productArray.map((items,index) => (
          <div className='productCard' key={index}>
          <Image
            src={items.url}
            alt={items.title}
            width={250}
            height={250}
            className='productcard-image'
          />
          <div className='product-rating' key={index}>
            <Image 
              src='/icons/star.svg'
              alt='star'
              width={18}
              height={18}
            />
            <p className='ratings-text'>{`(${items.rating})`}</p>
          </div>
          <p className='products-title'>{items.title}</p>
          <p className='product-currency'> ${items.currency}</p>
        </div>
        ))}
    </div>
  )
}

export default ProductCards