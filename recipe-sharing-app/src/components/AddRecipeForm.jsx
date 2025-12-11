import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError("Title is required");
      return;
    }

    addRecipe({
      id: Date.now(),
      title: trimmedTitle,
      description: description.trim(),
    });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" disabled={!title.trim()}>
        Add Recipe
      </button>
      {error && (
        <div style={{ color: "crimson", marginTop: "8px" }}>{error}</div>
      )}
    </form>
  );
};

export default AddRecipeForm;
