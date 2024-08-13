import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const secKey = new TextEncoder().encode(process.env.NEXT_APP_JWTTOKEN);
    const token = request.cookies.get('Authorization')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    const user = await jwtVerify(token as string, secKey, { algorithms: ['HS256'] });
    if (!user && !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (request.nextUrl.pathname == '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|login|favicon.ico).*)',
    ],
}