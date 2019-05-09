import React, { Component } from 'react';
import './resources/styles.css';

import {
  Header,
  Featured,
  VenueInfo,
  Highlights
} from './components/index'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'2000px', backgroundColor: '#ccc'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
