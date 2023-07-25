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
  ChgFactory: string;

  /** 공시 지원금 */
  ChgSubsidy: string;

  /** 추가 지원금 */
  ChgSubsidyAdd: string;

  /** 마이포인트 */
  ChgMyPoint: string;

  /** 할부원금 */
  ChgMonthlyPlan: string;

  /** 요금제명 */
  ChgNm: string;

  /** 요금 */
  ChgNmRate: string;

  /** 할인후 금액 */
  ChgNmRateDiscount: string;

  /** 월할부원금 */
  ChgContractMonthChg: string;

  /** 할부이자 */
  ChgContractMonthInterest: string;

  /** 요금제 월납부금 */
  ChgContractMonthRate: string;

  /** 요금제 월납부금 */
  ChgContractMonthTotal: string;

  /** KT공식몰 추가할인 */
  ChgKTmalldiscount: string;
}

export interface ChargeCalResType {
  /** 출고가 */
  ChgFactory: string;

  /** 할부원금 */
  ChgMonthlyPlan: string;

  /** 마이포인트 */
  ChgMyPoint: string;

  /** 요금제명 */
  ChgNm: string;

  /** 요금 */
  ChgNmRate: string;

  /** 요금할인(약정) */
  ChgDiscountContract: string;

  /** 요금할인(추가) */
  ChgDiscountAdd: string;

  /** 할인후 금액 */
  ChgNmRateDiscount: string;

  /** 월할부원금 */
  ChgContractMonthChg: string;

  /** 할부이자 */
  ChgContractMonthInterest: string;

  /** 요금제 월납부금 */
  ChgContractMonthRate: string;

  /** 요금제 월납부금 */
  ChgContractMonthTotal: string;

  /** KT공식몰 추가할인 */
  ChgKTmalldiscount: string;
}
