import React from "react";
import { useState } from "react";
import Slider from "./Slider";
import Clients from "./Clients";
import MenuTypes from "./MenuTypes";
import Pictures from "./Pictures";
import Menus from "./Menus";
import Gallery from "./Gallery";
import Parallax1 from "./Parallax1";
import Special from "./Special";
import Discount from "./Discount";
import Products from "./Products";
import Cart from "./Cart";
import Layout from "./Layout";

function Home() {
  // const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = (data) => {
    if (cart.indexOf(data) !== -1) return;
    console.log(data);
    setCart([...cart, data]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].pcs += d;

    if (arr[ind].pcs === 0) arr[ind].pcs = 1;
    setCart([...arr]);
  };

  return (
    <>
      <Layout>
        <Slider />
        <Gallery />
        <Menus />
        <Discount />
        <Products handleClick={handleClick} setShow={setShow} />
        {show && (
          <Cart
            cart={cart}
            setCart={setCart}
            setShow={setShow}
            handleChange={handleChange}
          />
        )}
        <Pictures />
        <MenuTypes />
        <Parallax1 />
        <Special />
        <Clients />
      </Layout>

      {/* <Navbar show={show} setShow={setShow}/>
    
    <Footer/> */}
    </>
  );
}

export default Home;
