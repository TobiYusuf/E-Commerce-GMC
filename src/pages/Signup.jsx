import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <Breadcrumb title={"Signup"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to={"/login"}>Back to Login</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
