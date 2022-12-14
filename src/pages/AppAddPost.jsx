import React, { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";
import PostsService from "../services/PostsService";
import { useParams } from "react-router-dom";


export default function AppAddPost() {
    const history = useHistory();
    const { id } = useParams();
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

    const handleReset = () => {
        setNewPost({
          title: '',
          text: '',
          createdAt:''
        });
      };

      useEffect(() => {
        const fetchPost = async () => {
          const { id: _, ...restData } = await PostsService.get(id);
    
          setNewPost({ ...restData });
        };
    
        if (id) {
          fetchPost();
        }
      }, [id]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    aria-label="title"
                    minLength='2'
                    value={newPost.title}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, title: target.value })
                    }
                ></input>
                <input
                    required
                    type="text"
                    aria-label="text"
                    maxLength='300'
                    value={newPost.text}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, text: target.value })
                    }
                ></input>
                <button>{id ? 'Edit' : 'Add new'}</button>
                <button type="submit" >Submit</button>
                <button type='button' onClick={ handleReset }> Reset</button>
            </form>
        </div>
    )
}