export function removeHTMLTagsAndEntities(str: string) {
  const noTags = str.replace(/<[^>]*>/g, '');
  const noEntities = noTags.replace(/&[^;]+;/g, '');
  return noEntities;
}
