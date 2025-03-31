import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="list-group">
      <Link
        to="/admin"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-home fs-2"></i>{" "}
        <span className="float-end">Home</span>
      </Link>
      <Link
        to="/admin/maincategory"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-list fs-2"></i>{" "}
        <span className="float-end">Maincategory</span>
      </Link>
      <Link
        to="/admin/subcategory"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-list fs-2"></i>{" "}
        <span className="float-end">Subcategory</span>
      </Link>
      <Link
        to="/admin/brand"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-list fs-2"></i>{" "}
        <span className="float-end">Brand</span>
      </Link>
      <Link
        to="/admin/products"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-list fs-2"></i>{" "}
        <span className="float-end">Products</span>
      </Link>
      <Link
        to="/admin/testimonial"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-star fs-2"></i>{" "}
        <span className="float-end">Testimonial</span>
      </Link>
      <Link
        to="/admin/user"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-users fs-2"></i>{" "}
        <span className="float-end">User</span>
      </Link>
      <Link
        to="/admin/newsletter"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-envelope fs-2"></i>{" "}
        <span className="float-end">Newsletter</span>
      </Link>
      <Link
        to="/admin/contactus"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-phone fs-2"></i>{" "}
        <span className="float-end">ContactUs</span>
      </Link>
      <Link 
        to="/admin/checkouts"
        class="list-group-item list-group-item-action active mb-1"
        aria-current="true"
      >
        <i className="fa fa-shopping fs-2"></i>{" "}
        <span className="float-end">Checkouts</span>
      </Link>
    </div>
  );
};

export default Sidebar;
