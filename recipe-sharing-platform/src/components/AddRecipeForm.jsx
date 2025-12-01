import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please list at least 2 ingredients.";
    if (!instructions.trim()) newErrors.instructions = "Preparation steps are required.";
    else if (instructions.split("\n").length < 2)
      newErrors.instructions = "Please list at least 2 steps.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      console.log("New Recipe Submitted:", { title, ingredients, instructions });

      const validate = () => {
  const newErrors = {};
  if (!title.trim()) newErrors.title = "Title is required.";
  if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
  else if (ingredients.split("\n").length < 2)
    newErrors.ingredients = "Please list at least 2 ingredients.";
  if (!instructions.trim()) newErrors.instructions = "Preparation steps are required.";
  else if (instructions.split("\n").length < 2)
    newErrors.instructions = "Please list at least 2 steps.";

  return newErrors;
};

// Usage inside handleSubmit
const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setSuccess(false);
  } else {
    // submit logic
  }
};


      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Add New Recipe
      </h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Recipe submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-900 dark:text-white">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            } dark:bg-gray-800 dark:text-white dark:border-gray-600`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium text-gray-900 dark:text-white">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } dark:bg-gray-800 dark:text-white dark:border-gray-600`}
            placeholder="e.g. 200g spaghetti"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-1 font-medium text-gray-900 dark:text-white">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            } dark:bg-gray-800 dark:text-white dark:border-gray-600`}
            placeholder="e.g. Boil pasta"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 mt-1 text-sm">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
