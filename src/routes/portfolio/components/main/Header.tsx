import { Link } from "react-router-dom";
import useIsTop from "../helper-functions/useIsTop";

function Header() {
  const isTop = useIsTop(25);

  return (
    <header
      className={`w-full h-[64px] fixed top-0 z-30 px-8 py-4 ${
        isTop ? "translate-y-2" : "bg-[rgb(28,28,39,0.9)]"
      } text-gray-300 font-bold transition-[color,transform] duration-200`}
    >
      <nav className="flex items-center gap-4 justify-between">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2 hover:text-gray-200 hover:text-shadow-lg transition-colors duration-300"
            title="shark / homepage"
          >
            シャーク
          </a>
        </div>

        <div className="flex items-center gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300 font-mono">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <Link to="/blog">blog</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
