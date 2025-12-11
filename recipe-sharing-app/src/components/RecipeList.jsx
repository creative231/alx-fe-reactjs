import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const listToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {listToShow.map((recipe) => (
        <div
          key={recipe.id}
          style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}

      {listToShow.length === 0 && <p>No recipes found.</p>}
    </div>
  );
};

export default RecipeList;
