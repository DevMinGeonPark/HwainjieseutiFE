import {useEffect} from 'react';
import {useUserState} from '@src/contexts/UserContext';
import authStorage from '@src/Utils/authStorage';

export default function useAuthLoadEffect() {
  const [, setUser] = useUserState();

  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      setUser(auth);
    };
    fn();
  }, [setUser]);
}
