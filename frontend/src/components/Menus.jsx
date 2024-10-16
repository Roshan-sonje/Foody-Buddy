import React from "react";

function Menus() {
  return (
    <>
      <div className="pt-[100px]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-[500]">Out Flavorful Menus</h1>
          <p className=" text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            voluptatibus eum nesciunt voluptate.
          </p>
        </div>

        <div className="grid grid-col-1 px-2 sm:px-[10%] md:px-[3%] lg:grid-cols-2 gap-x-3 gap-y-11 place-items-center lg:place-items-center py-16 w-fit sm:place-items-start mx-auto">

        

        {/* First Menu */}
        <div>
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className=" relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        {/* Second Menu */}
        <div>
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className="relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>



        {/* Three Menu */}
        <div className="">
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className="relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        {/* Four Menu */}
        <div>
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className="relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute  left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        {/* Five Menu */}
        <div>
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className="relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>
        </div>

        {/* Six Menu */}
        <div>
          <div className="group flex flex-col sm:flex-row gap-3 cursor-pointer">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/shop-12.jpg?v=1614334587&width=200"
              alt="" className="size-[100px] self-center"
            />
            <div className="relative flex flex-col gap-3 justify-center">
              <div className="flex gap-2">
                <h1 className="text-[17px] sm:text-xl font-[500] text-red-600">Waldorf Salad</h1>
                <p className="translate-y-3 text-xs sm:text-base group-hover:opacity-0 duration-[700ms] group-hover:duration-[700ms]">---------------------</p>
                <h1 className="text-[17px] sm:text-xl font-[500]">$3.95</h1>
                <p className="absolute left-[130px] top-[19px] sm:left-[150px] sm:top-[40px] border-b-[1px] sm:border-b-2 w-0 ease-in-out duration-[500ms] group-hover:w-[135px] sm:group-hover:w-[185px] border-black"></p>
              </div>
              <p className="opacity-70 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Menus;
