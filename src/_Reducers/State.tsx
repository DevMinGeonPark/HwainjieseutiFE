export interface State {
  itemInfo: any | undefined; // 이 부분은 해당 데이터 타입으로 변경해 주세요.
  plan: string;
  planDesc: string;
  supType: string;
  installment: string;
  ktDiscount: string;
  showModal: boolean;
  infoTabSetter: boolean;
}

export const initialState: State = {
  itemInfo: undefined,
  plan: '212121',
  planDesc: '',
  supType: 'Machine',
  installment: '24',
  ktDiscount: 'Y',
  showModal: false,
  infoTabSetter: true,
};

export type Action =
  | {type: 'SET_ITEM_INFO'; payload: any} // 이 부분은 해당 데이터 타입으로 변경해 주세요.
  | {type: 'SET_PLAN'; payload: string}
  | {type: 'SET_PLAN_DESC'; payload: string}
  | {type: 'SET_SUP_TYPE'; payload: string}
  | {type: 'SET_INSTALLMENT'; payload: string}
  | {type: 'SET_KT_DISCOUNT'; payload: string}
  | {type: 'SET_SHOW_MODAL'; payload: boolean}
  | {type: 'SET_INFO_TAB_SETTER'; payload: boolean};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ITEM_INFO':
      return {...state, itemInfo: action.payload};
    case 'SET_PLAN':
      return {...state, plan: action.payload};
    case 'SET_PLAN_DESC':
      return {...state, planDesc: action.payload};
    case 'SET_SUP_TYPE':
      return {...state, supType: action.payload};
    case 'SET_INSTALLMENT':
      return {...state, installment: action.payload};
    case 'SET_KT_DISCOUNT':
      return {...state, ktDiscount: action.payload};
    case 'SET_SHOW_MODAL':
      return {...state, showModal: action.payload};
    case 'SET_INFO_TAB_SETTER':
      return {...state, infoTabSetter: action.payload};
    default:
      return state;
  }
};
