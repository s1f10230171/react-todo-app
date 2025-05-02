import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const getWeekdayName = (dateStr) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const day = new Date(dateStr).getDay();
  return days[day];
};

const getThisWeekDates = () => {
  const now = new Date();
  const day = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((day + 6) % 7)); // 月曜を基準に週取得

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
};

const generateWeeklyChartData = () => {
  const all = JSON.parse(localStorage.getItem("todosByDate")) || {};
  const weekDates = getThisWeekDates();

  return weekDates.map(date => {
    const todos = all[date] || [];
    const task = todos.length;
    const clear = todos.filter(t => t.isFinished).length;
    return {
      name: getWeekdayName(date),
      タスク: task,
      クリア: clear
    };
  });
};

function MyChart({taskcount, clearcount}) {
  const data = generateWeeklyChartData(); 
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="タスク" stroke="#8884d8" />
      <Line type="monotone" dataKey="クリア" stroke="#82ca9d" />
    </LineChart>
  );
}

export default MyChart;