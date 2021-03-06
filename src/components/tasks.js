import React, { Component } from 'react';
import TaskItem from './task-item'

class Tasks extends Component {
  items() {
    return this.props.tasks.map(task => <TaskItem key={task} task={task} setTask={this.props.setTask} />)
  }

  render() {
    return (
      <ul>
        {this.items()}
      </ul>
    );
  }
}

export default Tasks;
