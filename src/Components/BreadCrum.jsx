import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = ({ title }) => {
  return (
    <>
      <section id="hero" className="breadcrumb-container">
      <div className="container">
        <ol className="breadcrumb text-light">
          <li className="breadcrumb-item">
            <Link to="/" className="text-light">Home</Link> 
          </li>
          <li className="breadcrumb-item text-light" aria-current="page">
            {title}
          </li>
        </ol>
      </div>
    </section> 
    </>

  );
};

export default BreadCrum;
