import { createInstance, type Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { defaultLocale, locales } from '@/i18n/config';

const defaultNamespaces = ['default'] as const;

export default async function initTranslations(
  locale: string,
  namespaces: string[] = [...defaultNamespaces],
  i18nInstance?: ReturnType<typeof createInstance>,
  resources?: Record<string, Record<string, unknown>>
) {
  const instance = i18nInstance ?? createInstance();

  instance.use(initReactI18next);

  if (!resources) {
    instance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../locales/${language}/${namespace}.json`)
      )
    );
  }

  await instance.init({
    lng: locale,
    resources: resources as Resource | undefined,
    fallbackLng: defaultLocale,
    supportedLngs: [...locales],
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : [...locales],
  });

  return {
    i18n: instance,
    resources: resources ?? { [locale]: instance.services.resourceStore.data[locale] },
    t: instance.t.bind(instance),
  };
}
