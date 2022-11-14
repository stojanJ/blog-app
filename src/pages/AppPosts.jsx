import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsService from "../services/PostsService";

export default function AppPosts() {
  const [posts, setPosts] = useState();

  const handleGetPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

   return (
    <div>
      <div>
        <ul>
          {posts && posts.map((post) => <li key={post.id}>
            Title:{post.title},
            model:{post.text}
            <Link to={`/posts/${post.id}`}> View Post </Link>
            <button ><Link to={`/edit/${post.id}`}> Edit</Link></button></li>)}
        </ul>
      </div>
    </div>
  )
}