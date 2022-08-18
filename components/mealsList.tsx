import Meal from './meal';

interface MealsListProps {
  meals: Array<Meal>;
}

export default function MealsList({ meals }: MealsListProps) {
  return (
    <div className="grid grid-cols-2 py-2 px-8 gap-4">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
