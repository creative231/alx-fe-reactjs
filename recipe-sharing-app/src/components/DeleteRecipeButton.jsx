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
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
