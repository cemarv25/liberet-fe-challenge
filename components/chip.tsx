import { ReactNode, useEffect, useState } from 'react';

interface ChipProps {
  type: string;
  values: Array<string> | Array<Category>;
  img: ReactNode;
  handleClick: () => void;
}

export default function Chip({ type, values, img, handleClick }: ChipProps) {
  const [currValue, setValue] = useState<string | Category>();

  useEffect(() => {
    setValue(values[0]);
  }, [values]);

  return (
    <div className="flex rounded-full bg-white p-2 gap-2" onClick={handleClick}>
      {img}
      <span>
        {currValue && type !== 'category'
          ? (currValue as string)
          : (currValue as Category)?.strCategory}
      </span>
    </div>
  );
}
