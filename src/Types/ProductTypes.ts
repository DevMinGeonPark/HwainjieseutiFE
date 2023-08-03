import {ItemList} from './MainDataTypes';
import {CommonProps} from './CommonTypes';

export interface ParamProps extends CommonProps {
  /** Product 필수 항목 */
  sort: string;
  /** Product 필수 항목 */
  sortodr: string;
}

export interface ProductData extends CommonProps {
  ItemList: ItemList[];
}

interface CommonNoticeProps {
  Uid: number;
  Title: string;
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
  WriteDate: string;
}

export interface ListNotice extends CommonNoticeProps {
  CommentsCount: number;
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
