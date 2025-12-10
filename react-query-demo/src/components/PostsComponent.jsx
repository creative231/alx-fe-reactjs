// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return data;
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      keepPreviousData: true, // keeps old data while fetching new page
      refetchOnWindowFocus: true, // refetches when window is focused
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h1>Posts (Page {page})</h1>
      {isFetching && <p>Updating...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
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
      </div>
    </div>
  );
};

export default PostsComponent;
