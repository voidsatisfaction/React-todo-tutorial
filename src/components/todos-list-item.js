import React, { Component } from 'react';

export default class TodosListItem extends Component {
  constructor(props) {
    super(props);
    this._onEditClick = this._onEditClick.bind(this);
    this._onSaveClick = this._onSaveClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._renderActionsSection = this._renderActionsSection.bind(this);
    this._renderTaskSection = this._renderTaskSection.bind(this);
    this.state = {
      isEditing: false,
    };
  }
  _onEditClick() {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }
  _onSaveClick() {
    this.props.saveTask(this.props.task, this.refs.saveInput.value);
    this.setState({
      isEditing: !this.state.isEditing,
    })    
  }
  _onDeleteClick() {
    console.log(this.props.index);
    this.props.deleteTask(this.props.index);
  }
  _renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer',
    };
    if (this.state.isEditing) {
      return (
        <td>
          <input defaultValue={task} ref="saveInput"/>
        </td>
      );
    } return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this,task)}>
        {task}
      </td>
    );
  }
  _renderActionsSection() {
   if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this._onSaveClick}>Save</button>
          <button onClick={this._onEditClick}>Cancel</button>
        </td>
      );   
    } return (
      <td>
        <button onClick={this._onEditClick}>Edit</button>
        <button onClick={this._onDeleteClick}>Delete</button>      
      </td>
    );
  }
  render() {
    return (
      <tr>
        { this._renderTaskSection() }
        { this._renderActionsSection() }
      </tr>
    );
  }
}