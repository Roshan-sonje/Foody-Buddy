import React, { useEffect } from "react";
import { useState } from "react";

const arr = ["note", "shipping", "gift"];

function Cart({ cart, setCart, setShow, handleChange }) {
  const [price, setPrice] = useState(0);
  const [toggle, setToggle] = useState(null);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.pcs * item.rate));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <>
        <div className="fixed right-0 top-0 shadow-lg bg-white h-screen w-[80vw] md:w-[25vw] z-10">
          <div className="flex justify-between px-5 py-6 border-b-2 ">
            <h1 className="text-xl">Shopping Cart</h1>
            <img
              onClick={() => setShow(false)}
              src="/src/assets/svg/cross.svg"
              alt=""
              className="size-6 hover:rotate-90 duration-150"
            />
          </div>

          <div className="h-[250px]  bg-white overflow-y-scroll">
            {cart.map((product) => (
              <div className="flex justify-center gap-3 items-center">
                <img
                  src={product.img}
                  alt=""
                  className="
                size-[150px]"
                />
                <div className="flex flex-col gap-2">
                  <h1>{product.name}</h1>
                  <p>{product.rate}</p>
                  <div className="grid grid-cols-3 place-items-center w-[100px]  items-center">
                    <div className="w-full h-full  flex justify-center items-center border border-r-0">
                      <img
                        onClick={() => handleChange(product, -1)}
                        src="/src/assets/svg/minus.svg"
                        alt=""
                        className="size-5 "
                      />
                    </div>
                    <h1 className=" w-full text-center border border-r-0">
                      {product.pcs}
                    </h1>
                    <div className="w-full h-full  flex justify-center items-center border">
                      <img
                        onClick={() => handleChange(product, 1)}
                        src="/src/assets/svg/cross.svg"
                        alt=""
                        className="size-4 rotate-45"
                      />
                    </div>
                  </div>
                </div>

                <div className="self-start mt-6 ml-3 bg-white rounded-full shadow-lg border p-1">
                  <img
                    onClick={() => handleRemove(product.id)}
                    src="/src/assets/svg/cross.svg"
                    alt=""
                    className="size-4"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white">
            <div className="flex gap-2 justify-evenly border-b-2 py-2">
              <div
                onClick={() => setToggle("note")}
                className="flex flex-col items-center"
              >
                <img
                  src="/src/assets/svg/notes.svg"
                  alt=""
                  className="size-11"
                />
                <h1>Add Note</h1>
              </div>

              <div
                onClick={() => setToggle("shipping")}
                className="flex flex-col items-center"
              >
                <img
                  src="/src/assets/svg/ship.svg"
                  alt=""
                  className="size-11"
                />
                <h1>Shpping</h1>
              </div>

              <div onClick={() => setToggle("gift")} className="flex flex-col items-center">
                <img
                  src="/src/assets/svg/gift.svg"
                  alt=""
                  className="size-11"
                />
                <h1>Discount</h1>
              </div>
            </div>

            <div
              className={
                toggle == "note"
                  ? `h-fit text-center py-2 flex justify-around px-6 duration-300`
                  : `h-0 overflow-hidden duration-300`
              }
            >
              <textarea cols={30} rows={5} placeholder="Add Note"></textarea>
              <img
                onClick={() => setToggle(null)}
                src="/src/assets/svg/cross.svg"
                alt=""
                className="size-5"
              />
            </div>

            <div
              className={
                toggle == "shipping" ? `h-fit py-2 px-6 duration-300` : `h-0 overflow-hidden duration-300`
              }
            >
              <div className="flex justify-end">
              <img
                onClick={() => setToggle(null)}
                src="/src/assets/svg/cross.svg"
                alt=""
                className="size-5 "
              />
              </div>
              <div>
                <div className="flex flex-col gap-2 py-3">
                  <label htmlFor="maharashtra_cities">City</label>
                  <select name="maharashtra_cities" id="maharashtra_cities">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Thane">Thane</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Akola">Akola</option>
                    <option value="Latur">Latur</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Dhule">Dhule</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Parbhani">Parbhani</option>
                    <option value="Beed">Beed</option>
                    <option value="Malegaon">Malegaon</option>
                    <option value="Ratnagiri">Ratnagiri</option>
                    <option value="Satara">Satara</option>
                    <option value="Bhiwandi">Bhiwandi</option>
                    <option value="Yavatmal">Yavatmal</option>
                    <option value="Gondia">Gondia</option>
                    <option value="Wardha">Wardha</option>
                    <option value="Baramati">Baramati</option>
                    <option value="Panvel">Panvel</option>
                    <option value="Kalyan">Kalyan</option>
                    <option value="Ulhasnagar">Ulhasnagar</option>
                    <option value="Mira-Bhayandar">Mira-Bhayandar</option>
                    <option value="Bhandara">Bhandara</option>
                    <option value="Palghar">Palghar</option>
                    <option value="Osmanabad">Osmanabad</option>
                    <option value="Hingoli">Hingoli</option>
                    <option value="Gadchiroli">Gadchiroli</option>
                    <option value="Jalna">Jalna</option>
                    <option value="Washim">Washim</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="zip_code">Zip Code</label>
                  <input type="text" id="zip_code"/>
                </div>
              </div>
            </div>

            <div
              className={
                toggle == "gift"
                  ? `h-fit py-2 flex flex-col px-6 duration-300`
                  : `h-0 overflow-hidden duration-300`
              }
            >
              <div className="self-end">
              <img
                onClick={() => setToggle(null)}
                src="/src/assets/svg/cross.svg"
                alt=""
                className="size-5"
              />
              </div>
              <div className="py-4">
                <input type="text" placeholder="Enter Discount Code"/>
                <h1 className="py-2 mt-3 bg-red-700 w-fit px-4 text-white">SAVE</h1>
              </div>
            </div>

            <div>
              <div className="flex justify-between px-6 py-3">
                <h1>Subtotle</h1>
                <h1>Rs.{price} </h1>
              </div>
              <h1 className="text-center">
                Taxes and shipping calculated at checkout
              </h1>

              <div className="flex flex-col px-4 py-5 gap-3">
                <button className="bg-red-700 rounded-sm text-white  py-2">
                  Check Out
                </button>
                <button className="bg-red-700 rounded-sm text-white  py-2">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Cart;
