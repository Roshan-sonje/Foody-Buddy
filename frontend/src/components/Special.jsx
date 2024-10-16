import React from 'react'

function Special() {
  return (
    <>
    <div className='  flex flex-col md:flex-row mt-20 md:mx-[100px]'>
        <div className="left">
            <img src="https://yummi-theme.myshopify.com/cdn/shop/files/img-1.jpg?v=1614334579" alt="" className=''/>
        </div>
        <div className="right flex flex-col  px-3 ">
            <h1 className='text-2xl text-center md:text-start md:text-3xl font-[500] mb-3'>What Makes Our Menus Special?</h1>
            <div className='flex items-center self-start gap-7 mb-5 '>
                <img src="/src/assets/Special/img1.png" alt="" className='hover:scale-x-[-1] duration-500 '/>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-[500] text-red-600 hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>Pure Ingredients</h1>
                    <p className='text-[15px]'>Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.</p>
                </div>
            </div>

            <div className='flex items-center self-start gap-7 mb-5 md:pr-[200px]'>
                <img src="/src/assets/Special/img2.png" alt="" className='hover:scale-x-[-1] duration-500 '/>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-[500] text-red-600 hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>Sustainability</h1>
                    <p className='text-[15px]'>Laculis eu non diam phasellus. Dictum non consectetur a erat nam at. Quam adipiscing vitae proin sagittis.</p>
                </div>
            </div>

            <div className='flex items-center self-start gap-7 mb-5 md:pr-[200px]'>
                <img src="/src/assets/Special/img3.png" alt="" className='hover:scale-x-[-1] duration-500 '/>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-[500] text-red-600 hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>Environmentalism</h1>
                    <p className='text-[15px]'>Bibendum est ultricies integer quis auctor elit sed. Accumsan tortor posuere ac ut consequat semper.</p>
                </div>
            </div>

            <div className='flex items-center self-start gap-7 md:pr-[200px]'>
                <img src="/src/assets/Special/img4.png" alt="" className='hover:scale-x-[-1] duration-500'/>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-[500] text-red-600 hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>Formula Transparency</h1>
                    <p className='text-[15px]'>Facilisi nullam vehicula ipsum a. Ornare massa eget egestas purus viverra accumsan in nisl nisi.

</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Special