import React, { Component } from 'react';
import Tasks from './components/tasks.js';
import ActiveTask from './components/active-task';
import AddTask from './components/add-task';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      'Wakeup',
      'Lunch',
      'Sleep'
    ],
    newTask: '',
    activeTask: null
  }

  setTask(task) {
    this.setState({
      activeTask: task
    });
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
    this.setState({
      newTask: ''
    });
  }

  updateNewTask(newTask) {
    this.setState({
      newTask: newTask
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
        <hr />
        <AddTask updateNewTask={this.updateNewTask.bind(this)} addTask={this.addTask.bind(this)} newTask={this.state.newTask} />
      </div>
    );
  }
}

export default App;
