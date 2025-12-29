import PostComment from "@/components/PostComment";



const page = async () => {
    const result = await fetch('https://coderbyte.com/api/challenges/json/all-posts');
    const data = await result.json();
    return (
        <div>
            <PostComment data={data}  />
            

        </div>
    );
};

export default page;