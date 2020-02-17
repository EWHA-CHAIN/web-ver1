import React from 'react';
import { Nav } from 'react-bootstrap';
import "./PortfoiloNav.css";

function PortfolioNav() {
    return(
    <Nav className="flex-column">
        <Nav.Link className="flex-column_menu" href="/Portfolio/fourth">4기</Nav.Link>
        <Nav.Link className="flex-column_menu" href="/Portfolio/third">3기</Nav.Link>
        <Nav.Link className="flex-column_menu" href="/Portfolio/second">2기</Nav.Link>
        <Nav.Link className="flex-column_menu" href="/Portfolio/first">1기</Nav.Link>
    </Nav>
    )
}

export default PortfolioNav;