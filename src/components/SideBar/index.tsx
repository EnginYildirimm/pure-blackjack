import React from 'react'
import User from '../User'
import Balance from '../Balance'

const SideBar = () => {
  return (
    <div className='justify-center space-y-8 px-4 '>
        <User/>
        <Balance/>
        
        </div>
  )
}

export default SideBar