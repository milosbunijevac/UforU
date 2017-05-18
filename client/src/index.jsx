import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './components/Survey.jsx';
import Results from './components/Results.jsx';
import axios from 'axios';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Favorites from './components/Favorites.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    },

    this.sendSurveyInfo = this.sendSurveyInfo.bind(this);
  }

  sendSurveyInfo(userData) {
    console.log('axios data:', userData);
    userData.size = userData.size.split('-');
    axios({
      url: '/api/colleges/suggestions',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({
          colleges: results.data
        });
        console.log('axios results: ', results);
      })
      .catch ((error) => {
        console.log(error);
      });
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
            <div className="container" id="banner">
              <h1>
                <b>UFORU</b>
              </h1>
              <hr></hr>
              <h4>
                UNIVERSITY FOR YOU
              </h4>
              <hr></hr>
          </div>
        <div className="container-fluid">
          <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        </div>
        <div className="container-fluid">
          <Results colleges = {this.state.colleges}/>
        </div>
          <div className="card">
            <div className="row" className="bio">
              <h6><b><u>ABOUT THE CREATORS</u></b></h6>
              <div className="col-md-4">
                <img src="images/farrah_bousetta.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="FARRAH PHOTO HERE"/>
              </div>
              <div className="col-md-4">
                <img src="images/arseniy_kotov.png" className="img-responsive bioImages" style={{ height: 200, width: 200}} alt="ARSENIY PHOTO HERE"/>
              </div>
              <div className="col-md-4">
                <img src="images/helen_tang.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="HELEN PHOTO HERE"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>Farrah Bousetta is an upcoming professional software engineer with previous experience at Facebook, Google and other prestegious tech companies. She gets stuff done. Her nickname is Feisty Farrah.</p>
              </div>
              <div className="col-md-4">
                <p>Arseniy Kotov is an all star programmer specializing in full stack developement.</p>
              </div>
              <div className="col-md-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        <div className = "container-fluid-fullwidth">
          <div className="navbar-default navbar-fixed-bottom">Made by Farrah Bousetta, Arseniy Kotov, and Helen Tang</div>
        </div>
      </div>
    );
  }
}

var requireLogin = function() {
  console.log('yay');
  axios({
    url: '/api/authenticate',
    method: 'GET',
  })
      .then ((results) => {

        console.log('User successfully signed up');
        // window.location = '/login';
      })
      .catch ((error) => {
        this.setState({
          showError: true
        });
      });

//  var request = new XMLHttpRequest();
// request.open('GET', 'authenticate', false);  // `false` makes the request synchronous
// request.send(null);


//   console.log(request.responseText);


};

ReactDOM.render(
  <Router>
    <div>
      {/*<Route path='/' render={() => {
        return <App onEnter={requireLogin()}/>;
      }} />*/}
      <Route path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </Router>, document.getElementById('app'));