function Header() {
  return (
    <header className="w-full fixed top-0 z-10 px-8 py-4 flex justify-between bg-black/40 text-gray-300 font-bold">
      <a
        href="#home"
        className="transition-colors duration-300 hover:text-gray-200 hover:text-shadow-lg"
      >
        Home
      </a>

      <nav className="flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300">
        <a href="#something">Stuff</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contract</a>
      </nav>
    </header>
  );
}

export default Header;
