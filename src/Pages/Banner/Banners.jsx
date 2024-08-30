import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Banners.css";

const Banners = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row carousel_Container ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          autoplay={true}
          // slidesPerView={2}
          slidesPerView={
            window.innerWidth <= 550
              ? 1
              : window.innerWidth <= 720
              ? 2
              : window.innerWidth > 720
              ? 2
              : 0
          }
          // navigation
          pagination={{ clickable: true }}
          className="w-full rounded-md h-auto "
        >
          <SwiperSlide className="rounded-md mb-10">
            <img
              className="rounded-md"
              src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-md">
            <img
              className="rounded-md"
              src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-md">
            <img
              className="rounded-md"
              src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-md">
            <img
              className="rounded-md"
              src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Products Category Area */}
      <div></div>
    </>
  );
};

export default Banners;
