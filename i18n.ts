import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "./public/locales/en/translation.json";
import ar from "./public/locales/ar/translation.json";
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale.split("-")[0], // Use the device's locale
  fallbackLng: "en", // Fallback language if the device locale is not found
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18n;
