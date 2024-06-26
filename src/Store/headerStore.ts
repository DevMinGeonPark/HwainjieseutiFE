import {create, StateCreator} from 'zustand';

interface HeaderState {
  isHeaderVisible: boolean;
  showHeader: () => void;
  hideHeader: () => void;
}

const HeaderStore: StateCreator<HeaderState> = set => ({
  isHeaderVisible: true,
  showHeader: () => set(state => ({isHeaderVisible: true})),
  hideHeader: () => set(state => ({isHeaderVisible: false})),
});

export const useHeaderStore = create<HeaderState>(HeaderStore);
