import { create } from 'zustand';

type Powerstats = {
  intelligence: number
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type CardStructure = {
  id: number
  cardImg: string;
  cardImgAlt: string;
  warriorName: string;
  warriorStrength: number;
  warriorWeapon: string;
  powerstats: Powerstats
}

type SelectedCardProps = {
  selectedCards: Array<CardStructure>;
  setSelectedCards: (card: CardStructure) => void;
  clearSelectedCards: () => void;
}

type IsSelectedCard = {
  selected: boolean;
  changeSelected: () => void;
}

export const isSelectedCard = create<IsSelectedCard>((set) => ({
  selected: false,
  changeSelected: () => set((state) => ({ selected: !state.selected })),
}));

export const useSelectCardStore = create<SelectedCardProps>((set) => ({
  selectedCards: [],
  setSelectedCards: (card: CardStructure) => {
    set((state) => {
      const isExist = state.selectedCards.some(({ id }: CardStructure) => id === card.id );

      if (state.selectedCards.length == 2 || isExist) return state;

      state.selectedCards.push(card);
      return state;
    });
  },
  clearSelectedCards: () => set(() => ({ selectedCards: [] }))
}));