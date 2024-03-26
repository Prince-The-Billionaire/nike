import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <h1 className='maintext'>Sign Up for <span className='hero-text-orange'>Updates</span> & Newsletter</h1>
      <div className='email-div'>
        <input type='email' placeholder='yourexample@mail.com' className='email-input'/>
        <button className='signup'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Subscribe