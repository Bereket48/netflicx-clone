// vite.config.js
// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/netflicx-clone/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "./",
});
