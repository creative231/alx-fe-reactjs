import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
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
