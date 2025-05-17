import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import MyChart from '../components/MyChart';
import StackedImages from '../components/StackedImage';
import { getThisWeekClearCount } from '../utils/utils';

const HomePage = ({ todos, taskcount, clearcount, handleAdd, handleRemove, handleToggle }) => (
  <div className="App-content">
    <TodoInput onAdd={handleAdd} />
    <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
    <p>{taskcount===0 ? `ALL CLEAR!!` : `未達成のタスク: ${taskcount} / 本日の達成数 : ${clearcount}`}</p>
    <p>今週の達成数合計: {getThisWeekClearCount()}</p>
    <MyChart taskcount={taskcount} clearcount={clearcount} />
    <StackedImages />
    <p>※お花は週に22輪までしか咲きません</p>
  </div>
);

export default HomePage; 