import React from 'react'

const HeroCard = () => {
  return (
    <div className='flex flex-col m-2 p-2'>
        <div className="flex mb-4">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">S</p>
            <p className="text-3xl font-bold mr-2">imple. </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">F</p>
            <p className="text-3xl font-bold mr-2">ast. </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">E</p>
            <p className="text-3xl font-bold mr-2">fficient.</p>
        </div>
        <div className="flex flex-wrap text-justify">
            Transform long, cluttered URLs into sleek, shareable links with pico.url. Whether for colleagues, customers, or friends, shorten links in seconds and track visits with our intuitive interface. Experience the power of pico-fying today!
        </div>
    </div>
  )
}

export default HeroCard
