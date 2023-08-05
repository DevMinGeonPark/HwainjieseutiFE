export const WriteDatePreprocesser = (text: string) => {
  return text.replace(/<span class="orangered">(.*?)<\/span>/, '$1');
};
