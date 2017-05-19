import React from 'react';
import FavsListEntry from './FavsListEntry.jsx';
import Nav from './Nav.jsx';
import axios from 'axios';


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: []
    };
  }

  componentDidMount() {
    var that = this;
    axios.get('/api/favorites')
      .then(function(response) {
        that.setState({colleges: response.data});
      }).catch(function(error) {
        console.log(error);
      });
  }


  render() {
    if (this.state.colleges.length > 0) {
      return (
        <div className="container-fluid-fullwidth">
          <Nav />
            <div>
              <h5><u><b>YOUR FAVORITE UNIVERSITIES</b></u></h5>
              {this.state.colleges.map((college, i) => (<FavsListEntry key={i} college={college} />))}
            </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid-fullwidth">
        <Nav />
          <div>
            <h5><u><b>YOU DO NOT HAVE ANY FAVORITES</b></u></h5>
          </div>
      </div>
      );
    }
  }
}

export default Favorites;