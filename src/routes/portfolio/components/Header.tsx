import useIsTop from "./helper-functions/useIsTop";

function Header() {
  const isTop = useIsTop(25);

  return (
    <header
      className={`w-full h-[56px] fixed top-0 z-10 px-8 py-4 ${
        isTop ? "translate-y-2" : "bg-black/40"
      } text-gray-300 font-bold transition-[color,transform] duration-200 flex justify-end`}
    >
      <nav className="flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
