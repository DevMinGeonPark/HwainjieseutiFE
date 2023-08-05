export interface ParamProps {
  KTShopID: string;
  QNAID: string;
}

export interface QnADetailData {
  QNAID: string;
  Category: string;
  Subject: string;
  WriteName: string;
  WriteEmail: string;
  WriteHp: string;
  Content: string;
  WriteDate: string;
  AnswerSubject: null | string;
  AnswerContent: null | string;
}
