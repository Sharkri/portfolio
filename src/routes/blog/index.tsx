import { Helmet } from "react-helmet-async";
import BlogHeader from "./components/blog-header";
import BlogPosts from "./components/blog-posts";

function Blog() {
  return (
    <div className="h-full w-full">
      <Helmet>
        <title>Blog Posts | Shark</title>
      </Helmet>
      <BlogHeader />
      <div className="max-w-[1108px] mx-auto px-8 pt-12">
        <BlogPosts />
      </div>
    </div>
  );
}

export default Blog;
