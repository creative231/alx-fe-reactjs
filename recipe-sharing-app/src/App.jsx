import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <header style={{ padding: "1rem", textAlign: "center" }}>
          <h1>
            <Link to="/">Recipe Sharing App</Link>
          </h1>
        </header>

        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />

            <Route path="/recipes/:id" element={<RecipeDetails />} />

            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
