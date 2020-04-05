import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import "./PortfoiloBody.css";
import image from "../../images/logo.png"

class PortfoiloBody_2 extends React.Component {
   render() {
        return (
            <div className="portfoiloBody">
                <Jumbotron >
                    <div className="portfoiloBody_title">
                        <h1>2기</h1>
                    </div>
                    <div className="portfoiloBody_text">
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

export default PortfoiloBody_2;