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
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "50px" }}>
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#24292e",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {user && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "120px", borderRadius: "50%" }}
            />
            <h3>{user.name || user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
