import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <Breadcrumb title={"Our Store"} />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="ps-0">
                <ul>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>

              <div>
                <h5 className="filter-title">Availability</h5>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value=""
                    id=""
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="">
                    In Stock (1)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    value=""
                    className="form-check-input"
                    id=""
                  />
                  <label htmlFor="" className="form-check-label">
                    Out of Stock
                  </label>
                </div>

                <h3 className="filter-title">Price</h3>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="from"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="to"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h3 className="filter-title">Colors</h3>
                <div>
                  <div>
                    <Colors />
                  </div>
                </div>
                <h3 className="filter-title">Size</h3>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value=""
                    id="color-1"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value=""
                    id="color-2"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M (2)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pacl multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>

                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 sortby">Sort by:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">
                      Best Selling
                    </option>
                    <option value="best-selling" selected="selected">
                      Alphabetically, A-Z
                    </option>
                    <option value="best-selling" selected="selected">
                      Alphabetically, Z-A
                    </option>
                    <option value="best-selling" selected="selected">
                      Price, low to high
                    </option>
                    <option value="best-selling" selected="selected">
                      Price, high to low
                    </option>
                    <option value="best-selling" selected="selected">
                      Date, old to new
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pt-4 d-flex flex-wrap gap-10">
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
