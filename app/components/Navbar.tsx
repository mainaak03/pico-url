import React from 'react'
import DarkmodeToggle from './DarkmodeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 my-2 mx-80'>
        <div className='text-3xl font-bold'>
            pico.url
        </div>
        <div>
            <DarkmodeToggle />
        </div>
    </div>
  )
}

export default Navbar