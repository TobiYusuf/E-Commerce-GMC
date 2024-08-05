import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <Breadcrumb title={"Forgot Password"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mb-3 mt-2">
                  We will send you an email to reset your password
                </p>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Submit</button>
                      <Link to={"/login"}>Already have an account?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mb-3 mt-2">
                We will send you an email to reset your password
              </p>
              <form className="d-flex flex-column gap-15" action="">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Submit</button>
                    <Link to={"/login"}>Already have an account?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
