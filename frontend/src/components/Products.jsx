import React from "react";
import { useState } from "react";
import data from "../products.json";

function Products({ handleClick, setShow }) {

  const [fiterData, setFiterData] = useState(data)

  const filterFood = (type) => {
    if(type === "all") {
      setFiterData(data);
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
      setFiterData(filter)
    };
  
  

  return (
    <>
      <div className="w-[90vw]  mx-auto px-9">
        <div className="flex flex-col items-center">
          <h1>Our Products</h1>
          <p>
            Quam pellentesque nec nam aliquam sem et tortor consequat. Ut
            placerat orci nulla pellentesque dignissim enim sit amet venenatis.
          </p>
        </div>
        <div className="buttons flex justify-center md:justify-around py-5">
          <div className="flex gap-1 ">
          <button onClick={()=>filterFood("all")} className="text-sm md:text-base bg-red-600 text-white px-3 py-2">
              ALL
            </button>
            <button onClick={()=>filterFood("Bhaji")} className="text-sm md:text-base bg-red-600 text-white px-3 py-2">
              BHAJI
            </button>
            <button onClick={()=>filterFood("breakfast")} className="text-sm md:text-base bg-yellow-200 font-[500] hover:bg-red-600 duration-300 text-white px-3 py-2">
              BREAKFAST
            </button>
            <button className="text-sm md:text-base bg-yellow-200 font-[500] hover:bg-red-600 duration-300 text-white px-3 py-2">
              DINNER
            </button>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="bg-red-600 self-center">
              <img
                src="/src/assets/svg/downArrow.svg"
                alt=""
                className="size-9 invert rotate-90  p-2"
              />
            </div>
            <div className="bg-red-600 self-center">
              <img
                src="/src/assets/svg/downArrow.svg"
                alt=""
                className="size-9 invert rotate-90  scale-[-1] filter  p-2"
              />
            </div>
          </div>
        </div>

        <div className="container  flex justify-center flex-wrap gap-4">
          {fiterData.map((items) => (
            <div className="relative group overflow-hidden group hover:border-t- hover:border-l-1 hover:border-red-700 duration-300 item-one border ">
              <div className="overflow-hidden">
                <img src={items.img} alt="" className="w-[350px] h-[350px]" />
              </div>

              <div className="bg-gray-300 pb-4 flex flex-col items-center">
                <div className="flex justify-center items-center gap-2">
                  <div className="flex gap-1">
                    <img
                      src="/src/assets/svg/like.svg"
                      alt=""
                      className="size-4"
                    />
                    <img
                      src="/src/assets/svg/like.svg"
                      alt=""
                      className="size-4"
                    />
                    <img
                      src="/src/assets/svg/like.svg"
                      alt=""
                      className="size-4"
                    />
                    <img
                      src="/src/assets/svg/like.svg"
                      alt=""
                      className="size-4"
                    />
                    <img
                      src="/src/assets/svg/like.svg"
                      alt=""
                      className="size-4"
                    />
                  </div>
                  <p>{items.reviews} reviews</p>
                </div>
                <h1 className="text-xl font-[500] py-2">{items.name}</h1>
                Rs.{items.rate}
              </div>

              <div className="absolute top-20 right-[-40px] duration-300 group-hover:right-5 flex flex-col gap-2">
                <div className="bg-red-700 p-2">
                  <img
                    onClick={() => {
                      handleClick(items), setShow(true);
                    }}
                    src="/src/assets/svg/cart.svg"
                    alt=""
                    className="size-6 invert"
                  />
                </div>

                <div className="bg-red-700 p-2">
                  <img
                    src="/src/assets/svg/like.svg"
                    alt=""
                    className="size-6 invert"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
