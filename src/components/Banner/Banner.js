import React from 'react';
import BannerImage from '../../images/banner-1.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-image shadow-box lazy-image">
        <div className="lazy-load" style={{
          backgroundImage: `url('${BannerImage}')`,
        }}></div>
      </div>
    </div>
  );
};

export default Banner;