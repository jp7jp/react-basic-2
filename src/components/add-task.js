import React, { Component } from 'react';

class AddTask extends Component {

  handleOnChange(e) {
    this.props.updateNewTask(e.target.value);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.props.newTask);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        Add a new task:<br />
        <input type="text" value={this.props.newTask} onChange={this.handleOnChange.bind(this)} />
        <input type="submit" />
      </form>
    );
  }
}

export default AddTask;
