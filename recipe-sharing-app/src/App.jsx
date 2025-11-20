import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div style={{ padding: '1rem' }}>
      <header>
        <h1><Link to="/">Recipe Sharing App</Link></h1>
      </header>
       <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Recipe Sharing App</h1>

      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
    
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />

        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />

        {/* fallback */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
        <div style={{ padding: '2rem' }}>
          <h1>Recipe Sharing App</h1>
          <Routes>
            <Route path="/" element={(
              <div>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </div>
            )} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
