import { rating } from '@/constants/hero-constants'
import Image from 'next/image'
import React from 'react'


const CustomerCards = () => {
    const CustomerArray = [
        {title:'Murich Brown', url:'/images/customer1.jpeg',rating:4.5, text:'The attention to detail and the quality of the product exceeded my expectations, Highly recommended'},
        {title:'Lota Moneskar',url:'/images/customer2.svg',rating:4.5,text:'The product not only met but exceeded my expectations. I\'ll definitely be a returning customer! '},
    ]
  return (
   <div className='customer-cards'>
        {CustomerArray.map((items,index) => (
             <div className='customer-card' key={index}>
                <Image
                    key={index}
                    src={items.url}
                    alt='customer'
                    width={100}
                    height={100}
                    className='customer-img'
                />
                <p className='customer-text'>
                    {items.text}
                </p>
                <div className='product-rating' key={index}>
                    <Image 
                    src='/icons/star.svg'
                    alt='star'
                    width={18}
                    height={18}
                    />
                    <p className='ratings-text'>{`(${items.rating})`}</p>
             </div>
             <h1 className='service-cardtitle'>{items.title}</h1>
         </div>

        ))}
   </div>
  )
}

export default CustomerCards