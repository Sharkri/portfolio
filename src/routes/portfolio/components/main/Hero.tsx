function Hero() {
  return (
    <div className="flex-col-center max-w-[960px] mx-auto w-full min-h-[95vh] relative z-20">
      <div>
        <h1 className="text-7xl max-md:text-6xl font-bold text-center mb-8">
          hi, i&apos;m Shark.
        </h1>

        <div className="flex justify-center">
          <a
            href="https://github.com/sharkri"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-2.5 bg-[#181820] text-3xl rounded-xl border-[#30303f] border hover:translate-y-[-2px] duration-300"
            title="My GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            <span className="sr-only">My GitHub Page</span>
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 animate-bounce">
        <i className="fa-solid fa-arrow-down text-3xl" />
      </a>
    </div>
  );
}

export default Hero;
