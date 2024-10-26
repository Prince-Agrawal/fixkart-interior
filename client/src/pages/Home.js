// src/pages/Home.js
import React, { useEffect, useState } from "react"; // Add useEffect here
import { ReelParthner } from "../components/ReelParthner";
import DesignIdeas from "../components/DesignIdeas";
import AOS from "aos";
import "aos/dist/aos.css";
import CompanyNumbers from "../components/CompanyNumber";
import ClientFeedback from "../components/ClientFeedback";
import BookNow from "../components/BookNow";
import Blogs from "../components/Blogs";
import { ContactForm } from "../components/ContactForm";
import HomeBannerSlider from "../components/HomeBannerSlider";
import Loader from "../components/Loader";
const Home = () => {

  const [loading, setLoading] = useState(true); // Add loading state


  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Simulate a short loading time (e.g., 1 second) before hiding the loader
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />; // Display loader until loading is false
  return (
    <>
      <div className="Home-banner">
         <HomeBannerSlider/>
        <div className="container" data-aos="fade-up">
          <h1 className="pulse-animation">
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
            <div className="col-lg-6 col-xl-5 heading-main mb-0 mb-md-4">
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

      <section className="designIdeasSection">
        <div className="container">
          <div className="heading-main mb-5">
            <span className="badge rounded-pill text-bg-warning">
              Design Ideas
            </span>
            <h2 className="d-flex align-items-end">
              Inspiration for home <br />
              interior designs
              <button className="btn btn-primary ms-auto">More Designs</button>
            </h2>
          </div>
          <DesignIdeas />
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="heading-main mb-5 text-center">
            <span className="badge rounded-pill text-bg-warning">Services</span>
            <h2>6 Steps Of Completion Interior</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>Book a Free Appointment</h3>
                <p>
                  All you need to do is fill out the inquiry form and send it to
                  us. Our design specialist will meet with you for a free
                  consultation so that he or she can guide you and find out more
                  about you.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>Seal The Deal</h3>
                <p>
                  Book our services and just pay 5% of the total amount or Rs.
                  25000 as a booking fee. (whichever is higher).
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>Place your order</h3>
                <p>
                  To kickstart the order process, you just need to pay 50% of
                  the finalized quote, and then we are ready to start work on
                  site or factory.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>Get ready for installation</h3>
                <p>
                  We send our team to the location for the installation. They
                  place and fit all the objects perfectly. Be prepared to wait
                  for the magic to unfold as you will be surprised to see the
                  results.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>The Final Payment</h3>
                <p>
                  Pay the remaining 50% to complete the payment process and help
                  us with your feedback. The greatest reward for us will be your
                  smiling face.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-steps">
                <img src="images/step-1.png" alt="Book a Free Appointment" />
                <h3>All Set To Move In</h3>
                <p>
                  Your move-in is ready, and finally, you get to see your
                  Fixkart home. It’s time to make some beautiful memories and
                  get going with your loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="OurprojectSection">
        <div className="container">
          <div className="heading-main mb-5">
            <span className="badge rounded-pill text-bg-warning">
              Our Projects
            </span>
            <h2 className="d-flex align-items-end">
              {" "}
              Fastest Growing Interior <br />
              Designer In India
              <button className="btn btn-primary ms-auto">More Gallery</button>
            </h2>
          </div>

          <div className="row outer-gallery">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-1.png" alt="Gallery 1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-2.png" alt="Gallery 1" />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-3.png" alt="Gallery 1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-4.png" alt="Gallery 1" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-5.png" alt="Gallery 1" />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="gallary-box">
                <img src="images/gallery-6.png" alt="Gallery 1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyNumbers />

      <ClientFeedback />

      <BookNow />

      <Blogs />

      <section className="about-section">
        <div className="container">
          <div className="row justify-content-between align-items-start">
            <div className="col-lg-6 col-xl-5 heading-main">
              <span className="badge rounded-pill text-bg-warning">
                Proccess
              </span>
              <h2>Contact Us. It’s Easy.</h2>
              <p>
              You don’t get trapped in such an annoyance thus we have been briskly working as interior decorators in Jaipur.
              </p>

              <ul className="Contact_process mt-4 pt-2">
                <li>
                  <div className="pro-flex">
                    <img src="images/pro-call.png" />
                    <p>
                      <span>Contact Number</span>
                      <strong>+91 7737966778</strong>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="pro-flex">
                    <img src="images/pro-email.png" />
                    <p>
                      <span>Official Email ID</span>
                      <strong>fixinterio@gmail.com</strong>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="pro-flex">
                    <img src="images/pro-location.png" />
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

export default Home;
