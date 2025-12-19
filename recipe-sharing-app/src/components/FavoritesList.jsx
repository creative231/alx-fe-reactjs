import { useRecipeStore } from './recipeStore';
import { useMemo } from 'react';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  // Memoize the mapped favorites array
  const favoriteRecipes = useMemo(() => {
    return favorites
      .map(id => recipes.find(r => r.id === id))
      .filter(Boolean); // remove undefined if recipe not found
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
