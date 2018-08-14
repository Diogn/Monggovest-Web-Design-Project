// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended'
  ],
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
