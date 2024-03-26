import { title } from 'process'
import React from 'react'

const FooterLinks = () => {
    const links = [
        {title:'Products', links:['Air Force 1','Air Max 1', 'Air Jordan 1', 'Air Force 2', 'Nike Waffle Racer', 'Nike Cortez']},
        {title:'Help',links:['About us','FAQs','How it works','Privacy policy','Payment policy']},
        {title:'Get in touch',links:['customer@nike.com','+987236717']}
    ]
  return (
    <div className='footerlinks'>
        {links.map((items,index) => (
            <div className='text-white gap-5 flex-col flex' key={index}>
                <h1 className='service-cardtitle'>{items.title}</h1>
                <ul className='footerlinks-text'>
                    {items.links.map((item,indexs) => (
                        <a key={indexs}><li>{item}</li></a>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default FooterLinks