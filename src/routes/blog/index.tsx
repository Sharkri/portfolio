import BlogPosts from "./components/blog-posts";

function Blog() {
  return (
    <div className="h-full w-full px-8 pt-12">
      <div className="max-w-[1108px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Recent Blogs</h1>
        <BlogPosts />
      </div>
    </div>
  );
}

export default Blog;
