import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title={"Login"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
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
                    <Link to={"/forgot-password"}>Forgot Your Password?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Login</button>
                      <Link to={"/signup"} className="button signup">
                        Signup
                      </Link>
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

export default Login;
