import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
export default function Header({title}) {
  return (
    <div className="Header">
      <h1>{title.length >=3 ? `Showing news for ${title}`: 'Header'}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
Header.defaultProps = {
  title: "",
}