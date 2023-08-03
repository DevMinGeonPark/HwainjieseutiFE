import {CommonProps, Product} from './CommonTypes';
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

export interface ItemList extends Product, CommonProps {}

export interface PriceType {
  ItemChargeNormal: number;
  ItemChargeSales: number;
  ItemDCRate: number;
}

export interface SubBanner {
  BannerUrl: string;
  BannerImg: string;
}
