import React from 'react';

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const college = this.props.college;
    return (
      <div className = "card">
        <div className="row">
          <div className="col-md-3">
            <img className="img-responsive cardImages style_prevu_kit" src = {college.image_url}/>
          </div>
          <a className="college-name" href={"http://" + college.website_url}> {college.name}</a>
          <p className="description">{college.description}</p>
        </div>
      </div>
    );
  }
}

export default ResultListEntry;