import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import Colors from "../components/Colors";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <Breadcrumb title={"Compare Products"} />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross"
                />
                <div>
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">
                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price mb-3">$100</h6>
                    <div>
                        <div className="product-detail">
                            <h5>Brand:</h5>
                            <p>havels</p>
                        </div>
                        <div className="product-detail">
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className="product-detail">
                            <h5>Availaibility:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className="product-detail">
                            <h5>Color:</h5>
                            <Colors/>
                        </div>
                        <div className="product-detail">
                            <h5>Size:</h5>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross"
                />
                <div>
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">
                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price mb-3">$100</h6>
                    <div>
                        <div className="product-detail">
                            <h5>Brand:</h5>
                            <p>havels</p>
                        </div>
                        <div className="product-detail">
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className="product-detail">
                            <h5>Availaibility:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className="product-detail">
                            <h5>Color:</h5>
                            <Colors/>
                        </div>
                        <div className="product-detail">
                            <h5>Size:</h5>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
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

export default CompareProducts;
