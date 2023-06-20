import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,

  handleOpenModal: () => set(() => ({ isOpen: true })),

  handleCloseModal: () => set(() => ({ isOpen: false })),
}));
