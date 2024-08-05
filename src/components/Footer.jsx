import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white ">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-6"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 23 Victoria Island, <br /> Lagos <br />
                  PinCode: 123456
                </address>
                <a
                  href="tel:234 7080576222"
                  className="text-white d-block mb-2 mt-3"
                >
                  +234 7080576222
                </a>
                <a
                  href="mailto:exampleemail@gmail.com"
                  className="text-white d-block mb-3 mt-2"
                >
                  exampleemail@gmail.com
                </a>
                <div className="social-icons mt-2 d-flex align-items-center gap-30">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-3" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-3" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-3" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white py-2 mb-1"
                >
                  Terms Of Conditions
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Develop
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
