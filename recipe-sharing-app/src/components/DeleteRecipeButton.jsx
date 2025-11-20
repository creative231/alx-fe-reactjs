// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // optionally: confirm
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
      // inside any component
const addRecipe = useRecipeStore(s => s.addRecipe);
addRecipe({ id: 1, title: 'Test', description: 'x' });
console.log(useRecipeStore.getState().recipes);

    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
