// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
