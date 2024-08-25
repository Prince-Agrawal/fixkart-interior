import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBannerSlider = () => {
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
        fade: true, // Enable fade effect
      };

  return (
    <>
        <div className="BannerSliderHome">
          <Slider {...settings}>
            <div>
              <img
                src="/images/home-banner.png"
                alt="Home Banner"
                className="banner-img"
              />
            </div>
            <div>
              <img
                src="/images/home-banner-2.png"
                alt="Home Banner"
                className="banner-img"
              />
            </div>
            <div>
              <img
                src="/images/home-banner-4.png"
                alt="Home Banner"
                className="banner-img"
              />
            </div>
          </Slider>
        </div>
    </>
  );
}

export default HomeBannerSlider;
