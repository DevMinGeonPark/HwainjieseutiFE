export interface User {
  UserNm: string;
  UserId: string;
  Point: number;
}

export function hasUserProperties(user: User | null): user is User {
  return (
    user !== null &&
    'UserNm' in user &&
    'UserId' in user &&
    user?.UserNm !== '' &&
    user?.UserId !== ''
  );
}

export interface FixBarContextStateProps {
  /** 월할부원금 */ //state
  ChgContractMonthChg: number | undefined;

  /** 요금제 월납부금 */ //state
  ChgContractMonthRate: number | undefined;

  /** 요금제 월납부금 */ //state
  ChgContractMonthTotal: number | undefined;

  /** OrderButton */
  OrderPage: string;
}

export interface testType {
  uid: number;
}
