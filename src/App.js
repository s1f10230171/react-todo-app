import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import MyChart from './MyChart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "./History";
import Header from './Header';

function App() {
  const getToday = () => new Date().toISOString().split("T")[0];
  const today = getToday();

  const loadTodosByDate = (date) => {
    const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
    return all[date] || [];
  };
  const saveTodosByDate = (date, todos) => {
    const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
    all[date] = todos;
    localStorage.setItem("todosByDate", JSON.stringify(all));
  };

  const createId = () => Math.random().toString(36).substring(2);


  const [todos, setTodos] = useState(() => loadTodosByDate(today));
  const [taskcount, setTaskcount] = useState(0)
  const [clearcount, setClearcount] = useState(0)
  const countUnfinishedTodos = () => {
    const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
    let count = 0;
    Object.values(all).forEach(todoList => {
      todoList.forEach(todo => {
        if (!todo.isFinished) count++;
      });
    });
    return count;
  };

  useEffect(() => {
    saveTodosByDate(today, todos);
  }, [todos]);

  useEffect(() => {
    setTaskcount(countUnfinishedTodos());
  }, [todos]);

  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false,
      idDeleted: false
    };
    setTodos((todos) => [...todos, newTodo]);
  }
  const handleRemove = (deleteId) => {
    setTodos(todos.map(todo =>
      todo.id === deleteId ? { ...todo, isDeleted: true } : todo
    ));
    }
  const handleToggle = (todoId) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === todoId) {
          const updated = { ...todo, isFinished: !todo.isFinished };
          setClearcount(c => c + (updated.isFinished ? 1 : -1));
          return updated;
        }
        return todo;
      });
    });
  }

  return (
    <Router>
      <div className="App">
        <div className='App-title'>ToDo管理アプリ</div>
        <Header />
        <Routes>
          <Route path="/" element={
        <div className="App-content">
          <TodoInput onAdd={handleAdd} />
          <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
          <p>{taskcount===clearcount ? `ALL CLEAR!!` : `未達成のタスク: ${taskcount} / 本日の達成数 : ${clearcount}`}</p>
          <MyChart taskcount={taskcount} clearcount={clearcount} />
        </div>
          } />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
