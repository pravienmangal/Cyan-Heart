import React from 'react'
import PropTypes from 'prop-types'

const SpecialistList = ({ data }) => {
  return (
    <ul>
      {data && data.map(list => {
        return (
          <li key={list}>{list}</li>
        );
      })}
    </ul>
  );
};

SpecialistList.prototypes = {
  data: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
};

export default SpecialistList;