import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()

    useEffect(() => {
/*        setTimeout(() => {
            setLimit(3)
        }, 2000)*/
    }, [])

   const handleCreate = async () => {
       const title = prompt()
       await createPost({title, body: title} as IPost)
    }

    return (
        <div className='post__list'>
            <button onClick={handleCreate}>Add New Post</button>
            {isLoading && <h1>Loading.....</h1>}
            {error && <h1>An error occurs on loading posts</h1>}
            {posts?.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostContainer;
