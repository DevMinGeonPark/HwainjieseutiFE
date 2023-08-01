export type DrawerScreenProps = {
  DrawerMain: undefined;
};

export type StackScreenProps = {
  Main: undefined;
  Login: undefined;
  Apple: _ProductScreenProps;
  Samsung: _ProductScreenProps;
  Etc: _ProductScreenProps;
  Detail: _DetailScreenProps;
  Event: CommonScreenProps;
  EventBorad: {Uid: number};
  InternetPlusTV: CommonScreenProps;
  MyPoint: undefined;
  MyPage: undefined;
  Confirm: undefined;
  PrivacyCheck: undefined;
  RegisterForm: undefined;
  CustomerInquiry: undefined;
};

interface CommonScreenProps {
  MenuType: string;
  MenuVar: string;
}

interface _ProductScreenProps extends CommonScreenProps {
  num: number;
  name: string;
}

interface _DetailScreenProps extends _ProductScreenProps, CommonScreenProps {
  it_id: string;
}
