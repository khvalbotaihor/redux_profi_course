import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })

    useEffect(() => {
/*        setTimeout(() => {
            setLimit(3)
        }, 2000)*/
    }, [])

    return (
        <div className='post__list'>
            {isLoading && <h1>Loading.....</h1>}
            {error && <h1>An error occurs on loading posts</h1>}
            {posts?.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostContainer;
