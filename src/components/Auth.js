import React from 'react';
import Alumni from './Alumni';
import './Auth.css';

class Auth extends React.Component {
    state = {
        password: '',
        rightPassword: '0322',
        auth: false
    }

    handleOnPasswordInput(passwordInput) {
        this.setState({ password: passwordInput });
    }

    doesPasswordMatch() {
        const { password, rightPassword } = this.state;
        return password === rightPassword;
    }

    confirmPasswordClassName() {
        const { password } = this.state;
      
        if (password) {
          return this.doesPasswordMatch() ? true : false ;
        }
    }

    renderFeedbackMessage() {
        const { password } = this.state;
      
        if (password) {
            if (!this.doesPasswordMatch()) {
                return (
                <div className="invalid-feedback">패스워드가 일치하지 않습니다</div>
            );
          }
          else
            this.setState({auth: true});

        }
      }


  render() {
    const {auth} = this.state;
    if(!auth) {
    return (
      <div className="auth">
        <form className="my-form">
          {this.renderFeedbackMessage()}
            <div className="text-area">
              <label htmlFor="passwordInput" >패스워드를 입력하세요 </label>
              <input 
                margin="100px"
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={e => this.handleOnPasswordInput(e.target.value)}
              />
            </div>
        </form>
      </div>
    );
    }
    else
        return (<Alumni />);
  }
}

export default Auth;