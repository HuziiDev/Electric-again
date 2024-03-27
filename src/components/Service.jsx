import React from 'react'
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
const Service = () => {
  return (
    <div className='service-container w-[80%] flex justify-between items-center  h-auto mx-auto mt-6 mb-10'>
        <div className="secure-payment "> 
        <span > <RiSecurePaymentLine className='text-yellow-500 ' size={30} /> </span>
        <span className='text-black font-semibold md:text-lg sm:text-sm  '>Secure Payment</span>
        
            
        </div>
        <div className="online-support "> 
        <span > <FaHeadphonesSimple className='text-yellow-500 ' size={30} /> </span>
        <span className='text-black font-semibold md:text-lg sm:text-sm '>Online Support</span>
        
            
        </div>
        <div className="shipping "> 
        <span > <MdLocalShipping className='text-yellow-500 ' size={30} /> </span>
        <span className='text-black font-semibold md:text-lg sm:text-sm '>Free Shipping</span>
        
            
        </div>
        <div className="discount "> 
        <span > <FaGift  className='text-yellow-500 ' size={30} /> </span>
        <span className='text-black font-semibold md:text-lg sm:text-sm '>Discount Online</span>
        
            
        </div>
        
    </div>
  )
}

export default Service