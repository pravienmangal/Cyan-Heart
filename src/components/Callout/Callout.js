import React from 'react'
import PropType from 'prop-types'

const Callout = ({ title, link, image }) => {
  return (
    <div class="container">
      <div class="grid flex">
        <div class="medium-span-1-2 large-span-1-3 transition-start">
          <a class="callout-list" href={link}>
            <div class="box shadow-box-full callout-box lazy-image">
              <div className="lazy-load" style={{
                backgroundImage: `url('${image}')`
              }}></div>
              <div class="box-content vertical-top">
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