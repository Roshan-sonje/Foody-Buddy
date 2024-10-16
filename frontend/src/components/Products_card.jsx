import React from 'react'

function Products_card() {
  return (
    <>
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
    </>
  )
}

export default Products_card