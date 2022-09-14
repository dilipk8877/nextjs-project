import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h3>
        <Link href="/posts">
          <a>PostList</a>
        </Link>
      </h3>
    </div>
  );
}
