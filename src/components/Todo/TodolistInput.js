import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { v4 } from 'uuid';

class TodolistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      todoValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  // This will submit Todo list value and adding to todo list
  handleSubmit() {
    this.props.onSubmit({
      id: v4(),
      content: this.state.todoValue,
      isComplete: false,
    });
    this.setState(state => {
      state.todoValue = ''; // If submit - erase all value inside textfield
      state.isDisabled = true;
      return state;
    });
  }

  // Receive the input
  handleTextInput(event) {
    this.setState(state => {
      state.todoValue = event.target.value;
      state.todoValue ? (state.isDisabled = false) : (state.isDisabled = true);
      return state;
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <TextField
          fullWidth
          color='secondary'
          label='What to do next....?'
          variant='outlined'
          value={this.state.todoValue}
          InputProps={{
            endAdornment: (
              <IconButton
                disabled={this.state.isDisabled}
                aria-label='add'
                color='secondary'
                onClick={this.handleSubmit}
              >
                <AddCircle fontSize='large' />
              </IconButton>
            ),
          }}
          onChange={this.handleTextInput}
        />
      </div>
    );
  }
}

export default TodolistInput;
