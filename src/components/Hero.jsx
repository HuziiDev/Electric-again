import React from 'react'
import img from '../assets/bulb.png'

const Hero = () => {
  return (
    <div className='hero-container w-full h-auto bg-blue-200 flex justify-around items-center flex-wrap '>

         <div className="hero-left pt-10">
            <p className='text-lg text-black font-medium pb-4 '>Online supply of essentials</p>
            <h1 className='text-5xl font-bold pb-2'>Get Your Electric</h1>
            <h1 className='text-5xl font-bold pb-6'>Appliance at Home</h1>
            <button className='px-8 py-2 bg-yellow-500 rounded-full hover:scale-125 duration-200 font-semibold'>Shop Now</button>
         </div>


         <div className="hero-right pt-16">
         <img className='object-cover' src={img} alt="" />

         </div>

    </div>
  )
}

export default Hero