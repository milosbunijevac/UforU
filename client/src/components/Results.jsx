import React from 'react';
import ResultsList from './ResultsList.jsx';
var _ = require('lodash');

class Results extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    colleges: []
  }

  componentDidMount: function() {

  }

  componentWillMount: function() {

  }

  _onChange: function() {
    this.setState({
      colleges: colleges.getSuggestions()
    })
  }


}


  render() {
    return (
       <div>
        {this.state.colleges.map((college, i) => {
          return <ResultsList key={i} college ={college} />
        })}
      </div>
    );
  }

}

export default Results;
