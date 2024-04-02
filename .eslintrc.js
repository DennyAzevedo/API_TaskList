module.exports = {
  env: {
    es6: true, // this automatically sets the ecmaVersion parser option to 6
    node: true, // this automatically sets the es6 parser option to true
  },
  extends: [
    'airbnb-base', // this extends the airbnb style guide
    'plugin:prettier/recommended' // this extends the prettier style guide - depois de instalar o prettier
  ],
  plugins: ['prettier'], // this loads the prettier plugin - depois de instalar o prettier
  globals: {
    Atomics: 'readonly', // this automatically sets the env.Atomics global
    SharedArrayBuffer: 'readonly', // this automatically sets the env.SharedArrayBuffer global
  },
  parserOptions: {
    ecmaVersion: 'latest', // this automatically sets the ecmaVersion parser option
    sourceType: 'module', // this automatically sets the sourceType parser option
  },
  rules: {
    "prettier/prettier": "error", // this enables the prettier plugin
    "class-methods-use-this": "off", // this disables the class-methods-use-this rule
    "no-param-reassign": "off", // this disables the no-param-reassign rule
    "camelcase": "off", // this disables the camelcase rule
    "no-underscore-dangle": "off", // this disables the no-underscore-dangle rule
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    'linebreak-style': ['error', 'windows'],
  },
};
