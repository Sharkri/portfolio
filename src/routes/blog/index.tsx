import { Helmet } from "react-helmet-async";
import BlogHeader from "./components/blog-header";
import BlogPosts from "./components/blog-posts";

function Blog() {
  return (
    <div className="h-full w-full">
      <Helmet>
        <title>sharkri&apos;s blog posts</title>
      </Helmet>
      <BlogHeader />
      <div className="max-w-[1108px] mx-auto px-6 py-12">
        <BlogPosts />
      </div>
    </div>
  );
}

export default Blog;
