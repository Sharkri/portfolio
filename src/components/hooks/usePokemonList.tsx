import { useEffect, useState } from "react";
import axios from "axios";

export default function usePokemonList() {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species/?limit=20000"
        );
        if (!cancelled) {
          setPokemonList(res.data.results.map((p: { name: string }) => p.name));
        }
      } catch (err) {
        if (!cancelled) {
          // eslint-disable-next-line no-console
          console.error("Failed to load Pokémon", err);
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPokemon();

    return () => {
      cancelled = true;
    };
  }, []);

  return { pokemonList, loading, error };
}
