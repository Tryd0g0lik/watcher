module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "eslint-plugin-react",
    "@typescript-eslint",
    "@stylistic",
    "@stylistic/js",
    "@stylistic/eslint-plugin-ts",
    "@stylistic/jsx",
    "@stylistic/eslint-plugin-plus"
  ],
  "extends": [

    "eslint:recommended", // https://typescript-eslint.io/linting/configs#eslint-recommended
    "plugin:react/recommended",
    "standard-with-typescript",
    "airbnb-typescript",
    "react-app/jest",
    // "plugin:@typescript-eslint/recommended", // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "plugin:@typescript-eslint/recommended-type-checked", // https://typescript-eslint.io/linting/configs#recommended-type-checked
    "plugin:@typescript-eslint/strict", // https://typescript-eslint.io/linting/configs#strict
    "plugin:@typescript-eslint/strict-type-checked", // https://typescript-eslint.io/linting/configs/#strict-type-checked
  ],

  "parserOptions": { // Configure parserOptions to enable support for other ECMAScript versions as well as JSX. https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "project": true,
    "ecmaVersion": "ES2021",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    }
  },
  "rules": {
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "always",
        "tsx": "always"
      }
    ],
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "dot-notation": "off",

    "@typescript-eslint/dot-notation": ["error", {
      "allowPrivateClassPropertyAccess": true,
      "allowProtectedClassPropertyAccess": true,
      "allowIndexSignaturePropertyAccess": true
    }],
    "accessor-pairs": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/prefer-includes": "error",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        "functions": "never"
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "object-shorthand": ["error", "never"],
    "react/no-string-refs": ["error", { "noTemplateLiterals": true }],
    "@typescript-eslint/no-unnecessary-condition": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-const": "off",
    "no-useless-escape": "off",
    "@typescript-eslint/consistent-type-imports": "off"
  },
  "overrides": [
    // {
    //   "exclude": [
    //     "node_modules",
    //     "**/node_modules",
    //     "**/dist"
    //   ]
    // },
    // {
    //   "files": [
    //     "src/index.tsx",
    //   ]
    // }
  ]
}
