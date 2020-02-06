import React from 'react';
import { Jumbotron, Card, Button, Badge, CardDeck } from 'react-bootstrap';
import Form from './AlumniForm';
import './Alumni.css';
import unknown from '../images/unknown.png'

function Alumni() {
  return(
    <div>
      <Jumbotron className="Alumni_Form">
        <h1>Alumni of EWHA-CHAIN</h1>
        <h5 className="Alumni_Class">4기 학회원</h5>
        <span>회장 : 조연서(3기) | 부회장 : 유미선(3기) | 총무 : 신한이(3기) | 이유림(3기)</span>
        <CardDeck>
        <Form name='김동희' emails='ahnsbyeol3@gmail.com' major='경제학과 17학번' aImg={unknown}></Form>
        <Form name='송경린' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학과 16학번' aImg={unknown}></Form>
        <Form name='안샛별' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown}></Form>
        <Form name='이윤주' emails='ahnsbyeol3@gmail.com' major='철학과' aImg={unknown}></Form>
        </CardDeck>
        <CardDeck>
        <Form name='정성원' emails='ahnsbyeol3@gmail.com' major='경영학과 15학번' aImg={unknown}></Form>
        <Form name='정수연' emails='ahnsbyeol3@gmail.com' major='경제학과 17학번' aImg={unknown}></Form>
        <Form name='최원희' emails='ahnsbyeol3@gmail.com' major='국어국문학과' aImg={unknown}></Form>
        <Form name='최원희' emails='ahnsbyeol3@gmail.com' major='국어국문학과' aImg={unknown}></Form>
        </CardDeck>
        <h5 className="Alumni_Class">3기 학회원</h5>
        <span>회장 : 조연서(3기) | 부회장 : 유미선(3기) | 총무 : 신한이(3기) | 이유림(3기)</span>
        <CardDeck>
        <Form name='조연서' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 19학번' aImg={unknown}></Form>
        <Form name='유미선' emails='ahnsbyeol3@gmail.com' major='전자공학과 15학번' aImg={unknown}></Form>
        <Form name='이유림' emails='ahnsbyeol3@gmail.com' major='휴먼기계바이오공학부 19학번' aImg={unknown}></Form>
        <Form name='문효진' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown}></Form>
        </CardDeck>
        <Form name='백지희' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown}></Form>
        <Form name='김민경' emails='ahnsbyeol3@gmail.com' major='전자공학과 16학번' aImg={unknown}></Form>
        <Form name='이윤주' emails='ahnsbyeol3@gmail.com' major='철학과' aImg={unknown}></Form>
        <h5 className="Alumni_Class">2기 학회원</h5>
        <span>회장 : 조연서(3기) | 부회장 : 유미선(3기) | 총무 : 신한이(3기) | 이유림(3기)</span>
        <h5 className="Alumni_Class">1기 학회원</h5>
        <span>회장 : 조연서(3기) | 부회장 : 유미선(3기) | 총무 : 신한이(3기) | 이유림(3기)</span>
      </Jumbotron>

    </div>
  );
}

export default Alumni;