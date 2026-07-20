export default async function BlogDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{
    type?: "news" | "cricket" | "article" | "entertainment";
  }>;
}) {
  const { type } = await searchParams;
  return <div>Blog Page details: {type}</div>;
}
