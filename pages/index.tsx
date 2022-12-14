import useSWR from 'swr';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Chips from '../components/chips';
import MealsList from '../components/mealsList';

interface HomeProps {
  meals: Array<Meal>;
  categories: Array<Category>;
}

const Home: NextPage<HomeProps> = ({ meals, categories }) => {
  const [currMeals, setCurrMeals] = useState(meals);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`
      );
      const data = await res.json();
      setCurrMeals(data.meals);
    };

    fetchMeals().catch(() => alert('Error'));
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title>Liberet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex flex-col h-screen items-center py-2 overflow-scroll"
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <Chips
          selectedCategory={selectedCategory.strCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        <MealsList meals={currMeals} />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const mealsRes = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
  );
  const mealsData = await mealsRes.json();
  const meals = mealsData.meals;

  const categoriesRes = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const categoriesData = await categoriesRes.json();
  const categories = categoriesData.categories;

  return {
    props: { meals, categories },
  };
};

export default Home;
