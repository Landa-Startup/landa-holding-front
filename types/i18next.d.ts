import enAboutUs from '../app/i18n/locales/en/aboutUs.json'
declare module 'i18next' {
    interface CustomTypeOptions {
      defaultNS: 'mainPage';
      resources: {
        aboutUs: typeof enAboutUs;
        // ns2: typeof enNs2;
      };
    }
  }