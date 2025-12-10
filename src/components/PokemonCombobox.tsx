/* eslint-disable jsx-a11y/label-has-associated-control */

import usePokemonList from "./hooks/usePokemonList";
import Combobox, { ComboboxOption } from "./ui/Combobox";

type PokemonComboboxProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function PokemonCombobox({
  value,
  onChange,
  disabled = false,
}: PokemonComboboxProps) {
  const { pokemonList, loading } = usePokemonList();

  const options: ComboboxOption<string>[] = pokemonList.map((name) => ({
    value: name.toLowerCase(),
    label: name.charAt(0).toUpperCase() + name.slice(1),
  }));

  const effectiveDisabled = disabled || loading;

  return (
    <Combobox
      id="pokemon"
      label="Pokemon (optional)"
      value={value || null}
      onChange={(val) => onChange(val ?? "")}
      options={options}
      placeholder={
        loading ? "Loading Pokemon..." : "Search for your favorite pokemon..."
      }
      disabled={effectiveDisabled}
    />
  );
}
