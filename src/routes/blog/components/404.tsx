import { Link } from "react-router-dom";
import BlogHeader from "./blog-header";

export default function NotFound() {
  return (
    <div className="bg-primary w-full h-full text-gray-50">
      <BlogHeader />

      <div className="p-10 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-8xl font-bold">404</h1>
        <img src="/portfolio/assets/images/sadcat.gif" alt="" width={250} />
        <p className="text-xl text-muted">
          This page doesn&apos;t exist.{" "}
          <Link to="/" className="underline hover:text-foreground text-lg">
            Back to main page
          </Link>
        </p>
      </div>
    </div>
  );
}
