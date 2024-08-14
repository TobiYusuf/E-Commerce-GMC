import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title={"Product Name"} />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    kids headpohone bulk 10 pack multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price m-0">$100</p>
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="t-review mb-0">(2 reviews)</p>
                    </div>
                    <a className="review-btn" href="#review">
                      Write a review
                    </a>
                  </div>
                </div>
                <div className="py-2">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading ">Type :</h3>
                    <p className="product-data ">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading ">Brand :</h3>
                    <p className="product-data ">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data ">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tag :</h3>
                    <p className="product-data ">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data ">In Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-10">
                      <span className="badge border-1 text-dark bg-white border border-secondary">
                        S
                      </span>
                      <span className="badge border-1 text-dark bg-white border border-secondary">
                        M
                      </span>
                      <span className="badge border-1 text-dark bg-white border border-secondary">
                        XL
                      </span>
                      <span className="badge border-1 text-dark bg-white border border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <div></div>
                    <Colors className="fs-5" />
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add To Compare
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-2">
                    <h3 className="product-heading ">Shipping & Returns :</h3>
                    <p className="product-data ">
                      Free shipping & returns available on all orders ! <br />
                      We ship all domestic orders within{" "}
                      <b> 5 - 10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10  my-2">
                    <h3 className="product-heading ">Product link:</h3>
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        copyToClipboard(
                          "https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Description</h3>
              <p className="bg-white p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum accusantium itaque, magnam dicta animi sapiente aperiam
                fuga nobis pariatur sint enim facilis repellendus quisquam earum
                magni in consequatur? Voluptate, fuga?
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wraapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 id="review" className="mb-2">
                      Customer Reviews
                    </h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={10}
                        cols={30}
                        name=""
                        className="w-100 form-control"
                        id=""
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reiciendis perferendis unde, esse corporis omnis numquam
                      fugiat id laborum ipsam dolorem. Fugiat incidunt officiis
                      quidem a laborum quaerat dicta voluptas sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
