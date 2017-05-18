import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: '',
                  isLoggedIn: false
    };
  }

  onLoginSubmit () {
    let userInfo = {username: this.state.username, password: this.state.password};
    axios({
      url: '/login',
      method: 'POST',
      data: userInfo
    })
      .then ((results) => {
        this.setState({isLoggedIn: true});
      })
      .catch ((error) => {
        // if status = 404 should display error
        console.log('An error occurred inside of the onLoginSubmit method' + error);
      });
  }

  updateVal(name, event) {
    var updater = {};
    updater[name] = event.target.value;
    this.setState(updater);
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Redirect to='/home' />
      );
    }

    return (
      <div className = "signupContain">
        <p className = "loginText"> Please Login below </p>
        <div className = "col-md-2 col-md-offset-5">
          <input className = "inputText" type = "text" name = "username" placeholder = "Enter Username" onChange={this.updateVal.bind(this, 'username')}></input>
          <input className = "inputText" type = "text" name = "password" placeholder = "Enter Password" onChange={this.updateVal.bind(this, 'password')}></input>
        </div>
        <div className = "loginButton">
          <button className = "loginButton" type = "submit" onClick = {this.onLoginSubmit.bind(this)}>Login</button>
          <h6>Don't have an account? <a href='/signup'>Sign Up!</a> </h6>
        </div>

      </div>
    );
  }
}

export default Login;