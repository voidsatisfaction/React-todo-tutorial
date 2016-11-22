import React, { Component } from 'react';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this._handleCreate = this._handleCreate.bind(this);
    this._validateInput = this._validateInput.bind(this);
    this._includeTask = this._includeTask.bind(this);
    this.state = {
      error: false,
    }
  }
  _renderError() {
    if (this.state.error) {
      return <p style={{color: 'red'}}>{this.state.error}</p>
    }
  }
  _handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this._validateInput(task);

    if (validateInput) {
      this.setState({
        error: validateInput,
      })
    } else {
      this.setState({
        error: null,
      })
      this.props.createTask(task);
      this.refs.createInput.value = '';
    }
  }
  _validateInput(task) {
    if (!task) {
      return "Please write a task";
    } else if (this._includeTask(task)) {
      return "Task already exists."
    } else {
      return null;
    }
  }
  _includeTask(task) {
    console.log(task)
    let result = false;
    this.props.todos.forEach((todo) => {
      console.log(todo.task === task)
      if (todo.task === task) {
        result = true;
        return;
      }
    })
    return result;
  }
  render() {
    return (
      <div>
        { this._renderError() }
        <form onSubmit={this._handleCreate}>
          <input 
            type="text"
            placeholder="What do I need to do?"
            ref="createInput" 
          />
          <button type="">create</button>
        </form>
      </div>
    );
  }
}