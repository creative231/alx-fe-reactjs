import { useRecipeStore } from "../recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // console.log(searchTerm);
  // console.log(filteredRecipes);

  // return (
  //   <input
  //     type="text"
  //     placeholder="Search recipes..."
  //     value={searchTerm}
  //     onChange={(e) => setSearchTerm(e.target.value)}
  //     style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
  //   />
  // );
};

export default SearchBar;
