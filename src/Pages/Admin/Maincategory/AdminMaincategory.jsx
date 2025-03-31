import React from "react";
import BreadCrum from "../../../Components/BreadCrum";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Profile from "../../../Components/Profile";
const AdminMaincategory = () => {
  return (
    <>
      <BreadCrum title="Admin" />
      <div className="conatiner-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center">
              Maincategory
              <Link to="/admin/maincategory/create">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMaincategory;
