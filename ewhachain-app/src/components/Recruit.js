import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import sample2 from '../images/sample2.png';
function Recruit() {
    return(
        <Jumbotron>
        <h1>5기 모집</h1>
        <div>
            이화체인 n기 뽑아요~~<br></br>
            지원기간 언제부터 언제까지랍니다~~
        </div>
        <div className="Images">
            <Container>
            <Row>
                <Col xs={10} md={6}>
                <Image src={sample2} roundedCircle />
                <p>폼 링크</p>
                </Col>
                <Col xs={5} md={6}>
                <Image src={sample2} roundedCircle />
                <p>슬랙(이나 다른거)</p>
                </Col>
            </Row>
            </Container>
        </div>
        <div>
            <br></br>
            <Button variant="dark" href="/">메인으로 돌아가기</Button>
        </div>
        </Jumbotron>
    );
}

export default Recruit;