import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

class SmurfNav extends Component {
  render() {
    return (
      <Navbar color="primary">
        <NavbarBrand><h1>Smurfs</h1></NavbarBrand>
        <Nav>
            <NavItem>
                <NavLink 
                    exact to="/" 
                    style={{color: "white"}}
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
                    style={{color: "white"}}
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
