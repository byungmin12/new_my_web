import { create } from 'zustand';
import { Group } from 'three';

interface HoverScreenState {
  hoveredScreen?: Group;
  addHoverScreen: (mesh: Group) => void;
  removeHoverScreen: () => void;
}

const useHoverScreenStore = create<HoverScreenState>((set) => ({
  hoveredScreen: undefined,
  addHoverScreen: (mesh) => set(() => ({ hoveredScreen: mesh })),
  removeHoverScreen: () => set({ hoveredScreen: undefined }),
}));

export default useHoverScreenStore;
