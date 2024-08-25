import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000, // Slow down the autoplay speed to 3 seconds
        centerMode: false,
        slidesToShow: 2, // Show 1 slide at a time
        slidesToScroll: 2,
        variableWidth: false,
        infinite: true,
        initialSlide: 0, // Start from the first slide
        arrows: false,
        dots: true,
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
              <button className="btn btn-primary ms-auto">More News</button>
            </h2>
          </div>

          <div className="BlogSlider">
             <Slider {...settings}>
             <div>
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>

                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
             </div>

             <div>
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>

                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
             </div>

             <div>
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image"/>
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>

                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
             </div>
             </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
