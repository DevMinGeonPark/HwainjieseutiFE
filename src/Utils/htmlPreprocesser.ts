export const htmlPreprocesser = (text: string) => {
  return text
    .replace(/<!--[\s\S]*?-->/g, '') //주석 삭제
    .replace(/\r\n/g, '') //무의미한 문자 삭제
    .replace(/target="_blank"/g, '') //무의미한 문자 삭제
    .replace(/http:/g, 'https:'); //http -> https
};
