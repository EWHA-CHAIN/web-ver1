import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from '../images/logo.png';

function About() {
    return(
        <Jumbotron>
        <h1>ABOUT US</h1>
        <div>

        </div>
        <div>
            <img 
                src={logo} 
                alt="sample"
                width="500px"
                height="500px"
                ></img>
        </div>
        <div>
            <br></br>
            <Button variant="dark" href="/portfolio/fourth">more</Button>
        </div>
        </Jumbotron>
    );
}

export default About;