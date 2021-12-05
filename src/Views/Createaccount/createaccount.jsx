import React from "react";
import "./createaccount.css";
import Navbar from "../../component/Navbar/navbar";
import LoginSideBar from "../../component/LoginSidebar/loginsidebar";
import InputField from "../../component/InputField/input";
import Button from "../../component/Button/button";
import { Link } from "react-router-dom";

const CreateAccount = () => {
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
                <h1>Create Account</h1>
                <p>
                  Join the dating site where you could meet anyone, anywhere!
                </p>
              </div>
              <form>
                <label htmlFor="">Fullname</label>
                <div className="mb-2">
                  <InputField
                    placeholder="Alexander Jhon"
                    customStyles={{
                      border: "1px solid rgba(196, 53, 57, 0.5)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <label htmlFor="">Enter Address</label>
                <div className="mb-2">
                  <InputField
                    placeholder="Enter Email Address"
                    customStyles={{
                      border: "1px solid rgba(196, 53, 57, 0.5)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <label htmlFor="">Date of Birth</label>
                <div className="mb-2 dateinput">
                  <InputField
                    type="date"
                    placeholder="Select date of birth"
                    customStyles={{
                      border: "1px solid rgba(196, 53, 57, 0.5)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <i class="fa fa-chevron-down"></i>
                </div>

                <label htmlFor="">Gender</label>

                <div className="radioinput-holder">
                  <div>
                    <label for="gender">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="maleradio"
                      />
                    </label>
                  </div>

                  <div>
                    <label for="gender">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="femaleradio"
                      />
                    </label>
                  </div>
                </div>

                <label htmlFor="">Create Password</label>
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
                  <Button
                    text="Register"
                    btnstyle={{
                      borderRadius: "100px",
                      marginTop: "15px",
                      fontFamily: " 'Rubik', sans-serif",
                    }}
                  />
                </div>
              </form>
              <p className="existingaccount">
                Already have an account?
                <Link to="/login">
                  <span className="existingaccountlogin"> Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
