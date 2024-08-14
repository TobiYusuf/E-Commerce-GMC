import React from "react";
import { Link } from "react-router-dom";
import blogimg from "../images/blog-1.jpg"


const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src={blogimg} className="img-fluid w-100" alt="" />
        </div>
        <div className="blog-content p-4">
          <p className="date"> 11 June, 2024</p>
          <h5 className="title">A Beautiful Sunday Monday Renaissance</h5>
          <p className="desc">
            You're Only As Good As Your Ladt Collection which is an enormous
            pressure. I think there is something
          </p>
          <Link to={"/blog/:id"} className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
