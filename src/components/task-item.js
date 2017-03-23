import React, { Component } from 'react';

class TaskItem extends Component {

  render() {
    return (
      <li onClick={() => this.props.setTask(this.props.task)}>{this.props.task}</li>
    );
  }
}

export default TaskItem;
