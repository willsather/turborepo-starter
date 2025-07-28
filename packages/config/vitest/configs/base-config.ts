import { defineConfig } from "vitest/config";

export const baseConfig = defineConfig({
  test: {
    exclude: ["node_modules", "dist", ".turbo"],
    globals: true,
  },
});
