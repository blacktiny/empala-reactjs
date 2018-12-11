import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import "./App.scss";
import logo from "../assets/images/logo.png";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import Home from "./home/home";
import Team from "./team/team";
import HeaderBar from "../components/headerBar/HeaderBar";
import FooterBar from "../components/footerBar/FooterBar";
import FoundingMember from "./foundingMember/FoundingMember";
import TermConditions from "./termConditions/TermConditions";
import PricingPage from "./pricingPage/PricingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderBar />
          <NavbarMobile>
            <div className="logo-section-img">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </NavbarMobile>
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
                <a href="/index#trust">TRUST</a>
                <span>•</span>
                <a href="/index#join">PRODUCT</a>
                <span>•</span>
                <Link to="/pricingPage">PRICING</Link>
                <span>•</span>
                <Link to="/team">ABOUT</Link>
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
          <Route path="/foundingMember" component={FoundingMember} />
          <Route path="/termConditions" component={TermConditions} />
          <Route path="/pricingPage" component={PricingPage} />
          <FooterBar></FooterBar>
        </div>
      </Router>
    );
  }
}

export default App;
