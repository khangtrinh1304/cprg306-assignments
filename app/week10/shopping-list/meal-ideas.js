"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-white">Meal Ideas</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-red-800 cursor-pointer text-white">
              {meal.strMeal}
            </li>
          ))
        ) : (
          <p className="text-white">No meal ideas available.</p>
        )}
      </ul>
    </div>
  );
}
