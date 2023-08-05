export const SortedSelected = (array: string[]) => {
  const order = ['S', 'D', 'C', 'T'];

  return array.slice().sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
