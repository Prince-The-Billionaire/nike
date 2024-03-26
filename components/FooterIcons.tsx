import React from 'react'
import Image from 'next/image'

const FooterIcons = () => {
    const icons = [
        {url:'/icons/instagram.svg',alt:'instagram'},
        {url:'/icons/twitter.svg',alt:'twitter'},
        {url:'/icons/facebook.svg',alt:'facebook'},
    ]
  return (
    <div className='icons-div '>
        {icons.map((items) => (
            <div>
                <Image
                    src={items.url}
                    alt={items.alt}
                    width={30}
                    height={30}
                    className='icons'
                />
            </div>
        ))}
    </div>
  )
}

export default FooterIcons