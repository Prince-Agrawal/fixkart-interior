import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Slow down the autoplay speed to 3 seconds
    centerMode: false,
    slidesToShow: 2, // Show 2 slides at a time on larger screens
    slidesToScroll: 2,
    variableWidth: false,
    infinite: true,
    initialSlide: 0, // Start from the first slide
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px (tablets and mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();

    const handleMoreNewsClick = () => {
        scrollToTop();
        navigate('/blog'); // Redirect to /blogs
    };

  // Function to format date as "Month Day, Year"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <section className="BlogSection slider-dots">
        <div className="container">
          <div className="heading-main mb-5">
            <span className="badge rounded-pill text-bg-warning">
              Design Ideas
            </span>
            <h2 className="d-flex align-items-end">
              Take a look at our latest <br />
              articles & resources
              <button onClick={handleMoreNewsClick} className="btn btn-primary ms-auto">More News</button>
            </h2>
          </div>

          <div className="BlogSlider">
            <Slider {...settings}>

              {blogs.map((blog) => (
                <div key={blog._id}>
                  <div className="BlogBox">
                    {/* <img
                      src={process.env.REACT_APP_API_BASE_URL + '/' + blog.imagePath || "/images/living-room.png"}
                      alt={blog.title}
                      className="blog-image"
                    /> */}
                    <img
                      src={process.env.REACT_APP_API_BASE_URL + '/' + blog.imagePath || "/images/living-room.png"}
                      alt="Blog"
                      className="blog-image"
                    />
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <div className="blog-user">
                      <img
                        src="/images/user.png"
                        alt="Blog user"
                        className="user"
                      />
                      <span>{blog.addedBy}</span> | <span>{formatDate(blog.createdAt)}</span>
                      <Link to={`/blog/${blog._id}`} className="btn btn-outline-primary ms-auto">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
