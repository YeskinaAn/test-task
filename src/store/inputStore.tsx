import { create } from "zustand";

interface TagInput {
  value: string;
  changeTag: (state: string) => void
}

export const useTagStore = create<TagInput>((set) => ({
  value: "",
  changeTag: () => set((state) => state),
}));
