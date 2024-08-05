import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6 text-end">
              <p className="text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+2347080576281">
                  +2347080576281
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  Dev Corner
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product here"
                  aria-label="Search Product here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-product"
                  >
                    <img
                      src="/images/compare.svg"
                      alt="compare"
                      className="img-fluid"
                    />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlist"
                  >
                    <img
                      src="/images/wishlist.svg"
                      alt="wishlist"
                      className="img-fluid"
                    />
                    <p className="mb-0">
                      Favourite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/login"
                  >
                    <img
                      src="/images/user.svg"
                      alt="user"
                      className="img-fluid"
                    />
                    <p className="mb-0">
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/cart"
                  >
                    <img
                      src="/images/cart.svg"
                      alt="cart"
                      className="img-fluid"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-bottom p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span>Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
