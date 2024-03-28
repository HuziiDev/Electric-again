import React from 'react'
import NewArrivalHeading from './NewArrivalHeading';


import NewArrivalCard from './NewArrivalCard';
const NewArrival = () => {
  return (
    <>
    <NewArrivalHeading/>
    <div className='Arrival-container w-[90%]  h-auto flex flex-wrap flex-shrink gap-5  mt-10 mx-auto justify-evenly'>
               
        <NewArrivalCard/>
        <NewArrivalCard/>
        <NewArrivalCard/>
        <NewArrivalCard/>
    </div>
    </>
  )
}

export default NewArrival