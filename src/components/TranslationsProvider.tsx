'use client';

import { useState, useEffect } from 'react';
import { createInstance, type Resource } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { defaultLocale, locales } from '@/i18n/config';

type Resources = Record<string, Record<string, unknown>>;

export default function TranslationsProvider({
  children,
  locale,
  namespaces = ['default'],
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  namespaces?: string[];
  resources: Resources;
}) {
  const [i18n, setI18n] = useState<ReturnType<typeof createInstance> | null>(null);

  useEffect(() => {
    if (!resources) return;
    const instance = createInstance();
    instance.use(initReactI18next);
    instance
      .init({
        lng: locale,
        resources: resources as unknown as Resource,
        fallbackLng: defaultLocale,
        supportedLngs: [...locales],
        defaultNS: namespaces[0],
        ns: namespaces,
        react: { useSuspense: false },
      })
      .then(() => {
        setI18n(instance);
      });
    // Re-run when locale changes; resources from props match current locale
  // eslint-disable-next-line react-hooks/exhaustive-deps -- resources/namespaces from props
  }, [locale]);

  if (!i18n) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
