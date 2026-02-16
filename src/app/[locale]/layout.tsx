import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isValidLocale, locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { resolveParams } from '@/lib/params';
import initTranslations from '@/i18n/i18next';
import ClientRoot from '@/components/ClientRoot';
import SetLocaleLang from '@/components/SetLocaleLang';
import TranslationsProvider from '@/components/TranslationsProvider';
import { LocaleProvider } from '@/context/LocaleContext';

const i18nNamespaces = ['default'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[locale layout] resolveParams...');
  }
  const { locale } = await resolveParams(params);
  if (process.env.NODE_ENV === 'development') {
    console.log('[locale layout] locale=', locale);
  }
  if (!isValidLocale(locale)) {
    notFound();
  }

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <LocaleProvider locale={locale as Locale}>
      <SetLocaleLang locale={locale as Locale} />
      <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
        <ClientRoot>{children}</ClientRoot>
      </TranslationsProvider>
    </LocaleProvider>
  );
}
