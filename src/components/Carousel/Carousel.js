import React from 'react'
import Slider from 'react-slick'
import PropType from 'prop-types'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div> */}
      {children}
    </Slider>
  );
};

Carousel.prototypes = {
  children: PropType.node.isRequired
};

export default Carousel;