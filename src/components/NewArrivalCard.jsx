import React from 'react'
import img from '../assets/pump.png'
import { FaRegHeart } from "react-icons/fa";
const NewArrivalCard = () => {
  return (
    <div className="card w-[20%] ">
         <div className="img-container bg-blue-100 rounded-md ">
          <img className='w-[60%] mx-auto h-52 object-contain' src={img} alt="" />
         </div>
         <div className="content-container px-20 py-5">
         <p className='text-lg text-slate-500 pb-2 w-full'>Cooler Pump</p>
         <p className='text-black px-8 text-[13px] pb-2 w-full font-semibold'>₹100</p>
         <div className='w-40 gap-2  flex items-center  '>
         <span className='mt-1 font-semibold '><FaRegHeart size={15} /></span> 
         <span className='font-semibold ' > Add to wishlist</span>
</div>
         </div>

        </div>
  )
}

export default NewArrivalCard