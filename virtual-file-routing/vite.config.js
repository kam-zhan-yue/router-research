import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { rootRoute, index, route } from "@tanstack/virtual-file-routes";

import { resolve } from "node:path";

const routes = rootRoute("root.tsx", [
  index("index.tsx"),
  route("/about", "tasks/task-list.tsx"),
]);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ virtualRouteConfig: "./src/routes.ts" }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
