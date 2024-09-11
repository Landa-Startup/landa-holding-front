module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'tailwindcss', 'no-loops', 'prettier'],
  'extends': 'next',
  'rules': {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
  },
  settings: {
    'tailwindcss': {
      groupByResponsive: true,
      whitelist: []
    }
  }
};