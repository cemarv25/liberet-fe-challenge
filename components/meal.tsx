import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'MXN',
});

interface MealProps {
  meal: Meal;
}

export default function Meal({ meal }: MealProps) {
  const { data, error } = useSWR(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div className="relative animate-pulse w-full h-96 py-2">
        <div className="absolute top-4 right-2 h-4 w-8 bg-gray-100" />
        <div className="w-full h-5/6 rounded-t-lg flex flex-col justify-end p-1">
          <div className="bg-gray-100 h-4 w-3/4"></div>
          <div className="bg-gray-100 h-4 w-3/4"></div>
        </div>
      </div>
    );

  console.log('meal with id', meal.idMeal, data.meals[0].strTags);

  return (
    <div className="relative w-full h-96 py-2 hover:shadow-lg hover:shadow-gray-200">
      <div className="absolute top-4 right-2 bg-gray-100 px-1 rounded">
        <span style={{ color: '#FCAB3F' }}>
          {data?.meals[0]?.strTags?.split(',')[0]}
        </span>
      </div>
      <div
        className="w-full h-5/6 rounded-t-lg flex flex-col justify-end p-1"
        style={{
          backgroundImage: `url(${meal.strMealThumb})`,
          backgroundSize: '100% 100%',
        }}
      >
        <span className="text-white text-lg">{data.meals[0].strArea}</span>
        <span className="text-lg" style={{ color: '#FDC963' }}>
          {meal.strMeal}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-min py-2 px-2 bg-white rounded-b-lg shadow-md">
        <svg
          color="#FDC963"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-lg">
          {formatter.format(parseInt(meal.idMeal))}
        </span>
      </div>
    </div>
  );
}
