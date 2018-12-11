import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../assets/images/logo.png';
import './NavbarMobile.scss';

class Navbar_mobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
    <div className="navbar-menu">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <div className="logo-section">
            <div className="logo-section-logo">
              <img className="logo-section-img" src={logo} alt="logo" />
            </div>
            <span className="logo-section-text">
              Join Together, Invest Together, Succeed Together
            </span>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/index#trust">TRUST</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/index#join">PRODUCT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pricingPage">PRICING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">TEAM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">CONTACT</NavLink>
            </NavItem>
          </Nav>
          <div className="btn-reserve-section">
            <button className="btn-reserve">
              <b>Reserve Your Spot</b>
            </button>
          </div>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Navbar_mobile;
