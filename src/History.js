import { useEffect, useState } from 'react';

function History() {
  const [history, setHistory] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todosByDate")) || {};
    setHistory(saved);
  }, []);

  return (
    <div>
      <h2>タスク履歴</h2>
      {Object.entries(history).map(([date, todos]) => (
        <div key={date}>
          <h3>{date}</h3>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.isFinished ? "✔" : "✗"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default History;