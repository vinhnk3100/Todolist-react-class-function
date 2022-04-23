import React from 'react';
import TodoItem from './TodoItem';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rerendered: false };
    this.handleRerender = this.handleRerender.bind(this);
  }

  handleRerender() {
    console.log('Rerendered');
    this.setState({ rerendered: false });
  }

  render() {
    const { todoList, onDelete } = this.props;
    return (
      <>
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            todoList={todo}
            onDelete={onDelete}
            handleRerender={this.handleRerender}
          />
        ))}
      </>
    );
  }
}

export default Todolist;
