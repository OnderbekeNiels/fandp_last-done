import { App, createApp } from "vue";
import AppComponent from "./App.vue";
import "./assets/style/tailwind.css";
import router from './bootstrap/router';

const app: App = createApp(AppComponent);
app.use(router);
app.mount("#app");
