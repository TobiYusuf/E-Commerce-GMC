import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <Breadcrumb title={"Reset Password"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Reset</button>
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

export default Resetpassword;
