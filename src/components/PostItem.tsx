import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post,remove,update}) => {
    const

    return (
        <div className="post">
            {post.id}. {post.title}
            <button onClick={() => remove()}>Delete post</button>
        </div>
    );
};

export default PostItem;
