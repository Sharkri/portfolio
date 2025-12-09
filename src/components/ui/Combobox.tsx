/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo, useState } from "react";

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
}: ComboboxProps<T>) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

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
    return base.slice(0, maxVisibleOptions);
  }, [options, query, maxVisibleOptions]);

  return (
    <div className={`flex flex-col space-y-1 relative ${className}`}>
      <label className="text-sm font-medium text-muted" htmlFor={id}>
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
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        placeholder={placeholder}
        className="rounded-lg bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 disabled:brightness-[0.8]"
        disabled={disabled}
        autoComplete="off"
      />

      {open && filteredOptions.length > 0 && (
        <div className="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-zinc-800 bg-zinc-950 shadow-lg">
          {filteredOptions.map((o) => (
            <button
              key={String(o.value)}
              type="button"
              className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800"
              onMouseDown={() => {
                onChange(o.value);
                setQuery("");
                setOpen(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
