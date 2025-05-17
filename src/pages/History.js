import { useState } from 'react';

function History({historyData}) {
  const [openDates, setOpenDates] = useState({});

  const toggleDate = (date) => {
    setOpenDates(prev => ({
      ...prev, 
      [date]: !prev[date]
    }));
  };

  return (
    <div>
      <h3>タスク履歴</h3>
      {Object.entries(historyData).map(([date, todos]) => (
        <div key={date}>
          <p
            onClick={() => toggleDate(date)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {date} {openDates[date] ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
          </p>
          {openDates[date] && (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.isFinished ? <i className="bi bi-check text-success"></i> : <i className="bi bi-x text-danger"></i>}
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