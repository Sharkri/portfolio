import { useEffect, useState } from "react";

function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsTop(window.pageYOffset <= 25);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[56px] fixed top-0 z-10 px-8 py-4 flex justify-between ${
        isTop ? "translate-y-2" : "bg-black/40"
      } text-gray-300 font-bold transition-[color,_transform] duration-200`}
    >
      <a
        href="#top"
        className="transition-colors duration-300 hover:text-gray-200 hover:text-shadow-lg"
      >
        Home
      </a>

      <nav className="flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
