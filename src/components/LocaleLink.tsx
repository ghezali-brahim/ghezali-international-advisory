'use client';

import type { ComponentProps } from 'react';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const locale = useLocale();
  const path = typeof href === 'string' ? href : href.pathname ?? '';
  const localizedHref = path.startsWith('http') || path.startsWith('#') ? href : `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
  return <Link href={localizedHref} {...rest} />;
}
