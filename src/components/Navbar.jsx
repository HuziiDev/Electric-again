import React, { useState } from 'react'
import epImg from '../assets/Ep-logo.png'
import { HiSearch } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {

   const[open, setOpen] = useState(true)

  const links = [
    {
        id:1,
        link:"home",
    },
    {
        id:2,
        link:"shop",
    },
    {
        id:3,
        link:"wishlist",
    },
    {
        id:4,
        link:"contact",
    },
  ]

  return (
    <div className='flex justify-between items-center  w-full h-20 bg-white shadow-xl shadow-gray-200'>
          <div  className="logo mx-8  h-auto md:mx-6 cursor-pointer  ">
            <h1 className='w-44 text-xl   text-blue-600 font-bold'>Electric Palace</h1>
          </div>
          <div className="links mr-36 flex flex-wrap  md:mr-10">
            <ul className='hidden   md:flex flex-wrap gap-10 '>
                   {
                    links.map(({id, link}) => <li key={id} className='text-base font-medium capitalize text-gray-900 hover:text-gray-00 hover:scale-105 duration-200 cursor-pointer'>{link}</li>)
                   }

               
               
            </ul>
            </div>
          
          <div className="scu hidden md:flex mr-44 md:mr-6  gap-5 ">
          <HiSearch size={24} className=' hover:text-gray-500 font-medium hover:scale-105 duration-200 cursor-pointer text-gray-900' />
          <FiShoppingCart size={24} className=' hover:text-gray-500 font-medium hover:scale-105 duration-200 cursor-pointer text-gray-900'/>
          <FaRegUser size={24} className=' hover:text-gray-500 font-medium hover:scale-105 duration-200 cursor-pointer text-gray-900' />

         
          </div>
          <div onClick={() => setOpen(!open)} className='ham-menu md:hidden mr-8 cursor-pointer z-10'>
          {open ?<FaTimes size={30}/>:<RxHamburgerMenu size={30}/>}
         
         
          </div>
          {open &&
          <div className='absolute w-full h-full top-0  bg-blue-950'>
          
          <ul className='flex flex-col  items-center mt-44 gap-10  '>
                   {
                    links.map(({id, link}) => <li key={id} className='text-2xl font-semibold capitalize text-white hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>{link}</li>)
                   }

               
               
            </ul>
          </div>}
          


    </div>
  )
}

export default Navbar