import { useState } from 'react';
import Day from './day';

export default function Days() {
  const [selectedDay, setSelectedDay] = useState(0);

  const getDays = () => {
    let days = [];
    const today = new Date();
    days.push(today);
    for (let i = 2; i < 7; i++) {
      days.push(new Date(today.getTime() + i * 86400000));
    }

    return days;
  };

  const handleClick = (idx: number) => {
    setSelectedDay(idx);
  };

  return (
    <div className="flex justify-center h-20 gap-x-8 px-14 py-2">
      {getDays().map((day, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Day date={day} isSelected={index === selectedDay ? true : false} />
        </div>
      ))}
    </div>
  );
}
