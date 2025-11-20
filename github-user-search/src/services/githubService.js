import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (query) => {
  // Use GitHub Search Users API
  const response = await axios.get(`https://api.github.com/search/users`, {
    params: { q: query },
  });
  // return the array of user items
  return response.data.items || [];
};
