// src/components/RecipeDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
// import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Optional extra fields */}
      {recipe.ingredients && (
        <>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </>
      )}

      <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
      {" | "}
      <DeleteRecipeButton recipeId={recipe.id} />
      <br />
      <br />
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default RecipeDetails;
