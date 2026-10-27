import featureSliced from "@conarti/eslint-plugin-feature-sliced";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import checkFile from "eslint-plugin-check-file";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  featureSliced({
    layers: [
      { name: "shared", hasSlices: false },
      "entities",
      "features",
      "widgets",
      "screens",
      { name: "app", hasSlices: false },
    ],

    sortImports: "with-newlines-and-type-group",

    publicApi: {
      level: "slices",
    },

    noCrossSegmentReexport: {},
  }),

  // Общие правила для JavaScript и TypeScript
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    plugins: {
      "check-file": checkFile,
    },

    rules: {
      // Все файлы называем kebab-case:
      "check-file/filename-naming-convention": [
        "error",
        {
          "src/**/*.{js,jsx,ts,tsx}": "KEBAB_CASE",
        },
      ],

      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
    },
  },

  // Дополнительные правила TypeScript
  {
    files: ["src/**/*.{ts,tsx}"],

    rules: {
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // TypeScript-типы, функции, параметры и переменные.
      // PascalCase у функций разрешён для React-компонентов.
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["PascalCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],
    },
  },

  // Должен находиться после конфигураций с правилами.
  // Отключает конфликтующие с Prettier правила форматирования.
  eslintConfigPrettier,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "coverage/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
