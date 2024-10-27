import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {

        // Include the token in the headers
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to format date as "Month Day, Year"
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
            <h1>Latest Blogs & News</h1>
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

      <section class="BlogSection">
        <div class="container">
          <div class="row">

            {blogs.map((blog) => (
              <div className="col-md-6 mb-5" key={blog._id}>
                <div className="BlogBox">
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
                    <span>{blog.addedBy}</span> |
                    <span>{formatDate(blog.createdAt)}</span>
                    <Link to={`/blog/${blog._id}`} className="btn btn-outline-primary ms-auto">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
