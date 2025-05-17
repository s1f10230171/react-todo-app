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