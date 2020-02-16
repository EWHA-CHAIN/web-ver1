import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Recruit.css';
import logo from "../images/logo.png"

function Recruit() {
    return(
        <Jumbotron className="recruit">
            <div className="recruit_title">
                <h1>5기 모집</h1>
            </div>
            <div className="recruit_content">
            <img 
                src={logo} 
                alt="sample"
                width="500px"
                height="500px"
                ></img><br></br>
                지원기간 : mm월 dd일 - mm월 dd일<br></br>
                폼 링크 : www.xxxx.xxxxx
            </div>
            <div className="recruit_button">
                <Button variant="dark" href="/">main</Button>
            </div>
        </Jumbotron>
    );
}

export default Recruit;