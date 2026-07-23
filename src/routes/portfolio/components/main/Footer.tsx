import { useState } from "react";

function Footer() {
  const [spriteState, setSpriteState] = useState<
    "sleeping" | "waking" | "idle" | "nodding"
  >("sleeping");
  const [hasPetted, setHasPetted] = useState(false);

  return (
    <footer className="pb-12 pt-6 border-slate-700 border-t">
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

      <div className="flex flex-col items-center">
        <div className="relative sprite-stage">
          <button
            type="button"
            className={`peer layer sprite ${
              spriteState !== "sleeping" ? "disabled cursor-default" : ""
            } border-0 p-0 ${spriteState}`}
            aria-label="honk mi mi mi mi"
            onClick={() => {
              if (spriteState === "sleeping")
                setTimeout(() => setSpriteState("waking"), 150);
            }}
            onAnimationEnd={() => {
              if (spriteState === "waking")
                setTimeout(() => setSpriteState("idle"), 150);
              if (spriteState === "nodding") setSpriteState("idle");
            }}
          />

          {spriteState === "sleeping" && (
            <div className="text-muted top-6 right-0 text-lg pointer-events-none absolute invisible peer peer-hover:visible">
              ..?
            </div>
          )}
        </div>

        <div
          className={`transition ${
            spriteState === "idle"
              ? "visible opacity-100"
              : "invisible opacity-0"
          }`}
        >
          <p className="text-center">
            do you want to pet the glaceon{hasPetted ? " again" : ""}?
          </p>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="text-muted hover:text-accent-secondary hover:text-shadow-lg transition"
              onClick={() => {
                setSpriteState("nodding");
                setHasPetted(true);
              }}
            >
              yes
            </button>
            <div className="text-muted">---</div>
            <button
              type="button"
              className="text-muted hover:text-accent-secondary hover:text-shadow-lg transition"
              onClick={() => {
                setSpriteState("sleeping");
                setHasPetted(false);
              }}
            >
              no :&lt;
            </button>
          </div>
        </div>

        <p
          className={`${
            spriteState === "sleeping" ? "opacity-100" : "opacity-0 invisible"
          } text-accent-secondary transition`}
        >
          thank you for visiting &lt;3
        </p>
      </div>
    </footer>
  );
}

export default Footer;
