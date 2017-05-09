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
      colleges: null
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
      <div>
        <h1>UForU</h1>
        <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        <Results colleges = {this.state.colleges}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));