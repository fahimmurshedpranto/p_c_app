import React from 'react';

const page = async({params}) => {
    const {id} = await params;

    // const result = await fetch(`https://coderbyte.com/api/challenges/json/all-comments/${id}`);
    // // console.log("result", result);
    // const data = await result.json();
    


    const comments = await fetch("https://coderbyte.com/api/challenges/json/all-comments");
    const comment = await comments.json();
    const data = comment?.filter((c) => c.id === id);
    console.log({comment});
    


    return (
        <div>
            {/* <h3>Id: {data.id}</h3>
            <h3>UserId: {data.userId}</h3>
            <h3>Title: {data.title}</h3>
            <h3>Body: {data.body}</h3>
            <hr/> */}
            <p className='text-green-500'>Name: {data?.name}</p>
            <p className='text-green-500'>Email: {data?.email}</p>
            <p className='text-green-500'>Body: {data?.body}</p>
            
        </div>
        
    );
};

export default page;


//    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
//     const commentPromise = fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => res.json());
    
//     const [data, comment] = await Promise.all([postPromise, commentPromise]);