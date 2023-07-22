export interface MainData {
  ImgMainRoll: ImgMainRoll[];
  ImgMainSub: ImgMainSub[];
  SubBanner: SubBanner;
  ItemNewList: ItemList[];
  ItemBestList: ItemList[];
}
export interface ImgMainRoll {
  imgurl: string;
  imgsrc: string;
}

export interface ImgMainSub {
  imgurl: string;
  imgsrc: string;
}

export interface ItemList {
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

// export interface ItemBestList {
//   itemCode: string;
//   itemImgUrl: string;
//   itemName: string;
//   ItemColor: string;
//   ItemChargeNormal: number;
//   ItemChargeSales: number;
//   ItemDCRate: number;
// }

// export interface ItemNewList {
//   itemCode: string;
//   itemImgUrl: string;
//   itemName: string;
//   ItemColor: string;
//   ItemChargeNormal: number;
//   ItemChargeSales: number;
//   ItemDCRate: number;
// }
