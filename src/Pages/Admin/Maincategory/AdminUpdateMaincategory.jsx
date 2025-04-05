import React, { useEffect, useState } from "react";
import BreadCrum from "../../../Components/BreadCrum";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormValidator from "../../../Validators/FormValidator";
import ImageValidator from "../../../Validators/ImageValidator";


const AdminUpdateMaincategory = () => {
  let { id } = useParams();

  let [MaincategoryStateData, setMaincategoryStateData] = useState([]);

  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });

  let [errorMessage, setErrorMessage] = useState({
    name: "",
    pic: "",
  });

  let [show, setShow] = useState(false);
  let navigate = useNavigate();

  function getInputData(e) {
    var name = e.target.name;
    var value =
      e.target.files && e.target.files.length
        ? "maincategory/" + e.target.files[0].name
        : e.target.value;

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? ImageValidator(e) : FormValidator(e),
      };
    });

    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  }
  async function postData(e) {
    e.preventDefault();
    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) {
      setShow(true);
    } else {
      let item = MaincategoryStateData.find(
        (x) => x.id!==id && x.name.toLowerCase() === data.name.toLowerCase()
      );
      if (item) {
        setShow(true);
        setErrorMessage((old) => {
          return {
            ...old,
            name: "Maincategory With Same Name Already Exist",
          };
        });
        return;
      }
      let response = await fetch(
        process.env.REACT_APP_BACKEND_SERVER + "maincategory/"+data.id,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...data
          }),
        }
      );
      response = await response.json();
      navigate("/admin/maincategory");
    }
  }
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
      setMaincategoryStateData(response);
      let item = response.find((x) => x.id === id);
      if (item) setData({ ...item });
    })();
  }, []);
  return (
    <>
      <BreadCrum title=" Admin" />
      <div className="conatiner-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center">
              Maincategory
              <Link to="/admin/maincategory">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={getInputData}
                  placeholder="Maincategory Name"
                  className={`form-control border-3 ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  }`}
                />
                {show && errorMessage.name ? (
                  <p className="text-capitalize text-danger">{errorMessage.name}</p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Pic</label>
                  <input
                    type="file"
                    name="pic"
                    onChange={getInputData}
                    className={`form-control border-3 ${
                      show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.pic ? (
                    <p className="text-capitalize text-danger">{errorMessage.pic}</p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select
                    name="active"
                    value={data.active ? "1" : "0"}
                    onChange={getInputData}
                    className="form-select"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateMaincategory;
