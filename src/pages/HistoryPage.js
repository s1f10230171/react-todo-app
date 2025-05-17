import { useState, useEffect } from 'react';
import History from '../components/History';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState({});
  useEffect(() => {
    setHistoryData(JSON.parse(localStorage.getItem("todosByDate")) || {});
  }, []);
  return <History historyData={historyData} />;
};

export default HistoryPage; 