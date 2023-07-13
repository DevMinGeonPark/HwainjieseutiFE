export interface MainData {
  ImgMainRoll: ImgMainRoll[];
  ImgMainSub: ImgMainSub[];
  ItemNewList: ItemNewList[];
  ItemBestList: ItemBestList[];
}
export interface ImgMainRoll {
  imgurl: string;
  imgsrc: string;
}

export interface ImgMainSub {
  imgurl: string;
  imgsrc: string;
}

export interface ItemBestList {
  itemCode: string;
  itemImgUrl: string;
  itemName: string;
  ItemColor: string;
  ItemChargeNormal: number;
  ItemChargeSales: number;
  ItemDCRate: number;
}

export interface ItemNewList {
  itemCode: string;
  itemImgUrl: string;
  itemName: string;
  ItemColor: string;
  ItemChargeNormal: number;
  ItemChargeSales: number;
  ItemDCRate: number;
}
