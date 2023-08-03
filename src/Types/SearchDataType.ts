import {ItemList} from './MainDataTypes';

export interface ParamProps {
  SearchRange: string;
  SearchPrice: string;
  SearchStr: string;
}

export interface SearchData {
  ItemList: ItemList[];
}
