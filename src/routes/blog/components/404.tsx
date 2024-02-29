import BlogHeader from "./blog-header";

export default function NotFound() {
  return (
    <div className="bg-primary w-full h-full text-gray-50">
      <BlogHeader />

      <div className="p-10 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl">
          This page does not exist. Verify your query is correct.
        </p>
      </div>
    </div>
  );
}
