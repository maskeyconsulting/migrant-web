import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ne"];

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || "en"; // Fallback to "en" if locale is undefined
  return {
    locale: resolvedLocale,
    messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
  };
});
