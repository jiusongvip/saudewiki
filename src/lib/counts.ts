import { ui } from '../i18n/ui';
import { fill } from './i18n';
import type { Locale } from '../types';

/**
 * "3 doenças · 5 artigos", in one place.
 *
 * Three components show a region's size — the home tiles, the region grid and
 * the region page — and a phrase like this must not be worded differently in
 * each of them. Anything that counts diseases or articles goes through here.
 */
export function unitCount(lang: Locale, n: number, kind: 'disease' | 'article'): string {
  const t = ui[lang];
  const units = t.common.units;
  const unit =
    kind === 'disease'
      ? n === 1
        ? units.diseaseOne
        : units.diseaseMany
      : n === 1
        ? units.articleOne
        : units.articleMany;
  return fill(t.common.countDisease, { n, unit });
}

/** The two-unit line under a region tile, or the "still being written" marker. */
export function regionCountLabel(
  lang: Locale,
  counts: { diseases: number; articles: number; total: number }
): string {
  const t = ui[lang];
  if (counts.total === 0) return t.common.inConstruction;
  return [
    unitCount(lang, counts.diseases, 'disease'),
    unitCount(lang, counts.articles, 'article'),
  ].join(t.common.countSeparator);
}

/**
 * The full sentence a region marker or tile announces to a screen reader:
 * which place this is and how much there is to read about it.
 */
export function regionCaption(
  lang: Locale,
  name: string,
  counts: { diseases: number; articles: number; total: number }
): string {
  const t = ui[lang];
  if (counts.total === 0) return fill(t.home.markerCaptionEmpty, { region: name });
  return fill(t.home.markerCounts, {
    region: name,
    diseases: unitCount(lang, counts.diseases, 'disease'),
    articles: unitCount(lang, counts.articles, 'article'),
  });
}
