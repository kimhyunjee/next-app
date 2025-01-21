import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { 
    rules: { 
      "@typescript-eslint/no-unused-vars": "off", // any타입 정의 허용
      "@typescript-eslint/no-explicit-any": "warn", // 사용하지 않는 변수는 경고 표시(에러x)
    },
  },
];

export default eslintConfig;