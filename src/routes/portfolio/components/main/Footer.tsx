function Footer() {
  return (
    <footer className="pb-8 pt-6 border-slate-700 border-t">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <div>
            <div>
              <a
                href="mailto:snowyshark@proton.me"
                className="underline underline-offset-2 text-muted hover:text-foreground"
              >
                contact me :3
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 text-muted">
            <div>my portfolio is also open-source!</div>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
