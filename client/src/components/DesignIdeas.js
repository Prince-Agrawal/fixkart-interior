import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DesignIdeas() {
  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`);
      setCategories(response.data || []); // Set categories to the fetched data or an empty array
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);


  const sampleImagesPath = ['images/kids-room.png', 'images/home-office.png', 'images/living-room.png']


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
    responsive: [
      {
        breakpoint: 1024, // For screens up to 1024px wide
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768, // For screens up to 768px wide (tablets)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480, // For screens up to 480px wide (phones)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          dots: false, // Hide dots on smaller screens if necessary
        }
      }
    ]
  };


  return (
    <div className="design-idea-slider slider-dots">
      {/* <Slider {...settings}>
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
      </Slider> */}


      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={category._id}>
            <Link to={category.categorySlug}>
              <img
                src={sampleImagesPath[index % 3] || "images/default-image.png"}
                alt={category.categoryName}
                className="img-fluid"
              />
              <span>{category.categoryName}</span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
