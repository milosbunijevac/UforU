import React from 'react';
import ResultsList from './ResultsList.jsx';
var _ = require('lodash');
import $ from 'jquery';

class Results extends React.Component {
  constructor(props) {
    console.log('props inside results: ',props)
    super(props);

  this.state = {
    colleges: []
  }
}
 componentDidMount() {
  // console.log('this inside didMount: ', this)
  console.log('props inside didMount: ',this.props)
    $.ajax({
      type: 'POST',
      url: '/api/colleges/suggestions',
      data: this.props.prefs
    })
    .done(function(res){
      this.setState({colleges:res.data})
      console.log(data)
    })
    .fail(function(err){
      console.log('error: ',err)
    })
  }

  render() {
    return (
       <div>
       {this.state.colleges}
      </div>
    );
  }
}
export default Results;
