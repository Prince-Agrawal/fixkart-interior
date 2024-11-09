import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Awards = () => {
    var settings = {
        autoplay: true,
        slidesToShow: 1, // Show 3 slides at a time
        slidesToScroll: 1,
        arrows: false,
        buttons: false,
        dots: false,
        fade: true,
      };
  return (
    <div className="awards">
      <Slider {...settings}>
      
         <div><img src="images/award.png" /></div>
         <div><img src="images/award-2.png" /></div>

      </Slider>
    </div>
  )
}

export default Awards
