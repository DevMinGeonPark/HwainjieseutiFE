export function SortedSelected(arr: string[]): string[] {
  return arr.sort((a, b) => a.localeCompare(b));
}

export function toggleCheckbox(selected: string[], value: string): string[] {
  const index = selected.indexOf(value);
  if (index > -1) {
    // 요소를 제거한 후 정렬
    return SortedSelected(selected.filter((_, i) => i !== index));
  } else {
    // 요소를 추가한 후 정렬
    return SortedSelected([...selected, value]);
  }
}
