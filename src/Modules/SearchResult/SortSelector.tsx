import {Select} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SortSelectorProps {
  sorting: (value: string) => void;
}

export default function SortSelector({sorting}: SortSelectorProps) {
  const [service, setService] = React.useState('it_sum_qty');

  return (
    <Select
      selectedValue={service}
      flex={1}
      mx={2}
      bg="white"
      h={10}
      _actionSheet={{useRNModal: true}}
      _selectedItem={{
        endIcon: <Icon name="search" size={13} color="white" />,
      }}
      onValueChange={itemValue => {
        setService(itemValue);
        sorting(itemValue);
      }}>
      <Select.Item label="판매 많은 순" value="it_sum_qty" />
      <Select.Item label="낮은 가격순" value="it_price_min" />
      <Select.Item label="높은 가격순" value="it_price" />
      <Select.Item label="평점 높은 순" value="it_use_avg" />
      <Select.Item label="후기 많은 순" value="it_use_cnt" />
      <Select.Item label="추천 많은 순" value="pt_good" />
      <Select.Item label="댓글 많은 순" value="pt_comment" />
      <Select.Item label="최근 등록순" value="it_update_time" />
    </Select>
  );
}
