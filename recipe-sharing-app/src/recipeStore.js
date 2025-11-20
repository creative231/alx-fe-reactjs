import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // default sample recipes so the app shows something on first run
  recipes: [
    { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Simple pasta with garlic, olive oil and chili flakes.' },
    { id: 2, title: 'Avocado Toast', description: 'Toasted bread topped with mashed avocado, salt and pepper.' },
  ],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),
}));
