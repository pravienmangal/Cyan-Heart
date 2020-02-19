import React from 'react';
import PropTypes from "prop-types"

const Banner = ({ bannerImage, title, link }) => {
  return (
    <div className="banner">
      <div className="banner-image shadow-box lazy-image">
        <div className="lazy-load" style={{
          backgroundImage: `url('${bannerImage}')`,
        }}></div>
        <div className="container">
          <div className="hero-title fade-in-up">
            <h1>{title}</h1>
            {link && (
              <a href="#" className="btn">{link}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  bannerImage: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
}

Banner.defaultProps = {
  bannerImage: '',
  title: '',
  link: ''
}


export default Banner;