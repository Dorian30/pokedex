import { useQuery } from 'react-query';

import api from '../config/api';
import { IPokemon } from '../interfaces/pokemons';

interface Props {
  offset?: number;
  isEnabled?: boolean;
}

const DEFAULT_OFFSET_VALUE = 20;

function usePokemonsList({ offset = DEFAULT_OFFSET_VALUE, isEnabled = true }: Props) {
  return useQuery(
    ['pokemon', offset],
    () => api.get<IPokemon>(`/pokemon/offset=${offset}&limit=20`).then(res => res.data),
    {
      enabled: isEnabled
    }
  );
}

export default usePokemonsList;
