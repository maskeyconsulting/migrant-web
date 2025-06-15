import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // List of all locales that are supported
  locales: ["en", "ne"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",

  // Locale prefixes to be used in URLs
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ne|en)/:path*"],
};
