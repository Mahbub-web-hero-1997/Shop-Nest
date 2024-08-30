import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Campaign = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        // autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        // direction="vertical"
        slidesPerView={1}
        className="w-full md:w-[380px]"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-3 max-h-52 bg-white p-3 rounded-lg">
            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-vector/set-wild-animals_1308-29055.jpg?t=st=1724996926~exp=1725000526~hmac=124b383288286c78506161b49524df5bcd33f8916de33d51343f94c01580e377&w=826"
                alt=""
              />
              <h4 className="text-xl text-red-600 font-semibold">
                Campaign start in
              </h4>
            </div>
            <div className=" grid grid-cols-2 gap-y-3 gap-x-4  w-full md:w-1/2">
              <div className="bg-[#3D444E] text-white rounded-md text-center p-1 w-full md:w-[70px] h-[50px] flex items-center justify-center">
                <h3 className=" text-4xl md:text-2xl font-semibold md:font-bold">
                  10d
                </h3>
              </div>
              <div className="bg-[#3D444E] text-white rounded-md text-center p-1 w-full md:w-[70px] h-[50px] flex items-center justify-center">
                <h3 className=" text-4xl md:text-2xl font-semibold md:font-bold">
                  10h
                </h3>
              </div>
              <div className="bg-[#3D444E] text-white rounded-md text-center p-1 w-full md:w-[70px] h-[50px] flex items-center justify-center">
                <h3 className=" text-4xl md:text-2xl font-semibold md:font-bold">
                  10m
                </h3>
              </div>
              <div className="bg-[#3D444E] text-white rounded-md text-center p-1 w-full md:w-[70px] h-[50px] flex items-center justify-center">
                <h3 className=" text-4xl md:text-2xl font-semibold md:font-bold">
                  10s
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Campaign;
