import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./routing";
import "./assets/scss/main.scss";
import "virtual:windi.css";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
