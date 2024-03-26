"use client"
import React, { useState } from 'react'
import Image from 'next/image'

interface Props{
    images:string[];
    onImageSelect:(selectedImageUrl:string) => void;
}


const ShoeCards:React.FC<Props> = ({images,onImageSelect}) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0])

    const handleImageClick = (imageUrl:string) => {
        setSelectedImage(imageUrl);
        onImageSelect(imageUrl); // call the callback function to update the parent state
    }
    return (
    <div className='shoe-card-pdiv'>
        {
            images.map((imageUrl,index) => (
                <Image
                    src={imageUrl}
                    width={140}
                    height={140}
                    alt='shoe'
                    className='shoe-card'
                    onClick={() => handleImageClick(imageUrl)}
                    style={{cursor:'pointer',border:imageUrl === selectedImage ? '3px solid orange' : ' none'}}
                />
            ))
        }
    </div>
  )
}

export default ShoeCards