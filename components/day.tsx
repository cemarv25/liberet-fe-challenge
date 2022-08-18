import { CSSProperties } from 'react';

interface DayProps {
  date: Date;
  isSelected?: boolean;
}

export default function Day({ date, isSelected = false }: DayProps) {
  const getDayName = (currDate: Date) => {
    const dayName = currDate.toLocaleDateString('es-MX', { weekday: 'short' });
    return dayName.charAt(0).toUpperCase() + dayName.slice(1);
  };

  const selectedStyle: CSSProperties = {
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#FCAB3F',
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <span className="text-xl">{getDayName(date)}</span>
      <span
        className="py-1 px-2"
        style={isSelected ? selectedStyle : undefined}
      >
        {date.getDate()}
      </span>
    </div>
  );
}
