import { create } from 'zustand';

type SearchProps = {
  searchCard: string;
  setSearchCard: (searchCard: string) => void;
}

export const useSearchStore = create<SearchProps>((set) => ({
  searchCard: '',
  setSearchCard: (searchCard) =>  set({ searchCard })
}));