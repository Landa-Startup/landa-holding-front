import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './setting';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';

// import i18next from 'i18next';

// const i18next = require('i18next');
// const Backend = require('i18next-node-fs-backend');

// const path = require('path');

// // Inform backend of where translations will be  
// i18next.use(Backend)
  
// i18next.init({
//     fallbackLng: 'en',
//     backend: {
//       loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
//     }
//   });

// preload ALL languages  
// const languages = ['en', 'fa'];
// i18next.loadLanguages(languages);

const initI18next = async (lng: any, ns: any) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(i18nextBrowserLanguagedetector)
    .use(
      resourcesToBackend(
        (language: any, namespace: any) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      backend: {
        backendOptions: [{
          expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
        }, {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }]
      },
      cache: {
        enabled: true,
        prefix: 'i18n',
      },
      detection: {
        order: ['path', 'cookie', 'navigator'],
        caches: ['cookie'],
        lookupFromPathIndex: 0
      },
      ...getOptions(lng, ns)
    });
  return i18nInstance;
};

let keyPrefix: string;
export async function useTranslation(
  lng: any,
  ns: any,
  options = { keyPrefix }
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance
  };
}
