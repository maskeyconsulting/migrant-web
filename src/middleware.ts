// src/middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ne"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",

  // Redirect to default locale if no locale is detected
  localeDetection: true,
});

export const config = {
  matcher: [
    /*
     * Match all pathnames except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_vercel (Vercel internals)
     * 4. all static files in /public (e.g. /favicon.ico, /image.jpg)
     * 5. all files with the extensions .png, .jpg, .jpeg, .svg, .ico
     */
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
