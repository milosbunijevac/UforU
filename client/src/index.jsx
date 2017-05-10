import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './components/Survey.jsx';
import Results from './components/Results.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    }

    this.sendSurveyInfo = this.sendSurveyInfo.bind(this);
    
    
  }

  sendSurveyInfo(userData) {
    console.log('axios data:', userData);
    axios({
      url: '/api/colleges/suggestions',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({
          colleges: results.data
        })
        console.log('axios results: ', results);
      })
      .catch ((error) => {
        console.log(error);
      });
  }

 


  // sendSurveyInfo(userData) {
  //   $.ajax({
  //     url: '/api/colleges/suggestions',
  //     method: 'POST',
  //     data: userData,
  //     success: (results) => {
  //       console.log('ajax results: ', results);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }



  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="#" className="navbar-brand">UforU</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="#">Schools</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" class="dropdown-toggle" role="button">Settings <span className="caret"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img className="img-responsive center-block" src="uforu_option1.png" alt="UFORUHERE"/>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        </div>
        <div className="container">
          <Results colleges = {this.state.colleges}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));