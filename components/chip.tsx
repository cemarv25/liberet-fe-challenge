import { ReactNode, useEffect, useState } from 'react';

interface ChipProps {
  type: string;
  description: string;
  values: Array<string> | Array<Category>;
  img: ReactNode;
  selectedCategory?: string;
  setSelectedCategory?: (val: Category) => void;
}

export default function Chip({
  type,
  values,
  img,
  description,
  setSelectedCategory,
}: ChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currValue, setValue] = useState<string | Category>();

  const renderOptions = () => {
    if (typeof currValue === 'string')
      return values.map((val, index) => (
        <div
          className="px-4 py-2 bg-zinc-50 rounded shadow-sm hover:shadow-gray-500"
          key={index}
          onClick={() => {
            setValue(val);
            setIsOpen(false);
          }}
        >
          {val as string}
        </div>
      ));

    return values.map((val, index) => (
      <div
        className="px-4 py-2 bg-zinc-50 rounded shadow-sm hover:shadow-gray-200"
        key={index}
        onClick={() => {
          setValue(val);
          setSelectedCategory?.(val as Category);
          setIsOpen(false);
        }}
      >
        {(val as Category).strCategory}
      </div>
    ));
  };

  useEffect(() => {
    setValue(values[0]);
  }, [values]);

  return (
    <>
      <div
        className="flex rounded-full bg-white p-2 gap-2"
        onClick={() => {
          if (type === 'empty') {
            alert('Has hecho click en "Platillos"');
          } else {
            setIsOpen((prevValue) => !prevValue);
          }
        }}
      >
        {img}
        <span>
          {currValue && type !== 'category'
            ? (currValue as string)
            : (currValue as Category)?.strCategory}
        </span>
      </div>
      <div
        className={`absolute z-10 h-screen w-screen flex justify-center bg-gray-600/75 ${
          isOpen ? '' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`absolute flex flex-col bg-white w-1/2 h-min py-10 px-6 z-20 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="flex flex-row gap-4">
          {img}
          {description}
        </div>
        <div className="flex flex-col w-3/4 gap-2 pt-2">
          {values && renderOptions()}
        </div>
      </div>
    </>
  );
}
