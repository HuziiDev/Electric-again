import React from 'react'
import img from '../assets/pump.png'
import { FaRegHeart } from "react-icons/fa";
const NewArrivalCard = () => {
  return (
    <div className="card ">
         <div className="img-container bg-blue-100 rounded-md ">
          <img className='w-[60%] mx-auto h-52 object-contain' src={img} alt="" />
         </div>
         <div className="content-container px-20 py-5 ">
         <p className='text-lg text-slate-500 pb-2 w-full'>Cooler Pump</p>
         <p className='text-black px-8 text-[13px] pb-2 w-full font-semibold'>₹100</p>
         
       
         <button className='relative right-1 top-0.5'><FaRegHeart size={15} className='wishlist-icon' /></button>
         <button className=' '>Add to wishlist</button>
         </div>

        </div>
  )
}

export default NewArrivalCard