import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title={"Product Name"} />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-content-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-header py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>

                <div className="w-75">
                  <p className="title">Title of product</p>
                  <p className="size">size:</p>
                  <p className="color">Color:</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price ">$100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15 fs-4">
                <div>
                  <input
                    type="number"
                    className="form-control"
                    min={1}
                    max={10}
                    name=""
                    id=""
                  />
                </div>
                <AiFillDelete className="text-danger" />
              </div>
              <div className="cart-col-4">
                <h5 className="price">$100</h5>
              </div>
            </div>

            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column justify-content-end">
                  <h4>Subtotal: 100</h4>
                  <p> Taxes and shipping calculator at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Cart;
