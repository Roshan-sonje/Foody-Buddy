import React, { useState } from "react";
import Headroom from "react-headroom"
import { NavLink } from "react-router-dom";

const Navbar = ({setShow}) => {
  const [open, setOpen] = useState(true);
  return (
    <>
    <Headroom>
      <nav className="shadow-md bg-white flex items-center justify-between px-[20px] md:px-[60px] py-3">
        <div className="flex items-center gap-2">
          {open?<img
            onClick={() => setOpen(!open)}
            src="/src/assets/svg/menu.svg"
            alt=""
            className="md:hidden cursor-pointer size-8 translate-y-[6px]"
          /> : 
          <img
            onClick={() => setOpen(!open)}
            src="/src/assets/svg/cross.svg"
            alt=""
            className="md:hidden cursor-pointer size-8 translate-y-[6px]"
          />
          }
          <img src="/logo.jpg" alt="" className="h-[50px]" />
        </div>
        <ul className="hidden md:flex gap-6">
          <NavLink to="/" className="hover:text-yellow-500 cursor-pointer transition">
            Home
          </NavLink>
          <NavLink className="hover:text-yellow-500 cursor-pointer transition">
            Shop
          </NavLink>
          <NavLink className="hover:text-yellow-500 cursor-pointer transition">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-yellow-500 cursor-pointer transition">
            Contact Us
          </NavLink>
        </ul>
        <div className="flex gap-2">
          <img src="/src/assets/svg/profile.svg" alt="" className="size-6" />
          <img onClick={()=>setShow(true)} src="/src/assets/svg/cart.svg" alt="" className="size-6" />
          <img src="/src/assets/svg/like.svg" alt="" className="size-6" />
          <img src="/src/assets/svg/search.svg" alt="" className="size-6" />
        </div>
      </nav>
      </Headroom>

      <div
        className={
          open
            ? ` md:hidden fixed z-20 bg-white h-full left-[-100%] duration-300 transition-all  shadow-lg`
            : ` md:hidden fixed z-20 bg-white h-full left-0 duration-300 transition-all  shadow-lg`
        }
      >
        <ul className="flex flex-col py-5 ">
          <NavLink className="border-b-2 border-gray-200 pl-4 py-4 pr-[150px]">
            Home
          </NavLink>
          <NavLink className="border-b-2 border-gray-200 pl-4 py-4 pr-[150px]">
            Shop
          </NavLink>
          <NavLink className="border-b-2 border-gray-200 pl-4 py-4 pr-[150px]">
            About Us
          </NavLink>
          <NavLink className="border-b-2 border-gray-200 pl-4 py-4 pr-[150px]">
            Contact Us
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
