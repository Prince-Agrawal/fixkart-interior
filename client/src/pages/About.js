// src/pages/Home.js
import React from "react";
import CompanyNumbers from "../components/CompanyNumber";
import { ContactForm } from "../components/ContactForm";
import BookNow from "../components/BookNow";
const About = () => {
  return (
    <>
      <section className="banner-section ">
        <img
          src="/images/about-banner.jpg"
          className="banner-img"
          alt="Banner Image"
        />
        <div className="container">
          <div className="banner-contant">
            <h1>About Fixkart Interio</h1>
            <p class="mb-0">
              Welcome to our Design Gallery Interior, a space where innovation
              and aesthetics converge to create an immersive experience for
              design enthusiasts and connoisseurs alike. Step inside and be
              transported into a realm where every corner tells a unique story,
              and each display is a masterpiece in its own right.
            </p>
          </div>
        </div>
      </section>
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
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>

              <ul className="ulservices">
                <li>
                  <div className="uiInnner">
                    <strong>
                      <img src="images/Star.svg" alt="Business Services" />
                      100+
                    </strong>
                    <span>Interior Services</span>
                  </div>
                </li>
                <li>
                  <div className="uiInnner">
                    <strong>
                      <img src="images/happy.svg" alt="Happy Customer" />
                      800+
                    </strong>
                    <span>Happy Customer</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <img src="images/aboutus.png" alt="about image" />
            </div>
          </div>
        </div>
      </section>
      <CompanyNumbers />

      <section className="ourTeams mt-5 pb-4">
        <div className="container">
          <div className="heading-main mb-5">
            <span className="badge rounded-pill text-bg-warning">
            Our team
            </span>
            <h2 className="d-flex align-items-end">
              Inspiration for home <br />
              interior designs
            </h2>
          </div>
          <div class="row justify-content-center">
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/team-1.png" alt="team" />
                        <span class="badge">Founder at Company</span>
                    </figure>
                    <h3>Rs Rathore</h3>
                </div>
             </div>
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/team-2.png" alt="team" />
                        <span class="badge bg-team-badge">Design Head & Project Head</span>
                    </figure>
                    <h3>Muskan</h3>
                </div>
             </div>
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/team-3.png" alt="team" />
                        <span class="badge bg-team-badge">Interior Designer</span>
                    </figure>
                    <h3>Manshi</h3>
                </div>
             </div>
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/sher-singh.png" alt="team" />
                        <span class="badge bg-team-badge">Site Manager</span>
                    </figure>
                    <h3>Sher Singh</h3>
                </div>
             </div>
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/team-5.png" alt="team" />
                        <span class="badge bg-team-badge">Site Manager</span>
                    </figure>
                    <h3>Neerwardhan Singh</h3>
                </div>
             </div>
             <div class="col-md-4 mb-5">
                <div class="team-box">
                    <figure>
                        <img src="images/team-6.png" alt="team" />
                        <span class="badge bg-team-badge">Head of Department (Carpentry)</span>
                    </figure>
                    <h3>Sahid Tyagi</h3>
                </div>
             </div>
          </div>
        </div>
      </section>


      <BookNow />

      <section className="about-section pt-4">
        <div className="container">
        <div className="row mb-5">
              <div className="col-12 mb-4">
                <img src="images/news.png" alt="team" />
              </div>
              <div className="col-12">
                <img src="images/news-2.png" alt="team" />
              </div>
          </div>
          <div className="row justify-content-between align-items-start">
            <div className="col-lg-5 heading-main">
              <span className="badge rounded-pill text-bg-warning">Process</span>
              <h2>Contact Us. It’s Easy.</h2>
              <p>
                You don’t get trapped in such an annoyance thus we have been
                briskly working as interior decorators in Jaipur.
              </p>

              <ul className="Contact_process mt-4 pt-2">
                <li>
                  <div className="pro-flex">
                    <img src="images/pro-call.png" alt="Call" />
                    <p>
                      <span>Contact Number</span>
                      <strong>+91 7737966778</strong>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="pro-flex">
                    <img src="images/pro-email.png" alt="Email" />
                    <p>
                      <span>Official Email ID</span>
                      <strong>fixinterio@gmail.com</strong>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="pro-flex">
                    <img src="images/pro-location.png" alt="Location" />
                    <p>
                      <span>Office Address</span>
                      <strong>
                        B-114,Bhura Patel Marg, Gandhi Path W Vaishali Nagar,
                        Jaipur
                      </strong>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
      
        </div>
      </section>


    </>
  );
};

export default About;
