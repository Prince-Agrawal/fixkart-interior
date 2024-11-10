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
              {blog.title}
            </h1>
            <p className="mb-0">
              {blog.description}
            </p>
          </div>
        </div>
      </section>

      <section className="content-area py-4 BlogDetail">
        <div className="container">
          {blog.sections.map((section, index) => (
            <div key={section._id} className="mb-4">
              {section.h2 && <h2 class="mb-4">{section.h2}</h2>}
              {section.h3 && <h3>{section.h3}</h3>}
              {section.paragraph && <p>{section.paragraph}</p>}
              {section.image && (
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}/${section.image}`}
                  alt={`Section ${index + 1}`}
                  className="BlogDetailImg rounded mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
            </div>
          ))}
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
