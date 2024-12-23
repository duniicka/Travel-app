import {defineConfig} from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                about: "about.html",
                contact: "contact.html",
                blog: "blog.html",
                singleblog: "single-blog.html",
                destination: "destination.blog"
            }
        }
    }
})