import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Store = () => {
  return (
    <div className='bg-white w-full min-h-screen text-[#212121]'>
      <NavBar/>
      <container>
        <SideBar/>
      </container>
    </div>
  )
}

export default Store
