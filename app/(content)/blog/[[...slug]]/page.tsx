import Posts from "@/comps/ui/posts";

type BlogProps = {
  params: Promise<{ slug: string }>;
};

const mposts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
];

export async function generateStaticParams() {
  return [{ slug: ["getting-started"] }, { slug: ["features", "overview"] }];
}

const BlogSlug: React.FC<BlogProps> = async ({ params }) => {
  const data = await fetch("https://api.vercel.app/blog");
  const vposts = data.json;
  const sl = (await params).slug;
  return (
    <>
      <h3>
        h3 page with slug {sl} <br />
        data {data.headers} <br />
        posts {vposts.length}
      </h3>
      <Posts posts={mposts} />
    </>
  );
};

export default BlogSlug;
