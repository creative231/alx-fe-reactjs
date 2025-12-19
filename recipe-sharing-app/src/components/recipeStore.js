// Import create from 'zustand' (named import)
import { create } from 'zustand';

// Define your store
export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map((r) => r.id === id ? { ...r, ...updatedData } : r)
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id),
    favorites: state.favorites.filter((fid) => fid !== id),
  })),
  addFavorite: (recipeId) => set((state) => ({ favorites: [...new Set([...state.favorites, recipeId])] })),
  removeFavorite: (recipeId) => set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),
  generateRecommendations: () => set((state) => ({
    recommendations: state.recipes.filter((r) => !state.favorites.includes(r.id) && Math.random() > 0.5)
  })),
}));
