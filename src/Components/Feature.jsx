import React from "react";

const Feature = () => {
  return (
    <>
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Our Advacedd Features
            <br />
          </p>
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
              <img src="assets/img/features.png" className="img-fluid" alt="" />
            </div>

            <div className="col-xl-6 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Top Brand Collection</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>All-in-one Fashion Hub</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Fast & Safe Delivery</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Easy Return & Exchange</h3>
                  </div>
                </div>



                <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Secure Online Payments</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Regular Offers & Discounts</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="alt-features" className="alt-features section">
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-xl-7 d-flex order-2 order-xl-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row align-self-center gy-5">
                <div className="col-md-6 icon-box">
                  <i className="bi bi-award"></i>
                  <div>
                    <h4>Top Brand Collection</h4>
                    <p>
                    Discover the latest styles from global fashion leaders like Adidas, Nike, Puma, and Mufti—handpicked for quality and authenticity.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-card-checklist"></i>
                  <div>
                    <h4>All-in-one Fashion Hub</h4>
                    <p>
                    Shop trendy clothing for men, women, and kids—all in one place. From casuals to sportswear, we’ve got it all.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-dribbble"></i>
                  <div>
                    <h4>Fast & Safe Delivery</h4>
                    <p>
                    Enjoy lightning-fast doorstep delivery with safe packaging and real-time tracking—your fashion arrives fresh and right on time.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-filter-circle"></i>
                  <div>
                    <h4>Easy Return & Exchange</h4>
                    <p>
                    Wrong size or change of mind? No worries! We offer simple, hassle-free returns and quick exchanges to keep you satisfied.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-lightning-charge"></i>
                  <div>
                    <h4>Secure Online Payments</h4>
                    <p>
                    Your privacy matters. Pay safely with our encrypted payment gateway—supporting cards, UPI, and wallets with total security.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-patch-check"></i>
                  <div>
                    <h4>Regular Offers & Discounts</h4>
                    <p>
                    Get the best deals on your favorite brands. Enjoy seasonal sales, exclusive coupons, and daily discounts to save more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-5 d-flex align-items-center order-1 order-xl-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="assets/img/alt-features.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
