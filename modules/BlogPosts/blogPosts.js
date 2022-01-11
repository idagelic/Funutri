import BlogThumb from '@/components/blogThumb';

const BlogPosts = ({ posts }) => (
    <>
        <h1 className="text-center text-3xl">Read our blogs!</h1>
        <ul className="mt-12 sm:grid sm:grid-cols-2 sm:gap-4 max-w-5xl mx-auto my-10">
            {posts.map((post) => (
                <BlogThumb key={post.id} {...post} />
            ))}
        </ul>
    </>
);

export default BlogPosts;
