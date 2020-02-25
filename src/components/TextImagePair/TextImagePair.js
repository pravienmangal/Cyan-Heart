import React from 'react'
import PropType from 'prop-types'

const TextImagePair = ({ title, children, image }) => {
  return (
    <div className="grid flex">
      <div className="text-container large-span-1-2 fade-in-up">
        <div className="box-text">
          <div className="box-content">
            <div className="box-width-left">
              <h2>{title}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="image-container large-span-1-2 fade-in-up">
        <div className="box">
          <div className="lazy-load" style={{
            backgroundImage: `url('${image}')`
          }}></div>
        </div>
      </div>
    </div>
  );
};

TextImagePair.prototypes = {
  title: PropType.string.isRequired,
  children: PropType.node.isRequired,
  image: PropType.string.isRequired
};

export default TextImagePair;