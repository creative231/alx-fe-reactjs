import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(
    state => state.recipes.find(r => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // Initialize only once (no effect needed)
  const [title, setTitle] = useState(() => recipe?.title || '');
  const [description, setDescription] = useState(() => recipe?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
