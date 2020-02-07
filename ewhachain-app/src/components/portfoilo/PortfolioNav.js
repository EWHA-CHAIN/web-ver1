import React from 'react';
import { Nav } from 'react-bootstrap';

function PortfolioNav() {
    return(
    <Nav className="flex-column">
    <Nav.Link href="">4기</Nav.Link>
    <Nav.Link eventKey="link-1">3기</Nav.Link>
    <Nav.Link eventKey="link-2">2기</Nav.Link>
    <Nav.Link eventKey="disabled">1기</Nav.Link>
    </Nav>
    )
}

export default PortfolioNav;