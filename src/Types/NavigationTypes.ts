export type DrawerScreenProps = {
  DrawerMain: undefined;
};

export type StackScreenProps = {
  Main: undefined;
  Login: undefined;
  Apple: {MenuType: string; MenuVar: string; num: number; name: string};
  Samsung: {MenuType: string; MenuVar: string; num: number; name: string};
  Etc: {MenuType: string; MenuVar: string};
  Detail: {
    name: string;
    MenuType: string;
    MenuVar: string;
    it_id: string;
    // ca_id: string;
    num: number;
  };
  ImageProduct: {MenuType: string; MenuVar: string};
};
