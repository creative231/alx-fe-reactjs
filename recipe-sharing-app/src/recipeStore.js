import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // default sample recipes so the app shows something on first run
  recipes: [
    { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Simple pasta with garlic, olive oil and chili flakes.' },
    { id: 2, title: 'Avocado Toast', description: 'Toasted bread topped with mashed avocado, salt and pepper.' },
  ],

  // search/filter state
  searchTerm: '',
  filteredRecipes: [],

  // actions
  addRecipe: (newRecipe) =>
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      const filteredRecipes = state.searchTerm
        ? recipes.filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        : recipes;
      return { recipes, filteredRecipes };
    }),

  updateRecipe: (updated) =>
    set((state) => {
      const recipes = state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r));
      const filteredRecipes = state.searchTerm
        ? recipes.filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        : recipes;
      return { recipes, filteredRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((r) => r.id !== id);
      const filteredRecipes = state.searchTerm
        ? recipes.filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        : recipes;
      return { recipes, filteredRecipes };
    }),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: state.searchTerm
        ? recipes.filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        : recipes,
    })),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: term
        ? state.recipes.filter((r) => r.title.toLowerCase().includes(term.toLowerCase()))
        : state.recipes,
    })),

  // helper to recompute filteredRecipes (can be used after bulk updates)
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.searchTerm
        ? state.recipes.filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        : state.recipes,
    })),
}));

// initialize filteredRecipes with current recipes
const init = useRecipeStore.getState();
if (!init.filteredRecipes || init.filteredRecipes.length === 0) {
  useRecipeStore.setState({ filteredRecipes: init.recipes });
}
