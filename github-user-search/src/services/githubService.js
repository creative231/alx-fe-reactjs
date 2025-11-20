import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (query, options = {}) => {
  // Build search qualifiers: location and minimum repos are supported by GitHub search
  // options: { location, minRepos, per_page }
  const { location, minRepos, per_page } = options;
  let q = (query || '').trim();
  if (location) {
    q += ` location:${location}`;
  }
  if (minRepos || minRepos === 0) {
    // allow minRepos = 0
    q += ` repos:>=${minRepos}`;
  }

  // Fallback: if q is empty, GitHub Search will reject; throw to caller
  if (!q) {
    throw new Error('Empty search query');
  }

  const response = await axios.get(`https://api.github.com/search/users`, {
    params: { q, per_page: per_page || 30 },
  });

  // return the full response so caller can read total_count and items
  return response.data;
};


/**
 * Advanced GitHub user search
 * @param {string} username - GitHub username to search
 * @param {string} location - Location filter
 * @param {number|string} minRepos - Minimum number of repositories
 * @returns {Promise<Object>} GitHub API response data
 */
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data;
};

