import { useState, useEffect, useCallback } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MyChart from './components/MyChart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "./components/History";
import Header from './components/Header';
import StackedImages from './components/StackedImage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToday, createId, loadTodosByDate, saveTodosByDate, countUnfinishedTodos, getThisWeekClearCount } from './utils/utils';

function App() {
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

  const [todos, setTodos] = useState(() => loadTodosByDate(today));
  const [taskcount, setTaskcount] = useState(0)
  const [clearcount, setClearcount] = useState(0)
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    saveTodosByDate(today, todos);
  }, [todos]);

  useEffect(() => {
    setTaskcount(countUnfinishedTodos());
  }, [todos]);

  useEffect(() => {
    setHistoryData(JSON.parse(localStorage.getItem("todosByDate")) || {});
  }, [todos]);

  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false,
      isDeleted: false
    };
    // console.log(`タスク追加: "${text}", 日付: ${today}`);
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
        <Header />
        <Routes>
          <Route path="/" element={
          <div className="App-content">
            <TodoInput onAdd={handleAdd} />
            <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
            <p>{taskcount===0 ? `ALL CLEAR!!` : `未達成のタスク: ${taskcount} / 本日の達成数 : ${clearcount}`}</p>
            <p>今週の達成数合計: {getThisWeekClearCount()}</p>
            <MyChart taskcount={taskcount} clearcount={clearcount} />
            <StackedImages />
            <p>※お花は週に22輪までしか咲きません</p>
          </div>
          } />
          <Route path="/history" element={<History historyData={historyData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
