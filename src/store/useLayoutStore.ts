import { create } from "zustand";
import { LayoutStore } from "./interfaces/layout-store.interface";

export const useLayout = create<LayoutStore>()((set) => ({
  sidebar: {
    open: true,
    animate: true,
  },
  toggleSidebar: (arg: boolean) =>
    set((state) => ({ sidebar: { ...state.sidebar, open: arg } })),
}));
