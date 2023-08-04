export interface ParamProps {
  KTShopID: string;
  QNAID: string | '';
  Category: string;
  Subject: string;
  WriteName: string;
  WriteEmail: string;
  WriteHp: string;
  Content: string;
}

export interface ResponseProps {
  Status: string;
  ErrMsg: string;
}
