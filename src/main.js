import { createApp } from "vue";
import store from "./store";
import router from "./router";
import "./index.css";
import Loader from "./components/Loader.vue";
import App from "./App.vue";

createApp(App).use(store).use(router).component("loader", Loader).mount("#app");
