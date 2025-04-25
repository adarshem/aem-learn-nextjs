import Link from "next/link";

export default function BlogPage(): React.JSX.Element {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>This is the blog page - aem</p>
      <p>
        <Link href="/blogs/post-1"> Post 1</Link>
      </p>
      <p>
        <Link href="/blogs/post-1"> Post 2</Link>
      </p>
    </main>
  );
}
