import React from 'react';
import Todolist from '../../components/Todo/Todolist';
import TodolistInput from '../../components/Todo/TodolistInput';

import { Container } from '@mui/material';
// This will show all the todo-list in listed

const TODO_STORAGE_KEY = process.env.REACT_APP_TODO_STORAGE_KEY;

class TodoListLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleDeleteItems = this.handleDeleteItems.bind(this);
  }

  componentDidMount() {
    const storageLocal = localStorage.getItem(TODO_STORAGE_KEY);

    // Adding List of Todo into local storage
    if (storageLocal) {
      this.setState({ todoList: JSON.parse(storageLocal) });
    } else {
      this.setState({ todoList: [] });
    }

    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(this.state.todoList));
  }

  handleInputSubmit(todo) {
    this.setState({ todoList: [todo, ...this.state.todoList] });
  }

  handleDeleteItems(todo) {
    this.setState(state => {
      state.todoList = state.todoList.filter(s => {
        return s.id !== todo.id;
      });

      return state;
    });
  }

  render() {
    return (
      <Container maxWidth='sm'>
        <div className='col-12'>
          <TodolistInput onSubmit={this.handleInputSubmit} />
        </div>
        <div className='col-12 mt-3'>
          <Todolist
            todoList={this.state.todoList}
            onDelete={this.handleDeleteItems}
          />
        </div>
      </Container>
    );
  }
}

export default TodoListLayout;
