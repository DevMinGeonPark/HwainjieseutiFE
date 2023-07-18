import {ItemList} from './MainDataTypes';

export interface ProductProps {
  MenuType: string;
  MenuVar: string;
}

export interface ProductData {
  LogIn: string;
  PageViewType: string;
  ItemList: ItemList[];
}
