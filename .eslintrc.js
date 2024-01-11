module.exports = {
  env: {
    es6: true, // habilita funcionalidades do es6
    node: true, // habilita variáveis globais do node
  },
  extends: [
    'airbnb-base', // utiliza as regras do airbnb
    'prettier', // utiliza as regras do prettier
  ],
  plugins: [
    'prettier', // permite utilizar as regras do prettier
  ],
  globals: {
    Atomics: 'readonly', // permite utilizar variáveis globais do node
    SharedArrayBuffer: 'readonly', // permite utilizar variáveis globais do node
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
  },
  rules: {
    "prettier/prettier": "error", // retorna erro caso o prettier encontre algum problema
    "class-methods-use-this": "off", // desabilita a obrigatoriedade do this em métodos de classe
    "no-param-reassign": "off", // permite receber um parâmetro e fazer alterações nele
    "camelcase": "off", // permite usar variáveis com underscore
    "no-underscore-dangle": "off", // permite usar underscore no nome de variáveis
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // permite declarar uma variável e não utilizá-la
  },
};
