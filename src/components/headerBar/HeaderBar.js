import React from 'react';
import { Link } from "react-router-dom";

import './HeaderBar.scss';

class HeaderBar extends React.Component {
  render() {
    return (
    <div className="headerbar">
      <div className="top-bar">
        <p>
          <Link to="/foundingMember">LIMITED TIME OFFER</Link> - JOIN THE QUEUE NOW AND TAKE
          ADVANTAGE OF OVER $5 MILLION WORTH OF TOTAL AWARDS
        </p>
      </div>
    </div>
    );
  }
}

export default HeaderBar;
