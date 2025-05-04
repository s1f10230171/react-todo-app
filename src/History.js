import { useEffect, useState } from 'react';

function History() {
  const [history, setHistory] = useState({});
  const [openDates, setOpenDates] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todosByDate")) || {};
    setHistory(saved);
  }, []);

  const toggleDate = (date) => {
    setOpenDates(prev => ({
      ...prev, 
      [date]: !prev[date]
    }));
  };

  return (
    <div>
      <h2>タスク履歴</h2>
      {Object.entries(history).map(([date, todos]) => (
        <div key={date}>
          <h3
            onClick={() => toggleDate(date)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {date} {openDates[date] ? "▲" : "▼"}
          </h3>
          {openDates[date] && (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.isFinished ? "✔" : "✗"}
              </li>
            ))}
          </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default History;