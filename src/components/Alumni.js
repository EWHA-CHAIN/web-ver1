import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';
import Four from './Alumni/Alumni_4th'
import Three from './Alumni/Alumni_3rd'
import './Alumni/Alumni.css';

function Display(props) {
  const alumniClicked = props.alumniNum;
  if (alumniClicked ===3) {
    return <Three />;
  }
  return <Four/>;
}

class Alumni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumniClicked : 4
    }
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick4 = () => {
    this.setState({
      alumniClicked : 4
    });
  }

  handleClick3 = () => {
    this.setState({
      alumniClicked : 3
    });
  }
  
  handleClick2 = () => {
    this.setState({
      alumniClicked : 2
    });
  }

  render(){
  return(
      <Jumbotron className="Alumni_Form">
        <h1>ALUMNI of EWHA-CHAIN</h1>
        <div className="AlumniButton">
        <button onClick={this.handleClick4}>4기</button>
        <button onClick={this.handleClick3}>3기</button>
        </div>
        <Display alumniNum={this.state.alumniClicked} />
      </Jumbotron>
  );}
}

export default Alumni;