import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Nav from '../Nav/Nav'

const Header = ({ siteTitle }) => {

  const navOptions = [
    { title: "About Us", url: "/about-us" },
    { title: "Our Courses", url: "/our-courses" },
    { title: "FAQs", url: "/faq" },
    { title: "Contact Us", url: "/contact-us" }
  ];

  const [isMenuOpen, setIsenuOpen] = useState(false);

  const menuClickHandler = () => {
    setIsenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container container">
        <label
          className={isMenuOpen ? "nav-main-btn close" : "nav-main-btn"}
          htmlFor="nav-expand"
          onClick={menuClickHandler}
        >
          Menu
        </label>
        <Link to="/" className="logo">
          {siteTitle}
        </Link>
        <Nav
          options={navOptions}
          isNavOpen={isMenuOpen}
        />
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
