import React, { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import BookNow from "../components/BookNow";

const DesignGallery = () => {
  useEffect(() => {}, []);

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
            Welcome to the Fixkart Interio Design Gallery! Here, we showcase a
            wide range of our projects, from modern minimalistic spaces to
            luxurious, classic interiors. Each project represents our commitment
            to high-quality craftsmanship, innovative design, and client
            satisfaction.
          </p>

          <h3>Why Choose Fixkart Interio?</h3>
          <p>
            At Fixkart Interio, we believe that every space deserves a unique
            touch. Our team of experienced designers and skilled craftsmen work
            together to create functional, beautiful interiors that match your
            lifestyle and taste. From residential homes to commercial spaces, we
            have the expertise to transform any environment into a masterpiece.
          </p>

          <h2>Residential Interiors</h2>
          <p>
            Explore our residential interior projects, including cozy
            apartments, spacious villas, and elegant family homes. Whether
            you're looking for a contemporary open-concept layout or a cozy,
            rustic feel, Fixkart Interio has a design for every preference.
          </p>
          <ul>
            <li>
              ● Modern Living Rooms – Elegant furniture, contemporary lighting,
              and open spaces.{" "}
            </li>
            <li>
              {" "}
              ● Luxury Bedrooms – Tailored furniture, warm lighting, and a
              peaceful ambiance.{" "}
            </li>
            <li>
              {" "}
              ● Customized Kitchens – Functional, stylish, and equipped with the
              latest trends in kitchen design.
            </li>
          </ul>

          <h2>Commercial Interiors</h2>
          <p>
            Our portfolio also features stunning commercial interiors for
            offices, cafes, showrooms, and more. We understand the unique
            requirements of each business and tailor our designs to enhance
            productivity and customer experience.
          </p>
          <ul>
            <li>
              ● Office Spaces – Ergonomic furniture, collaborative workspaces,
              and efficient layouts.
            </li>
            <li>
              {" "}
              ● Retail Showrooms – Unique displays, customer-friendly layouts,
              and impactful designs.
            </li>
            <li>
              {" "}
              ● Cafes and Restaurants – Inviting atmospheres, custom lighting,
              and furniture to create memorable dining experiences.
            </li>
          </ul>

          <h2>Modular Furniture and Custom Design</h2>
          <p>
            Fixkart Interio specializes in modular furniture that is as stylish
            as it is functional. Each piece is customized to fit seamlessly into
            your space, making it ideal for both small and large areas.
          </p>
          <ul>
            <li>
              ● Custom Wardrobes – Maximizing storage with elegant designs.{" "}
            </li>
            <li>
              {" "}
              ● Modular Kitchens – Personalized layouts, cabinets, and fittings.{" "}
            </li>
            <li>
              {" "}
              ● Customized Shelving and Storage Solutions – Designed to optimize
              space.
            </li>
          </ul>
          <h2>Our Approach</h2>
          <p>
            Our design process begins with understanding your vision, space, and
            functional requirements. We use a combination of advanced 3D
            renderings and detailed floor plans to help you visualize your dream
            space. With Fixkart Interio, you’re involved every step of the way,
            ensuring a result that aligns perfectly with your needs.
          </p>
          <p>
            Experience the art of transformation with Fixkart Interio. Let us
            create a space that reflects your style and enhances your lifestyle.
          </p>
          <h3>Get Inspired!</h3>
          <p>
            Scroll through our gallery to find inspiration for your next
            project. Each image tells a story of design creativity, attention to
            detail, and a commitment to excellence. Let Fixkart Interio bring
            your vision to life
          </p>
        </div>
      </section>

      <BookNow />

      <section className="about-section">
        <div className="container">
          <div className="row justify-content-between align-items-start">
            <div className="col-lg-5 heading-main">
              <span className="badge rounded-pill text-bg-warning">
                Process
              </span>
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
