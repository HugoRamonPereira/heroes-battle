import axios from 'axios';
import toast from 'react-hot-toast';
import { create } from 'zustand';

type Powerstats = {
  intelligence: number
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

type Images = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export type CombatCard = {
  id: number;
  name: string;
  images: Images;
  strength: number;
  powerstats: Powerstats;
  resultReduce: number;
  selected: boolean;
}

type CombatCardsStore = {
  loading: boolean;
  error: null | string;
  cards: CombatCard[];
  bringCards(): void;
}

export const useCardStore = create<CombatCardsStore>((set) => ({
  cards: [],
  loading: false,
  error: null,
  bringCards: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL || '');
      set({ cards: response.data, loading: false });
    } catch (error) {
      set({ error: toast.error('Erro ao carregar os dados',
        { position: 'bottom-center' }), loading: false }
      );
    }
  }
}));