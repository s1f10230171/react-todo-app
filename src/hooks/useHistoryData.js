import { useState, useEffect } from 'react';

export function useHistoryData() {
  const [historyData, setHistoryData] = useState({});
  const [openDates, setOpenDates] = useState({});

  useEffect(() => {
    setHistoryData(JSON.parse(localStorage.getItem("todosByDate")) || {});
  }, []);

  const toggleDate = (date) => {
    setOpenDates(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  return {
    historyData,
    openDates,
    toggleDate
  };
} 