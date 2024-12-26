// "use client";

interface PostsProps {
  id?: number;
  title?: string;
}

const Posts = ({ posts }: { posts: PostsProps[] }) => {
    const localPosts = posts
    return (
        <ul className="avatar">
            {localPosts.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    );
};

export default Posts;