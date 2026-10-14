/**
 * The category names, in the reader's language.
 *
 * Defined once rather than translated per entry: `Doenças infecciosas` labels
 * several diseases, several articles and one topic, and those three places must
 * not be able to disagree about what the category is called.
 *
 * Keys are the `categorySlug` values already present in the content data, so a
 * new category is a new key here plus the entry that uses it.
 */
export const zhCategories: Record<string, string> = {
  'doencas-infecciosas': '傳染病',
  'doencas-cronicas': '慢性病',
  prevencao: '預防',
  'saude-infantil': '兒童健康',
};
