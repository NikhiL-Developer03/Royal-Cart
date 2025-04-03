import React, { useState } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CategorySlider = () => {
  let [showPerPage, setShowPerPage] = useState(6);
  let options = {
    slidesPerView:showPerPage,
          spaceBetween:50,
          loop:true,
          freeMode:true,
          pagination:{
            clickable: true,
          },
          modules:[FreeMode, Pagination],
          className:"mySwiper"
  }

  function handelWindowResize() {
    if (window.innerWidth < 576) {
      setShowPerPage(2);
    } else if (window.innerWidth < 768) {
      setShowPerPage(3);
    } else if (window.innerWidth < 992) {
      setShowPerPage(4);
    } else if (window.innerWidth < 1200) {
      setShowPerPage(5);
    } else {
      setShowPerPage(6);
    }
  }
  window.addEventListener("resize", handelWindowResize);
  return (
    <section id="clients" className="clients section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>
          We work with best clients
          <br />
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper {...options}
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-1.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-2.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-3.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-4.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-5.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-6.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-7.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="assets/img/clients/client-8.png"
              className="img-fluid"
              style={{ height: 80 }}
            />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
