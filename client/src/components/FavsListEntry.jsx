import React from 'react';
import axios from 'axios';

class FavsListEntry extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showMessage: false
    // }
  }

  // favoriteHandler(entry) {
  //   console.log('in controller for favorites');
  //   axios({
  //     url: '/favorites',
  //     method: 'POST',
  //     data: {collegeId: entry.id}
  //   })
  //   .then((results) => {
  //     console.log('added to favorites - message received by client from server');
  //     this.setState({
  //       showMessage: true
  //     });
  //   })
  //   .catch((error) =>{
  //     console.log('error adding favorites');
  //   });
  // }

  deleteHandler(entry) {
    console.log('delete handler called');
    // axios({
    //   url: '/favoritesRemove',
    //   method: 'POST',
    //   data: {collegeId: entry.id}
    // })
    // .then((results) => {
    //   console.log('deleted from favorites - message recieved by client from server');
    // })
    // .catch((error) => {
    //   console.log('error deleting a favorite');
    // }); 
    this.props.deleteHandler(entry);
  }

  render () {
    const college = this.props.college;
    return (
      <div className = "card">
        <div className="row">
          <div className="col-md-3">
            <img className="img-responsive cardImages style_prevu_kit" src = {college.image_url}/>
          </div>
          <a className="college-name" href={'http://' + college.website_url}> {college.name}</a>
          {/*<div className="heart" onClick={this.favoriteHandler.bind(this,college)}></div>*/}
          {/*<p>{this.state.showMessage? 'College added to your favorites!': ''}</p>*/}
          <button className="deleteFavs" onClick={this.deleteHandler.bind(this, college)}>Remove from Favorites</button>
          <p className="description">{college.description}</p>
        </div>
      </div>
    );
  }
}

export default FavsListEntry;