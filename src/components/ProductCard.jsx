import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link >
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <div>
              <img
                className="img-fluid"
                src="images/watch.jpg"
                alt="product image"
              />
              {/* <img src="images/watch-1.avif" alt="product image" /> */}
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-tittle">
              Kids headphones bulk 10 pack multi colored for stduents
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid >= 6 ? "d-block": "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
              quos iusto a officia consequatur similique beatae sint facere
              voluptate, at odio asperiores eum! Ea eveniet totam nam reiciendis
              porro?
            </p>
            <p className="price">$100.00</p>
            
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <div>
              <img
                className="img-fluid"
                src="images/watch.jpg"
                alt="product image"
              />
              {/* <img src="images/watch-1.avif" alt="product image" /> */}
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-tittle">
              Kids headphones bulk 10 pack multi colored for stduents
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid >= 6 ? "d-block": "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
              quos iusto a officia consequatur similique beatae sint facere
              voluptate, at odio asperiores eum! Ea eveniet totam nam reiciendis
              porro?
            </p>
            <p className="price">$100.00</p>
            
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
