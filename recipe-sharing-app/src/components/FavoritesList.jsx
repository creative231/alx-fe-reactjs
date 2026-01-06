import React, { useMemo } from 'react';

// Mock implementation of useRecipeStore
const useRecipeStore = (selector) => {
  const state = {
    recipes: [
      { id: 1, title: 'Recipe 1', description: 'Delicious recipe 1' },
      { id: 2, title: 'Recipe 2', description: 'Tasty recipe 2' },
      { id: 3, title: 'Recipe 3', description: 'Yummy recipe 3' },
    ],
    favorites: [1, 2],  // Example favorites
  };

  return selector(state);
};

const FavoritesList = () => {
  // Get raw store values
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  // Memoize the derived favoriteRecipes array
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