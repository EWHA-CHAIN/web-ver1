import React from 'react';
import Notyet from '../components/Notyet';
import Recruit from "../components/Recruit";

class Recruiting extends React.Component {
    render(){
        return(
            // 모집기간일때는 컴포넌트를 Recruit로, 아니면 Notyet으로 
            <div>
                <Recruit />
            </div>

        );
    }
}

export default Recruiting;