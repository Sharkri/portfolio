/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from "clsx";
import { useMemo, useRef, useState, useEffect, KeyboardEvent } from "react";

export type ComboboxOption<T = string> = {
  value: T;
  label: string;
};

type ComboboxProps<T = string> = {
  id: string;
  label: string;
  value: T | null;
  onChange: (value: T | null) => void;
  options: ComboboxOption<T>[];
  placeholder?: string;
  disabled?: boolean;
  maxVisibleOptions?: number;
  className?: string;
  size: "sm" | "md" | "lg";
};

export default function Combobox<T = string>({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Search...",
  disabled = false,
  maxVisibleOptions,
  className = "",
  size = "md",
}: ComboboxProps<T>) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedLabel = useMemo(() => {
    const found = options.find((o) => o.value === value);
    return found?.label ?? "";
  }, [options, value]);

  const filteredOptions = useMemo(() => {
    const base =
      query.trim() === ""
        ? options
        : options.filter((o) =>
            o.label.toLowerCase().includes(query.toLowerCase())
          );
    return typeof maxVisibleOptions === "number"
      ? base.slice(0, maxVisibleOptions)
      : base;
  }, [options, query, maxVisibleOptions]);

  // Reset item refs when options change length
  useEffect(() => {
    itemRefs.current = [];
  }, [filteredOptions.length]);

  // Auto-scroll active item into view when activeIndex changes
  useEffect(() => {
    if (!listRef.current || activeIndex < 0) return;

    const activeEl = itemRefs.current[activeIndex];
    if (!activeEl) return;

    activeEl.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      if (!open) setOpen(true);
      if (filteredOptions.length === 0) return;

      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
      return;
    }

    if (e.key === "ArrowUp") {
      if (!open) setOpen(true);
      if (filteredOptions.length === 0) return;

      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
      return;
    }

    if (e.key === "Enter") {
      if (!open || filteredOptions.length === 0) return;

      e.preventDefault();
      const option =
        activeIndex >= 0 ? filteredOptions[activeIndex] : filteredOptions[0];

      if (!option) return;

      onChange(option.value);
      setQuery("");
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className={clsx("flex flex-col relative", className)}>
      <label
        className={clsx(
          "text-sm font-medium text-muted mb-1",
          size === "sm" && "sr-only"
        )}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        id={id}
        type="text"
        value={query || selectedLabel}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(null);
          setOpen(true);
          setActiveIndex(0);
        }}
        onFocus={() => {
          setOpen(true);
          if (filteredOptions.length > 0) {
            setActiveIndex(0);
          }
        }}
        onBlur={() =>
          setTimeout(() => {
            setOpen(false);
            setActiveIndex(-1);

            const trimmed = query.trim();
            if (!trimmed) {
              return;
            }

            // Try to find an exact match by label or value (case-insensitive)
            const exactMatch = options.find((option) => {
              const labelMatch =
                option.label.toLowerCase() === trimmed.toLowerCase();
              const valueMatch =
                String(option.value).toLowerCase() === trimmed.toLowerCase();
              return labelMatch || valueMatch;
            });

            if (exactMatch) {
              // Commit the selection
              onChange(exactMatch.value);
              setQuery(""); // let selectedLabel drive the input
            } else {
              // Clear invalid text so it's visually obvious nothing was selected
              onChange(null);
              setQuery("");
            }
          }, 100)
        }
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={clsx(
          "rounded-lg bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 disabled:brightness-[0.8]",
          size === "sm" && "text-sm"
        )}
        disabled={disabled}
        autoComplete="off"
      />

      {open && (
        <div
          ref={listRef}
          className="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-zinc-800 bg-zinc-950 shadow-lg"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, i) => (
              <button
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                key={String(option.value)}
                type="button"
                className={clsx(
                  "w-full text-left px-3 py-2 text-sm hover:bg-zinc-800",
                  i === activeIndex && "bg-zinc-800 text-white"
                )}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseDown={() => {
                  onChange(option.value);
                  setQuery("");
                  setOpen(false);
                  setActiveIndex(-1);
                }}
              >
                {option.label}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-zinc-400">
              No Pokemon found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
