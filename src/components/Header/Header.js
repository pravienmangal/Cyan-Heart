import React from 'react';
import Logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          Cyan Heart
        </a>
        <div className="nav"><img src={Logo} alt="Logo" /></div>
      </div>
    </div>
  );
};

export default Header;
