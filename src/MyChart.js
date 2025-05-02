import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MyChart({taskcount, clearcount}) {
  const data = [
    { name: '月', タスク: taskcount, クリア: clearcount },
    { name: '火', タスク: 5, クリア: 4 },
    { name: '水', タスク: 2, クリア: 2 },
    { name: '木', タスク: 4, クリア: 3 },
    { name: '金', タスク: 1, クリア: 1 },
    { name: '土', タスク: 1, クリア: 1 },
    { name: '日', タスク: 4, クリア: 3}
  ];
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