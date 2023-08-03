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
  Event: CommonScreenProps;
  EventBorad: {Uid: number};
  InternetPlusTV: CommonScreenProps;
  MyPoint: undefined;
  MyPage: undefined;
  Confirm: undefined;
  PrivacyCheck: undefined;
  RegisterForm: undefined;
  CustomerInquiry: undefined;
  SearchResult: undefined;
};

interface CommonScreenProps {
  MenuType: string;
  MenuVar: string;
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
