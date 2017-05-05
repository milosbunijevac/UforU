import React from 'react';
import ResultsList from './ResultsList.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div>
        <h5>Results</h5>
        <ResultsList />
      </div>
    );
  }

}

export default Results;