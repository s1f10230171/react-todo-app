import React, { useState, useEffect } from 'react';
import { useTodos } from './hooks/useTodos';
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
import { getToday,  getThisWeekClearCount } from './utils/utils';

function App() {
  const today = getToday();

  const { todos,  taskcount, clearcount, handleAdd, handleRemove, handleToggle } = useTodos();
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    setHistoryData(JSON.parse(localStorage.getItem("todosByDate")) || {});
  }, [todos]);

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
