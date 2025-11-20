// src/recipeStore.js
import { create } from 'zustand';
import { useRecipeStore } from "../recipeStore";


export const useRecipeStore = create((set) => ({
  recipes: [],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // replace full list
  setRecipes: (recipes) => set({ recipes }),

  // update a recipe by id; updatedFields is an object with fields to change
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),

  // delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
