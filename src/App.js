import React, { Component } from 'react';
import Tasks from './components/tasks.js';
import './App.css';

class App extends Component {
  render() {

    const tasks = [
      'Wakeup',
      'Lunch',
      'Sleep'
    ]

    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo Manager</h2>
        </div>
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default App;
