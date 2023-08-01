import {ItemList} from './MainDataTypes';

export interface CommonSubPageProps {
  /** ca_id, co_id ... etc */
  MenuType: string;
  /** 10 20 50 */
  MenuVar: string;
}

export interface ProductProps extends CommonSubPageProps {
  /** Product 필수 항목 */
  sort: string;
  /** Product 필수 항목 */
  sortodr: string;
}

export interface ProductData extends CommonSubPageProps {
  ItemList: ItemList[];
}

interface CommonNoticeProps {
  Uid: number;
  Title: string;
  WriteDate: string;
}

export interface CommonSubPageResProps {
  LogIn: string;
  PageViewType: string;
}

export interface InternetPlusTVData extends CommonSubPageResProps {
  Content: string;
}

export interface EventData extends CommonSubPageResProps {
  TopNotice: TopNotice[];
  ListNotice: ListNotice[];
}
export interface TopNotice extends CommonNoticeProps {
  // 여기에 TopNotice에만 있는 속성을 추가할 수 있습니다.
}

export interface ListNotice extends CommonNoticeProps {
  ImgSrc: string;
}

export function isProductData(
  data: EventData | ProductData | InternetPlusTVData | undefined,
): data is ProductData {
  return data !== undefined && 'ItemList' in data;
}

export function isEventData(
  data: EventData | ProductData | InternetPlusTVData | undefined,
): data is EventData {
  return data !== undefined && 'TopNotice' in data;
}

export function isInternetPlusTvData(
  data: EventData | ProductData | InternetPlusTVData | undefined,
): data is InternetPlusTVData {
  return data !== undefined && 'Content' in data;
}
