import { NextResponse } from 'next/server';

const LEGACY_HOST = 'pourquoi-a-marche.vercel.app';
const APEX_HOST = 'chimiemaison.fr';
const CANONICAL_HOST = 'www.chimiemaison.fr';

export function middleware(request) {
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = (forwardedHost || request.headers.get('host') || '')
    .split(',')[0]
    .trim()
    .split(':')[0]
    .toLowerCase();

  if (host === LEGACY_HOST || host === APEX_HOST) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = CANONICAL_HOST;
    destination.port = '';

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
