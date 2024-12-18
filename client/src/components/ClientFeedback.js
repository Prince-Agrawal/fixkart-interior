import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Slow down the autoplay speed to 3 seconds
    centerMode: false,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    variableWidth: false,
    infinite: true,
    initialSlide: 0, // Start from the first slide
    arrows: false,
    dots: true,
  };

  return (
    <section className="ClientFeedback slider-dots">
      <div className="container">
        <div className="heading-main mb-2 text-center">
          <span className="badge rounded-pill text-bg-warning">
            Client Feedback
          </span>
        </div>

        <div className="feedback-slider">
          <Slider {...settings}>
            {/* <div>
              <h3>
                I am very satisfied with the services of FIXKART INTERIO.{" "}
                <span className="text-dark">
                  Their team is very professional.
                </span>{" "}
                They finished the interior work on the given time. Best Interior
                designer in Jaipur.
              </h3>
              <figure>
                <img src="images/gallery-6.png" alt="Gallery 1" />
              </figure>
              <h4>Priya Kanwar </h4>
              <h5>Jaipur</h5>
            </div>
            <div>
              <h3>
                I am very satisfied with the services of FIXKART INTERIO.{" "}
                <span className="text-dark">
                  Their team is very professional.
                </span>{" "}
                They finished the interior work on the given time. Best Interior
                designer in Jaipur.
              </h3>
              <figure>
                <img src="images/gallery-6.png" alt="Gallery 1" />
              </figure>
              <h4>Priya Kanwar </h4>
              <h5>Jaipur</h5>
            </div> */}

            {reviews.map((review) => (
              <div key={review._id}>
                <h3>
                  {review.reviewData}
                </h3>
                <figure>
                  <img src={process.env.REACT_APP_API_BASE_URL + '/' + review.imagePath || "images/gallery-6.png"} alt="Gallery" />
                </figure>
                <h4>{review.reviewerName}</h4>
                <h5>{review.reviewerLocation}</h5>
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
