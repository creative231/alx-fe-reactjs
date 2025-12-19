import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
