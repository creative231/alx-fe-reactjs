import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-gray-700 dark:text-gray-300">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Link
        to="/"
        className="text-indigo-500 hover:text-indigo-600 font-medium mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {recipe.title}
          </h1>

          {/* Ingredients Section */}
          {recipe.ingredients && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Cooking Instructions Section */}
          {recipe.instructions && (
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
