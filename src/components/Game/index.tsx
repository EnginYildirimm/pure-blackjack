import React from 'react'
import Card from '../Card'
import { getDeck } from '@/src/utils/getDeck'

const Game = () => {
  return (
    <div className='flex items-center justify-center py-4'>
        <div className='grid gap-y-8'>
            <div className='flex items-center justify-center gap-x-8'>
                <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center font-bold text-3xl'> <span>21</span></div>
               <Card url="./svg/cards/maca/A.svg"/>
               <Card url='./svg/cards/maca/K.svg'/>
            </div>
            <div className='flex items-center gap-x-8'>
            <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center font-bold text-3xl'><span>21</span></div>
            <Card url='./svg/cards/kupa/A.svg'/>
            <Card url='./svg/cards/kupa/K.svg'/>
            </div>
        </div>
    </div>
  )
}

export default Game