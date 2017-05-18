import React from 'react';
import ResultListEntry from './ResultListEntry.jsx';
import axios from 'axios';


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [
        {address: 'Chula Vista',
          admission_rate: 0.81,
          average_gpa: 3,
          average_sat_score: 1047,
          description: 'We are happy to have served the San Diego community at our Chula Vista campus since 1998. We boast a new medical assisting lab that consists of the same equipment used in hospitals and clinics. We also have developed excellent relationships with the Chula Vista Animal Care Facility for our veterinary programs, enabling students to have real-world experience right in their home community.',
          id: 274,
          image_url: 'https://pmi.edu/images/campus/chula',
          name: 'Pima Medical Institute-Chula Vista',
          size: 901,
          sports_division: 0,
          state: 'CA',
          tuition: 9634,
          website_url: 'pmi.edu'}
      ]
    };
  }

  componentDidMount() {
    //axios get for favorites
  }


  render() {
    return (
      <div className="container-fluid-fullwidth">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid" className="navigation">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">UforU</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#">Schools</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" role="button">Settings <span className="caret"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav >
          <div>
            <h5><u><b>YOUR FAVORITE UNIVERSITIES</b></u></h5>
            {this.state.colleges.map((college, i) => (<ResultListEntry key={i} college={college} />))}
          </div>
        </div>
    );
  }
}

export default Favorites;