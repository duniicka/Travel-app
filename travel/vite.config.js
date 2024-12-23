import {defineConfig} from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                about: "about.html",
                contact: "contact.html",
                destination: "destination.html",
                blog: "blog.html",
                singleblog: "singleblog.html",
                main: "index.html"
            }
        }
    }
})
