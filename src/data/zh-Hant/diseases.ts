import type { LocalizedDisease } from '../../types';
import { zhDiseasesA } from './diseases.a';
import { zhDiseasesB } from './diseases.b';

/**
 * The complete disease translation layer.
 *
 * Split across two authoring files so the two halves can be written and
 * reviewed independently; merged here so `lib/content.ts` sees one record.
 */
export const zhDiseases: Record<string, LocalizedDisease> = {
  ...zhDiseasesA,
  ...zhDiseasesB,
};
