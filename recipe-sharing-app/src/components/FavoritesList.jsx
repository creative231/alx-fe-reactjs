import { useRecipeStore } from './recipeStore';
import { useMemo } from 'react';

const FavoritesList = () => {
  // Get raw store values
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  // Memoize derived favoriteRecipes array
  const favoriteRecipes = useMemo(() => {
    return favorites
      .map(id => recipes.find(r => r.id === id))
      .filter(Boolean); // remove undefined if some recipe missing
  }, [favorites, recipes]);

  if (favoriteRecipes.length === 0) return <p>No favorites yet!</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
