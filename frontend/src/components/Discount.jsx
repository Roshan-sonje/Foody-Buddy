import React from 'react'

function Discount() {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-10 h-[80vh] bg-[url("/src/assets/Wallpaper/bg2.png")] bg-cover bg-center'>
        <p className='text-xl font-[500]'>Enjoy Great Recipe</p>
        <h1 className='text-4xl text-center md:text-start md:text-6xl font-[600] text-red-700'>Simple And Delicious Food</h1>
        <p className='text-3xl'>Flat 20% Discount</p>
        <button className='bg-red-700 text-white px-5 py-2 font-[500]'>SHOP NOW</button>
    </div>
    </>
  )
}

export default Discount