import { createIntl } from "@formatjs/intl";

export const getMessages = async (locale: string) => {
  try {
    return (await import(`../../public/locales/${locale}/common.json`)).default;
  } catch (error) {
    return (await import(`../../public/locales/en/common.json`)).default;
  }
};

export const createI18nInstance = async (locale: string) => {
  const messages = await getMessages(locale);

  return createIntl({
    locale,
    messages,
  });
};
