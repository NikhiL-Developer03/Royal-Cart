import React, { useEffect, useState } from "react";
import BreadCrum from "../../../Components/BreadCrum";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
const AdminMaincategory = () => {
  let [MaincategoryStateData, setMaincategoryStateData] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch(
        process.env.REACT_APP_BACKEND_SERVER + "maincategory",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      // console.log(response);
      setMaincategoryStateData(response);
    })();
  }, []);
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
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Active</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {MaincategoryStateData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <Link
                            to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`}
                            target="_blank"
                          >
                            <img
                              src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`}
                              alt=""
                              height={80}
                              width={80}
                            />
                          </Link>
                        </td>
                        <td>{item.active}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMaincategory;
