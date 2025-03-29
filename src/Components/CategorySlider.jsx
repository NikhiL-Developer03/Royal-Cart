import React, { useRef, useState } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CategorySlider = () => {
  return (
    <section id="clients" class="clients section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>
          We work with best clients
          <br />
        </p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-1.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-2.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-3.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-4.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-5.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-6.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-7.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img
              src="assets/img/clients/client-8.png"
              class="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
