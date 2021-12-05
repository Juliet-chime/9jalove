import React from "react";
import "./profile.css";
import search from "../../asset/img/search.svg";
import InputField from "../../component/InputField/input";
import SideBar from "../../component/SideBar/sidebar";
import profilepicture from "../../asset/img/profilepicture.svg";
import Button from "../../component/Button/button";

const Profile = () => {
  return (
    <div>
      <SideBar>
        <div>
          <div className="row nearby-row">
            <div className="col-md-8 col-sm-12">
              <h1 className="nearbyh1">Who’s Nearby ?</h1>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="nearinput">
                <InputField
                  customStyles={{
                    borderRadius: "8px",
                    background: "F2F2F2",
                  }}
                />
                <p className="nearinputtext">
                  <img src={search} alt=""></img>
                  &nbsp; Search by name or username
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="profiledisplayholder">
                <div>
                  <h2>Profile Picture</h2>
                  <img src={profilepicture} alt="" />
                </div>
                <div className="changepic">
                  <label htmlFor="upload-button">Change Picture</label>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="profile-form-holder">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div>
                  <label htmlFor="Full Name">Full Name</label>
                  <div className="profile-input-holder">
                    <InputField
                      type="text"
                      placeholder="Ralph Edwards"
                      customStyles={{
                        border: "1px solid #F1F1F1",
                        borderRadius: "8px",
                        fontSize: "12px",
                        background: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div>
                  <label htmlFor="Email Address">Email Address</label>
                  <div className="profile-input-holder">
                    <InputField
                      type="text"
                      placeholder="ralph@gmail.com"
                      customStyles={{
                        border: "1px solid #F1F1F1",
                        borderRadius: "8px",
                        fontSize: "12px",
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div>
                  <label htmlFor="Full Name">Password</label>
                  <div className="profile-input-holder">
                    <InputField
                      type="text"
                      placeholder="************"
                      customStyles={{
                        border: "1px solid #F1F1F1",
                        borderRadius: "8px",
                        fontSize: "12px",
                        background: "transparent",
                      }}
                    />
                    <i className="fa fa-eye-slash"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div>
                  <label htmlFor="Email Address">Gender</label>
                  <div className="profile-input-holder">
                    <InputField
                      type="text"
                      placeholder="Male"
                      customStyles={{
                        border: "1px solid #F1F1F1",
                        borderRadius: "8px",
                        fontSize: "12px",
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-12">
              <div>
                <h2>Bio</h2>
                <br />
                <div>
                  <textarea id="bio" name="bio" rows="4" cols="20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam at aliquet placerat sociis accumsan leo eget donec.
                    Commodo convallis non adipiscing odio vel massa sagittis
                    lacus. Risus, cras malesuada mi a augue potenti ut purus. In
                    mi in at viverra tortor mauris sociis risus.
                  </textarea>
                </div>
              </div>
              <div className="profile-button">
                <Button
                  text="Update Profile"
                  btnstyle={{ margin: "20px 0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Profile;
