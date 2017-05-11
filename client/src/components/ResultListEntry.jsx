import React from 'react';

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const college = this.props.college;
    return (

      <div className = "card">
         <div className="container">
           <div className="college-name">
                <h2>{college.name}</h2>
            </div>
            <div className="description">
                <p>{college.description}</p>
            </div>
            <div className="image">
              <img className = "img-circle" src = {college.image_url}/>
            </div>
          </div>
      </div>
    );
  }
}

export default ResultListEntry;