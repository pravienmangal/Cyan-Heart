import React from 'react'
import PropTypes from 'prop-types'

const Intro = ({ title, description }) => {
  return (
    <div className="container white-content intro-content fade-in-up">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Intro.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Intro;