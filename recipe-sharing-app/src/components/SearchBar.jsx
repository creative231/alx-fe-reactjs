import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        display: 'block',
        padding: '5px',
        margin: '10px 0',
        width: '300px',
      }}
    />
  );
};

export default SearchBar;
