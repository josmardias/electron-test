import React, { Component } from 'react';
import './App.css';

import { listFiles } from 'core/util'

class App extends Component {
  render() {
    return (
      <div className="App">
        $ ls
        <code>
        {
          listFiles().map((el) => (
            <div>{el}</div>
          ))
        }
        </code>
      </div>
    );
  }
}

export default App;
