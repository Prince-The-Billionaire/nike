import React from 'react'
import Image from 'next/image'

const SuperQuality = () => {
  return (
    <div className='superquality-pdiv'>
      <div className='superquality'>
        <h1 className='maintext'>We Provide You <span className='hero-text-orange'>Super Quality</span> Shoes</h1>
        <p className='subtext'>
          Ensuring premium comfort and style our 
          meticulously crafted footwear is designed to elevate
          your experience, providing you with unmatched quality,
          innovation, and a touch of elegance
          <br/>
          <br/>
          <br/>
          Our dedication to detail and excellence 
          ensure your
        </p>
        <button className='hero-button'>
          View details
        </button>
      </div>
      <Image
        src='/images/shoe8.svg'
        width={550}
        height={550}
        alt='shoe'
      />
    </div>
  )
}

export default SuperQuality