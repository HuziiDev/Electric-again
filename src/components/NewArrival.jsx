import React from 'react'
import NewArrivalHeading from './NewArrivalHeading';
import pumpImg from '../assets/pump.png'
import padImg from '../assets/cooler-pad.png'
import cableImg from '../assets/cables.png'
import fanImg from '../assets/fan.png'


import NewArrivalCard from './NewArrivalCard';
const NewArrival = () => {
  return (
    <>
    <NewArrivalHeading/>
    <div className='Arrival-container w-[90%]  h-auto flex flex-wrap flex-shrink gap-5  mt-10 mx-auto justify-evenly'>
               
        <NewArrivalCard
         title="cooler pump"
         img = {pumpImg}
         price="₹100"   
         />
        <NewArrivalCard
        title="Cooler Pads"
         img= {padImg}
        price="₹150"
        />
        <NewArrivalCard 
         title="2/3 core cables"
         img = {cableImg}
         price="₹1000"
        />
        <NewArrivalCard
        title="Ceiling Fan"
         img = {fanImg}
         price="₹3000"
        />
    </div>
    </>
  )
}

export default NewArrival