import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer text-light">
        <div className="footer-newsletter">
          <div className="container">
            <div className=" row justify-content-center text-center">
              <div className=" col-lg-6">
                <h2 className="text-light">Join Our Newsletter</h2>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="index.html" className="d-flex align-items-center">
                <span className="sitename text-light">
                  {process.env.REACT_APP_SITE_NAME}
                </span>
              </Link>
              <div className="footer-contact pt-3 ">
                <p className="fs-6">{process.env.REACT_APP_ADDRESS}</p>
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <Link className="text-light fs-6" to={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</Link>
                </p>
                <p className="mt-3">
                  <strong>WhatsApp:</strong>{" "}
                  <Link className="text-light fs-6" to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`}>{process.env.REACT_APP_WHATSAPP}</Link>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <Link className="text-light fs-6" to={`mailto:${process.env.REACT_APP_EMAIL}`}>
                      {process.env.REACT_APP_EMAIL}
                    </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Useful Links</h4>
              <ul>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/" className="text-light">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/about" className="text-light">
                    About us
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/shop" className="text-light">
                    Shop
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/contactus" className="text-light">
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Our Services</h4>
              <ul>
              <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/features" className="text-light">
                    Features
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/testimonial" className="text-light">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/shop" className="text-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>{" "}
                  <Link to="/contactus" className="text-light">
                    Term & Condition
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4 className="text-light">Follow Us</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links d-flex">
                <Link to={process.env.TWITTER} target="_blank" rel="noreferrer">
                  <i className="text-light bi bi-twitter-x"></i>
                </Link>
                <Link
                  to={process.env.REACT_APP_FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-facebook"></i>
                </Link>
                <Link
                  to={process.env.REACT_APP_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-instagram"></i>
                </Link>
                <Link
                  to={process.env.REACT_APP_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-linkedin"></i>
                </Link>
                <Link
                  to={process.env.REACT_APP_YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">
              {process.env.REACT_APP_SITE_NAME}
            </strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
