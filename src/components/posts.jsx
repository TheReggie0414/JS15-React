import { useEffect, useState } from "react";
import { useUserContext } from "../provider/user";
import { Post } from "./post";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch("https://dummyjson.com/posts");
      if (resp.ok) {
        const { posts } = await resp.json();
        setPosts(posts);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return user ? (
    posts.map((post) => (
      <Post
        title={post.title}
        authorId={post.userId}
        key={post.id}
        body={post.body}
      />
    ))
  ) : (
    <p>Please Login</p>
  );
};
