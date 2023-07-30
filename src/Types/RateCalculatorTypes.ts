export interface BodyType {
  ItemCode: string;
  Vol: string;
  SupportTypeVol: string;
  KTDiscount: string;
  ForMonth: string;
  UserID: string;
}

export interface MachineCalResType {
  /** 출고가 */
  ChgFactory: number;

  /** 공시 지원금 */
  ChgSubsidy: number;

  /** 추가 지원금 */
  ChgSubsidyAdd: any; //에러 제거

  /** 마이포인트 */
  ChgMyPoint: number;

  /** 할부원금 */
  ChgMonthlyPlan: number;

  /** 요금제명 */
  ChgNm: string;

  /** 요금 */
  ChgNmRate: number;

  /** 할인후 금액 */
  ChgNmRateDiscount: number;

  /** 월할부원금 */
  ChgContractMonthChg: number;

  /** 할부이자 */
  ChgContractMonthInterest: number;

  /** 요금제 월납부금 */
  ChgContractMonthRate: number;

  /** 요금제 월납부금 */
  ChgContractMonthTotal: number;

  /** KT공식몰 추가할인 */
  ChgKTmalldiscount: number;
}

export interface ChargeCalResType {
  /** 출고가 */
  ChgFactory: number;

  /** 할부원금 */
  ChgMonthlyPlan: number;

  /** 마이포인트 */
  ChgMyPoint: number;

  /** 요금제명 */
  ChgNm: string;

  /** 요금 */
  ChgNmRate: number;

  /** 요금할인(약정) */
  ChgDiscountContract: number;

  /** 요금할인(추가) */
  ChgDiscountAdd: number;

  /** 할인후 금액 */
  ChgNmRateDiscount: number;

  /** 월할부원금 */
  ChgContractMonthChg: number;

  /** 할부이자 */
  ChgContractMonthInterest: number;

  /** 요금제 월납부금 */
  ChgContractMonthRate: number;

  /** 요금제 월납부금 */
  ChgContractMonthTotal: number;

  /** KT공식몰 추가할인 */
  ChgKTmalldiscount: number;
}
