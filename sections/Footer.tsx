import React from 'react'
import Image from 'next/image'
import FooterIcons from '@/components/FooterIcons'
import FooterLinks from '@/components/FooterLinks'
const Footer = () => {
  return (
    <div className='footer-pdiv'>
        <div className='footer'>
        <Image
          src='/images/footer-logo.svg'
          alt='footer logo'
          width={100}
          height={15}
        />
        <p className='footertext '>
          Get shoes ready for the new term at your
          nearest Nike store. Find Your perfect Size in
          Store. Get rewards
        </p>
        <FooterIcons/>
      </div>
      
      <FooterLinks/>
    </div>
  )
}

export default Footer