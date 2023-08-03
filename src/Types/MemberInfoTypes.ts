export interface MemberInfoData {
  UserNm: string;
  UserGrade: string;
  UserPoint: number;
  UserLvUntilPoint: number;
  UserLvUntilPer: number;
  UserLevel: number;
}

export interface ParamProps {
  KTShopID: string;
}

export function isMemberInfoData(
  data: MemberInfoData | undefined,
): data is MemberInfoData {
  return data !== undefined && 'UserNm' in data;
}
