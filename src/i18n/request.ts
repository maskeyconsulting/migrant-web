import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = locale ?? 'en'; // fallback to 'en' or your default locale
  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});

