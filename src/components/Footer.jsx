import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
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
    <div className='w-[100%] h-auto bg-slate-200 mt-20 '>
          <div className="footer-container w-[80%] h-auto flex flex-col md:flex-row flex-wrap flex-shrink justify-evenly  mx-auto pb-20">
          <div className="first w-[80%] md:w-[30%] mt-16 " >
            <h1 className='text-2xl font-semibold'>Mission</h1>
            <p className='mt-3 text-sm mb-4'>Our mission is to deliver you the best possible product in the market at an affordable price with ease. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quod voluptatem aperiam incidunt officia laudantium.</p>
            <button className='mr-2'><FaFacebook size={30} color='blue'/></button>
            <button className='mr-2'><FaXTwitter size={30} color='black'/></button>
            <button className='mr-2'><FaInstagram  size={30} color='#E1306C'/></button>
          </div>
          <div className="second mt-16">
          <h1 className='text-xl font-semibold text-gray-900'>Navigate</h1>
        
            {
                links.map(({id, link})=> <li className='list-none mt-3 text-sm font-semibold text-gray-500'  key={id}>{link}</li>)
            }
          

          </div>
          <div className="third mt-16">
          <h1 className='text-xl font-semibold text-gray-900'>Information</h1>
          <p className='mt-3 text-sm font-semibold text-gray-500 '>Delivery</p>
          <p className='mt-3 text-sm font-semibold text-gray-500'>Return Policy</p>
          <p className='mt-3 text-sm font-semibold text-gray-500'>Team</p>
          <p className='mt-3 text-sm font-semibold text-gray-500'>Store Location</p>

          </div>
          <div className="fourth mt-16">
          <h1 className='text-xl font-semibold text-gray-900'>Company</h1>
          <p className='mt-3 text-sm font-semibold text-gray-500 '>Delivery</p>
          <p className='mt-3 text-sm font-semibold text-gray-500 '>Return Policy</p>
          <p className='mt-3 text-sm font-semibold text-gray-500 '>Team</p>
          <p className='mt-3 text-sm font-semibold text-gray-500 '>Store Location</p>


          </div>

          </div>

          <div className="copyright flex justify-center pb-10">
              <h1 className='text-sm text-gray-600 font-semibold'>&copy;Electric Palace All Rights Reserved</h1>
          </div>

    </div>
  )
}

export default Footer