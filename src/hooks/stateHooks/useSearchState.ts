import {useState} from 'react';
import {toggleCheckbox} from '@Utils/CheckBoxUtils';

export function useSearchState() {
  const [copyText, setCopyText] = useState<string>('');
  const [selected, setSelected] = useState<string[]>(['S', 'D', 'C', 'T']);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const handleCheckboxToggle = (value: string) => {
    setSelected(prevState => toggleCheckbox(prevState, value)); // 여기서 사용
  };

  const handleDefaultValues = () => {
    setMinPrice('');
    setMaxPrice('');
    setCopyText('');
    setSelected(['S', 'D', 'C', 'T']);
  };

  return {
    copyText,
    setCopyText,
    selected,
    setSelected,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    showError,
    setShowError,
    handleDefaultValues,
    handleCheckboxToggle,
  };
}
