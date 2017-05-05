import React from 'react';
import SurveyList from './SurveyList.jsx';

class Survey extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h5>Survey</h5>
        <SurveyList />
      </div>
    );
  }
}

export default Survey;