import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const Banner = ({ bannerImage, title, linkName, link, thin }) => {
  return (
    <div className={thin ? "banner-thin" : "banner"}>
      <div className="banner-image shadow-box lazy-image">
        <div className="lazy-load" style={{
          backgroundImage: `url('${bannerImage}')`,
        }}></div>
        <div className="container">
          <div className="hero-title fade-in-up">
            <h1>{title}</h1>
            {link && (
              <Link to={link} className="btn">{linkName}</Link>
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
  linkname: PropTypes.string,
  link: PropTypes.string,
  thin: PropTypes.boolean
}

Banner.defaultProps = {
  bannerImage: '',
  title: '',
  linkName: '',
  link: '',
  thin: false
}


export default Banner;