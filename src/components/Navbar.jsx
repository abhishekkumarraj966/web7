import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#F1C6D5]  transition-transform duration-200 transform">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-black ">
            <a href="#products" onClick={handleClick}>Products</a>
          </li>

          <li className="my-4 py-4 border-black">
            {/* <Link to="/services">Services</Link> */}
            <a href="#service"  onClick={handleClick}> Services</a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/contact">Blog</Link> */}
            <a href="#blogs"  onClick={handleClick}>Blog</a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/gallery">Gallery</Link>  */}
            <a href="#gallery"  onClick={handleClick}> Gallery</a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/gallery">Gallery</Link>  */}
            <a href="#contact"  onClick={handleClick}> Contact</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#F1C6D5] text-black   sticky top-0 z-50 h-[80px]">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-black lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="">
                <span className="text-3xl font-bold">Bey Beel</span>
              </a>
            </div>
            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#products">Products</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/services">Services</Link> */}
                    <a href="#services"> Services</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/contact">Blog</Link> */}
                    <a href="#blogs">Blog</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/gallery">Gallery</Link> */}
                    <a href="#gallery"> Gallery</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/gallery">Gallery</Link> */}
                    <a href="#contact"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
