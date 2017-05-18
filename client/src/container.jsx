import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Container extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {

    // Make axios call to check if logged in
    axios({
      url: '/auth',
      method: 'POST'
    })
      .then((results) => {
        if (results.data && this.state.isLoggedIn === false) {
          this.setState({isLoggedIn: true});
        }

        if (this.state.isLoggedIn) {
          return <Redirect to='/home' />;
        } else {
          return <Redirect to='/login' />;
        }
        console.log('Container.jsx results.data', results.data);

      })
      .catch((error) => {
        console.log('Container.jsx error', error);
      });

    console.log('Login state', this.state.isLoggedIn);


  }
}

export default Container;