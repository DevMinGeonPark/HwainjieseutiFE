import {create, StateCreator} from 'zustand';
import {User} from '@Types/ContentTypes';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  hasUser: () => boolean;
}

const userStore: StateCreator<UserState> = set => ({
  user: null,
  setUser: user => set({user}),
  hasUser: () => {
    const {user} = useUserStore.getState();
    return (
      user !== null &&
      'UserNm' in user &&
      'UserId' in user &&
      user.UserNm !== '' &&
      user.UserId !== ''
    );
  },
});

export const useUserStore = create<UserState>(userStore);
