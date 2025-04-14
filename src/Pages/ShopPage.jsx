import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrum'
import { getProduct } from "../Redux/ActionCreators/ProductActionCreator"
import { getMaincategory } from "../Redux/ActionCreators/MaincategoryActionCreator"
import { getSubcategory } from "../Redux/ActionCreators/SubcategoryActionCreator"
import { getBrand } from "../Redux/ActionCreators/BrandActionCreator"

import { useDispatch, useSelector } from "react-redux";

const ShopPage = () => {

  let [data, setData] = useState([])
  let [mc, setMc] = useState("")
  let [sc, setSc] = useState("")
  let [br, setBr] = useState("")

  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)

  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)

  let ProductStateData = useSelector((state) => state.ProductStateData)

  let BrandStateData = useSelector((state) => state.BrandStateData)

  let dispatch = useDispatch();
  let [searchParams] = useSearchParams()
  useEffect(() => {
    dispatch(getProduct())
  }, [ProductStateData.length])

  useEffect(() => { dispatch(getMaincategory()) }, [MaincategoryStateData.length])

  useEffect(() => { dispatch(getSubcategory()) }, [SubcategoryStateData.length])

  useEffect(() => { dispatch(getBrand()) }, [BrandStateData.length])

  function filterProducts(mc, sc, br) {
    setData(ProductStateData.filter(x => x.active && (mc === "All" || mc === x.maincategory) && (sc === "All" || sc === x.subcategory) && (br === "All" || br === x.brand)))
  }

  useEffect(() => {
    let mc = searchParams.get('mc') ?? "All"
    let sc = searchParams.get('sc') ?? "All"
    let br = searchParams.get('br') ?? "All"
    dispatch(getProduct())

    if (ProductStateData.length) {
      setMc(mc);
      setSc(sc);
      setBr(br);
      filterProducts(mc, sc, br)
    }
  }, [searchParams, ProductStateData.length])
  return (
    <>
      <BreadCrum title="Shop" />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2">
            <div class="list-group mb-3">
              <p className="list-group-item list-group-item-action active">
                Maincategory
              </p>
              <Link to={`/shop?mc=All&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {
                MaincategoryStateData.filter(x => x.active).map(item => {
                  return <Link to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`}
                    key={item.id}
                    className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>
            <div class="list-group mb-3">
              <p className="list-group-item list-group-item-action active">
                Subcategory
              </p>
              <Link to={`/shop?mc=${mc}&sc=All&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {
                SubcategoryStateData.filter(x => x.active).map(item => {
                  return <Link to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`}
                    key={item.id}
                    className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>
            <div class="list-group mb-3">
              <p className="list-group-item list-group-item-action active">
                Brand
              </p>
              <Link to={`/shop?mc=${mc}&sc=${sc}&br=All`} className="list-group-item list-group-item-action">All</Link>
              {
                BrandStateData.filter(x => x.active).map(item => {
                  return <Link to={`/shop?mc=${mc}&sc=${sc}&br=${item.name}`}
                    key={item.id}
                    className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>
          </div>
          <div className="col-md-10">
            <section id="team" className="team section">
              <div className="row">
                {
                  data.map(item => {
                    return <div key={item.id} className='col-lg-3 col-md-4 col-sm-6'>
                      <div
                        className="d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="team-member">
                          <div className="member-img">
                            <img
                              src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic[0]}`}
                              style={{ height: 300 }}
                              className="w-100"
                              alt=""
                            />

                          </div>

                          <div className="member-info">
                            <h4 style={{ height: 50 }}>{item.name}</h4>
                            <span>{item.stock ? `${item.stockQuantity} Left In Stock` : "Out Of Stock"}</span>
                            <p>
                              <del>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice}
                              <sup>{item.discount}% Off</sup>
                            </p>
                            <div className="">
                              <Link to={`/product/${item.id}`} className="btn btn-primary text-light w-100"><i className="fa fa-shopping-cart"></i> Add to Cart</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage