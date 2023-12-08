const { i18n } = require('./package.json');

module.exports = {
  i18n,
  defaultNS: 'common',
  defaultLanguage: 'en',
  locales: ['en', 'fa'], // Add more locales as needed
  otherLanguages: ['fa'],
  localePath: './public/locales',
};