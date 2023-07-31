// hooks/useLoginCheck.ts
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useUserState} from '@src/contexts/UserContext';

export function useLoginCheck() {
  const [user] = useUserState();
  if (!user) {
    return false;
  } else {
    return true;
  }
}
