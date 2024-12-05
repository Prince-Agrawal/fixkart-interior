import React, { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import BookNow from "../components/BookNow";

const DesignGallery = () => {
  useEffect(() => {
   
  }, []);

  return (
    <>
      <section className="banner-section">
        <img
          src="/images/design-gallary.jpg"
          className="banner-img"
          alt="Banner Image"
        />
        <div className="container">
          <div className="banner-contant">
            <h1>Design Gallery</h1>
            <p className="mb-0">
              Welcome to our Design Gallery Interior, a space where innovation
              and aesthetics converge to create an immersive experience for
              design enthusiasts and connoisseurs alike. Step inside and be
              transported into a realm where every corner tells a unique story,
              and each display is a masterpiece in its own right.
            </p>
          </div>
        </div>
      </section>

      <section className="content-area py-4">
        <div className="container">
          <h2>Fixkart Interio Design Gallery</h2>
          <h3>Explore Stunning Interiors by Fixkart Interio</h3>
          <p>
            Welcome to the Fixkart Interio Design Gallery, where inspiration
            meets innovation. Explore our curated collection of exquisite
            designs and projects that showcase our passion for creativity and
            attention to detail. Each project in our gallery reflects our
            commitment to delivering exceptional interior design solutions
            tailored to our clients' unique preferences and lifestyles.
          </p>

          <h2>Residential Projects</h2>
          <p>
            Discover our stunning residential projects, ranging from cozy
            apartment makeovers to luxurious home renovations. Immerse yourself
            in the elegance of our contemporary designs, the warmth of our
            traditional styles, and the functionality of our modern living
            spaces. Our residential designs blend aesthetics with functionality,
            creating homes that are both visually appealing and comfortable.
          </p>

          <h2>Commercial Spaces</h2>
          <p>
            Experience the transformation of commercial spaces through our
            portfolio of office designs, retail makeovers, and hospitality
            projects. From sleek and professional office environments to
            inviting and customer-friendly retail spaces, our commercial designs
            are tailored to enhance productivity, brand identity, and customer
            engagement.
          </p>

          <h2>Custom Creations</h2>
          <p>
            In our Design Gallery, you'll also find a showcase of our custom
            creations, including bespoke furniture, unique fixtures, and
            personalized design elements. Our team of skilled craftsmen and
            designers collaborate to bring your vision to life, creating
            one-of-a-kind pieces that add character and charm to your space.
          </p>

          <h2>Expert Curation</h2>
          <p>
            Our design gallery is constantly updated with the latest trends,
            innovative concepts, and timeless classics. We take pride in our
            meticulous curation process, ensuring that every design featured
            represents the pinnacle of style, functionality, and craftsmanship.
          </p>

          <h2>Get Inspired</h2>
          <p>
            Browse through our gallery for inspiration and ideas to fuel your
            imagination. Let our designs ignite your creativity and guide you in
            envisioning your ideal living or working space. If you're ready to
            embark on your design journey, our team is here to help you turn
            your vision into reality.
          </p>
          <p>
            Experience the art of transformation with Fixkart Interio. Let us
            create a space that reflects your style and enhances your lifestyle.
          </p>
        </div>
      </section>

      <BookNow />

      <section className="about-section">
        <div className="container">
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

export default DesignGallery;
