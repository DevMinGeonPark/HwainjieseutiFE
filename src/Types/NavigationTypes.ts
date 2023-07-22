export type DrawerScreenProps = {
  DrawerMain: undefined;
};

export type StackScreenProps = {
  Main: undefined;
  Login: undefined;
  Apple: {MenuType: string; MenuVar: string};
  Samsung: {MenuType: string; MenuVar: string};
  Etc: {MenuType: string; MenuVar: string};
  Detail: {it_id: string; ca_id: string; num: number};
  ImageProduct: {MenuType: string; MenuVar: string};
};
