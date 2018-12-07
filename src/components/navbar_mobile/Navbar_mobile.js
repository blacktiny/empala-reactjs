import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../assets/images/logo.svg';
import './Navbar_mobile.scss';

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
          <div className="logo-section-img">
            <img src={logo} alt="logo" />
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">TRUST</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">PRODUCT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">PRICING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">TEAM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Navbar_mobile;
