import React from 'react';
import { TextField, IconButton, ToggleButton } from '@mui/material';
import { Clear } from '@mui/icons-material';
import PenEdit from '../../public/icons8-edit.gif';
import CheckComplete from '../../public/icons8-check-all.gif';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.handleCheckToDo = this.handleCheckToDo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleCheckToDo(e) {
    console.log('Execute!');
    if (!e) {
      this.setState(prevState => ({
        isCompleted: !prevState.isCompleted,
      }));
    }
  }

  handleDeleteTodo(todo) {
    this.props.onDelete(todo);
  }

  render() {
    const { todoList } = this.props;
    return (
      <div className={'mt-3'}>
        <TextField
          label={
            <img
              alt='todo_img'
              src={this.state.isCompleted === true ? CheckComplete : PenEdit}
              width='30px'
            />
          }
          className={
            this.state.isCompleted === true
              ? 'todo_items completed'
              : 'todo_items'
          }
          value={todoList.content}
          size='large'
          variant='outlined'
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton
                disabled={this.state.isCompleted === false}
                onClick={() => this.handleDeleteTodo(todoList)}
                aria-label='add'
                color='error'
              >
                <Clear fontSize='large' />
              </IconButton>
            ),
          }}
          onClick={() => this.handleCheckToDo(todoList.isComplete)}
        />
      </div>
    );
  }
}

export default TodoItem;
