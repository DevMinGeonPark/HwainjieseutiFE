import {create, StateCreator} from 'zustand';
import {FixBarContextStateProps} from '@Types/ContentTypes';

type FixBarState = {
  fixBarProps: FixBarContextStateProps | null;
  setFixBarProps: (props: FixBarContextStateProps | null) => void;
};

const useFixBarStore = create<FixBarState>(set => ({
  fixBarProps: null,
  setFixBarProps: props => set({fixBarProps: props}),
}));

export default useFixBarStore;
