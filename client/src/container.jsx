import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Container extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: true
    };
  }

  componentWillMount() {
    axios({
      url: '/auth',
      method: 'POST'
    })
      .then((results) => {
        if (results.data) {
          this.setState({isLoggedIn: true, isLoading: false});
        } else {
          this.setState({isLoggedIn: false, isLoading: false});
        }
        console.log('Container.jsx results.data', results.data);
      })
      .catch((error) => {
        console.log('Container.jsx error', error);
      });

  }

  render() {
      if (this.state.isLoading) {
        return null;
      } else {
        if (this.state.isLoggedIn) {
          return <Redirect to='/home' />;
        } else {
          return <Redirect to='/login' />;
        }
      }
    console.log('Login state', this.state.isLoggedIn);
  }
}

export default Container;