import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import "./Footer.css"
import slack from '../images/footer/u15.png'
import github from '../images/footer/u16.png'
import medium from '../images/footer/u26.png'
import facebook from '../images/footer/u27.png'

function Footer(){
    return(
        <div className="footer">
            <Nav className="justify-content-center">
                <Nav.Link className="footer_text">
                    <b>FOLLOW US</b>
                </Nav.Link>
                
                <Nav.Link href="">
                    <img
                        className=""
                        src={slack}
                        alt="slack"
                    />
                </Nav.Link>
                <Nav.Link href="https://github.com/EWHA-CHAIN">
                <img
                        className=""
                        src={github}
                        alt="github"
                    />
                </Nav.Link>
                <Nav.Link href="https://medium.com/ewha-chain">
                    <img
                        className=""
                        src={medium}
                        alt="medium"
                    />
                </Nav.Link>
                <Nav.Link href="">
                    <img
                        className=""
                        src={facebook}
                        alt="facebook"
                    />
                </Nav.Link>
      ​     </Nav>
        </div>
    );
}

export default Footer;