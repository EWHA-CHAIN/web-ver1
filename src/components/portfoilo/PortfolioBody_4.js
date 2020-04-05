import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import "./PortfoiloBody.css";
import pf_01 from "../../images/change/pf01.png"
import pf_02 from "../../images/change/pf02.png"
import pf_03 from "../../images/change/pf03.png"
import pf_main from "../../images/change/pf04.png"

class PortfoiloBody_4 extends React.Component {
   render() {
        return (
            <div className="portfoiloBody">
                <Jumbotron >
                    <div className="portfoiloBody_title">
                        <h1>4기</h1>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="portfoiloBody_text">
                    <br></br><br></br>
                    <img 
                            src={pf_main} 
                            alt="pfMain"
                            width="1100"

                    ></img>
                    <br></br><br></br><br></br>
                    <img 
                            src={pf_01} 
                            alt="pf01"
                            width="1100"

                    ></img>
                    <br></br><br></br><br></br>
                    <img 
                            src={pf_02} 
                            alt="pf02"
                            width="1100"

                    ></img>
                    <br></br><br></br><br></br>
                    <img 
                            src={pf_03} 
                            alt="pf03"
                            width="1100"

                    ></img>
                    <br></br><br></br>
                    <br></br><br></br>
                    </div>
                </Jumbotron>
                </div>
        );
    }
}

export default PortfoiloBody_4;