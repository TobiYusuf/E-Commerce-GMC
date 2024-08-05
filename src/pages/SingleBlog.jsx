import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <Breadcrumb title={"Dynamic Blog Name"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/blogs">
                  <HiOutlineArrowLeft className="fs-5"/>
                  Go back to Blogs
                </Link>

                <h3 className="title">
                  A beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  necessitatibus similique animi officiis perferendis ducimus,
                  voluptas quisquam repellat sequi laudantium recusandae,
                  tempora ipsa vero unde id quod in illo incidunt? Amet aut eos
                  a similique consequatur, maiores, reprehenderit deleniti optio
                  tempore qui quidem ipsam fuga dolore! Ipsum quaerat quia
                  laudantium totam minima unde magni voluptas, dolorem adipisci
                  non ullam iure! Laudantium veniam vero alias id officia
                  incidunt eius harum asperiores autem nulla nemo ab officiis
                  sunt fuga, molestias enim exercitationem, delectus obcaecati
                  natus deleniti. Quae totam temporibus iure dicta repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
