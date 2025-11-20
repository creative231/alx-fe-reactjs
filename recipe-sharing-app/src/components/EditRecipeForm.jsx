import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // The form receives `recipe` as a prop and will be remounted when
  // the parent renders it with a different `key` (see RecipeDetails).
  // This avoids setting state inside an effect which can trigger lint
  // warnings about cascading renders.

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    if (!t) {
      setError('Title is required');
      return;
    }
    updateRecipe({ id: recipe.id, title: t, description: description.trim() });
    navigate(`/recipes/${recipe.id}`);
  };

  if (!recipe) return null;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ marginTop: '8px' }}>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div style={{ marginTop: '8px' }}>
        <button type="submit" disabled={!title.trim()}>Save</button>
      </div>
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
    </form>
  );
};

export default EditRecipeForm;
