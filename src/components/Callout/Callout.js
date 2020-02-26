import React from 'react'
import PropType from 'prop-types'

const Callout = ({ title, link, image }) => {
  return (
    <div className="container">
      <div className="grid flex">
        <div className="medium-span-1-2 large-span-1-3 transition-start">
          <a className="callout-list" href={link}>
            <div className="box shadow-box-full callout-box lazy-image">
              <div className="lazy-load" style={{
                backgroundImage: `url('${image}')`
              }}></div>
              <div className="box-content vertical-top">
                <h2>{title}</h2>
                <hr />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

Callout.prototypes = {
  title: PropType.string.isRequired,
  link: PropType.string.isRequired,
  image: PropType.string.isRequired
};

export default Callout;