import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await advancedUserSearch(username, location, minRepos);
      setResults(data.items || []);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        
        <h2 className="text-2xl font-semibold text-center">GitHub User Search</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Search username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        {/* Min repos */}
        <input
          type="number"
          placeholder="Minimum repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Search;
