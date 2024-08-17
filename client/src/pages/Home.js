// src/pages/Home.js
import React from "react";
import { ReelParthner } from "../components/ReelParthner";
const Home = () => {
  return (
    <>
      <div className="Home-banner">
        <img
          src="/images/home-banner.png"
          alt="Home Banner"
          className="banner-img"
        />
        <div className="container">
          <h1>
            Let’s design your
            <p>
              Dream home with <span>Fixkart interio.</span>
            </p>
          </h1>
          <button className="btn btn-primary">Get Free Estimate</button>
        </div>
      </div>

      <div className="reelsection py-3">
        <ReelParthner />
      </div>

      <section className="about-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5 heading-main">
              <span className="badge rounded-pill text-bg-warning">
                About Us
              </span>
              <h2>We Are Perfect Team For Home Interior Decoration</h2>
              <h3>
              We create experiences and build products that make business grow
              </h3>
              <p>
                 Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
              </p>

              <ul className="ulservices">
                <li>
                  <div className="uiInnner">
                    <strong>
                      <img src="images/Star.svg" alt="Business Services"/>
                      100+
                    </strong>
                    <span>Interior Services</span>
                  </div>
                </li>
                <li>
                  <div className="uiInnner">
                    <strong>
                      <img src="images/happy.svg" alt="Happy Customer"/>
                      800+
                    </strong>
                    <span>Happy Customer</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <img src="images/aboutus.png" alt="about image"/>
            </div>
          </div>
        </div>
      </section>

      <section className="designIdeasSection">
           <div className="container">
              <div className="heading-main mb-5">
                    <span className="badge rounded-pill text-bg-warning">
                    Design Ideas
                    </span>
                    <h2 className="d-flex align-items-end">Inspiration for home <br/>interior designs
                    
                    <button className="btn btn-primary ms-auto">More Designs</button>
                    </h2>                    
              </div>

              <ul className="d-flex justify-content-between">
                  <li>
                      <a href="#" className="w-25">
                         <img src="images/kids-room.png" alt="kids room image" className="img-fluid"/>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="w-25">
                         <img src="images/kids-room.png" alt="kids room image" className="img-fluid"/>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="w-25">
                         <img src="images/living-room.png" alt="living-room" className="img-fluid"/>
                      </a>
                  </li>
              </ul>
           </div>
      </section>


    </>
  );
};

export default Home;
