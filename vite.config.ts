import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@apis", replacement: "/src/apis" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@stores", replacement: "/src/stores" },
      { find: "@contexts", replacement: "/src/contexts" },
      { find: "@type", replacement: "/src/types" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@assets", replacement: "/src/assets" }
    ]
  }
});
