import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'>
      <Image
        src="/images/header-logo.svg"
        alt='logo'
        width={130}
        height={29}
      />
      </a>
      <ul className='navbar-links'>
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Contact Us</li>
        <li>sign-in/explore now</li>
      </ul>
      <Image
        src="/icons/hamburger.svg"
        alt="hamburger"
        width={25}
        height={25}
        className='hamburger-icon'
      />
    </div>
  )
}

export default Navbar