import React from 'react';

const Footer = () => {
  return (
    <footer className="footer transition-start">
      <div className="container footer-container">
        <div className="grid">
          <div className="medium-span-1-3 medium-push-2-3">
            <div className="social">
              <ul>
                <li><a className="twitter-link" href="https://twitter.com/CyanHeartLtd" target="_blank"></a></li>
                <li><a className="facebook-link" href="https://www.facebook.com/CyanHeartLtd/" target="_blank"></a></li>
                <li><a className="linkedin-link" href="https://www.linkedin.com/in/cyan-heart-ltd-8b8267160/?originalSubdomain=uk" target="_blank"></a></li>
              </ul>
            </div>
          </div>
          <div className="medium-span-2-3 medium-pull-1-3 footer-links-content">
            <ul className="footer-links">
              <li className="copyright">&copy; Copyright - Cyan Heart Ltd. All rights reserved - Registration number: 11121190</li>
              <li><a href="http://www.fofato.co.uk/" target="_blank"></a></li>
              <li><a href="http://www.faib.co.uk/" target="_blank"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;