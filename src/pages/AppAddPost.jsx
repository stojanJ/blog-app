import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PostsService from "../services/PostsService";

export default function AppAddPost() {
    const history = useHistory();
    const [newPost, setNewPost] = useState({
        title: '',
        text: '',
        createdAt: new Date
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await PostsService.add(newPost);
        setNewPost(data);

        history.push('/posts');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    aria-label="title"
                    value={newPost.title}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, title: target.value })
                    }
                ></input>
                <input
                    required
                    type="text"
                    aria-label="text"
                    value={newPost.text}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, text: target.value })
                    }
                ></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}