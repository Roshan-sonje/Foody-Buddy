import React from 'react'

function Pictures() {
  return (
    <>
    <div className='grid grid-cols-[repeat(auto-fit,240px)] md:grid-cols-[repeat(auto-fit,300px)] place-items-center place-content-center gap-y-4 py-[100px]'>
        <div className='w-[250px] md:w-[250px] group'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/festive-5.jpg?v=1614334588&width=1500" alt="" className='rounded-xl'/>
            <h1 className='text-center duration-500 opacity-0 group-hover:opacity-100 group-hover:duration-500 text-red-700 font-[600] mt-2'>Indian Curry Meals</h1>
            <h1 className='text-center duration-[500ms] opacity-0 group-hover:opacity-100 ease-in-out group-hover:duration-[500ms] '>Starts at $3.99</h1>
        </div>
        <div className='w-[250px] md:w-[250px] group'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/festive-4.jpg?v=1614334588&width=750" alt="" className='rounded-xl '/>
            <h1 className='text-center duration-300 opacity-0 group-hover:opacity-100 group-hover:duration-300 text-red-700 font-[600] mt-2'>Indian Curry Meals</h1>
            <h1 className='text-center duration-[500ms] ease-in-out opacity-0 group-hover:opacity-100 group-hover:duration-[500ms] '>Starts at $3.99</h1>
        </div>
        <div className='w-[250px] md:w-[250px] group'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/festive-3.jpg?v=1614334588&width=750" alt="" className='rounded-xl '/>
            <h1 className='text-center duration-300 opacity-0 group-hover:opacity-100 group-hover:duration-300 text-red-700 font-[600] mt-2'>Indian Curry Meals</h1>
            <h1 className='text-center duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:duration-500 '>Starts at $3.99</h1>
        </div>
        <div className='w-[250px] md:w-[250px] group'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/festive-2.jpg?v=1614334588&width=750" alt="" className='rounded-xl '/>
            <h1 className='text-center duration-300 opacity-0 group-hover:opacity-100 group-hover:duration-300 text-red-700 font-[600] mt-2'>Indian Curry Meals</h1>
            <h1 className='text-center duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:duration-500 '>Starts at $3.99</h1>
        </div>
        <div className='w-[250px] md:w-[250px] group'>
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/festive-1.jpg?v=1614334588&width=750" alt="" className='rounded-xl '/>
            <h1 className='text-center duration-300 opacity-0 group-hover:opacity-100 group-hover:duration-300 text-red-700 font-[600] mt-2'>Indian Curry Meals</h1>
            <h1 className='text-center duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:duration-500 '>Starts at $3.99</h1>
        </div>
    </div>
    </>
  )
}

export default Pictures