import { Link } from "react-router-dom";
import clsx from "clsx";
import useIsTop from "../helper-functions/useIsTop";

function Header() {
  const isTop = useIsTop(25);

  return (
    <header
      className={clsx(
        "w-full h-[64px] fixed top-0 z-30 px-8 py-4 text-gray-300 font-bold transition-[color,transform] duration-200",
        isTop ? "translate-y-2" : "bg-[rgb(28,28,39,0.9)]"
      )}
    >
      <nav className="flex items-center gap-4 justify-between">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2 watercolor-link text-xl"
            aria-label="Homepage"
          >
            シャーク
          </a>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <a href="#about" className="watercolor-link">
            about
          </a>
          <a href="#projects" className="watercolor-link">
            projects
          </a>
          <Link to="/blog" className="watercolor-link">
            blog
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
