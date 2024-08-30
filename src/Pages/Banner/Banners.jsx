import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Banners.css";
import Campaign from "../Campaign/Campaign";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row carousel_Container gap-4 -z-0 md:h-96 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          slidesPerView={1}
          // slidesPerView={
          //   window.innerWidth <= 550
          //     ? 1
          //     : window.innerWidth <= 720
          //     ? 2
          //     : window.innerWidth > 720
          //     ? 2
          //     : 0
          //
          navigation={{
            clickable: true,
          }}
          // pagination={{ clickable: true }}
          className="w-full rounded-md "
        >
          <SwiperSlide className="rounded-md cursor-pointer">
            <Link to="#">
              <img
                className="rounded-md"
                src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-md cursor-pointer">
            <Link to="#">
              <img
                className="rounded-md"
                src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-md cursor-pointer">
            <Link to="#">
              <img
                className="rounded-md"
                src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-md ">
            <Link to="#">
              <img
                className="rounded-md"
                src="https://i.ibb.co/K620LKH/pexels-pixabay-271639.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>
        </Swiper>
        {/* <div className="w-full md:w-[400px] h-auto bg-[#F5F5F5] p-2 rounded-lg z-50">
          <h3 className="text-xl font-semibold mb-3">Upcoming Campaign</h3>
          <Campaign />
        </div> */}
      </div>
    </>
  );
};

export default Banners;
