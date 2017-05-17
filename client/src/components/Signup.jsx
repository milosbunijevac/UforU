import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false
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

        console.log('User successfully signed up');
      })
      .catch ((error) => {
        this.setState({
          showError: true
        });
      });
  }

  updateVal(name, event) {
    var updater = {};
    updater[name] = event.target.value;
    this.setState(updater);
  }

  onSignupSubmit () {
    let userInfo = {username: this.state.username, password: this.state.password};
    axios({
      url: '/signup',
      method: 'POST',
      data: userInfo,

    })
      .then (
        //We'll get a response from this post, and that response is going to either be good we made a user or the user already exists.
        //We need to handle this occurance.
        console.log('Signup submission posted')
      )
      .catch ((error) => {
        console.log('An error occurred inside of the onSignupSubmit method' + error);
      });
  }

  render() {
    return (
      <div>
        <h3 className = "loginText"> Please Signup below </h3>
        <h3 className = "loginText"> Signup will allow you to customize your preferences! </h3>
        <div className = "col-md-6 col-md-offset-3">
          <div className = "form-group has-error">
            <input className = "form-control" type = "text" name = "username" placeholder = "Enter Username" onChange={this.updateVal.bind(this, 'username')}></input>
            <input className = "inputText" type = "text" name = "password" placeholder = "Enter Password" onChange={this.updateVal.bind(this, 'password')}></input>
          </div>
        </div>
        <div className = "loginButton">
          <button className = "loginButton" type = "submit" onClick = {this.onSignupSubmit.bind(this)}>Signup</button>
        </div>
      
      </div>
    );
  }
}

export default Signup;