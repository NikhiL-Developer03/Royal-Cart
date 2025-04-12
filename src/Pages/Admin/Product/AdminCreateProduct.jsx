import React, { useState, useEffect, useRef } from "react";
import BreadCrum from "../../../Components/BreadCrum";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import FormValidator from "../../../Validators/FormValidator";
import ImageValidator from "../../../Validators/ImageValidator";
import { useSelector, useDispatch } from "react-redux";

import { createProduct } from "../../../Redux/ActionCreators/ProductActionCreator";
import { getMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreator";
import { getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreator";
import { getBrand } from "../../../Redux/ActionCreators/BrandActionCreator";

let rte;
const AdminCreateProduct = () => {
  let refdiv = useRef(null);
  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    basePrice: "",
    discount: 0,
    finalPrice: "",
    stock: true,
    stockQuantity: "",
    description: "",
    pic: [],
    active: true,
  });

  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field Is Mendatory",
    color: "Color Field Is Mendatory",
    size: "Size Field Is Mendatory",
    basePrice: "Base Price Field Is Mendatory",
    stockQuantity: "Stock Qunatity Is Mendatory",
    pic: "Pic Field Is Mendatory",
  });

  let [show, setShow] = useState(false);
  let navigate = useNavigate();

  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);
  let dispatch = useDispatch();

  function getInputData(e) {
    var name = e.target.name;
    var value =
      e.target.files && e.target.files.length
        ? Array.from(e.target.files).map((x) => "product/" + x.name)
        : e.target.value;
    // var value =
    //   e.target.files && e.target.files.length
    //     ? e.target.files[0]
    //     : e.target.value;

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
  function postData(e) {
    e.preventDefault();
    let bp = parseInt(data.basePrice);
    let d = parseInt(data.discount);
    let fp = parseInt(bp - (bp * d) / 100);
    let stockQuantity = parseInt(data.stockQuantity);
    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) {
      setShow(true);
    } else {
      dispatch(createProduct({
        ...data,
        basePrice: bp,
        discount: d,
        finalPrice: fp,
        stockQuantity: stockQuantity,
        maincategory: data.maincategory
          ? data.maincategory
          : MaincategoryStateData[0].name,
        subcategory: data.subcategory
          ? data.subcategory
          : SubcategoryStateData[0].name,
        brand: data.brand ? data.brand : BrandStateData[0].name,
        description: rte.getHTMLCode(),

        // maincategory: data.maincategory
        //   ? data.maincategory
        //   : MaincategoryStateData[0]._id,
        // subcategory: data.subcategory
        //   ? data.subcategory
        //   : SubcategoryStateData[0]._id,
        // brand: data.brand ? data.brand : BrandStateData[0]._id,
      })
      );

      // let formData = new FormData();
      // formData.append("name", data.name);
      // formData.append("maincategory", data.maincategory? data.maincategory : MaincategoryStateData[0].name);
      // formData.append("subcategory", data.subcategory? data.subcategory : SaincategoryStateData[0].name);
      // formData.append("brand", data.brand? data.brand : BrandStateData[0].name);
      // formData.append("color", data.color);
      // formData.append("size", data.size);
      // formData.append("basePrice", data.bp);
      // formData.append("discount", data.d);
      // formData.append("finalPrice", data.fp);
      // formData.append("stock", data.stock);
      // formData.append("stockQuantity", data.stockQuantity);
      // formData.append("description", rte.getHTMLCode());
      // formData.append("active", data.active);
      // dispatch(updateProduct(formData));


      navigate("/admin/product");
    }
  }

  useEffect(() => {
    dispatch(getMaincategory());
  }, [MaincategoryStateData.length]);

  useEffect(() => {
    dispatch(getSubcategory());
  }, [SubcategoryStateData.length]);

  useEffect(() => {
    dispatch(getBrand());
  }, [BrandStateData.length]);

  useEffect(() => {
    rte = new window.RichTextEditor(refdiv.current);
    rte.setHTMLCode("");
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
              Product
              <Link to="/admin/product">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  placeholder="Product Name"
                  className={`form-control border-3 ${show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                    }`}
                />
                {show && errorMessage.name ? (
                  <p className="text-danger">{errorMessage.name}</p>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-3 mb-3">
                  <label>Maincategory*</label>
                  <select
                    name="maincategory"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    {MaincategoryStateData &&
                      MaincategoryStateData.filter((x) => x.active).map(
                        (item) => {
                          return <option key={item.id}> {item.name}</option>;
                          {
                            /* return <option key={item._id} value={item._id}>{item.name}</option>; */
                          }
                        }
                      )}
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label>Subcategory*</label>
                  <select
                    name="subcategory"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    {SubcategoryStateData &&
                      SubcategoryStateData.filter((x) => x.active).map(
                        (item) => {
                          return <option key={item.id}> {item.name}</option>;
                          {
                            /* return <option key={item._id} value={item._id}>{item.name}</option>; */
                          }
                        }
                      )}
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label>Brand*</label>
                  <select
                    name="brand"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    {BrandStateData &&
                      BrandStateData.filter((x) => x.active).map((item) => {
                        return <option key={item.id}> {item.name}</option>;
                        {
                          /* return <option key={item._id} value={item._id}>{item.name}</option>; */
                        }
                      })}
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label>Stock*</label>
                  <select
                    name="stock"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Base Price*</label>
                  <input
                    type="number"
                    name="basePrice"
                    onChange={getInputData}
                    placeholder="Product Base Price"
                    className={`form-control border-3 ${show && errorMessage.basePrice
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.basePrice ? (
                    <p className="text-danger">{errorMessage.basePrice}</p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Discount*</label>
                  <input
                    type="number"
                    name="discount"
                    value={data.discount}
                    onChange={getInputData}
                    placeholder="Discount on Product"
                    className={`form-control border-3 ${show && errorMessage.discount
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.discount ? (
                    <p className="text-danger">{errorMessage.discount}</p>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Color*</label>
                  <input
                    type="text"
                    name="color"
                    onChange={getInputData}
                    placeholder="Product Color"
                    className={`form-control border-3 ${show && errorMessage.color
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.color ? (
                    <p className="text-danger">{errorMessage.color}</p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Size*</label>
                  <input
                    type="text"
                    name="size"
                    onChange={getInputData}
                    placeholder="Size on Product"
                    className={`form-control border-3 ${show && errorMessage.size
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.size ? (
                    <p className="text-danger">{errorMessage.size}</p>
                  ) : null}
                </div>
              </div>

              <div className="mb-3 form-control border-3 border-primary">
                <label>Description</label>
                <textarea
                  ref={refdiv}
                  name="description"
                  onChange={getInputData}
                  placeholder="Product Description"
                  rows={5}
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label>Stock Quantity*</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    onChange={getInputData}
                    placeholder="Product stockQuantity"
                    className={`form-control border-3 ${show && errorMessage.stockQuantity
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.stockQuantity ? (
                    <p className="text-danger">{errorMessage.stockQuantity}</p>
                  ) : null}
                </div>
                <div className="col-md-4 mb-3">
                  <label>Pic*</label>
                  <input
                    type="file"
                    name="pic"
                    multiple
                    onChange={getInputData}
                    className={`form-control border-3 ${show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                      }`}
                  />
                  {show && errorMessage.pic ? (
                    <p className="text-danger">{errorMessage.pic}</p>
                  ) : null}
                </div>
                <div className="col-md-4 mb-3">
                  <label>Active*</label>
                  <select
                    name="active"
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
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateProduct;
