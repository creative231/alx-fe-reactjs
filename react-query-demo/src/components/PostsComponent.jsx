import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  // React Query's useQuery
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000, // keeps data fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // 5-minute cache storage
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query - Posts</h1>

      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {/* Loading State */}
      {isLoading && <p>Loading posts...</p>}

      {/* Error State */}
      {isError && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {/* Data Loaded */}
      {data && (
        <ul>
          {data.slice(0, 10).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsComponent;
