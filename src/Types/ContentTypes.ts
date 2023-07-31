export interface User {
  UserNm: string;
  UserId: string;
}

export interface FixBarContextStateProps {
  /** 월할부원금 */ //state
  ChgContractMonthChg: number | undefined;

  /** 요금제 월납부금 */ //state
  ChgContractMonthRate: number | undefined;

  /** 요금제 월납부금 */ //state
  ChgContractMonthTotal: number | undefined;
}
