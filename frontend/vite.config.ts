import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const dir = path.resolve(__dirname, "..");
  process.env = { ...process.env, ...loadEnv(mode, dir) };

  return defineConfig({
    envDir: dir,
    server: {
      host: process.env.VITE_URL,
      port: parseInt(process.env.VITE_PORT),
    },
    plugins: [react()],
  });
};
