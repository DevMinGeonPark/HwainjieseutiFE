import {EventClassListProps, EventClassNotice} from '@Types/EventDataTypes';

export type DrawerScreenProps = {
  DrawerMain: undefined;
};

export type StackScreenProps = {
  Main: undefined;
  Login: undefined;
  Apple: _ProductScreenProps;
  Samsung: _ProductScreenProps;
  Etc: _ProductScreenProps;
  Detail: DetailScreenProps;
  // fix 후 관련 로직 삭제
  Event: {url: string} | undefined;
  // Event: CommonScreenProps;
  // EventList: EventClassListProps;
  // EventBorad: EventClassNotice;
  // Event 수정 필요
  InternetPlusTV: CommonScreenProps;
  MyPoint: undefined;
  MyPage: undefined;
  Confirm: undefined;
  RegisterStipulation: undefined;
  RegisterForm: RegisterProps;
  QnAMain: undefined;
  QnADetail: QnADetailProps;
  WriteQnA: WriteQnAParamsProps;
  SearchResult: SearchResultProps;
  FindUser: undefined;
  WebRegister: undefined;
};

export interface RegisterProps {
  KTShopID?: string;
  UserNm?: string;
}

export interface SearchResultProps {
  SearchRange: string;
  SearchPrice: string;
  SearchStr: string;
}

interface CommonScreenProps {
  MenuType: string;
  MenuVar: string;
}

export interface QnADetailProps {
  QNAID: string;
  KTShopID: string;
  Status?: number;
}

export interface WriteQnAParamsProps {
  QNAID?: string | '';
  KTShopID?: string | '';
  Category?: string | '';
  Subject?: string | '';
  Content?: string | '';
  WriteName?: string | '';
  WriteHp?: string | '';
  WriteEmail?: string | '';
}

interface _ProductScreenProps extends CommonScreenProps {
  num: number;
  name: string;
}

export interface DetailScreenProps
  extends _ProductScreenProps,
    CommonScreenProps {
  it_id: string;
}
