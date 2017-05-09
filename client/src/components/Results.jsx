import React from 'react';
import ResultsList from './ResultsList.jsx';
import $ from 'jquery';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    }
  }


componentDidMount() {
   $.ajax({
      url: '/api/colleges/',
      method: 'GET',
      success: (data) => {
        this.setState({
          colleges: data
          
        });
      },
      error: (err) => {
        console.log('Some Error:', err);
      }
    });

}




   


  render() {
    return (
      <div>
      <ResultsList colleges={this.state.colleges}/>
      </div>
    );
  }
}

export default Results;