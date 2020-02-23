import React from 'react';
import PropTypes from 'prop-types'

const BlockQuote = ({ quote, author }) => {
  return (
    <div className="container quote-content transition-start">
      <blockquote className="quotation">
        <p>{quote}</p>
        {author && (
          <footer><cite>{author}</cite></footer>
        )}
      </blockquote>
    </div>
  );
};

BlockQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string
};

BlockQuote.defaultProps = {
  author: ''
};

export default BlockQuote;
