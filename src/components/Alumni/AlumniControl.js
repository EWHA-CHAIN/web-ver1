import Four from './Alumni_4th'
import Three from './Alumni_3rd'

class AlumniControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.alumni4Click.bind(this);
    this.handleLogoutClick = this.alumni3Click.bind(this);
    this.state = { alumniClicked: 4 };
  }

  alumni4Click() {
    this.setState({ alumniClicked: 4 });
  }

  alumni3Click() {
    this.setState({ alumniClicked: 3 });
  }

  render() {
    const alumniClicked = this.state.alumniClicked;
    if (alumniClicked===4) {
      <Four/>
    } 
    else if(alumniClicked===3) {
      <Three/>
    }

    return (
      <div>
        
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
