import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ['en', 'ne'];
export const defaultLocale = 'en';

export function getStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function getMessages(locale: string) {
  return (await import(`./messages/${locale}.json`)).default;
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
