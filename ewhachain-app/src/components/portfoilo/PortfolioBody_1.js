import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import "./PortfoiloBody.css";
import image from "../../images/logo.png"

class PortfoiloBody_1 extends React.Component {
   render() {
        return (
            <div className="portfoiloBody">
                <Jumbotron >
                    <div className="portfoiloBody_title">
                        <h1>1기</h1>
                    </div>
                    <div className="portfoiloBody_text">
                        1기는 이런거 했어요~~ 메뉴 누르면 넘어가는거 test중<br></br>
                        <img 
                            src={image} 
                            alt="sample"
                            width="500px"
                            height="500px"
                            ></img>
                    </div>
                </Jumbotron>
                </div>
        );
    }
}

export default PortfoiloBody_1;