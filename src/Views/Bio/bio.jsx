import React from "react";
import "./bio.css";
import biodp from "../../asset/img/bio-dp.svg";
import Button from "../../component/Button/button";

const Bio = () => {
  return (
    <section className="bio">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 offset-md-2">
            <div className="bio-name">
              <img src={biodp} alt="" />
              <h1>Esther Howard</h1>
              <div className="bio-btn">
                <Button
                  type="button"
                  text="Send Message"
                  btnstyle={{ borderRadius: "50px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="bio-details">
              <h1>BIO</h1>
              <p className="bio-details-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                magna arcu, non odio rhoncus ut vulputate gravida vitae. Viverra
                orci adipiscing egestas orci, quam maecenas sagittis nunc. Eget
                sem quam scelerisque accumsan duis amet et. At bibendum sapien,
                eget nisl.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <h2> Email</h2>
                    <p>estherhoward@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h2>Age</h2>
                    <p>20</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div>
                    <h2>Gender</h2>
                    <p>Female</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h2>City</h2>
                    <p>Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
