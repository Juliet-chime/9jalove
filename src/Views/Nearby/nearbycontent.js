import React from "react";
import InputField from "../../component/InputField/input";
import search from "../../asset/img/search.svg";
import esther from "../../asset/img/esther.svg";
import Button from "../../component/Button/button";

const NearByContent = () => {
  return (
    <div>
      <div>
        <div className="row nearby-row">
          <div className="col-md-8 c0l-sm-12">
            <h1 className="nearbyh1">Who’s Nearby ?</h1>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="nearinput">
              <InputField
                customStyles={{
                  borderRadius: "8px",
                  background: "#F2F2F2",
                }}
              />
              <p className="nearinputtext">
                <img src={search} alt=""></img>
                &nbsp; Search by name or username
              </p>
            </div>
          </div>
        </div>

        <div className="row select-row">
          <div className="col-md-1">
            <div>
              <select name="cars" id="cars">
                <option value="">Distance</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <select name="cars" id="cars" style={{ marginLeft: "5px" }}>
                <option value="">Height</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <select name="cars" id="cars">
                <option value="">Weight</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <select name="cars" id="cars">
                <option value="">More Filters</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-2 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <div className="nearbypeopleholder">
              <img src={esther} alt="" srcset="" />
              <div className="nearbypeople-holder-text">
                <h3>Esther Howard</h3>
                <p>20Years</p>
                <div className="btn-msg">
                  <div className="btn-viewprofile">
                    <Button
                      text="View Profile"
                      btnstyle={{
                        borderRadius: "77.9487px",
                        background: "transparent",
                        border: "0.974359px solid #C43539",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </div>
                  <div className="msg-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearByContent;
