import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReelParthner = () => {
  var settings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };
  return (
    <div>
    <div className="reelSlider">
      <Slider {...settings}>
        <div>
          <img src="/images/1.png" alt="Partner 1" />
        </div>
        <div>
          <img src="/images/2.png" alt="Partner 2" />
        </div>
        <div>
          <img src="/images/3.png" alt="Partner 3" />
        </div>
        <div>
          <img src="/images/4.png" alt="Partner 4" />
        </div>
        <div>
          <img src="/images/5.png" alt="Partner 5" />
        </div>
        <div>
          <img src="/images/6.png" alt="Partner 6" />
        </div>
      </Slider>
    </div>
  </div>
  );
};
