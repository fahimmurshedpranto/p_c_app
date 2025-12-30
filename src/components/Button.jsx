import React from 'react';

const Button = ({ postID, CommentFetched }) => {
    const handleClick = async() => {
        console.log({ postID });
        
        try {
            const comments = await fetch("https://coderbyte.com/api/challenges/json/all-comments");
            const allComments = await comments.json();
            console.log({ allComments });
    
            // Filter comments by postId instead of id
            const commentData = allComments.filter((c) => c.postId == postID);
            console.log({ commentData });
            
            if (commentData.length > 0) {
                CommentFetched(postID, commentData);
            }
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