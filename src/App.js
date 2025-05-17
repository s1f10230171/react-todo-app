import React, { useState, useEffect } from 'react';
import { useTodos } from './hooks/useTodos';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MyChart from './components/MyChart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Header from './components/Header';
import StackedImages from './components/StackedImage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getThisWeekClearCount } from './utils/utils';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';

function App() {

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
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
