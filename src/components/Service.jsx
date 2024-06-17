import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
import ServiceMock from "./MockData/ServiceMock";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div>
      <AppLayout>
        <h2 className=" font-bold text-[30px] text-center" id="service">
          Service
        </h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {ServiceMock.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] h-[300px] flex-col mt-8 mb-10 pb-16  mx-auto">
                <div className="relative">
                  <Link to={`/servicePage/${slide.id}`}>
                    <img src={slide.img} alt="" className="" />
                  </Link>
                </div>
                <p className="pt-2 text-start text-[15px] ">
                  <Link to={`/servicePage/${slide.id}`}>{slide.dec}</Link>
                </p>
                <h2 className="font-bold text-[20px]">{slide.redmore}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Service;
