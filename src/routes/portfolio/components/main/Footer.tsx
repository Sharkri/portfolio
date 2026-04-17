function Footer() {
  return (
    <footer className="pb-8 pt-6 border-slate-700 border-t">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-4 text-muted">
            <a
              href="https://github.com/sharkri/portfolio"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent-secondary hover:text-shadow-lg transition"
            >
              source code
            </a>
            <div className="border-b h-1 w-6 border-muted" />
            <a
              href="mailto:snowyshark@proton.me"
              className="underline underline-offset-2 hover:text-accent-secondary hover:text-shadow-lg transition"
            >
              contact me
            </a>
          </div>
          <div className="flex flex-col items-center pt-6">
            <div className="layer sprite" aria-hidden="true" />
            <p className="text-accent-secondary mt-3">fin.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
