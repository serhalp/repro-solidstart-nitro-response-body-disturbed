import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    compatibilityDate: "2024-09-24",
    // This is the default given the above ^ but I'm setting it explicitly for clarity.
    // Setting this to "netlify-legacy" (or "netlify-edge") fixes the error.
    preset: "netlify",
  },
});
