import React from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import clsx from 'clsx';

const Nav = ({ options, isNavOpen }) => {
  return (
    <div className={clsx("nav-container", isNavOpen ? "open" : "")}>
      <nav className="nav-main" tabIndex="-1">
        <ul>
          {options &&
            options.map(option => {
              return (
                <li
                  key={option.title}
                >
                  <Link to={option.url}>
                    {option.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ),
  isNavOpen: PropTypes.bool.isRequired
};

export default Nav;