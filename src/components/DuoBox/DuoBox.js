import React from 'react'
import PropTypes from 'prop-types'

const DuoBox = ({ title, children, image, content }) => {
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
      {image && (
        <div className="image-container large-span-1-2 fade-in-up">
          <div className="box">
            <div className="lazy-load" style={{
              backgroundImage: `url('${image}')`
            }}></div>
          </div>
        </div>
      )}
      {content && (
        <div className="large-span-1-2 fade-in-up">
          <div className="right-content">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

DuoBox.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  content: PropTypes.node
};

DuoBox.defaultProps = {
  image: '',
  content: ''
};

export default DuoBox;