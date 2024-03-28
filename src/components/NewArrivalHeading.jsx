import React from 'react'
import { motion } from 'framer-motion'

const NewArrivalHeading = () => {
  const variants={
    initial:{
      opacity:0,
      x:-200
    },
    animate:{
      opacity:1,
      x:0
    }
  }
  return (
    <motion.div className='flex justify-center font-extrabold'
     variants={variants}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    transition={{ease:"easeInOut", duration:1}}
    >
    <h1 className='new-arrival-heading text-5xl  mt-10 '>New Arrival</h1>
    </motion.div>
  )
}

export default NewArrivalHeading