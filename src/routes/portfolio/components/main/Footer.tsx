function Footer() {
  return (
    <footer className="pb-8 pt-6 border-slate-700 border-t">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-4 text-muted">
            <a
              href="https://github.com/sharkri/portfolio"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              source code
            </a>
            ---
            <a
              href="mailto:snowyshark@proton.me"
              className="underline underline-offset-2 hover:text-foreground"
            >
              contact me
            </a>
          </div>

          <div className="text-muted max-w-sm text-center">
            coded by me using <span className="font-bold">vite + react</span>{" "}
            and deployed via github pages.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
