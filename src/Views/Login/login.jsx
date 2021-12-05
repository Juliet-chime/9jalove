import React from "react";
import "./login.css";
import Navbar from "../../component/Navbar/navbar";
import LoginSideBar from "../../component/LoginSidebar/loginsidebar";
import InputField from "../../component/InputField/input";
import Button from "../../component/Button/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <LoginSideBar />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="account-form-holder">
              <div className="row">
                <h1>Log In</h1>
                <p>
                  Join the dating site where you could meet anyone, anywhere!
                </p>
              </div>
              <form>
                <label htmlFor="">Email Address</label>
                <div className="mb-2">
                  <InputField
                    placeholder="AlexanderJhon@gmail.com"
                    customStyles={{
                      border: "1px solid rgba(196, 53, 57, 0.5)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </div>

                <label htmlFor="">Password</label>
                <div className="mb-2">
                  <InputField
                    placeholder="Enter Password"
                    customStyles={{
                      border: "1px solid rgba(196, 53, 57, 0.5)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <div className="account-btn">
                  <Link to="/">
                    <Button
                      text="Register"
                      btnstyle={{
                        borderRadius: "100px",
                        marginTop: "15px",
                        fontFamily: " 'Rubik', sans-serif",
                      }}
                    />
                  </Link>
                </div>
              </form>
              <p className="loginaccount">
                New Here?
                <Link to="/account">
                  <span className="loginaccount-account"> Create account</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
