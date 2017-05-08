import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './components/Survey.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {prefs: null}
    this.onChildChanged = this.onChildChanged.bind(this)
  }

  onChildChanged(newState){
    console.log('inside onChildChanged, state passed:',newState)
    console.log('inside onChildChanged, this is:', this)
    console.log('inside onChildChanged before update state: ',this.state)
    this.setState({prefs: newState})
    // setInterval(x => console.log(this.state),5000)
    console.log('inside onChildChanged after update state: ',this.state)
  }







  render() {
    return (
      <div>
        <h1>UForU</h1>
        <Survey callbackParent = {this.onChildChanged} />
        <Results prefs = {this.state.prefs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));