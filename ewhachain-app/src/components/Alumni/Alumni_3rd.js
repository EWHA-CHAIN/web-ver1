import React from 'react';
import { Jumbotron, Card, Button, Badge, CardDeck } from 'react-bootstrap';
import unknown from '../../images/unknown.png'
import Form from './AlumniForm';
import './Alumni.css';

function Alumni_3rd() {
  return(
    <div>
      <h5 className="Alumni_Class">3기 학회원</h5>
      <CardDeck>
        <Form name='조연서' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 19학번' aImg={unknown} active="4기 학회장 : 3-4기 활동"></Form>
        <Form name='유미선' emails='miseon543@gmail.com' major='전자공학과 15학번' aImg={unknown} active="4기 임원진(학술) : 3-4기 활동"></Form>
        <Form name='이유림' emails='youlim14@gmail.com' major='휴먼기계바이오공학부 19학번' aImg={unknown} active="4기 임원진(회계) : 3-4기 활동"></Form>
        <Form name='문효진' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown}></Form>
      </CardDeck>
      <CardDeck>
        <Form name='백지희' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown}></Form>
        <Form name='김민경' emails='ahnsbyeol3@gmail.com' major='전자공학과 16학번' aImg={unknown} active="4기 임원진(정보) : 3-4기 활동"></Form>
        <Form name='신한이' emails='hanmen@ewhain.net' major='휴먼기계바이오공학부 17학번' aImg={unknown} active="4기 임원진(총무) : 3-4기 활동"></Form>
        <Form name='최현지' major='사이버보안전공 17학번' active="3기 활동"></Form>
      </CardDeck>
      <CardDeck>
        <Form name='이나경' active="3기 활동"></Form>
        <Form name='홍주연' emails='ghdwn643@naver.com' major='사이버보안전공 18학번' active="3-4기 활동"></Form>
        <Form name='김지은' active="3기 활동"></Form>
        <Form name='이혜인' active="3기 활동"></Form>
      </CardDeck>
      <CardDeck>
        <Form name='김효선' active="3기 활동"></Form>
        <Form name='이한나' active="3기 활동"></Form>
        <Form name='이지후' active="3기 활동"></Form>
        <Form name='서연주' major='컴퓨터공학전공 19학번' active="3기 활동"></Form>
      </CardDeck>
      <CardDeck>
        <Form name='심재민' active="3기 활동"></Form>
        <Form name='이정원' major='컴퓨터공학전공 17학번' active="3기 활동"></Form>
        <Form name='백주리' major='사이버보안전공 17학번' active="3기 활동"></Form>
        <Form name='박지은' active="3기 활동"></Form>
      </CardDeck>
  </div>);
}

export default Alumni_3rd;