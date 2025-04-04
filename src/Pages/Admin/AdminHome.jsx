import React from "react";
import BreadCrum from "../../Components/BreadCrum";
import Sidebar from "./Sidebar";
import Profile from "../../Components/Profile";
const AdminHome = () => {
  return (
    <>
      <BreadCrum title="Admin" />
      <div className="conatiner-fluid my-3 ">
        <div className="row adminHome">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <Profile title="Admin Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
