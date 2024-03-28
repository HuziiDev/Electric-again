import React from 'react'
import img from '../assets/bulb-incline.png'

const ProductDisplay = () => {
  return (
    <div className='w-[90%] h-auto flex flex-wrap justify-evenly items-center mt-10 mx-auto'>
        <div className="left-display flex rounded-2xl bg-green-100 mt-10 mb-10" >
        <div className="content p-10">
          <p className='text-gray-800 font-semibold'>Starting with ₹100</p>
          <p className='text-gray-800 font-semibold'>Your daily Essentials</p>
          <h1 className='text-3xl font-bold mt-4'>Emergency Bulb</h1>
          <button className='px-5 py-1 bg-yellow-500 mt-4 rounded-full'>Shop Now</button>
        </div>
        <div className="img w-44 h-20 pt-28">
        <img src={img} alt="" />

        </div>


        </div>
        <div className="right-display flex rounded-2xl bg-gray-300 mt-10 mb-10 ">
        <div className="content p-10">
          <p className='text-gray-800'>Starting with ₹100</p>
          <p className='text-gray-800'>Your daily Essentials</p>
          <h1 className='text-3xl font-bold mt-4'>Emergency Bulb</h1>
          <button className='px-5 py-1 bg-yellow-500 mt-4 rounded-full'>Shop Now</button>
        </div>
        <div className="img w-44 h-20 pt-28">
        <img src={img} alt="" />

        </div>
            
        </div>
    </div>
  )
}

export default ProductDisplay