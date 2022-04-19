import { createApp } from "vue";
import App from "./App.vue";
import Vue3VideoPlayer from "@cloudgeek/vue3-video-player";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";
import store from './store/index'

import router from "./router";

createApp(App).use(router).use(store).use(Vue3VideoPlayer, { lang: "en" }).mount("#app");
