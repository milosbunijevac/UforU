import React from 'react';
import ResultListEntry from './ResultListEntry.jsx';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        {this.props.colleges.map((college, i) => {
          return <ResultListEntry key={i} college={college} />
        })}
      </div>
    );
  }
}

export default ResultsList;