import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import PopularProducts from "../components/PopularProducts";
import { services } from "../utils/Data";

import mainbanner from "../images/main-banner-1.jpg";
import catbanner01 from "../images/catbanner-01.jpg";
import catbanner02 from "../images/catbanner-02.jpg";
import catbanner03 from "../images/catbanner-03.jpg";
import catbanner04 from "../images/catbanner-04.jpg";

import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={mainbanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Supercharged for Pros</h4>
                <h5>iPad s13+ Pro</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {/* first small banner */}
              <div className="small-banner position-relative">
                <img
                  src={catbanner01}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* second small banner */}
              <div className="small-banner position-relative">
                <img
                  src={catbanner02}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $599.00 or <br />
                    $49.91 for 12 mo.
                  </p>
                </div>
              </div>

              {/* third small banner */}
              <div className="small-banner position-relative">
                <img
                  src={catbanner03}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest <br />
                    band styles and colors
                  </p>
                </div>
              </div>

              {/* fourth small banner */}
              <div className="small-banner position-relative">
                <img
                  src={catbanner04}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>Airpods Max</h5>
                  <p>
                    High-fidelity playback <br />& ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Computers & laptops</h6>
                  <p>8 Items</p>
                </div>
                <img src="/images/laptop.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart Television</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart watches</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Mobiles & Tablets</h6>
                  <p>5 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Headphones</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Portable Speakers</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>Home Applicances</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feature Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="" alt="" />
              <div className="famous-content positionb-relative">
                <h5>Big Screen</h5>
                <h6>SMart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper-1 py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="marque-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our latest news</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
