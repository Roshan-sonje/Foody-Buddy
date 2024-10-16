import React from 'react'

function MenuTypes() {
  return (
    <>
    <div className='grid gap-x-5 gap-y-5 grid-cols-[repeat(auto-fit,250px)] place-content-center px-[5%] py-[10%]'>
        <div className='flex flex-col items-center gap-3 '>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-12.png?v=1614334585&width=275" alt="" />
            <h1 className='text-2xl font-[600]'>Menu Types</h1>
            <h1 className='text-red-600 text-3xl font-[600]'>200</h1>
        </div>

        <div className='flex flex-col items-center gap-3'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-13.png?v=1614334585&width=275" alt="" />
            <h1 className='text-2xl font-[600]'>Different Origin</h1>
            <h1 className='text-red-600 text-3xl font-[600]'>50</h1>
        </div>

        <div className='flex flex-col items-center gap-3'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-14.png?v=1614334585&width=275" alt="" />
            <h1 className='text-2xl font-[600]'>Pasta & Noodles</h1>
            <h1 className='text-red-600 text-3xl font-[600]'>850</h1>
        </div>

        <div className='flex flex-col items-center gap-3'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-11.png?v=1614334585&width=275" alt="" />
            <h1 className='text-2xl font-[600]'>Meals To Go</h1>
            <h1 className='text-red-600 text-3xl font-[600]'>580</h1>
        </div>

    </div>
    </>
  )
}

export default MenuTypes