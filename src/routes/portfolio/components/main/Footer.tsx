function Footer() {
  return (
    <footer className="pb-8 pt-6 border-slate-700 border-t">
      <div className="flex justify-center gap-4">
        <div>My project is also open-source:</div>

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
