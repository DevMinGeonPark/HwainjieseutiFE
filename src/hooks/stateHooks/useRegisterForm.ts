import {useState} from 'react';
import {RegisterProps} from '@src/Types/NavigationTypes';

export function useRegisterForm(routeParams?: RegisterProps) {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [id, setId] = useState<string>(routeParams?.KTShopID || '');
  const [name, setName] = useState<string>(routeParams?.UserNm || '');
  const [birth, setBirth] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [activatePhone, setActivatePhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [maling, setMaling] = useState<number>(1);
  const [openInfo, setOpenInfo] = useState<number>(1);
  const [phoneCerti, setPhoneCerti] = useState<boolean>(false);

  const [isValidBirth, setIsValidBirth] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidActivatePhone, setIsValidActivatePhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    id,
    setId,
    name,
    setName,
    birth,
    setBirth,
    phone,
    setPhone,
    activatePhone,
    setActivatePhone,
    email,
    setEmail,
    maling,
    setMaling,
    openInfo,
    setOpenInfo,
    isValidBirth,
    setIsValidBirth,
    isValidPhone,
    setIsValidPhone,
    isValidActivatePhone,
    setIsValidActivatePhone,
    isValidEmail,
    setIsValidEmail,
    phoneCerti,
    setPhoneCerti,
  };
}
