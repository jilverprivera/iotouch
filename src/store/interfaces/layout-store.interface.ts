export interface LayoutState {
  sidebar: {
    open: boolean;
    animate: boolean;
  };
}

export interface LayoutStore extends LayoutState {
  toggleSidebar: (arg: boolean) => void;
}
