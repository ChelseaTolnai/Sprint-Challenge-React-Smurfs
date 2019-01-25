import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class SmurfNav extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Smurfs</NavbarBrand>
        <Nav>
            <NavItem>
                <NavLink 
                    exact to="/" 
                    activeStyle={{
                        textDecoration: "underline"
                    }}
                >
                    Smurf Village
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink 
                    exact to="/smurf-form"
                    activeStyle={{
                        textDecoration: "underline"
                    }}
                >
                    Add Smurf
                </NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default SmurfNav;
