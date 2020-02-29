import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css';
import logo from '../images/logo.svg'

function Header() {
    return (
      <Navbar className="header">
        <Navbar.Brand>
          <a href="/">
          <img
            className=""
            src={logo}
            alt="logo"
          />{' '}
          </a>
        </Navbar.Brand>
        <Nav className="header_menu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Portfolio/fourth">Portfolio</Nav.Link>
          <Nav.Link href="/Alumni">Alumni</Nav.Link>
          <Nav.Link href="/Recruiting">Recruiting</Nav.Link>
      ​  </Nav>
      </Navbar>
    );
}

export default Header;