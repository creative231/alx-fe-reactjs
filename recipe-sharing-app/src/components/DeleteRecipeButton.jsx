import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // for redirection

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // redirect to home after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: '10px',
        padding: '5px 10px',
        backgroundColor: '#ff6347',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
