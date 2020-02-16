import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import "../styles/App.sass";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container header-content">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="logo"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
