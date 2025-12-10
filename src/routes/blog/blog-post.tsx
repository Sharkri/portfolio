import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import publicIP from "react-native-public-ip";
import { Post } from "../../types/Post";
import NotFound from "./components/404";
import BlogHeader from "./components/blog-header";
import Topics from "./components/topics";
import BlogComments from "./components/blog-comments";
import BlogContent from "./components/blog-content";

const { VITE_API_URL } = import.meta.env;

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<null | Post>(null);
  const [loading, setLoading] = useState(true);
  const [ip, setIp] = useState<string | null>(null);

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

  useEffect(() => {
    publicIP().then(setIp);
  }, []);

  if (loading || !ip) return null;
  if (!post) return <NotFound />;

  const createdAt = new Date(post.createdAt);

  return (
    <div className="w-full h-full">
      <BlogHeader />
      <Helmet>
        <title>{post.title}</title>
      </Helmet>

      <div className="max-w-[1108px] mt-20 py-12 px-2 mx-auto">
        <Link
          to="/blog"
          className="underline font-bold ml-4 mb-2 text-muted hover:text-foreground transition-colors duration-200"
        >
          back to index
        </Link>

        <div className="bg-zinc-900 flex flex-col pt-5 rounded-lg shadow">
          <header className="flex flex-wrap justify-between gap-4 px-6 pb-4">
            <div>
              <h1 className="text-3xl mb-1 font-bold">{post.title}</h1>
              <p className="text-gray-400 text-sm">
                by <b className="text-accent">{post.author.displayName}</b> at{" "}
                <span title={createdAt.toUTCString()}>
                  {createdAt.toLocaleDateString()}
                </span>
              </p>
            </div>

            <Topics topics={post.topics} />
          </header>

          <main>
            <BlogContent blogContents={post.blogContents} />
          </main>
        </div>

        <footer className="my-8">
          <BlogComments post={post} ip={ip} />
        </footer>
      </div>
    </div>
  );
}
