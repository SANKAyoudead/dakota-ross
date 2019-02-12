import React, { Component } from 'react';
import '../scss/App.scss';
import FixedHeader from './FixedHeader';
import SectionTop from './SectionTop';
import GetInTouch from './GetInTouch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedHeader />
        <SectionTop />
        <GetInTouch />
      </div>
    );
  }
}

export default App;
