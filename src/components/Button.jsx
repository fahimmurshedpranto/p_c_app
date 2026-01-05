import React from 'react';

const Button = ({ postId, commentIds, CommentFetched }) => {
    const handleClick = async() => {
        try {
            const comments = await fetch("/comments.json");
            const allComments = await comments.json();
    
             
            const commentData = allComments.filter((c) => commentIds.includes(c.id));

             CommentFetched(postId, commentData);
            // if (commentData.length > 0) {
            //     CommentFetched(postId, commentData);
            // }
        } 
        catch (error) {
            console.error("Error fetching comments:", error);
        }
    }
    
    return (
        <div>
            <button 
                onClick={handleClick} 
                className="text-black bg-gray-400 rounded px-4 py-2 hover:bg-gray-500 transition">
                Select
            </button>
        </div>
    );
};

export default Button;