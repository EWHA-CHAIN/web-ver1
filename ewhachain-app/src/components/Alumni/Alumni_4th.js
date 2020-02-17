import React from 'react';
import { Jumbotron, Card, Button, Badge, CardDeck } from 'react-bootstrap';
import Form from './AlumniForm';
import unknown from '../../images/unknown.png'
import './Alumni.css';

function Alumni_4th() {
  return(
    <div>
      <h5 className="Alumni_Class">4기 학회원</h5>
      <CardDeck> 
        <Form name='김동희' emails='ahnsbyeol3@gmail.com' major='경제학과 17학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='송경린' emails='blossommilktea@gmail.com' major='컴퓨터공학과 16학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='안샛별' emails='ahnsbyeol3@gmail.com' major='컴퓨터공학전공 17학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='이윤주' emails='penny@ewhain.net' major='철학과 17학번' aImg={unknown} active="4기 임원진(홍보) : 4기 활동"></Form>
      </CardDeck>
      <CardDeck>
        <Form name='정성원' emails='ahnsbyeol3@gmail.com' major='경영학과 15학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='정수연' emails='amtrd97@gmail.com' major='경제학과 17학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='최원희' emails='ahnsbyeol3@gmail.com' major='국어국문학과' aImg={unknown} active="4기 활동"></Form>
        <Form name='최원희' emails='ahnsbyeol3@gmail.com' major='국어국문학과' aImg={unknown} active="4기 활동"></Form>
      </CardDeck>
      <CardDeck>
        <Form name='고은지' emails='kosu7071@naver.com' major='휴먼기계바이오공학부 18학번' aImg={unknown} active="4기 활동"></Form>
        <Form name='유현선' emails='amtrd97@gmail.com' major='사이버보안전공 17학번' aImg={unknown} active="4기 활동"></Form>
        <Card className="form" id="empty"/>
        <Card className="form" id="empty"/>
      </CardDeck>
    </div>
  );
}

export default Alumni_4th;