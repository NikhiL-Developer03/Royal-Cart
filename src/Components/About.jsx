import React from "react";
import { Link } from "react-router-dom"

const About = ({ title }) => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  Royal-cart brings you branded fashion from Adidas, Nike, Puma, and Mufti for men, women, and kids.
                </h2>
                <p className="text-justify">
                  At Royal-cart, we offer a premium collection of branded clothing from Adidas, Nike, Puma, and Mufti—crafted for men, women, and kids. From casual wear to activewear, find outfits for every occasion. Enjoy a smooth shopping experience with secure payments, easy returns, and fast delixsvery. Discover style, comfort, and quality—all in one place, only at Royal-cart.
                </p>
                <div className="text-center text-lg-start">
                  {title === "Home" ? <Link
                    to={`/about`}
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link> : null}
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/banner/banner3.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
