import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Recruit.css';

function Recruit() {
    return(
        <Jumbotron className="recruit">
            <div className="recruit_title">
                <h1>5기 모집</h1>
            </div>
            <div className="recruit_content">
                지원기간 언제부터 언제까지랍니다~~<br></br>
                폼 링크 : ~~~~~~~~~~~~~
            </div>
            <div className="recruit_button">
                <Button variant="dark" href="/">main</Button>
            </div>
        </Jumbotron>
    );
}

export default Recruit;