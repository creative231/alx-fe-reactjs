import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();

  // allow searches that use qualifiers only (location/minRepos) even if username is empty
  if (!username.trim() && !location.trim() && minRepos === '') return;

    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);

    try {
      // Perform an advanced search for users matching the query with qualifiers
      const opts = {
        location: location.trim() || undefined,
        minRepos: minRepos !== '' ? Number(minRepos) : undefined,
        per_page: 30,
      };
      const resp = await searchUsers(username.trim(), opts);
      const items = resp?.items || [];
      setTotalCount(resp?.total_count || 0);

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
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search users or keywords"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ flex: 1 }}
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: 160 }}
          />
          <input
            type="number"
            min="0"
            placeholder="Min repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            style={{ width: 120 }}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {/* Conditional Rendering */}
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {results.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <h3>Search results {totalCount ? `(${totalCount} total)` : ''}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {results.map((r) => (
                <li key={r.id} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={r.avatar_url} alt={r.login} width="48" height="48" style={{ borderRadius: 6 }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 600 }}>{r.login} <span style={{ color: '#666', fontSize: '0.9em' }}>{r.score ? `· score ${r.score.toFixed(2)}` : ''}</span></div>
                    <div style={{ marginTop: 4 }}>
                      <a href={`https://github.com/${r.login}`} target="_blank" rel="noreferrer">View on GitHub</a>
                      {' — '}
                      <button type="button" onClick={async () => {
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
