import './App.css';
import TodoListLayout from './layouts/Todo/Todolist';
import HeaderLayout from './layouts/Header/Header';

function App() {
  return (
    <div className='container'>
      <div className='container-items d-flex justify-content-center align-items-center flex-column'>
        <HeaderLayout />
        <TodoListLayout />
      </div>
    </div>
  );
}

export default App;
