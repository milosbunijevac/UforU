import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

class Results extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var colleges = this.props.colleges

    return (
      <div>
      {JSON.stringify(colleges)}
      </div>
    );
  }
}

export default Results;