import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false,
      redirect: false
    };
  }

usernameHandler(e) {
  this.setState({
    username: e.target.value
  });
}

passwordHandler(e) {
  this.setState({
    password: e.target.value
  });
}


submitHandler() {
  console.log('sending ', this.state.username, this.state.password);
  var userData = {
    username: this.state.username,
    password: this.state.password
  };

  axios({
      url: '/signup',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        console.log('User successfully signed up', results);
        this.setState({redirect: true});
      })
      .catch ((error) => {
        this.setState({
          showError: true
        });
      });
}

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />;
    }

    return (

      <div>
        <h2> Hello from signup </h2>

  <input type="text" name="username" onChange = {this.usernameHandler.bind(this)} />
  <input type="text" name="password" onChange = {this.passwordHandler.bind(this)}/>
  <input type="submit" onClick = {this.submitHandler.bind(this)}/>
  <div>
    {this.state.showError ? 'This user already exists': ''}
  </div>
      </div>
    );
  }
}

export default Signup;