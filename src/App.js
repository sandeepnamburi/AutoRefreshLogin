import React, { Component } from 'react';
import './App.css';
import Intro from './Intro.js';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='App'>
        <Intro></Intro>
      </div>
    );
  }
}

export default App;
