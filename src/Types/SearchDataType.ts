import {ItemList} from './MainDataTypes';

export interface ParamProps {
  SearchRange: string;
  SearchPrice: string;
  SearchStr: string;
  OrderBy: string;
  ItemDivi?: string;
}

export interface SearchData {
  ItemList: ItemList[];
}
