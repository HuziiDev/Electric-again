import React from 'react'
import {motion} from 'framer-motion'
import img from '../assets/bulb.png'

const Hero = () => {
  return (
    <div className='hero-container w-[100%] h-auto bg-blue-200 flex justify-around items-center flex-wrap '>

         <motion.div className="hero-left pt-10"
         initial={{opacity:0,x:-100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:1,x:0}}
         transition={{ease:'easeInOut', duration:1}}
         
         >
            <p className='text-lg text-black font-medium pb-4 '>Online supply of essentials</p>
            <h1 className='text-5xl font-bold pb-2'>Get Your Electric</h1>
            <h1 className='text-5xl font-bold pb-6'>Appliance at Home</h1>
            <button className='px-8 py-2 bg-yellow-500 rounded-full hover:scale-125 duration-200 font-semibold'>Shop Now</button>
         </motion.div>


         <motion.div className="hero-right pt-16"
          initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:1,x:0}}
         transition={{ease:'easeInOut', duration:1}}
         >
         <img className='object-cover' src={img} alt="" />

         </motion.div>

    </div>
  )
}

export default Hero