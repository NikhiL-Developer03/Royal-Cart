import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ActionCreators/ProductActionCreator";
import { getMaincategory } from "../Redux/ActionCreators/MaincategoryActionCreator";

const Products = () => {
  let ProductStateData = useSelector(state => state.ProductStateData)
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let dispatch = useDispatch()
  let [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    dispatch(getProduct())
    // console.log(ProductStateData)
  }, [ProductStateData.length])
  useEffect(() => {
    dispatch(getMaincategory())
  }, [MaincategoryStateData.length])
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Product</h2>
        <p>Check our latest Product</p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active"
              onClick={() => setSelectedCategory("")}>
              All
            </li>
            {
              MaincategoryStateData.filter((x) => x.active).map(item => {
                return <li onClick={() => setSelectedCategory(item.name)}>{item.name}</li>
              })
            }

          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {
              ProductStateData.filter((x) => x.active && (selectedCategory === "" || selectedCategory === x.maincategory)).map((item) => {
                return <div key={item.id} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                  <div className="portfolio-content h-100">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic[0]}`}
                      className="img-fluid"
                      alt="no"
                      style={{ height: 300, width: "100%" }}
                    />
                    <div className="portfolio-info">
                      <h4>{item.maincategory}</h4>
                      <p>{item.name}</p>
                      <a
                        href="assets/img/portfolio/app-1.jpg"
                        title="App 1"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </section >
  );
};

export default Products;
