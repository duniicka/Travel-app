import {defineConfig} from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                contact: "contact.html",
                about: "about.html",
                singleblog: "singleblog.html",
                blog: "blog.html",
                destination: "destination.blog"
            }
        }
    }
})