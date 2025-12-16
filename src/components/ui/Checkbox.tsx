import React from "react";
import clsx from "clsx";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function Checkbox({
  label,
  disabled = false,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={clsx(
        "flex items-center gap-2 text-xs text-muted select-none font-mono",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className={clsx(
          "h-4 w-4 rounded border-zinc-700 bg-zinc-950/60 outline-none ring-0 ring-offset-0",
          "focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none active:ring-0",
          "text-emerald-600 focus-visible:ring-1",
          disabled && "cursor-not-allowed"
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {label}
    </label>
  );
}
