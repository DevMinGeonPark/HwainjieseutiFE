import {ItemList} from './MainDataTypes';

export interface SubPageBaseProps {
  /** ca_id, co_id ... etc */
  MenuType: string;
  /** 10 20 50 */
  MenuVar: string;
}

export interface ProductProps extends SubPageBaseProps {
  /** Product 필수 항목 */
  sort: string;
  /** Product 필수 항목 */
  sortodr: string;
}

export interface ProductData extends SubPageBaseProps {
  ItemList: ItemList[];
}

interface NoticeBase {
  Uid: number;
  Title: string;
  WriteDate: string;
}

export interface SubPageReBaseProps {
  LogIn: string;
  PageViewType: string;
}

export interface EventData extends SubPageReBaseProps {
  TopNotice: TopNotice[];
  ListNotice: ListNotice[];
}
export interface TopNotice extends NoticeBase {
  // 여기에 TopNotice에만 있는 속성을 추가할 수 있습니다.
}

export interface ListNotice extends NoticeBase {
  ImgSrc: string;
}

export function isProductData(
  data: EventData | ProductData | undefined,
): data is ProductData {
  return data !== undefined && 'ItemList' in data;
}
