import React from "react";
import { Data } from "./Data";
import "./reason.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Reasons = () => {
  return (
    <section className="reason container section">
      <h2 className="section__title">AppWorks School</h2>
      <span className="section__subtitle">Why I choose</span>

      <Swiper
        className="reason__container"
        loop={true}
        grabCursor={true}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="reason__card" key={id}>
              <h3 className="reason__name">{title}</h3>
              <p className="reason__descritpion">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reasons;
