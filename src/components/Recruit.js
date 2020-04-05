import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Recruit.css';
import logo from "../images/logo.png"
import recruit from "../images/change/recruit.png"

function Recruit() {
    return(
        <Jumbotron className="recruit">
            <div className="recruit_title">
                <h1>5기 리쿠르팅</h1>
            </div>
            <div className="recruit_content">
            <br></br><br></br>
            <img 
                src={recruit} 
                alt="recruit"
            ></img>
            <br></br><br></br>
            </div>
            <div className="recruit_button">
                <Button variant="dark" href="/">main</Button>
                <br></br><br></br>
            </div>
        </Jumbotron>
    );
}

export default Recruit;