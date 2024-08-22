import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DesignIdeas() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Slow down the autoplay speed to 3 seconds
    centerMode: false,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3,
    variableWidth: true,
    infinite: true,
    initialSlide: 3,
    arrows: false,
    buttons: false,
    dots: true,
  };

  return (
    <div className="design-idea-slider">
      <Slider {...settings}>
        <div>
          <a href="#">
            <img
              src="images/kids-room.png"
              alt="kids room image"
              className="img-fluid"
            />
            <span>Kids Room</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="images/home-office.png"
              alt="kids room image"
              className="img-fluid"
            />
            <span>Home office</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="images/living-room.png"
              alt="living room"
              className="img-fluid"
            />
            <span>Living room design</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="images/kids-room.png"
              alt="kids room image"
              className="img-fluid"
            />
            <span>Kids Room</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="images/home-office.png"
              alt="kids room image"
              className="img-fluid"
            />
            <span>Home office</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="images/living-room.png"
              alt="living room"
              className="img-fluid"
            />
             <span>Living room design</span>
          </a>
        </div>
      </Slider>
    </div>
  );
}
