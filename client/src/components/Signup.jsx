import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h2> Hello from signup </h2>
        {/*<form method = "POST">
          <input type = "text" name = "username" defaultValue = "Enter Username"></input>
          <input type = "text" name = "password" defaultValue = "Enter Password"></input>
        </form>*/}
      </div>
    );
  }
}

export default Signup;