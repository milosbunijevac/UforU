import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './components/Survey.jsx';
import Results from './components/Results.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>UForU</h1>
        <Survey />
        <Results />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));