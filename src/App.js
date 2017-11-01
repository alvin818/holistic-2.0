import React, { Component } from 'react';

import Goal_Input from './Components/Goal_Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>HOLISTIC</header>
        <Goal_Input />

      </div>
    );
  }
}

export default App;
