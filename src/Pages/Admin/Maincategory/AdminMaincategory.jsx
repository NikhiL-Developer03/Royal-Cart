import React, { useEffect, useRef, useState } from "react";

import BreadCrum from "../../../Components/BreadCrum";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const AdminMaincategory = () => {
  // let table = new DataTable("#myTable");
  let tableRef = useRef();

  let [MaincategoryStateData, setMaincategoryStateData] = useState([]);

  async function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      let response = await fetch(
        process.env.REACT_APP_BACKEND_SERVER + "maincategory/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      getAPIData();
    }
  }

  async function getAPIData() {
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
    setMaincategoryStateData(response);

    var time = setTimeout(() => {
      $("#myTable").DataTable();
    }, 300);
    return time;
  }
  useEffect(() => {
    let time = getAPIData();
    return () => clearTimeout(time)
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
              <table
                id="myTable"
                className="table table-bordered table-striped table-hover"
              >
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
                        <td>{item.active ? "Yes" : "No"}</td>
                        <td>
                          <Link
                            to={`/admin/maincategory/update/${item.id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-edit"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn  btn-danger"
                            onClick={() => deleteRecord(item.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
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
