import React from 'react'
import PropTypes from 'prop-types'

const Callout = ({ options }) => {
  console.log("options", options);
  return (
    <div className="container">
      <div className="grid flex">
        {options.map(option => {
          return (
            <div
              key={option.id}
              className="medium-span-1-2 large-span-1-3 transition-start"
            >
              <a className="callout-list" href={option.link}>
                <div className="box shadow-box-full callout-box lazy-image">
                  <div className="lazy-load" style={{
                    backgroundImage: `url('${option.image}')`
                  }}></div>
                  <div className="box-content vertical-top">
                    <h2>{option.title}</h2>
                    <hr />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Callout.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Callout;