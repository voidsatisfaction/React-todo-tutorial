import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import CreateTodo from './create-todo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this._renderItems.bind(this);
  }
  _renderItems() {
    const { todos, toggleTask, saveTask, deleteTask } = this.props;
    return (
      todos.map((todo, index) => {
        return (
          <TodosListItem 
            key={index}
            index={index}
            {...todo}
            toggleTask={toggleTask}
            saveTask={saveTask}
            deleteTask={deleteTask}
          />
        );
      })
    );
  }
  render() {
    const { todos, createTask } = this.props;
    return (
      <div>
        <table>
          <TodosListHeader />
          <tbody>
          {
            this._renderItems()
          }
          </tbody>
        </table>
        <CreateTodo
          todos={todos}
          createTask={createTask}
        />     
      </div>
    );
  }
}