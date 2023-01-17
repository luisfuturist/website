import { createApp } from "vue";
import App from "./App.vue";
import { contentPlugin } from "./plugins/content";
import { router } from "./routes";

const app = createApp(App);
app.use(router);
app.use(contentPlugin);
app.mount(document.getElementById("app"));