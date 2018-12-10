import React from 'react';

import './HeaderBar.scss';

class HeaderBar extends React.Component {
  render() {
    return (
    <div className="headerbar">
      <div className="top-bar">
        <p>
          <span>LIMITED TIME OFFER</span> - JOIN THE QUEUE NOW AND TAKE
          ADVANTAGE OF OVER $5 MILLION WORTH OF TOTAL AWARDS
        </p>
      </div>
    </div>
    );
  }
}

export default HeaderBar;
