import { useState, useEffect } from 'react';
import { getToday, createId, loadTodosByDate, saveTodosByDate, countUnfinishedTodos } from '../utils/utils';

export function useTodos() {
  const today = getToday();
  const [todos, setTodos] = useState(() => loadTodosByDate(today));
  const [taskcount, setTaskcount] = useState(0);
  const [clearcount, setClearcount] = useState(0);

  useEffect(() => {
    saveTodosByDate(today, todos);
  }, [todos, today]);

  useEffect(() => {
    setTaskcount(countUnfinishedTodos());
  }, [todos]);

  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false,
      isDeleted: false
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const handleRemove = (deleteId) => {
    setTodos(todos.map(todo =>
      todo.id === deleteId ? { ...todo, isDeleted: true } : todo
    ));
  };

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
  };

  return {
    todos,
    setTodos,
    taskcount,
    clearcount,
    handleAdd,
    handleRemove,
    handleToggle
  };
} 