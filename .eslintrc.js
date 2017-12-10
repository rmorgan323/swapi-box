// module.exports = {
//     "env": {
//         "browser": true,
//         "jest": true,
//         "node": true,
//         "es6": true
//     },
//     "extends": "eslint:recommended",
//     "parserOptions": {
//         "ecmaFeatures": {
//             "experimentalObjectRestSpread": true,
//             "arrowFunctions": true,
//             "jsx": true
//         },
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "parser": "babel-eslint",
//     "rules": {
//         "indent": [
//             "warn",
//             2
//         ],
//         "linebreak-style": [
//             "warn",
//             "unix"
//         ],
//         "quotes": [
//             "warn",
//             "single"
//         ],
//         "semi": [
//             "warn",
//             "always"
//         ],
//         "react/jsx-uses-react": "warn",
//         "react/jsx-uses-vars": "warn"
//     }
// };






module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
    "es6": true
  },
  // Having a problem with one of these rules? Learn more about it here: https://eslint.org/docs/rules/
  "rules": {
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],
    "indent": ["warn", 2],
    "no-template-curly-in-string": "error",
    "semi": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": "warn",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "max-len": ["warn", 100],
    "no-duplicate-imports": "error",
    "id-length": "error",
    "id-blacklist": ["error", "data", "err", "e", "cb", "callback", "payload", "obj", "arr"],
    "max-depth": ["warn", 4]
  },
  "globals": {
    "expect": true
  }
}