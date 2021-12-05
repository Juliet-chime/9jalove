import React from "react";
import "./pricing.css";
import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";
import markgood from "../../asset/img/mark-good.svg";
import markbad from "../../asset/img/mark-x.svg";
import Button from "../../component/Button/button";
import markgoodwhite from "../../asset/img/markgood-bgwhite.svg";

const Pricing = () => {
  return (
    <div>
      <Navbar />

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="price-row">
              <h1>Our Pricing and Plans</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                faucibus dolor enim in cras quis scelerisque
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "80px" }}>
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col mb-4">
              <div className="basic-month-holder">
                <div className="basic-month">
                  <div className="basic">
                    <h4>Basic</h4>
                    <p>Most Popular</p>
                  </div>
                  <div className="month">
                    <h4>#50,000</h4>
                    <p>Per month</p>
                  </div>
                </div>

                <div className="basic-text-holder">
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras quis scelerisque</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                </div>

                <div className="basic-text-btn">
                  <Button
                    type="button"
                    text="Get started"
                    btnstyle={{
                      borderRadius: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="basic-month-holder basic-month-holder-2">
                <div className="basic-month basicmonth-2">
                  <div className="basic">
                    <h4 style={{ color: "white" }}>Premium</h4>
                    <p style={{ color: "white" }}>Recommended</p>
                  </div>
                  <div className="month month2">
                    <h4 style={{ color: "white" }}>#70,000</h4>
                    <p style={{ color: "white" }}>Per month</p>
                  </div>
                </div>

                <div className="basic-text-holder">
                  <div className="basic-text">
                    <img src={markgoodwhite} alt="" />
                    <p style={{ color: "white" }}>
                      Menim in cras quis scelerisque
                    </p>
                  </div>
                  <div className="basic-text">
                    <img src={markgoodwhite} alt="" />
                    <p style={{ color: "white" }}>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgoodwhite} alt="" />
                    <p style={{ color: "white" }}>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgoodwhite} alt="" />
                    <p style={{ color: "white" }}>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p style={{ color: "white" }}>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p style={{ color: "white" }}>Menim in cras qui</p>
                  </div>
                </div>

                <div className="basic-text-btn">
                  <Button
                    type="button"
                    text="Get started"
                    btnstyle={{
                      borderRadius: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="basic-month-holder">
                <div className="basic-month">
                  <div className="basic">
                    <h4>Basic</h4>
                    <p>Most Popular</p>
                  </div>
                  <div className="month">
                    <h4>#50,000</h4>
                    <p>Per month</p>
                  </div>
                </div>

                <div className="basic-text-holder">
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras quis scelerisque</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markgood} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                  <div className="basic-text">
                    <img src={markbad} alt="" />
                    <p>Menim in cras qui</p>
                  </div>
                </div>

                <div className="basic-text-btn">
                  <Button
                    type="button"
                    text="Get started"
                    btnstyle={{
                      borderRadius: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
