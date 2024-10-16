import React from 'react'
import { useState } from 'react'

const image = [
    "/src/assets/clients/one.avif",
    "/src/assets/clients/two.avif",
    "/src/assets/clients/three.avif",
    "/src/assets/clients/four.avif",
]

function Clients() {
  return (
    <>
    
    <div className='py-[90px] mb-9 flex flex-col gap-5'>
        <h1 className='text-center text-3xl font-[500]'>Our Clients</h1>
    <div className='flex overflow-scroll scrollbar-hide justify-center'>
    {image.map((items,i) => (
        <img src={items} alt="" className=''/>
    ))}
    </div>
    </div>
    </>
  )
}

export default Clients