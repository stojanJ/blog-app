import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import PostsService from "../services/PostsService";

export default function AppSinglePosts() {
    let { postId } = useParams();
    const [post, setPost] = useState();

    const handleGetPost= async () => {
    const post = await PostsService.get(postId);
    setPost(post);
    };

    useEffect(() => {
        handleGetPost();
      }, []); 

    return (
        <div>{post ? (<div>
            <h2> {post.title}</h2>
            <p> {post.text}</p></div>) : (<p>loading</p>)}
        </div>
    )
}