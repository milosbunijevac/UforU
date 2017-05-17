import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3 className = "loginText"> Please Login below </h3>
        <h3 className = "loginText"> Logging in will allow you to save and customize various preferences including colleges, tuition and more! </h3>
        <div className = "inputLogin col-md-12">
          <input type = "text" name = "username" defaultValue = "Enter Username"></input>
          <input type = "text" name = "password" defaultValue = "Enter Password"></input>
        </div>
        <div className = "loginButton">
          <button type = "submit">Login</button>
        </div>
          
      </div>
    );
  }
}

export default Login;