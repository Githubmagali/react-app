import React from "react";
import posts from "../data/posts";
import {useParams, Navigate} from "react-router-dom";


const Post = ()=>{
    const {id} = useParams();
   
    return(
        
        <>
        {posts[id] ?
        <div>
            <h1>{posts[id].titulo}</h1>
            <p>{posts[id].texto}</p>
        </div>
        :
        <Navigate replace to="/"/>
   
        }
        </>
     );
}

export default Post;