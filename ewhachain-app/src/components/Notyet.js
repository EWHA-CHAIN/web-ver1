import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.png';
function Notyet() {
    return(
        <Jumbotron>
        <h1>지원기간이 아니랍니다~~~</h1>
        <div>
            아직 지원기간이 아니에여~~
        </div>
        <div>
            <img src={logo} alt="sample"></img>
        </div>
        <div>
            <br></br>
            <Button variant="dark" href="/">메인으로 돌아가기</Button>
        </div>
        </Jumbotron>
    );
}

export default Notyet;