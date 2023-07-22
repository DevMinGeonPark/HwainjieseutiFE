import client from '../client';
import {ItemDetail} from '@src/Types/DetailTypes';

interface ItemInfoProps {
  ItemCode: string;
  CategorieCode: string;
}

const getItemInfo = async (
  it_id: string,
  ca_id: string,
): Promise<ItemDetail> => {
  // TODO default header 설정
  const body = {
    ItemCode: it_id,
    CategorieCode: ca_id,
  };

  const res = await client.post<ItemDetail>('iteminfo.php', body);

  return res.data;
};

export default getItemInfo;
