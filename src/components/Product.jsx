import AppLayout from "./AppLayout";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Productmock from "./MockData/Productmock";
// import required modules
import { Keyboard, Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="my-10 mx-6" id="products">
      <AppLayout>
        <h2 className=" font-bold text-[30px] text-center">Products</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable:true,
          }}
          modules={[Keyboard, Pagination,Navigation]}
          className="mySwiper"
        >
          {Productmock.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="px-2">
              <div className="w-[90%] h-[330px] flex-col mt-8 sm:mb-10 group mx-auto sm:pb-4 mb-24  ">
                <div className="relative">
                  <a href={`/product/${slide.id}`}>
                    <img src={slide.img} alt="" className="" />
                  </a>
                </div>
                <p className="pt-2 text-center text-[15px] ">
                  <a href={`/product/${slide.id}`}>{slide.description}</a>
                </p>
                <h2 className="font-bold text-[22px] text-center">&#8377;{slide.price}</h2>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Product;
