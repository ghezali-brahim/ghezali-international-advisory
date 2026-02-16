'use client';

import type { ComponentProps } from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { getPathWithoutLocale } from '@/i18n/config';

type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const locale = useLocale();
  const path = typeof href === 'string' ? href : href.pathname ?? '';
  if (path.startsWith('http') || path.startsWith('#')) {
    return <Link href={href} {...rest} />;
  }
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLocale = getPathWithoutLocale(pathWithSlash);
  const localizedHref = `/${locale}${pathWithoutLocale || '/'}`;
  return <Link href={localizedHref} {...rest} />;
}
