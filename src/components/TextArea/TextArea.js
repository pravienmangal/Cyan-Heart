import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({
  name,
  label,
  rows,
  onChange,
  onBlur,
  placeholder,
  value,
  errorMessage
}) => {
  return (
    <div className="text-input">
      <label htmlFor={name}>
        {label}
      </label>
      <textarea
        className={errorMessage ? "has-error" : ""}
        id={name}
        name={name}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
      />
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string
};

TextArea.defaultProps = {
  name: undefined,
  onChange: undefined,
  onBlur: undefined,
  placeholder: '',
  rows: '',
  value: '',
  errorMessage: ''
};

export default TextArea;