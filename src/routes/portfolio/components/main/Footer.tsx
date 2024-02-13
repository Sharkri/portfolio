function Footer() {
  return (
    <footer className="pb-8 pt-6 border-slate-700 border-t">
      <div className="flex justify-center gap-4">
        <div>
          Made by{" "}
          <a
            href="https://github.com/sharkri"
            className="hover:underline text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            Shark
          </a>
        </div>

        <a
          href="https://github.com/sharkri/portfolio"
          target="_blank"
          rel="noreferrer"
          title="GitHub Repo"
        >
          <i className="fa-brands fa-github text-2xl" aria-hidden="true" />
          <span className="sr-only">GitHub Repo Page</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
