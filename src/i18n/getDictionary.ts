import type { Locale } from './config';
import fr from './dictionaries/fr.json';
import en from './dictionaries/en.json';

const dictionaries: Record<Locale, typeof fr> = {
  fr,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.fr;
}

export type Dictionary = typeof fr;
