'use server'
import PostComment from "@/components/PostComment";
import PostData from "@/app/public/posts.json";



const page = async () => {
    // const result = await fetch('https://coderbyte.com/api/challenges/json/all-posts');
    // const result = await fetch("/posts.json");

    //  const baseUrl =  'http://localhost:3000';
    // const result = await fetch(`${baseUrl}/posts.json`);
    
    // const data = await result.json();
    return (
        <div>
            <PostComment data={PostData}  />
            

        </div>
    );
};

export default page;