import React from 'react'
import Image from 'next/image'

const ServiceCards = () => {
  const ServiceArray = [
    {url:'/icons/truck-fast.svg',title:'Free shipping', subtext:'Enjoy seamless shopping with our complimentary shipping service.'},
    {url:'/icons/shield-tick.svg',title:'Secure Payment', subtext:'Experience worry-free transactions with our secure payment options'},
    {url:'/icons/support.svg',title:'Love to help you', subtext:'Our dedicated team is here to assist you every step of the way'},
  ]
  return (
    <div className='service-cards'>
        {ServiceArray.map((items) =>(
          <div className='service-card'>
            <Image
              src={items.url}
              alt={`${items.title} icons`}
              width={40}
              height={40}
              className='service-icons'
            />
            <h1 className='service-cardtitle'>{items.title}</h1>
            <p className='service-cardsubtext'>{items.subtext}</p>
          </div>
        ))}
    </div>
  )
}

export default ServiceCards