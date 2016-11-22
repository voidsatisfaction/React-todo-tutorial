import React, { Component } from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'Make React Tutorial',
    isCompleted: false,
  },
  {
    task: 'Eat Dinner',
    isCompleted: true,
  },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      todos: todos,
    };
  }
  createTask(task) {
    this.state.todos.push({ task, isCompleted: false }); 
    this.setState({
      todos: this.state.todos,
    })
  }
  toggleTask(task) {
    this.state.todos.forEach((todo, index) => {
      if (todo.task === task) {
        todo.isCompleted = !todo.isCompleted;
        this.setState({
          todos: this.state.todos,
        })
        return;
      }
    })
  }
  saveTask(oldTask, newTask) {
    this.state.todos.forEach((todo, index) => {
      if (todo.task === oldTask) {
        todo.task = newTask;
        this.setState({
          todos: this.state.todos,
        })
        return;
      }
    }) 
  }
  deleteTask(index) {
    this.state.todos.splice(index,1);
    this.setState({
      todos: this.state.todos,
    })
  }
  render() {
    return (
      <div>
        <h1>React Todoes App</h1>
        <TodosList
          todos={this.state.todos}
          createTask={this.createTask}
          toggleTask={this.toggleTask}
          saveTask={this.saveTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}