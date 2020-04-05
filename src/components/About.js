import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import main_04 from '../images/change/main04.png'

function About() {
    return(
        <Jumbotron>
        <h1>ABOUT US</h1>
        <div>
            <br></br>
            <br></br>
        </div>
        <div>
            <img 
                src={main_04} 
                alt="sample"
               
                ></img>
        </div>
        <div>
            <br></br>
            <br></br>
            <Button variant="dark" href="/portfolio/fourth">more</Button>
        </div>
        </Jumbotron>
    );
}

export default About;