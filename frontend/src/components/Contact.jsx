import React from 'react'
import Layout from './Layout'

function Contact() {
  return (
    <>
    <Layout>
        <div className='bg-[url("/src/assets/Wallpaper/bg1.jpg")] bg-fixed h-[250px]'>
            <div className=' h-full w-full bg-black sm:bg-opacity-60 text-white flex justify-center items-center'>
                <h1 className=' text-white text-[60px]'>Contact Us</h1>
            </div>
        </div>
        <div className='py-[100px] flex px-[300px] gap-7'>
                <div className="left flex flex-col gap-7">
                    <div className='flex items-center gap-4 border p-7 hover:border-red-700 duration-300'>
                        <span className='bg-red-700 p-2'><img src="/src/assets/Footer/phone.svg" alt="" className='size-8 invert'/></span>
                        <div>
                            <h1 className='text-base font-[500]'>Phone</h1>
                            <h1 className='text-[14px]'><span className='text-base font-[500]'>Toll-Free:</span>0000-123-456789</h1>
                            <h1 className='text-[14px]'><span className='text-base font-[500]'>Fax:</span>0000-123-456789</h1>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 border p-7 hover:border-red-700 duration-300'>
                    <span className='bg-red-700 p-2'><img src="/src/assets/Footer/phone.svg" alt="" className='size-8 invert'/></span>
                    <div>
                            <h1 className='text-base font-[500]'>Email</h1>
                            <h1>mail@example.com</h1>
                            <h1>support@example.com</h1>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 border p-7 hover:border-red-700 duration-300'>
                    <span className='bg-red-700 p-2'><img src="/src/assets/Footer/phone.svg" alt="" className='size-8 invert'/></span>
                    <div>
                            <h1 className='text-base font-[500]'>Address</h1>
                            <h1>No: 58 A, East Madison Street,Baltimore,MD,USA 4508</h1>
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col gap-8 w-full">
                    <h1 className='text-3xl font-[600]'>CONTACT FORM</h1>
                    <input type="text" className='border border-gray-200' placeholder='Name'/>
                    <input type="text" className='border border-gray-200' placeholder='Email'/>
                    <input type="text" className='border border-gray-200' placeholder='Phone No.'/>
                    <textarea rows={4} placeholder='Comment' className='border border-gray-200'></textarea>
                    <button className='bg-red-700 px-6 py-2 w-fit text-white rounded-sm'>Send</button>
                </div>
            </div>
    </Layout>
    </>
  )
}

export default Contact