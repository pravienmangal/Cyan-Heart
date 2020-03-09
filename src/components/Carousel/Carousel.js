import React from 'react'
import Slider from 'react-slick'
import PropType from 'prop-types'
import "../../styles/slick.css"
import "../../styles/slick-theme.css"

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

Carousel.prototypes = {
  children: PropType.node.isRequired
};

export default Carousel;