import React from "react";

const Values = () => {
  return (
    <section id="values" className="values section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Values</h2>
        <p>
          What we value most
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img src="assets/img/values-1.png" className="img-fluid" alt="" />
              <h3>Unmatched Quality You Can Trust</h3>
              <p>
              Handpicked styles from Adidas, Nike, Puma, and Mufti—crafted for comfort, durability, and 100% authenticity.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
              <h3>Fast & Hassle-Free Delivery</h3>
              <p>
                Your time matters. That’s why we ensure smooth checkout, secure payments, and lightning-fast doorstep delivery—so you get your style, without the wait.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
              <h3>Fashion for Every Family Member</h3>
              <p>
                From casuals to activewear, we’ve got stylish options for men, women, and kids. Royal-cart makes it easy to shop for everyone in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
