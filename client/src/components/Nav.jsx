import React from 'react';

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
          <a href="#" className="navbar-brand">UforU</a>
         </div>
         <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Favorites</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" role="button">Settings <span className="caret"></span></a>
                </li>
              </ul>
            </div>
        </div>
        </nav>
    );
  }
}

export default Nav;