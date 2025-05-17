import { useState, useEffect, useCallback } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import MyChart from './MyChart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "./History";
import Header from './Header';
import StackedImages from './StackedImage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToday, createId, loadTodosByDate, saveTodosByDate } from './utils';

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

  const getThisWeekClearCount = useCallback(() => {
    const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
    const now = new Date();
    const currentDay = now.getDay(); // 0:日曜, 1:月曜, ..., 6:土曜
    const monday = new Date(now);
    // 月曜日の日付を取得（日曜だったら1日前、月曜ならそのまま）
    const diffToMonday = (currentDay + 6) % 7;
    monday.setDate(now.getDate() - diffToMonday);
  
    let total = 0;
  
    for (let i = 0; i <= diffToMonday; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      const key = date.toISOString().split("T")[0];
      const todos = all[key] || [];
      total += todos.filter(todo => todo.isFinished).length;
    }
  
    return total;
  },[]);

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
            <StackedImages getThisWeekClearCount={getThisWeekClearCount}/>
            <p>※お花は週に22輪までしか咲きません</p>
          </div>
          } />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
