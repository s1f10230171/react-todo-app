import { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const createId = () => Math.random().toString(36).substring(2);
  const initialTodos = [
    {
      id: createId(),
      text: "React勉強",
      isFinished: true
    },
    {
      id: createId(),
      text: "Java勉強",
      isFinished: false
    }
  ];

  const [todos, setTodos] = useState(initialTodos);
  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false
    };
    setTodos((todos) => [...todos, newTodo]);
  }
  const handleRemove = (deleteId) => {
      setTodos(todos.filter(todo => todo.id !== deleteId));
    }
  const handleToggle = (todoId) => {
      setTodos(todos.map(todo => todo.id === todoId ? {...todo, isFinished : !todo.isFinished } : todo));
  }
  return (
    <div className="App">
      <div className='App-title'>ToDo管理アプリ</div>
      <div className="App-content">
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </div>
    </div>
  );
}

export default App;
