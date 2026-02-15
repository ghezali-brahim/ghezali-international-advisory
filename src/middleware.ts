import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './i18n/config';

const basePath = '';

function pathnameWithoutBase(pathname: string): string {
  if (basePath && pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length) || '/';
  }
  return pathname;
}

export function middleware(request: NextRequest) {
  const pathname = pathnameWithoutBase(request.nextUrl.pathname);
  const debug = process.env.NEXT_DEBUG === '1' || process.env.NODE_ENV === 'development';
  if (debug) {
    console.log('[middleware] request pathname=', pathname);
  }

  // Fichiers statiques et API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/manifest.json'
  ) {
    if (debug) console.log('[middleware] -> next (static/skip)');
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // Déjà avec locale valide
  if (isValidLocale(firstSegment)) {
    if (debug) console.log('[middleware] -> next (locale ok)', firstSegment);
    return NextResponse.next();
  }

  // Redirect ancienne URL cercle-prive
  if (pathname.startsWith('/cercle-prive')) {
    const url = request.nextUrl.clone();
    url.pathname = `${basePath}/${defaultLocale}/reseau`;
    if (debug) console.log('[middleware] -> redirect 301', url.pathname);
    return NextResponse.redirect(url, 301);
  }

  // Racine -> /fr
  if (pathname === '/' || pathname === '') {
    const url = request.nextUrl.clone();
    url.pathname = `${basePath}/${defaultLocale}`;
    if (debug) console.log('[middleware] -> redirect 301 / to', url.pathname);
    return NextResponse.redirect(url, 301);
  }

  // Anciennes URLs sans locale (ex: /services, /blog) -> /fr/services, /fr/blog
  const url = request.nextUrl.clone();
  url.pathname = `${basePath}/${defaultLocale}${pathname}`;
  if (debug) console.log('[middleware] -> redirect 301 to', url.pathname);
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)'],
};
