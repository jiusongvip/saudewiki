import type { LocalizedArticle } from '../../types';
import { zhArticlesA } from './articles.a';
import { zhArticlesB } from './articles.b';

/** The complete article translation layer, merged from the two authoring halves. */
export const zhArticles: Record<string, LocalizedArticle> = {
  ...zhArticlesA,
  ...zhArticlesB,
};
