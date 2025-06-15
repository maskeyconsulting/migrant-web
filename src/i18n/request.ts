import { getRequestConfig } from "next-intl/server";
import enMessages from "../messages/en.json";
import neMessages from "../messages/ne.json";

const messages = {
  en: enMessages,
  ne: neMessages,
};

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? "en";
  return {
    locale: resolvedLocale,
    messages: messages[resolvedLocale as keyof typeof messages],
    timeZone: "Asia/Kathmandu",
  };
});
