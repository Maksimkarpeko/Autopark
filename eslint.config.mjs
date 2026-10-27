import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "feature-sliced": featureSliced,
    },
    rules: {
      "feature-sliced/layers-slices": [
        "error",
        {
          layers: [
            "_app",
            "_pages",
            "widgets",
            "features",
            "entities",
            "shared",
          ],
        },
      ],

      "feature-sliced/absolute-relative": [
        "error",
        {
          alias: "@",
        },
      ],

      "feature-sliced/public-api": [
        "error",
        {
          alias: "@",
        },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
