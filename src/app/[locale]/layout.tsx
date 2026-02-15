import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isValidLocale } from '../../i18n/config';
import type { Locale } from '../../i18n/config';
import { resolveParams } from '../../lib/params';
import SetLocaleLang from '../../components/SetLocaleLang';
import { LocaleProvider } from '../../context/LocaleContext';

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
  return (
    <LocaleProvider locale={locale as Locale}>
      <SetLocaleLang locale={locale as Locale} />
      {children}
    </LocaleProvider>
  );
}
