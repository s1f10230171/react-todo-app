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
      <h3>タスク履歴</h3>
      {Object.entries(history).map(([date, todos]) => (
        <div key={date}>
          <p
            onClick={() => toggleDate(date)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {date} {openDates[date] ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
          </p>
          {openDates[date] && (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.isFinished ? <i class="bi bi-check text-success"></i> : <i class="bi bi-x text-danger"></i>}
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