// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch function
const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return data;
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true,        // Keep old data while fetching new page
    refetchOnWindowFocus: true,    // Refetch when window/tab is focused
    staleTime: 5000,               // Data stays fresh for 5 seconds
    cacheTime: 300000,             // Cache data for 5 minutes (even if unused)
  });

  return (
    <div>
      <h1>Posts (Page {page})</h1>

      {/* Error Handling */}
      {isError && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {/* Loading state */}
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      {/* Refetch indicator */}
      {isFetching && !isLoading && <p>Updating posts...</p>}

      {/* Pagination buttons */}
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          style={{ marginLeft: "1rem" }}
        >
          Next
        </button>
        <button
          onClick={() => refetch()}
          style={{ marginLeft: "1rem" }}
        >
          Refetch
        </button>
      </div>

      <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "gray" }}>
        Data is considered fresh for {5000 / 1000} seconds. Cached for {300000 / 1000 / 60} minutes.
      </p>
    </div>
  );
};

export default PostsComponent;
