import React, { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load data from the JSON file
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {recipe.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{recipe.summary}</p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                import { Link } from "react-router-dom";

<a
  as={Link}
  to={`/recipe/${recipe.id}`}
  className="mt-4 inline-block text-indigo-500 hover:text-indigo-600 font-medium transition-colors duration-200"
>
</a>
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
