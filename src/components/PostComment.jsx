'use client'
import { useState } from 'react';
import Button from './Button';

const PostComment = ({ data }) => {
    const [openId, setOpenId] = useState(null);
    const [comments, setComments] = useState({});
    console.log({openId});
    console.log({comments});

    const handleComment = (postId, commentData) => {
        setComments(prev => ({...prev, [postId]: commentData}));
        setOpenId(postId);
    }

    return (
        <div>
            {data.map((post) => (
                <div key={post.id} className="border border-r-amber-50 rounded bg-blue-50 text-black p-4 mb-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h3>Id: {post.id} </h3>
                            <p>title: {post.title}</p>
                        </div>
                        <Button 
                            postID={post.id} 
                            CommentFetched={handleComment} />
                    </div>
                    
                    {openId === post.id && comments[post.id] && (
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <p className='text-green-500'>Name: {comments[post.id]?.name}</p>
                            <p className='text-green-500'>Email: {comments[post.id]?.email}</p>
                            <p className='text-green-500'>Body: {comments[post.id]?.body}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostComment;