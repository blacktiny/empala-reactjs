import React from 'react';

import './FooterBar.scss';

class FooterBar extends React.Component {
  render() {
    return (
    <div className="footerbar">
      <div className="footer">
        <div className="footer-nav-bar">
          <a href="">
            <b>Empala master customer agreement</b>
          </a>
          <span>•</span>
          <a href="">
            <b>Empala securities use and risk disclosures</b>
          </a>
          <span>•</span>
          <a href="">
            <b>disclosure library</b>
          </a>
          <span>•</span>
          <a href="">
            <b>privacy policy</b>
          </a>
          <span>•</span>
          <a href="">
            <b>contact us</b>
          </a>
          <span>•</span>
          <a href="">
            <b>faq</b>
          </a>
        </div>
        <p className="footer-text">2018 © Copyright Empala Group LLC</p>
      </div>
    </div>
    );
  }
}

export default FooterBar;
