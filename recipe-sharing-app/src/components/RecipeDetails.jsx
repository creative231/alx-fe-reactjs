import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) return (
    <div style={{ padding: '2rem' }}>
      <p>Recipe not found.</p>
      <Link to="/">Back</Link>
    </div>
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>

  <h3 style={{ marginTop: '1.5rem' }}>Edit Recipe</h3>
  {/* pass key so EditRecipeForm remounts when a different recipe is loaded */}
  <EditRecipeForm key={recipe.id} recipe={recipe} />

      <div style={{ marginTop: '1rem' }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
