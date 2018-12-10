import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import "./App.scss";
import logo from "../assets/images/logo.svg";
import Navbar_mobile from "../components/navbar_mobile/Navbar_mobile";
import Home from "./home/home";
import Team from "./team/team";
import HeaderBar from "../components/headerBar/HeaderBar";
import FooterBar from "../components/footerBar/FooterBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderBar />
          <Navbar_mobile>
            <div className="logo-section-img">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </Navbar_mobile>
          <div className="menu-bar">
            <div className="logo-section">
              <div className="logo-section-logo">
                <Link to="/">
                  <img className="logo-section-img" src={logo} alt="logo" />
                </Link>
              </div>
              <span className="logo-section-text">
                Join Together, Invest Together, Succeed Together
              </span>
            </div>
            <div className="btn-section">
              <div className="nav-bar">
                <Link to="/">TRUST</Link>
                <span>•</span>
                <Link to="/">PRODUCT</Link>
                <span>•</span>
                <Link to="/">PRICING</Link>
                <span>•</span>
                <Link to="/team">TEAM</Link>
                <span>•</span>
                <Link to="/">CONTACT</Link>
              </div>
              <div className="btn-reserve-section">
                <button className="btn-reserve">
                  <b>Reserve Your Spot</b>
                </button>
              </div>
            </div>
          </div>
          <Route path="/" exact render={() => <Redirect to="/index" />} />
          <Route path="/index" component={Home} />
          <Route path="/team" component={Team} />
          <FooterBar></FooterBar>
        </div>
      </Router>
    );
  }
}

export default App;
