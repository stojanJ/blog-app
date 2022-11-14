import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PostsService from "../services/PostsService";

export default function AppPosts() {
  const [posts, setPosts] = useState();
  const history = useHistory();


  const handleGetPosts = async () => {
    const posts = await PostsService.getAll();
    setPosts(posts);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleEdit = (id) => {
    history.push(`edit/${id}`);
  };

  const handleDelete = async (postId) => {
  
    const data = await PostsService.delete(postId);
    console.log(data);
    setPosts(posts.filter(({ id }) => id !== postId));
    
  };
  
   return (
    <div>
      <div>
        <ul>
          {posts && posts.map((post) => <li key={post.id}>
            Title:{post.title},
            model:{post.text}
            <Link to={`/posts/${post.id}`}> View Post </Link>
            <button onClick={handleEdit}><Link to={`/edit/${post.id}`}> Edit</Link></button>
            <button onClick={() => handleDelete(post.id)}> Delete</button></li>)}
        </ul>
      </div>
    </div>
  )
};