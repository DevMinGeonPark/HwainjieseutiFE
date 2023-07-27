export const NameSelector = (name: string) => {
  switch (name) {
    case '10':
      return '삼성';
    case '20':
      return '애플';
    default:
      return '기타';
  }
};
