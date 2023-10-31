import { create } from 'zustand';

type ModalProps = {
  openModal: boolean;
  data: string;
  setOpenModal: (data: string) => void;
  setCloseModal: () => void;
}

export const useModalStore = create<ModalProps>((set) => ({
  openModal: false,
  data: '',
  setOpenModal: (data) => set({ openModal: true, data }),
  setCloseModal: () => set({ openModal: false, data: '' }),
}));