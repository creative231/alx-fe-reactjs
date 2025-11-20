import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);

    try {
      // Perform an advanced search for users matching the query
      const items = await searchUsers(username);
      if (!items || items.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        // show up to 10 results
        setResults(items.slice(0, 10));
      }
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

        {results.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <h3>Search results</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {results.map((r) => (
                <li key={r.id} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={r.avatar_url} alt={r.login} width="48" height="48" style={{ borderRadius: 6 }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{r.login}</div>
                    <div>
                      <a href={`https://github.com/${r.login}`} target="_blank" rel="noreferrer">View on GitHub</a>
                      {' — '}
                      <button onClick={async () => {
                        setLoading(true);
                        setError('');
                        try {
                          const data = await fetchUserData(r.login);
                          setUser(data);
                        } catch (err) {
                          setError("Looks like we cant find the user");
                        } finally { setLoading(false); }
                      }}>View profile</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {user && (
          <div style={{ marginTop: '1rem' }}>
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
