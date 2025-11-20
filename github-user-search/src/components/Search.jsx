import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // ⛔ Required EXACT message
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width="100" />
            <h3>{user.name || user.login}</h3>

            <a href={user.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>

    </div>
  );
};

export default Search;
