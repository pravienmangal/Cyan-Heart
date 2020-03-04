import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({
  name,
  label,
  type,
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
      <input
        className={errorMessage ? "has-error" : ""}
        id={name}
        name={name}
        type={type}
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

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string
};

TextInput.defaultProps = {
  name: undefined,
  onChange: undefined,
  onBlur: undefined,
  placeholder: '',
  type: '',
  value: '',
  errorMessage: ''
};

export default TextInput;