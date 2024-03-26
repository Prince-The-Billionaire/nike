import CustomerCards from '@/components/CustomerCards'
import React from 'react'

const CustomerReviews = () => {
  return (
    <div>
      <div className='customer-review'>
        <h1 className='maintext'>What Our <span className='hero-text-orange'>Customers</span> Say?</h1>
        <p className='customer-text'>Hear genuine stories from our satisfied Customers
          about their exceptional experience with us
        </p>
        <CustomerCards/>
      </div>
    </div>
  )
}

export default CustomerReviews