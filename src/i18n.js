import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEN from "./Locales/en/home.json";
import homeTR from "./Locales/tr/home.json";
import footerTR from "./Locales/tr/footer.json";
import footerEN from "./Locales/en/footer.json";
import aboutTR from "./Locales/tr/about.json";
import aboutEN from "./Locales/en/about.json";
import contactTR from "./Locales/tr/contact.json";
import contactEN from "./Locales/en/contact.json";
import productsTR from "./Locales/tr/products.json";
import productsEN from "./Locales/en/products.json";
import loginFormTR from "./Locales/tr/loginForm.json";
import loginFormEN from "./Locales/en/loginForm.json";
import slideshowTR from "./Locales/tr/slideshow.json";
import slideshowEN from "./Locales/en/slideshow.json";
import registerTR from "./Locales/tr/register.json";
import registerEN from "./Locales/en/register.json";
import partnersTR from "./Locales/tr/partners.json";
import partnersEN from "./Locales/en/partners.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: homeEN,
        footer: footerEN,
        about: aboutEN,
        contact: contactEN,
        products: productsEN,
        loginForm: loginFormEN,
        slideshow: slideshowEN,
        register: registerEN,
        partners: partnersEN,
      },
      tr: {
        home: homeTR,
        footer: footerTR,
        about: aboutTR,
        contact: contactTR,
        products: productsTR,
        loginForm: loginFormTR,
        slideshow: slideshowTR,
        register: registerTR,
        partners: partnersTR,
      },
    },
    lng: "tr", 
    fallbackLng: "en", 
    ns: ["home", "footer", "about","contact","products","loginForm", "slideshow", "register", "partners"],
    defaultNS: "home", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
