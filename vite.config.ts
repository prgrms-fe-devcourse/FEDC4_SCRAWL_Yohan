import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@apis", replacement: "/src/apis" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@store", replacement: "/src/store" },
      { find: "@type", replacement: "/src/types" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@utils", replacement: "/src/utils" }
    ]
  }
});
