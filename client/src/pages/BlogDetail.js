import React, { useEffect, useState } from "react";
import { ContactForm } from "../components/ContactForm";
import BookNow from "../components/BookNow";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
const BlogDetail = () => {

  const { id } = useParams(); // Get the blog ID from the URL parameters
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loader />; // Show loader while loading

  return (
    <>
      <section className="banner-section">
        <img
          src="/images/design-gallary.jpg"
          className="banner-img"
          alt="Banner Image" />
        <div className="container">
          <div className="banner-contant">
            <h1>
              Trendy and Chic: Unveiling the New Elite Laminate Collection
            </h1>
            <p className="mb-0">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy
              foster
              collaborative thinking to further the overall value proposition.
            </p>
          </div>
        </div>
      </section>

      <section className="content-area py-4 BlogDetail">
        <div className="container">
          <h2 class="mb-4">
            Interior Designer in Pratap Nagar Jaipur: Transforming Spaces with
            Style
          </h2>
          <h3>Introduction to Interior Designers</h3>
          <p>
            In the realm of home and office aesthetics, interior designers play
            a pivotal role in crafting spaces that are not only visually
            appealing but also functional and comfortable. Pratap Nagar, a
            burgeoning locality in Jaipur, is witnessing a surge in the demand
            for skilled interior designers who can elevate the ambiance of
            residences and commercial establishments alike.
          </p>
          <h3>Importance of Interior Designers
          </h3>
          <p>Interior designers possess the expertise to harmonize various elements such as color schemes, furniture layouts, lighting, and décor accessories to create cohesive and inviting interiors. Their keen eye for detail and creative flair can breathe life into any space, transforming it into a reflection of the occupants' personality and style preferences.
          </p>
          <h3>Overview of Pratap Nagar, Jaipur
          </h3>
          <p>Pratap Nagar, located in the southern part of Jaipur, is a rapidly developing area known for its residential colonies, educational institutions, and commercial hubs. With a blend of modern infrastructure and traditional Rajasthani charm, Pratap Nagar offers a vibrant setting for individuals and businesses alike. </p>
          <p>Interior designers possess the expertise to harmonize various elements such as color schemes, furniture layouts, lighting, and décor accessories to create cohesive and inviting interiors. Their keen eye for detail and creative flair can breathe life into any space, transforming it into a reflection of the occupants' personality and style preferences.
          </p>
          <h3>Demand for Interior Designers in Pratap Nagar
          </h3>
          <p>Interior designers possess the expertise to harmonize various elements such as color schemes, furniture layouts, lighting, and décor accessories to create cohesive and inviting interiors. Their keen eye for detail and creative flair can breathe life into any space, transforming it into a reflection of the occupants' personality and style preferences.
          </p>
          <h3>Qualities of a Good Interior Designer
          </h3>
          <p>Pratap Nagar, located in the southern part of Jaipur, is a rapidly developing area known for its residential colonies, educational institutions, and commercial hubs. With a blend of modern infrastructure and traditional Rajasthani charm, Pratap Nagar offers a vibrant setting for individuals and businesses alike. </p>
          <img
            src="/images/design-gallary.jpg"
            className="BlogDetailImg rounded mb-4"
            alt="Banner Image" />
          <h3>Services Offered by Interior Designers in Pratap Nagar
          </h3>
          <p>Interior designers in Pratap Nagar offer a wide range of services tailored to meet the diverse needs of their clients. These services may include space planning, furniture selection, color consultations, lighting design, renovation planning, and project management.
          </p>
          <p>Interior designers possess the expertise to harmonize various elements such as color schemes, furniture layouts, lighting, and décor accessories to create cohesive and inviting interiors. Their keen eye for detail and creative flair can breathe life into any space, transforming it into a reflection of the occupants' personality and style preferences.
          </p>
          <h3>Demand for Interior Designers in Pratap Nagar
          </h3>
          <p>Interior designers possess the expertise to harmonize various elements such as color schemes, furniture layouts, lighting, and décor accessories to create cohesive and inviting interiors. Their keen eye for detail and creative flair can breathe life into any space, transforming it into a reflection of the occupants' personality and style preferences.
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

export default BlogDetail;
