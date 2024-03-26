"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {rating} from '@/constants/hero-constants'
import ShoeCard from '@/components/ShoeCards'
import { shoeArray } from '@/constants/hero-constants'
import ShoeCards from '@/components/ShoeCards'
const Hero = () => {
  const [shoe, setshoe] = useState<string>('/images/big-shoe3.png')
    const handleClick = (url: string) => {
        setshoe(url)
    } 
  return (
    <div className='hero--section'>
      <p className='hero-text-orange'>Our Summer collections</p>
      <h1 className='hero-text'>
        <span className='white-bg'>The New Arrival </span> <br/>
        <span className='hero-text-orange'>Nike</span> Shoes
      </h1>
      <p className='hero-subtext'>Discover stylish Nike arrivals, quality
        <br/>
        comfort, and innovation for your active life
      </p>
      <button className='hero-button'>
        Shop now 
        <Image
          src='/icons/arrow-right.svg'
          alt="arrow right"
          width={25}
          height={25}
        />
      </button>
      <div className='ratings-pdiv'>
        {rating.map((number,index) => (
          <div className='ratings'>
            <p className='ratings-number'>{number.number}+</p>
            <p className='ratings-text'>{number.text}</p>
          </div>
        ))}
      </div>
      <Image
        src={shoe}
        alt="shoe"
        width={610}
        height={500}
        className='shoe'
      />
      <ShoeCards images={shoeArray} onImageSelect={handleClick}/>
    </div>
  )
}

export default Hero