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
                <a href={"http://" + college.website_url}> {college.name}</a>
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