
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		resolve: {
			alias: {
				"~/assets": path.resolve(__dirname, "src/assets"),
				"~/components": path.resolve(__dirname, "src/components"),
				"~/pages": path.resolve(__dirname, "src/pages"),
				"~/routes": path.resolve(__dirname, "src/routes.tsx"),
			},
		},
	};
});
