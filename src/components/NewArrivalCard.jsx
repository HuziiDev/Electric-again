import React from 'react'
import { motion } from 'framer-motion';

import { FaRegHeart } from "react-icons/fa";
const NewArrivalCard = ({price, title, img}) => {
  const variants={
    initial:{
      opacity:0,
      y:50
    },
    animate:{
      opacity:1,
      y:0
    }
  }
  return (
    <motion.div  className="card "
    variants={variants}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    transition={{ease:"easeInOut", duration:2}}
    >
         <div  className="img-container bg-blue-100 rounded-md ">
          <img className='w-[60%] mx-auto h-52 object-contain' src={img} alt="" />
         </div>
         <div className="content-container px-20 py-5 ">
         <p className='text-lg text-slate-500 pb-2 w-full'>{title}</p>
         <p className='text-black px-8 text-[13px] pb-2 w-full font-semibold'>{price}</p>
         
       
         <button className='relative right-1 top-0.5'><FaRegHeart size={15} className='wishlist-icon' /></button>
         <button className=' '>Add to wishlist</button>
         </div>

        </motion.div>
  )
}

export default NewArrivalCard