import React from 'react'
import img from '../assets/bulb-incline.png'
import { motion } from 'framer-motion'


const ProductDisplay = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }
 
  return (
    <div className='w-[90%] h-auto flex flex-wrap justify-evenly items-center  mx-auto'>
        <motion.div className="left-display flex rounded-2xl bg-green-100 mt-10 mb-10"
       >
        <div className="content p-10">
          <p className='text-gray-800 font-semibold'>Starting with ₹100</p>
          <p className='text-gray-800 font-semibold'>Your daily Essentials</p>
          <h1 className='text-3xl font-bold mt-4'>Emergency Bulb</h1>
          <motion.button className='px-5 py-1 bg-yellow-500 mt-4 rounded-full font-semibold '
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          transition={{ease:'easeInOut', duration:1}}
         
          >
          Shop Now</motion.button>
        </div>
        <div className="img w-44 h-20 pt-28">
        <img src={img} alt="" />

        </div>


        </motion.div>
        <motion.div className="right-display flex rounded-2xl bg-gray-300 mt-10  mb-10 "  >
        <div className="content p-10">
          <p className='text-gray-800'>Starting with ₹100</p>
          <p className='text-gray-800'>Your daily Essentials</p>
          <h1 className='text-3xl font-bold mt-4'>Emergency Bulb</h1>
          <motion.button className='px-5 py-1 bg-yellow-500 mt-4 rounded-full font-semibold'
           variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          transition={{ease:'easeInOut', duration:1}}
          >Shop Now</motion.button>
        </div>
        <div className="img w-44 h-20 pt-28">
        <img src={img} alt="" />

        </div>
            
        </motion.div>
    </div>
  )
}

export default ProductDisplay