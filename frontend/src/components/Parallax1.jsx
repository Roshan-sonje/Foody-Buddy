import React from "react";

function Parallax1() {
  return (
    <>
      <div className='relative  bg-fixed bg-[url("/src/assets/Wallpaper/bg1.jpg")]  sm:min-h-screen bg-cover '>
        <div className="flex flex-col items-center sm:items-start justify-center text-white h-screen bg-black sm:bg-opacity-60 bg-opacity-45 px-10 sm:px-[13%] sm:pr-[35%] gap-4">
          <h1 className="text-3xl font-[500] py-3 text-center sm:text-start">Upgrade To The Latest Taste!</h1>
          <p className="text-[14px] sm:text-[15px] text-center sm:text-start">
            Est sit amet facilisis magna etiam tempor. Dolor sed viverra ipsum
            nunc aliquet bibendum enim. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio euismod. Elementum nisi quis eleifend
            quam adipiscing vitae proin sagittis nisl. Auctor augue mauris
            gravida.
          </p>
          <p className="text-[14px] sm:text-[15px] text-center sm:text-start">
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
            Sodales ut eu sem integer vitae. Nibh tortor id aliquet lectus proin
            nibh. Sed velit dignissim sodales ut.
          </p>

          <img
            src="https://yummi-theme.myshopify.com/cdn/shop/files/signature.png?v=1614334584&width=200"
            alt="" className=" my-3"
          />
          <p>Roshan - Reciep</p>
        </div>
        <img
          src="/src/assets/Footer/footer-1.webp"
          alt=""
          className="hidden md:block absolute top-0 -translate-y-20"
        />
        <img
          src="/src/assets/Footer/footer-1.webp"
          alt=""
          className="hidden md:block absolute bottom-0 translate-y-20"
        />
      </div>
    </>
  );
}

export default Parallax1;
