import { NextPage } from 'next'
import React from 'react'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <main className='flex'>
      <div className='w-96 bg-zinc-600 grid py-8'>
        <SideBar/>
      </div>
      <div className='bg-green-900 w-full h-screen'>
      
      NextPage
      </div>
      </main>
  )
}

export default Home