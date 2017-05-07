import React from 'react';

class ResultsList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
  	const college = this.props.college;
    return (
    <div>
      <h3>{college.name} </h3>
      <div>{college.description}</div>
      <img src={college.image_url}/>
    </div>
    );
  }

}

export default ResultsList;


