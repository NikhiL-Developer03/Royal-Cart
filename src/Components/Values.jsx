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
              <h3>Ad cupiditate sed est odio</h3>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
