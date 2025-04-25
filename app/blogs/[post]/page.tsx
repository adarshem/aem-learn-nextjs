export default async function PostDetails({
  params,
}: {
  params: { post: string };
}): Promise<React.JSX.Element> {
  return (
    <main>
      <h1>Post details</h1>
      <p>Post: {params.post}</p>
    </main>
  );
}
