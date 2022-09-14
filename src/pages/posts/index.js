function PostList({posts}){
    console.log(posts);
    return(
        <div>
            <p>Post List</p>
            <div>
                {posts.map((post)=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.id} {post.title}</h3>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostList

export async function getServerSideProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post = await response.json()

    return{
        props:{
            posts :post
        }
    }
}