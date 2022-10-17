import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/scss/backend.scss",
                "resources/scss/frontend.scss",
                "resources/js/backend.js",
                "resources/js/frontend.js",
            ],
            refresh: true,
        }),
    ],
    // resolve: {
    //     alias: {
    //         "~": path.resolve(__dirname, "node_modules/"),
    //     },
    // },
});
