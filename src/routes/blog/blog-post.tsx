import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { sanitize } from "isomorphic-dompurify";
import { Helmet } from "react-helmet";
import { Post } from "../../types/Post";
import NotFound from "./components/404";
import BlogHeader from "./components/blog-header";
import Topics from "./components/topics";
import BlogComments from "./components/blog.comments.";

const { VITE_API_URL } = import.meta.env;

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<null | Post>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostById = async () => {
      try {
        const res = await axios.get(`${VITE_API_URL}/api/posts/${params.id}`);
        setPost(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPostById();
  }, [params.id]);

  if (loading) return null;
  if (!post) return <NotFound />;

  const createdAt = new Date(post.createdAt);

  return (
    <div className="w-full h-full">
      <BlogHeader />
      <Helmet>
        <title>{post.title} | Portfolio</title>
      </Helmet>

      <div className="max-w-[1108px] py-12 px-8 mx-auto">
        <div className="bg-zinc-900 flex flex-col pt-5 rounded-lg shadow-lg border border-zinc-800">
          <header className="flex justify-between gap-4 px-6 pb-4">
            <div>
              <h1 className="text-3xl mb-1 font-bold">{post.title}</h1>
              <p className="text-gray-400 text-sm">
                by {post.author.displayName} at{" "}
                <span title={createdAt.toUTCString()}>
                  {createdAt.toLocaleDateString()}
                </span>
              </p>
            </div>

            <Topics topics={post.topics} />
          </header>

          <main
            className="max-w-none prose prose-invert bg-[#0D0D0D] p-6"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: sanitize(post.blogContents) }}
          />

          <footer className="p-6">
            <BlogComments post={post} />
          </footer>
        </div>
      </div>
    </div>
  );
}
