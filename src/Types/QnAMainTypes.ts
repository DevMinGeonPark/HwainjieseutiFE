export interface ParamProps {
  KTShopID: string;
  Category: string;
  SearchStr?: string;
}

export interface QnAMainData {
  QNAList: QNAItem[];
}

export interface QNAItem {
  QNAID: string;
  Category: string;
  Subject: string;
  WriteName: string;
  WriteDate: string;
  Status: number;
}
