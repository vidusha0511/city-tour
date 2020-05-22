import React, { Component } from 'react';

// SCSS
import './css/custom.scss'

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar></Navbar>
        <TourList></TourList>
      </main>
    )
  }
}

export default App;
