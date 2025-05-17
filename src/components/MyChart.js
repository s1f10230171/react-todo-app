import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { generateWeeklyChartData } from '../utils/utils';

function MyChart({taskcount, clearcount}) {
  const data = generateWeeklyChartData(); 
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis allowDecimals={false}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="タスク" stroke="#8884d8" />
      <Line type="monotone" dataKey="クリア" stroke="#82ca9d" />
    </LineChart>
  );
}

export default MyChart;