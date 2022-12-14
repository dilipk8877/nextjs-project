import Link from "next/link";

function PostItem({ posts, id}) {
  console.log(posts);
  return (
    <div>
      <p>post items from {id}</p>
      <div>
            {posts.map((post)=>{
                return(
                    <div key={post.id}>
                        <h2>{post.id} {post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
      <Link href="/posts">
        <a>Go back</a>
      </Link>
    </div>
  );
}

// serching by id

export async function getServerSideProps(context){
  const {params} = context
  const {id} = params
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  const data = await res.json()

  return{
    props:{
      posts: data,
      id
    }
  }
}

// sorting

// export async function getServerSideProps(context) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

export default PostItem;
