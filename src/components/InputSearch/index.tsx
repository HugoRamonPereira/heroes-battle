'use client';

import * as S from './styles';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchStore } from '@/store/searchStore';

export function InputSearch() {
  const [searchCard, setSearchCard] = useSearchStore((state) => [
    state.searchCard,
    state.setSearchCard
  ]);

  function handleSearchCard(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchCard(e.target.value);
  }

  return (
    <S.SearchInput
      id='search-field'
      value={searchCard}
      onChange={handleSearchCard}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon color='secondary' />
          </InputAdornment>
        ),
        style: { color: 'white' }
      }}
    />
  );
}