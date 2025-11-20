import { useRecipeStore } from "../recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
console.log(useRecipeStore.getState().searchTerm);
console.log(useRecipeStore.getState().filteredRecipes);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
