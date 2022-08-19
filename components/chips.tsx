import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Chip from './chip';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Chips() {
  const [categories, setCategories] = useState(['Loading...']);
  const { data, error } = useSWR(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
    fetcher
  );

  useEffect(() => {
    if (!data) {
      setCategories(['Error']);
    } else {
      setCategories(data.categories);
    }
  }, [data]);

  if (error) setCategories(['Error']);

  const timeImg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#FDC963"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const catImg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color="#FDC963"
      className="h-6 w-6"
      fill="currentColor"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z" />
      </g>
    </svg>
  );

  const emptyImg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      color="#FDC963"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );

  const handleEmptyClick = () => alert('Has hecho click en "+1 Platillos"');

  const handleCatClick = () => alert('Has hecho click en las categorias');

  const handleTimeClick = () => alert('Has hecho click en los tiempos');

  return (
    <div className="flex gap-2 w-5/6 justify-evenly">
      <Chip
        type="time"
        values={['11:00am - 12:00pm', '1:00pm - 2:00pm', '2:00pm - 3:00pm']}
        img={timeImg}
        handleClick={handleTimeClick}
      />
      <Chip
        type="category"
        values={categories}
        img={catImg}
        handleClick={handleCatClick}
      />
      <Chip
        type="empty"
        values={['Platillos']}
        img={emptyImg}
        handleClick={handleEmptyClick}
      />
    </div>
  );
}
