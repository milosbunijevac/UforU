import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid" className="navigation">
          <div className="navbar-header">
          </div>
          <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/favorites">Favorites</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/logout">Logout</Link></li>
              </ul>
              </div>
          </div>
        </nav>
    );
  }
}

export default Nav;