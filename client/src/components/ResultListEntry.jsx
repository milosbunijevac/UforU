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
            <img className="img-responsive cardImages" src = {college.image_url}/>
          </div>
           <div class="col-md-3">
             <a className="college-name" href={"http://" + college.website_url}> {college.name}</a>
          </div>
          <div class="col-md-3">
            <p className="description">{college.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultListEntry;