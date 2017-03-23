import React, { Component } from 'react';
import Tasks from './components/tasks.js';
import ActiveTask from './components/active-task';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      'Wakeup',
      'Lunch',
      'Sleep'
    ],
    activeTask: null
  }

  setTask(task) {
    this.setState({
      activeTask: task
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo Manager</h2>
        </div>
        <Tasks tasks={this.state.tasks} setTask={this.setTask.bind(this)} />
        <ActiveTask task={this.state.activeTask} />
      </div>
    );
  }
}

export default App;
