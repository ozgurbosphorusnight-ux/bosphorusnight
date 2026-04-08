export const config = { matcher: '/' };

export default function middleware(req) {
  const host = req.headers.get('host') || '';

  // app.bosphorusnight.com → panel login sayfasına yönlendir
  if (host.startsWith('app.')) {
    return Response.redirect(new URL('/panel/login.html', req.url), 302);
  }
}
