import {useState} from 'react';

export function useStipulationState() {
  const [registerCheck, setRegisterCheck] = useState<boolean>(false);
  const [personalCheck, setPersonalCheck] = useState<boolean>(false);

  return {
    registerCheck,
    setRegisterCheck,
    personalCheck,
    setPersonalCheck,
  };
}
