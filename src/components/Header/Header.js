import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from '../Nav/Nav'

const Header = ({ siteTitle }) => {

  const navOptions = [
    { title: "About Us", url: "/page-2/" },
    { title: "Our Courses", url: "/page-2/" },
    { title: "Gallery", url: "/page-2/" },
    { title: "Contact Us", url: "/page-2/" }
  ];

  return (
    <header className="header">
      <div className="header-container container">
        <label className="nav-main-btn" htmlFor="nav-expand">Menu</label>
        <Link to="/" className="logo">
          {siteTitle}
        </Link>
        <Nav options={navOptions} />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
