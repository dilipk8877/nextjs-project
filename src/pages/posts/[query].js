import Link from "next/link";

function PostItem({ posts }) {
  console.log(posts);
  return (
    <div>
      <p>Post List Item </p>
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

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default PostItem;
