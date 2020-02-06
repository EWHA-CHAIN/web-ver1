import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
      <Navbar>
        <Navbar.Brand>Ewha Chain</Navbar.Brand>
        <Nav className="headerMenu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/Alumni">Alumni</Nav.Link>
          <Nav.Link href="/Recruiting">Recruiting</Nav.Link>
      ​  </Nav>
      </Navbar>
    );
}

export default Header;