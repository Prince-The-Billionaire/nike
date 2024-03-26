import React from 'react'
import Image from 'next/image'

const SpecialOffer = () => {
  return (
    <div>
      <div className='special-offer'>
        <Image
          src="/images/offer.svg"
          alt='special'
          width={500}
          height={500}
        />
        <div>
          <h1 className='maintext'><span className='hero-text-orange'>Special</span> Offer</h1>
          <p className='subtext'>Embark on a shopping journey that redefines your experience with 
            unbeatable deals. From premier selections to incredible savings, we offer 
            unparalleled value that sets up apart.
            <br/>
            <br/>
            <br/>
            Navigate a realm of possibilities designed to fulfill your
            unique desires, surpassing the softest expectations. Your journey
            with us is nothing short of exceptional.
          </p>
          <div className='button-div'>
            <button className='hero-button'>
              Shop now 
              <Image
                src='/icons/arrow-right.svg'
                alt='arrow right'
                width={25}
                height={25}
              />
            </button>
            <button className='button-white'> Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer