import React, { useState } from 'react'

function Footer() {
    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(null)
    const abc =(e)=> {
        if(toggle == e){
            setToggle(null)
            setOpen(false)
        }else{
            setToggle(e)
            setOpen(true)
        }
    }
  return (
    <>
    
    <div className={open?`bg-[url("/src/assets/Footer/footer-2.webp")] transition duration-700 ease-in`:`bg-[url("/src/assets/Footer/footer-2.webp")] transition duration-700 ease-in`}>
    <img src="/src/assets/Footer/footer-1.webp" alt=""  className='translate-y-[-55px]'/>
        <ul className='flex gap-10 md:gap-20 flex-col md:justify-center md:flex-row text-white md:px-20 py-16 transition duration-700'>
            <li >
                <div>
                    <div onClick={()=> {setToggle("Help"),abc("Help")}} className='flex justify-between md:self-start md:px-0 px-7'>
                    <h1 className='font-[500] md:text-2xl text-xl duration-700'>Help</h1>
                    {toggle=="Help"? <img src="/src/assets/svg/minus.svg" alt="" className='md:hidden invert size-5'/> : <img  src="/src/assets/svg/plus.svg" alt="" className='md:hidden invert size-5'/>}
                    </div>
                    <ul className={toggle=="Help"?`overflow-hidden md:block md:flex-col flex flex-col pt-8 px-7 gap-5 h-fit duration-700`:`overflow-hidden h-0 md:h-fit md:flex md:flex-col md:gap-4 md:py-4 duration-700`}>
                        <li className='duration-700'>Search</li>
                        <li className='duration-700'>Help</li>
                        <li className='duration-700'>Information</li>
                        <li className='duration-700'>Privacy Policy</li>
                        <li className='duration-700'>Shipping Detailes</li>
                    </ul>
                </div>
            </li>

            <li className='duration-700'>
                <div className='duration-700'>
                <div onClick={()=> {setToggle("Support"),abc("Support")}} className='flex justify-between md:self-start md:px-0 px-7 duration-700'>
                    <h1 className='font-[500] md:text-2xl text-xl duration-700'>Support</h1>
                    {toggle=="Support"? <img  src="/src/assets/svg/minus.svg" alt="" className='md:hidden invert size-5'/> : <img  src="/src/assets/svg/plus.svg" alt="" className='md:hidden invert size-5'/>}
                    </div>
                    <ul className={toggle=="Support"?`overflow-hidden flex flex-col pt-8 px-7 gap-5 h-fit duration-700`:`overflow-hidden md:flex md:flex-col h-0 md:h-fit md:gap-4 md:py-4 duration-700 `}>
                        <li className=''>Contact Us</li>
                        <li className=''>About Us</li>
                        <li className=''>Carrers</li>
                        <li className=''>Refund & Return</li>
                        <li className=''>Deliveries</li>
                    </ul>
                </div>
            </li>

            <li>
                <div>
                <div onClick={()=> {setToggle("Information"),abc("Information")}} className='flex justify-between md:self-start md:px-0 px-7'>
                    <h1 className='font-[500] md:text-2xl text-xl duration-700'>Information</h1>
                    {toggle=="Information"? <img  src="/src/assets/svg/minus.svg" alt="" className='md:hidden invert size-5'/> : <img  src="/src/assets/svg/plus.svg" alt="" className='md:hidden invert size-5'/>}
                    </div>
                    <ul className={toggle=="Information"?`overflow-hidden flex flex-col pt-8 px-7 gap-5 h-fit duration-700`:`overflow-hidden md:flex md:flex-col md:gap-4 h-0 md:h-fit md:py-4 duration-700`}>
                        <li>Search Terms</li>
                        <li>Advanced Search</li>
                        <li>Help & Faq's</li>
                        <li>Store Location</li>
                        <li>Order & Return</li>
                    </ul>
                </div>
            </li>

            <li>
                <div>
                <div onClick={()=> {setToggle("Contact Us"),abc("Contact Us")}} className='flex justify-between md:self-start md:px-0 px-7'>
                    <h1 className='font-[500] md:text-2xl text-xl duration-700'>Contact Us</h1>
                    {toggle=="Contact Us"? <img  src="/src/assets/svg/minus.svg" alt="" className='md:hidden invert size-5'/> : <img  src="/src/assets/svg/plus.svg" alt="" className='md:hidden invert size-5'/>}
                    </div>
                    <ul className={toggle=="Contact Us"?`overflow-hidden flex flex-col pt-8 px-7 gap-5 h-fit duration-700`:`overflow-hidden md:flex md:flex-col md:gap-7 h-0 md:h-fit md:py-4 duration-700 `}>
                        <li className='flex gap-2 items-center'>
                            <img src="/src/assets/Footer/home.svg" alt=""  className='size-5 invert'/>
                            <h1 className='text-wrap text-sm '>No: 58 A, East Madison Street, <br/> Baltimore, MD, USA 4508</h1>
                        </li>

                        <li className='flex gap-2 items-center'>
                            <img src="/src/assets/Footer/phone.svg" alt=""  className='size-5 invert'/>
                            <h1 className='text-wrap text-sm'>0000-123456789</h1>
                        </li>

                        <li className='flex gap-2 items-center'>
                            <img src="/src/assets/Footer/mail.svg" alt=""  className='size-5 invert'/>
                            <h1 className='text-wrap text-sm'>mail@example.com</h1>
                        </li>

                        <li className='flex gap-2 items-center'>
                            <img src="/src/assets/Footer/clock.svg" alt=""  className='size-5 invert'/>
                            <h1 className='text-wrap text-sm'>9.30AM - 7.30AM</h1>
                        </li>

                    </ul>
                </div>
            </li>
        </ul>

        <div className='px-5 flex flex-col md:flex-row gap-4 justify-around md:px-40'>
            <div className='flex md:flex-col flex-wrap gap-3 justify-center md:gap-6'>
                <h1 className='text-white text-xl font-[600] md:text-2xl'>Download our app</h1>
                <div className='flex gap-2 flex-wrap justify-center'>
                    <img src="src/assets/Footer/appstore.png" alt="" />
                    <img src="src/assets/Footer/winstore.webp" alt="" />
                    <img src="src/assets/Footer/googleplay.png" alt="" />
                </div>
            </div>
            <div className='flex md:flex-col flex-col gap-3 md:gap-10'>
                <h1 className='text-white text-xl font-[600] text-center md:text-2xl'>Connect with us</h1>
                <div className='flex justify-center gap-7'>
                    <img src="/src/assets/Footer/twitter.svg" alt="" className='size-6 invert'/>
                    <img src="/src/assets/Footer/facbook.svg" alt="" className='size-6 invert'/>
                    <img src="/src/assets/Footer/insta.svg" alt="" className='size-6 invert'/>
                </div>
            </div>
        </div>

        <div className='border-t-2 border-white mt-8 py-4'>
            <h1 className='text-white text-center'>All Right Reserved 2024,</h1>
        </div>
    </div>
    </>
  )
}

export default Footer