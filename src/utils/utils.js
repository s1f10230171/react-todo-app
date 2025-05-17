// getToday: 今日の日付（YYYY-MM-DD）を返す
export const getToday = () => new Date().toISOString().split("T")[0];

// createId: ランダムなIDを生成
export const createId = () => Math.random().toString(36).substring(2);

// loadTodosByDate: 指定日付のToDoリストをlocalStorageから取得
export const loadTodosByDate = (date) => {
  const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
  return all[date] || [];
};

// saveTodosByDate: 指定日付のToDoリストをlocalStorageに保存
export const saveTodosByDate = (date, todos) => {
  const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
  all[date] = todos;
  localStorage.setItem("todosByDate", JSON.stringify(all));
};

// 未完了タスク数をカウント
export const countUnfinishedTodos = () => {
  const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
  let count = 0;
  Object.values(all).forEach(todoList => {
    todoList.forEach(todo => {
      if (!todo.isFinished) count++;
    });
  });
  return count;
};

// 今週の達成数合計を取得
export const getThisWeekClearCount = () => {
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
}; 