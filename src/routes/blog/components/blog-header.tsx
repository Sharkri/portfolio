import { Link } from "react-router-dom";

export default function BlogHeader() {
  return (
    <header className="w-full h-[64px] bg-[rgb(28,28,39,0.9)] sticky top-0 z-30 px-8 py-4 text-gray-300 font-bold transition-[color,transform] duration-200 flex justify-between">
      <nav className="grow flex justify-between items-center gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300">
        <Link
          to="/"
          className="flex items-center gap-2"
          title="shark / homepage"
        >
          シャーク
        </Link>

        <Link to="/blog">blog</Link>
      </nav>
    </header>
  );
}
