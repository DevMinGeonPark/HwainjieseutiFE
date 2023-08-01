export interface MainData {
  ImgMainRoll: ImgMainRoll[];
  ImgMainSub: ImgMainSub[];
  SubBanner: SubBanner;
  ItemNewList: ItemList[];
  ItemBestList: ItemList[];
}

interface _CommonImageProps {
  imgurl: string;
  imgsrc: string;
}

export interface ImgMainRoll extends _CommonImageProps {}

export interface ImgMainSub extends _CommonImageProps {}

export interface ItemList {
  MenuType: string;
  MenuVar: string;
  CategorieCode: string;
  ItemCode: string;
  ItemImgUrl: string;
  ItemName: string;
  ItemColor: string;
  ItemChargeNormal: number;
  ItemChargeSales: number;
  ItemDCRate: number;
}

export interface PriceType {
  ItemChargeNormal: number;
  ItemChargeSales: number;
  ItemDCRate: number;
}

export interface SubBanner {
  BannerUrl: string;
  BannerImg: string;
}
