import Image from 'next/image'
import React from 'react'

interface CardProps{
  url:string,

}

const Card: React.FC<CardProps> = ({url}) => {
  return (
    <div className='w-[192px] h-[269px] bg-gray-100 rounded-lg'>
        
        <Image alt='card' src={url} width={192} height={269}/>
    </div>
     
  )
}

export default Card