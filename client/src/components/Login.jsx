import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
  }

  onLoginSubmit () {
    let userInfo = {username: this.state.username, password: this.state.password};
    axios({
      url: '/login',
      method: 'POST',
      data: userInfo,
    })
      .then (
        console.log('Login submission posted')
      )
      .catch ((error) => {
        console.log('An error occurred inside of the onLoginSubmit method' + error);
      });
  }

  handleClickUser (event) {
    this.setState({username: event.target.value});
  }

  handleClickPass (event) {
    this.setState({password: event.target.value});
  }


  render() {
    return (
      <div>
        <h3 className = "loginText"> Please Login below </h3>
        <h3 className = "loginText"> Logging in will allow you to save and customize various preferences including colleges, tuition and more! </h3>
        <div className = "col-md-6 col-md-offset-3">
          <input className = "inputText" type = "text" name = "username" defaultValue = "Enter Username" onChange={this.handleClickUser.bind(this)}></input>
          <input className = "inputText" type = "text" name = "password" defaultValue = "Enter Password" onChange={this.handleClickPass.bind(this)}></input>
        </div>
        <div className = "loginButton">
          <button className = "loginButton" type = "submit" onClick = {this.onLoginSubmit.bind(this)}>Login</button>
        </div>
          
      </div>
    );
  }
}

export default Login;