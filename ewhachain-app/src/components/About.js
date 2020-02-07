import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from '../images/logo.png';
function About() {
    return(
        <Jumbotron>
        <h1>활동한거</h1>
        <div>
            일단 모든 페이지 css랑 디자인은 뺐어요 디자인못해요ㅠ.ㅠ 저한테는 코딩 시키세요<br></br>
            설명을 넣든가 해요 여기. 위에 슬라이드 하나로 끝내긴 뭐하니까..<br></br>
            뭐 이런식으로 쭉쭉 더 쓸거 쓰기. 귀찮으면 우리 소개로 끝내도 됨.<br></br>
            근데 어후 로고 이미지 크기 줄여야겠다.
        </div>
        <div>
            <img src={logo} alt="sample"></img>
        </div>
        <div>
            <br></br>
            <Button variant="dark" href="/portfolio">more</Button>
            <p>버튼 클릭하면 portfolio로 가는식 뭐 이런걸루</p>
        </div>
        </Jumbotron>
    );
}

export default About;