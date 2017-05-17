import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
}

  render() {
    return (
      <div>
        <h2> Hello from signup </h2>
        
  <input type="text" name="username" onChange = {this.usernameHandler.bind(this)} />
  <input type="text" name="password" onChange = {this.passwordHandler.bind(this)}/>
  <input type="submit" onClick = {this.submitHandler.bind(this)}/>


      </div>
    );
  }
}

export default Signup;