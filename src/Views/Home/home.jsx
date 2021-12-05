import React from "react";
import "./home.css";
import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";
import Button from "../../component/Button/button";
import couple from "../../asset/img/couples.svg";
import squareicon from "../../asset/img/squareicon.svg";
import blockicon from "../../asset/img/blockicon.svg";
import peopleicon from "../../asset/img/peopleicon.svg";
import offericon from "../../asset/img/whatweoffericon.svg";
import groupost from "../../asset/img/Group-ost.svg";
import group136 from "../../asset/img/Group-136.svg";
import line from "../../asset/img/Line.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-5">
              <div>
                <h4>Simple and quick way to find Love</h4>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt{" "}
                </p>
                <div className="banner-btn">
                  <Link to="/">
                    <Button text="Join for free" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="couple">
                <img src={couple} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-offer">
        <div className="container">
          <div className="row">
            <div className="offer-intro">
              <h2>
                What we offer at{" "}
                <span style={{ color: "#C43539" }}>9jafindlove </span>
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <div className="col-sm-12 col-md-4">
              <div className="offers">
                <div className="offers-icons1">
                  <img src={offericon} alt="" srcset="" />
                </div>
                <div>
                  <h3>Communication</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="offers">
                <div className="offers-icons1 offericons-lightgreen">
                  <img src={offericon} alt="" srcset="" />
                </div>
                <div>
                  <h3>Communication</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="offers">
                <div className="offers-icons1 offericons-red">
                  <img src={offericon} alt="" srcset="" />
                </div>
                <div>
                  <h3>Communication</h3>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specialpackage">
        <div className="container-fluid">
          <div className="row">
            <div className="sp-top-smallcircle"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="specialpackage-imgholder">
                <div className="specialpackage-ost">
                  <img src={groupost} alt="" className="img-fluid sp-ostimg" />
                </div>

                <div className="specialpackage-bigcircle"></div>

                <div className="specialpackage-smallcircle"></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div>
                <h1>
                  9jafindloves{" "}
                  <span style={{ color: "#2F327D" }}>Special Services</span>
                </h1>
                <div className="sp-icon-text-holder">
                  <div className="sp-icon">
                    <img src={squareicon} alt="" className="img-fluid" />
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>

                <div className="sp-icon-text-holder">
                  <div className="sp-icon">
                    <img src={blockicon} alt="" />
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>

                <div className="sp-icon-text-holder">
                  <div className="sp-icon">
                    <img src={peopleicon} alt="" />
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-holder">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 align-self-center">
              <div>
                <p className="testimony">
                  {" "}
                  <img src={line} alt="" /> &nbsp; TESTIMONIAL
                </p>

                <h2>What They Say?</h2>
                <p className="testimony-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt
                </p>
              </div>
            </div>

            <div className=" col-sm-12 col-md-6 offset-md-2">
              <div className="group136">
                <img src={group136} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
